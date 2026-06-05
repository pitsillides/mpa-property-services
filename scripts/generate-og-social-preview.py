from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
WIDTH = 1200
HEIGHT = 630

NAVY = (18, 19, 60)
CYAN = (14, 181, 203)
CYAN_LIGHT = (66, 214, 234)
WHITE = (248, 250, 252)
MUTED = (205, 213, 225)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(f"C:/Windows/Fonts/{name}", size)


def draw_translucent_round_rect(
    base: Image.Image,
    xy: tuple[int, int, int, int],
    radius: int,
    fill: tuple[int, int, int, int],
    outline: tuple[int, int, int, int] | None = None,
    width: int = 1,
) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    layer_draw = ImageDraw.Draw(layer)
    layer_draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)
    base.alpha_composite(layer)


def main() -> None:
    background_path = ROOT / "public" / "modern-waveshaped-building-facade-2400.webp"
    logo_path = ROOT / "public" / "logo.png"
    output_path = ROOT / "public" / "og-social-preview.png"

    background = Image.open(background_path).convert("RGB")
    scale = max(WIDTH / background.width, HEIGHT / background.height)
    resized = background.resize(
        (int(background.width * scale), int(background.height * scale)),
        Image.Resampling.LANCZOS,
    )
    left = (resized.width - WIDTH) // 2
    top = (resized.height - HEIGHT) // 2
    canvas = resized.crop((left, top, left + WIDTH, top + HEIGHT)).convert("RGBA")
    canvas = canvas.filter(ImageFilter.GaussianBlur(radius=0.35))

    gradient = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    pixels = gradient.load()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            left_weight = 0.78 - (x / WIDTH) * 0.25
            vertical_weight = 0.18 + (y / HEIGHT) * 0.2
            alpha = int(255 * min(0.9, max(0.55, left_weight + vertical_weight)))
            pixels[x, y] = (*NAVY, alpha)
    canvas = Image.alpha_composite(canvas, gradient)

    wash = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    wash_draw = ImageDraw.Draw(wash)
    wash_draw.ellipse((760, -260, 1420, 390), fill=(*CYAN, 45))
    wash_draw.ellipse((820, 310, 1390, 910), fill=(*CYAN, 26))
    canvas = Image.alpha_composite(canvas, wash)

    draw = ImageDraw.Draw(canvas)
    regular_36 = font("arial.ttf", 36)
    bold_15 = font("arialbd.ttf", 15)
    bold_22 = font("arialbd.ttf", 22)
    bold_24 = font("arialbd.ttf", 24)
    footer_25 = font("arial.ttf", 25)
    medium_34 = font("arialbd.ttf", 34)
    title_64 = font("arialbd.ttf", 64)
    title_72 = font("arialbd.ttf", 72)

    logo = Image.open(logo_path).convert("RGBA")
    logo_width = 310
    logo = logo.resize(
        (logo_width, int(logo.height * logo_width / logo.width)),
        Image.Resampling.LANCZOS,
    )
    canvas.alpha_composite(logo, (78, 68))
    draw.text((78 + logo_width + 18, 92), "PROPERTY SERVICES", font=bold_22, fill=(*WHITE, 225))

    draw.text((78, 190), "Building management", font=title_72, fill=WHITE)
    draw.text((78, 268), "in Nicosia & Limassol", font=title_64, fill=WHITE)
    draw.text(
        (78, 360),
        "Common expenses • Maintenance • Fast support",
        font=regular_36,
        fill=MUTED,
    )

    badge_text = "Island-wide support where needed"
    badge_box = draw.textbbox((0, 0), badge_text, font=bold_24)
    badge_width = badge_box[2] - badge_box[0] + 42
    draw_translucent_round_rect(
        canvas,
        (78, 418, 78 + badge_width, 470),
        6,
        (*CYAN, 235),
    )
    draw.text((99, 431), badge_text, font=bold_24, fill=(7, 17, 31))

    stats = [("150+", "Buildings"), ("1700+", "Units"), ("12", "Team")]
    x = 78
    for value, label in stats:
        draw_translucent_round_rect(
            canvas,
            (x, 512, x + 160, 574),
            6,
            (255, 255, 255, 28),
            outline=(255, 255, 255, 45),
        )
        draw.text((x + 18, 520), value, font=medium_34, fill=CYAN_LIGHT)
        draw.text((x + 18, 553), label.upper(), font=bold_15, fill=(*WHITE, 210))
        x += 176

    url = "mpapropertyservices.com"
    url_box = draw.textbbox((0, 0), url, font=footer_25)
    draw.text(
        (WIDTH - 78 - (url_box[2] - url_box[0]), 540),
        url,
        font=footer_25,
        fill=(*WHITE, 225),
    )

    canvas.convert("RGB").save(output_path, "PNG", optimize=True)
    print(f"{output_path} {Image.open(output_path).size} {output_path.stat().st_size}")


if __name__ == "__main__":
    main()

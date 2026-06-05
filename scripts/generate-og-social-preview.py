from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
WIDTH = 1200
HEIGHT = 630

NAVY = (18, 19, 60)
CYAN = (14, 181, 203)
WHITE = (248, 250, 252)
MUTED = (205, 213, 225)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(f"C:/Windows/Fonts/{name}", size)

def main() -> None:
    background_path = ROOT / "public" / "modern-waveshaped-building-facade-2400.webp"
    logo_path = ROOT / "public" / "logo.png"
    output_path = ROOT / "public" / "og-social-preview-en.png"
    legacy_output_path = ROOT / "public" / "og-social-preview.png"

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
    bold_22 = font("arialbd.ttf", 22)
    bold_28 = font("arialbd.ttf", 28)
    footer_25 = font("arial.ttf", 25)
    title_82 = font("arialbd.ttf", 82)

    logo = Image.open(logo_path).convert("RGBA")
    logo = logo.crop(logo.getbbox())
    logo_width = 250
    logo = logo.resize(
        (logo_width, int(logo.height * logo_width / logo.width)),
        Image.Resampling.LANCZOS,
    )
    logo_x = 78
    logo_y = 70
    canvas.alpha_composite(logo, (logo_x, logo_y))
    property_x = logo_x + logo_width + 9
    property_y = logo_y + 37
    draw.text((property_x, property_y), "PROPERTY SERVICES", font=bold_22, fill=(*WHITE, 225))

    draw.text((78, 220), "Building Management", font=title_82, fill=WHITE)
    draw.text(
        (78, 330),
        "Common expenses • Maintenance • Fast support",
        font=regular_36,
        fill=MUTED,
    )
    draw.text(
        (78, 392),
        "Island-wide support where needed",
        font=bold_28,
        fill=CYAN,
    )

    url = "mpapropertyservices.com"
    url_box = draw.textbbox((0, 0), url, font=footer_25)
    draw.text(
        (WIDTH - 78 - (url_box[2] - url_box[0]), 540),
        url,
        font=footer_25,
        fill=(*WHITE, 225),
    )

    final_image = canvas.convert("RGB")
    final_image.save(output_path, "PNG", optimize=True)
    final_image.save(legacy_output_path, "PNG", optimize=True)
    print(f"{output_path} {Image.open(output_path).size} {output_path.stat().st_size}")


if __name__ == "__main__":
    main()

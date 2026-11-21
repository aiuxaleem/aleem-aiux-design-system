# Logo

This is the logo of Mohammad Abdul Aleem, Lead AI Product Designer, and of this design system.

**The mark.** A rounded navy tile holds the letters **AIUX** on a two-by-two grid: AI on top, UX below, justified: both rows share the same left and right edges and the same letter gap, so the four letters read as one solid block. AIUX is the field: AI products people can trust. The **I** is the only letter in the blue-to-cyan gradient (`#258AFD → #29BEDD`, top to bottom). It is the AI, and it is the "I" in "I design the gap".

**The name.** Beside the tile, **Aleem** says who does the work. Both are drawn in one set of geometric letters, as outlines, so never retype them in a font. In running text, write "Aleem" or "Aleem | AIUX".

Every file is an outlined SVG with its colours baked in. An `<img>` keeps those colours and cannot recolour them, so pick the file that matches the background.

## Files

| File | Use it on | Inks |
|---|---|---|
| `aleem-logo.svg` | Primary logo on light backgrounds: site header, decks, CV, email | navy `#0B1F36` tile and name, white letters, gradient I |
| `aleem-logo-dark.svg` | Primary logo on dark backgrounds (`navy-900`, `navy-850`, `--gradient-ink`) | `#12304F` tile, white letters and name, gradient I |
| `aleem-logo-vertical.svg` / `-dark.svg` | Splash screens, avatars, merchandise | as the primary logo |
| `aleem-logo-mono-navy.svg` | One-colour print and embossing on light | navy only; the letters are cut out of the tile |
| `aleem-logo-mono-white.svg` | On the brand gradient, photos or any dark background | white only, letters cut out |
| `aleem-mark.svg` | The AIUX tile alone on light, from 24px | navy tile, white letters, gradient I |
| `aleem-mark-dark.svg` | The tile alone on dark | `#12304F` tile |
| `aleem-mark-white.svg` | The tile on the gradient or a photo | white tile, navy letters, gradient I |
| `aleem-mark-mono-navy.svg` / `-mono-white.svg` | One-colour tile | navy only / white only |
| `aleem-glyph.svg` / `aleem-glyph-white.svg` | The AIUX letters without the tile, for watermarks and inside drawings | navy or white letters, gradient I |
| `aleem-wordmark.svg` / `aleem-wordmark-white.svg` | The name alone, when the tile already sits nearby | navy only / white only |
| `aleem-ds-logo.svg` / `-dark.svg` | This design system's lockup: tile, name, rule, "design system" | as the primary logo, with a muted descriptor |
| `aleem-ds-stacked.svg` / `-dark.svg` | The design system lockup in narrow spaces | as above |
| `aleem-favicon.svg` | Browser tabs and anything under 24px: heavier letters that fill more of the tile | navy tile, white letters, gradient I |
| `aleem-favicon-32.png` | Favicon fallback for old browsers | as above, 32×32 |
| `aleem-app-icon.svg`, `aleem-app-icon-512.png`, `aleem-apple-touch-icon.png` | App stores, PWA manifest, home screens | navy full-bleed square; the platform applies its own corner mask |

## Rules

- **Clear space.** Keep a quarter of the tile's height free on every side, about the width of one letter in the tile.
- **Minimum sizes.**
  - Mark: 24px. Below that, use `aleem-favicon.svg`, which works down to 16px.
  - Primary logo: 20px tall.
  - Design system lockups: 40px tall.
- **Alignment.** AI and UX are set to one width: the left edges of A and U and the right edges of I and X line up exactly. Never re-space or re-centre the rows.
- **Tile.** The corner radius is 22.7% of the side, the same as `radius-tile`. Never change it.
- **Backgrounds.**
  - Light backgrounds take the navy tile.
  - `navy-900` and `navy-850` take the `-dark` files.
  - The gradient and photos take the white tile or the white mono logo.
- **The gradient stays on the I.** Never spread it to other letters or to the name, and never move or recolour the I.
- **Never:**
  - stretch, rotate or outline the logo;
  - add a shadow or glow behind it;
  - place the navy tile on a navy background;
  - retype "Aleem", "AIUX" or "design system" in Plus Jakarta Sans or any other font.
- **Inline in HTML.** Prefer `<img src="assets/Logo/…svg" alt="Aleem AIUX">`, or `alt="Aleem Design System"` for the lockups. If you paste an SVG inline, rename its `aleem-signal` gradient id and any `aleem-knock-*` mask id first, so two copies on one page cannot collide.
- **Favicons.** Put these in the page head, beside the `theme-color` lines from `guidelines/responsive-and-mobile.md`:

  ```html
  <link rel="icon" href="assets/Logo/aleem-favicon.svg" type="image/svg+xml">
  <link rel="icon" href="assets/Logo/aleem-favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="assets/Logo/aleem-apple-touch-icon.png">
  ```

- **The mascot files are separate.** `assets/logo-agentcory*.svg` and `assets/cory-*.svg` are the Cory mascot assets. They are unchanged and are not part of this logo.

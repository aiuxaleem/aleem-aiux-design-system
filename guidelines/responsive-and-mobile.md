# Viewport, responsive and mobile

Every page, kit and template built with Aleem works from 320px to 1920px wide, on touch and on a mouse, in both themes and both directions. Fixed artboards (posts, slides, one-pagers, emails) are the one exception: they keep their size and scale as a whole.

## Start every HTML file with this

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#F4F5FA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#06121F" media="(prefers-color-scheme: dark)">
<link rel="stylesheet" href="styles.css">
```

- Never set `user-scalable=no` or `maximum-scale`: people must be able to zoom to 200%.
- The two `theme-color` values are `surface-page` in light and dark, so the browser bar matches the page.
- Add `viewport-fit=cover` to the viewport tag only on full-bleed pages. Then `.cory-container`, `.cory-safe-bottom` and `.cory-fixed-end` keep content and fixed controls clear of notches and the home bar.
- Set `lang` on `<html>`, and `data-theme` when a page or artboard is pinned to one theme.

## Viewport height

- Never use `100vh` for a full-screen section on phones: the browser bar covers its foot. Use `.cory-screen` (`100svh`).
- Never fix the height of a box that holds text. Let it grow.
- Fixed elements reserve room. The sticky header (`--header-height`) is cleared for anchors by `scroll-margin-top`. Content that a chat launcher or toolbar could cover gets matching bottom padding.

## Breakpoints and layout

- Build mobile first. Use only the system breakpoints: `bp-sm` 640, `bp-md` 768, `bp-lg` 1024, `bp-xl` 1280, `bp-2xl` 1536. Media queries repeat these numbers literally, because custom properties cannot drive `@media`.
- Prefer intrinsic layout over a breakpoint. Use `.cory-cards` for card grids (`repeat(auto-fit, minmax(min(100%, 280px), 1fr))`), `flex-wrap: wrap` for rows, and `clamp()` for large numbers. A breakpoint is for a change of structure, not for squeezing.
- Use the grid helpers:
  - `.cory-grid`: `--cols` 4, then 6 from 640, then 12 from 1024.
  - `.cory-bento`: 1, then 2, then 4 columns, with `.hero`, `.span-2`, `.span-3` and `.tall` tiles.
  - `.cory-split`: two columns from 1024, stacked below.
  - `.cory-container` and `.cory-section`: page width and rhythm through `--gutter` and `--section-y`.
- A component that lives at many widths, such as a card in a sidebar and in a hero, uses a container query on its wrapper rather than a viewport breakpoint. Set `container-type: inline-size` on the wrapper, then `@container (min-width: 480px)`.
- Use logical properties only (`inline-start` and `inline-end`), so RTL mirrors for free. The one physical exception is a safe-area inset, which belongs to the screen, not the reading direction.

## Type on small screens

- Body text is `text-md` (16px) or larger on fluid pages. Headlines use `text-fluid-*`. Nothing is under `text-micro` (11px), and 11px is for badges, legal text and timestamps only.
- Headings use `text-wrap: balance` and body uses `text-wrap: pretty`. Long words and URLs wrap. Numbers, codes and emails stay LTR.
- Keep the measure at 45 to 75 characters (`measure-body`, `measure-lead`), and check that no headline leaves one orphaned word at 390px.

## Touch

- Every control is at least `target-min` (24px), and `target-touch` (44px) on touch layouts. Leave at least `space-2` between neighbouring targets.
- On touch screens the base styles set form text to 16px, so iOS does not zoom on focus, and grow `.cory-btn-sm` to 44px.
- Hover is an enhancement. Anything revealed on hover is also revealed on focus and visible on touch. Hover lifts sit inside `@media (hover: hover)`, and touch screens never keep a lift stuck after a tap.
- Swiping is never the only way to move. Rails and carousels also have buttons or links, and a keyboard path.
- Give fields the right `type`, `inputmode` and `autocomplete` (`tel`, `email`, `name`, `one-time-code`), so phones show the right keyboard and offer autofill.

## Mobile patterns

- **Header.** The text nav shows from 1024 wide. Below that, the logo, `DirectionToggle` and the primary button stay. On landscape phones the header drops to `--header-height-compact`.
- **Chat.** On phones the conversation is the page. Keep the input pinned above the keyboard and the safe area (`.cory-safe-bottom`), keep the latest message in view, and keep the launcher in `.cory-fixed-end`.
- **Dialogs and sheets.** Keep them inside the small viewport: `max-height: calc(100svh - 2 * var(--gutter))`, with the body scrolling and the actions always visible.
- **Tables.** Below 640 wide, either restack each row as a card with label and value pairs, or wrap the table in `.cory-scroll-x` with its heading outside the scroller.
- **Media.** Give every image `width` and `height`, or an `--aspect-*` ratio, so nothing shifts as it loads. Use `srcset` and `sizes` for photos, add `loading="lazy"` below the fold, and use `MediaFrame` when the ratio must hold.
- **Fixed artboards.** Wrap the canvas in `[data-fit-canvas]`. `ds-base.js` sets `--fit` so a 1080×1350 post shows whole on a phone. Artboards never reflow.

## Widths and states to check

- Widths: 320, 360, 390, 768, 1024, 1280, 1440 and 1920.
- Also check 200% zoom, and a landscape phone (844 × 390).
- Check both themes, LTR and RTL (`dir="rtl" lang="ar"`), and reduced motion.
- Pass means:
  - no horizontal page scroll;
  - no clipped or overlapping text;
  - every action reachable with one thumb;
  - nothing hidden behind the browser bar, the keyboard or a fixed control.
- Look at screenshots at 360, 768 and 1440 before calling anything done. A probe cannot see a bad layout that happens to fit. The GitHub repo's `_audit/responsive.mjs` checks ten widths for overflow.

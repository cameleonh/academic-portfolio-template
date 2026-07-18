# Academic Portfolio Template Design System

## 1. Atmosphere & Identity

The template is a quiet academic portfolio: editorial, spacious, and precise.
A restrained blue-gray accent identifies navigation and links, while a
desaturated navy supports primary actions and the route-like research motif.
Serif display type gives the scholar's name a distinct voice, and sans-serif
type keeps long-form reading clear.

## 2. Color

| Role | Token | Light value | Usage |
|---|---|---:|---|
| Background | `--color-bg` | `#f5f7f8` | Page and navigation background |
| Surface | `--color-surface` | `#ffffff` | Cards and content surfaces |
| Border | `--color-border` | `#dfe5e9` | Navigation and control borders |
| Border/subtle | `--color-border-light` | `#edf1f3` | Section separators |
| Text/primary | `--color-text` | `#252b30` | Body and headings |
| Text/secondary | `--color-text-secondary` | `#59636b` | Navigation and supporting text |
| Text/muted | `--color-text-muted` | `#68747c` | Labels and metadata |
| Accent | `--color-accent` | `#526b7d` | Links, focus, active states |
| Accent/hover | `--color-accent-hover` | `#3e5566` | Interactive hover states |
| Accent/light | `--color-accent-light` | `#eef2f4` | Soft interactive hover surface |
| Navy accent | `--color-navy` | `#3e536d` | Primary buttons and motif highlights |
| Navy/hover | `--color-navy-hover` | `#2d4058` | Primary button hover state |
| Motif/muted | `--color-motif-muted` | `#8798a5` | Secondary visualization marks |

Publication-status colors use dedicated `--color-status-*` tokens. Dark mode
preserves the same hierarchy with an opaque navigation background, cool white
text, and lighter blue-gray interactive accents.

## 3. Typography

| Level | Size | Weight | Usage |
|---|---:|---:|---|
| Hero name | `3.2rem` | 600 | Scholar name on the home page |
| Page title | `2rem` | 700 | Interior page headings |
| Section title | `1.625rem` | 600 | Major section headings |
| Body | `1rem` | 400 | Main reading text |
| Navigation | `14px` | 500 | Stable header navigation |
| Label | `0.7rem` | 500 | Section labels |

- English sans: Inter with system fallbacks.
- English display: Source Serif 4 with Georgia fallbacks.
- Korean UI and prose: Pretendard Variable with Korean system fallbacks.
- Mono labels: IBM Plex Mono.

Header type uses fixed pixel metrics so locale and content text-size changes do
not shift the navigation controls. Content typography remains scalable.

## 4. Spacing & Layout

Content spacing uses the 4px-based scale from `--space-1` through `--space-24`.
The wide container is `--max-width-wide` (1000px), the reading container is
`--max-width` (760px), and the sticky header uses a fixed 64px desktop height
and 56px mobile height. The desktop header reserves fixed columns for the brand,
controls, and navigation; it switches to the mobile menu at 960px.

## 5. Components

### Header

- Sticky navigation with brand, text-size controls, theme toggle, language
  switch, page links, and a mobile menu.
- English and Korean labels occupy stable columns and do not move adjacent
  controls.
- States: default, hover, active page, focus-visible, and expanded mobile menu.
- Semantic lists, native links and buttons, localized labels, and visible focus
  rings are required.

### Language switch

- Shows the destination code (`KOR` or `ENG`) with a localized accessible name.
- Preserves the current route when a translated route exists.
- Uses fixed dimensions and mono typography in both locales.

### Text size control

- Provides decrease, reset, and increase buttons.
- Persists an explicit choice and applies it before first paint.
- Keeps header controls fixed while scaling the reading surface.

### Theme toggle

- Uses sun and moon SVG icons with fixed dimensions.
- Follows the operating-system preference on first visit and persists an
  explicit choice without a first-paint flash.

### Link button

- Supports internal Next.js routes and external links.
- Variants: outline and filled.
- States: default, hover, focus-visible, and active.

### Hero contact links

- Places phone, LinkedIn, and Instagram icon links after the Email button.
- Decorative SVGs remain hidden from assistive technology; localized labels
  identify every target.
- Links wrap naturally without horizontal overflow.

### Research card

- Contains a number, title, description, and compact topic list.
- Uses a two-column or adaptive desktop grid and a single-column mobile stack.
- Has no decorative motion.

## 6. Motion & Interaction

Interactive color, border, and background changes use a 150ms ease transition.
No layout properties animate. Reduced-motion users receive the same final state
without non-essential motion.

## 7. Depth & Surface

Subtle blue-neutral borders provide structure. The opaque sticky header
preserves context without glass or blur. Cards remain editorial and border-led
rather than shadow-heavy.

## 8. Accessibility Constraints & Accepted Debt

- Target WCAG 2.2 AA.
- Keep visible focus indicators on every interactive control.
- Use native links for navigation and native buttons for state changes.
- Preserve readable Korean line wrapping and the text-size control.
- Maintain 40px hero contact targets and keyboard-reachable header controls.
- Do not hide responsive overflow as a substitute for repairing layout.

No accessibility debt is intentionally accepted in the template baseline.

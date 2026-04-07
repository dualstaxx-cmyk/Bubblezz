# Bubblezz Design System — Extracted from Stitch MCP

## Project: Bubblezz Premium E-commerce (ID: 7077532012451865014)

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `gold` | `#C9A84C` | Primary accent, badges, labels, CTAs, underlines |
| `gold-dark` | `#a8872e` | Hover state for gold elements |
| `brand-black` | `#1a1a1a` | Primary text, hero BG, navbar buttons, footer BG |
| `cream` | `#FAF7F2` | Main page background, card backgrounds |
| `cream-dark` | `#F0EBE1` | Secondary sections, input backgrounds |
| Surface | `#FCF9F4` | Design system surface (Stitch override) |
| Border | `#e8e0d5` | Subtle separators, card borders |
| Gray text | `#6b7280` | Body text, descriptions |
| Gray muted | `#9ca3af` | Placeholder text |
| WhatsApp Green | `#25D366` | WhatsApp FAB + product enquiry button |
| White | `#ffffff` | Inverse surfaces, light text on dark BG |

---

## Typography

### Font Families
- **Display/Headlines**: `Playfair Display` (serif) — weights 400, 600, 700, 700 italic
- **Body/UI**: `DM Sans` (sans-serif) — weights 400, 500, 600

### Scale (from Stitch Editorial Apothecary system)
| Level | Size | Weight | Usage |
|---|---|---|---|
| display-lg | 3.5rem (56px) | 700 | Hero headline |
| display-md | 3rem (48px) | 700 | Section hero titles |
| headline-lg | 2rem (32px) | 700 | Section headings |
| headline-md | 1.5rem (24px) | 600 | Card titles, sub-headings |
| body-lg | 1rem (16px) | 400 | Primary body text |
| body-sm | 0.875rem (14px) | 400 | Descriptions, captions |
| label-sm | 0.75rem (12px) | 500 | All-caps labels, tags |

### Typography Rules (from design system)
- Tight letter-spacing (-0.02em) on display fonts for editorial authority
- All-caps labels: +0.1em tracking (Manrope/DM Sans)
- Hero: Playfair Display bold + DM Sans body for dialogue between "Artisan" and "Scientist"

---

## Spacing & Layout

| Name | Value |
|---|---|
| Page padding X (mobile) | 24px (px-6) |
| Page padding X (desktop) | 64px (px-16) |
| Section padding Y | 80px (py-20) |
| Card gap | 24px (gap-6) |
| Card inner padding | 16px (p-4) |
| Grid gap | 16px (gap-4) |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `card` | 12px | Product cards, category cards |
| `pill` | 9999px | Buttons (CTA, WhatsApp) |
| `map` | 16px | Map iframe, contact image |
| `input` | 0px (bottom border only) | Form inputs — minimalist line style |

---

## Component Patterns

### Navbar
- Sticky, `bg-white`, `border-b border-[#e8e0d5]`
- Logo: Playfair Display, font-bold, text-xl, brand-black
- Nav links: DM Sans, active = `text-gold` + underline, hover = `text-gold`
- CTA: Black pill button → hover turns gold

### Product Card (Home variant)
- `bg-white rounded-card border border-[#e8e0d5] hover:shadow-lg hover:-translate-y-1`
- Image: cream bg `aspect-square object-contain p-4`
- Badge: absolute gold pill `top-3 left-3`
- WhatsApp CTA: `bg-[#25D366] text-white rounded-lg w-full`
- Button text: "Enquire on WhatsApp" (NOT "Order via WhatsApp")

### Product Card (Shop/Editorial variant)
- No border, no card bg
- Masonry columns layout
- CTA: text link "WHATSAPP ENQUIRY →" with bottom-border hover

### Category Card
- Relative container with `next/image fill object-cover`
- Dark overlay `bg-black/40` → `bg-black/30` on hover
- Scale on hover: `group-hover:scale-105`
- Gold border on hover: `group-hover:border-2 group-hover:border-gold`
- Text: Playfair Display white + DM Sans white/80 italic subtitle

### Buttons
- **Primary CTA**: `bg-gold text-brand-black rounded-full px-6 py-3` → hover `bg-gold-dark`
- **Secondary**: `border border-white text-white rounded-full` → hover `bg-white/10`
- **WhatsApp**: `bg-[#25D366] text-white rounded-full`
- **Nav CTA**: `bg-brand-black text-white rounded-full` → hover `bg-gold text-black`

### Form Inputs (Contact)
- No background, no border box
- Single `border-b border-gray-200` → focus `border-gold`
- Label: `text-[11px] uppercase tracking-wider text-gray-400`

---

## Layout Grids

### Home Hero
- `grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 gap-12 py-20`
- Left: Text content with staggered Framer Motion fadeUp
- Right: Product image with radial gold glow

### Curated Collections (Asymmetric)
- `grid grid-cols-3 grid-rows-2 gap-4 h-[600px]`
- Skin Care: `col-span-1 row-span-2` (tall left column)
- Hair Care: `col-span-1 row-span-1` (top middle)
- Baby Care: `col-span-1 row-span-1` (bottom middle)
- Home Care: `col-span-2 row-span-1` (wide bottom right)

### Shop Page
- CSS Masonry: `columns-1 md:columns-3 gap-6` with `break-inside-avoid`
- Category filter tabs: `flex gap-6 mt-6 flex-wrap`

### Contact Page
- Hero: `grid grid-cols-1 md:grid-cols-2 gap-12`
- Form section: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Contact details: border-left gold accent (`border-l-2 border-gold pl-4`)

### Philosophy Section
- Side-by-side: `grid grid-cols-1 md:grid-cols-2 min-h-[400px]`
- Left: `bg-brand-black` | Right: `bg-cream`

---

## Screen Data from Stitch

### Home Screen (ID: 630af94ed3a04d718959036d7429747f)
- Title: "Home - Refined Bubblezz Luxury"
- Dimensions: 2560×8180px (desktop)
- Key sections: Hero → Trust Strip → Curated Collections → Bestsellers → Philosophy

### Shop Screen (ID: 5877c63127c84020962e7f60ef027710)
- Title: "Shop - Refined Collection"
- Dimensions: 2560×5536px (desktop)
- Key features: Category tabs, masonry product grid, "WHATSAPP ENQUIRY →" text CTAs

### Contact Screen (ID: e6cb717e1b6f4fa098f82683321f5b27)
- Title: "Contact Us - Refined Editorial"
- Dimensions: 2560×5448px (desktop)
- Contact email: aishwarya@amulya.com
- Location: Pune, Maharashtra, India
- Hours: Mon–Sat, 9am–6pm IST
- WhatsApp: wa.me/1234567890 (replace with real number)

---

## Design Philosophy (The Editorial Apothecary)

- **Quiet Luxury**: Confidence through whitespace, not clutter
- **Intentional Asymmetry**: Grid layouts that break rigid 4-column structure
- **No-Line Rule**: Boundaries via background shifts, not 1px borders
- **Tonal Layering**: Depth via surface hierarchy (cream → cream-dark → white → black)
- **Dual Type Dialogue**: Serif (artisan/editorial) + Sans-serif (functional/modern)
- **Large Imagery**: Product photography as hero element with floating effect on cream bg

# Waste to Wealth (English booklet): handoff

Current version: v9.x, 8 A5 pages, English only. This note replaces the older v8 handoff where they disagree.

## Files

| File | What it is |
|---|---|
| `index.html` | All eight pages. Edit text here. |
| `style.css` | Layout, colours, type. |
| `img/` | Photos and the VSO logo. |
| `bg-latin.woff2`, `bg-ext.woff2` | Bricolage Grotesque font. |
| `render.js` | Makes the PDFs (Node and Playwright). |
| `Waste-to-Wealth-English-v9.pdf` | Reading copy, no bleed. |
| `Waste-to-Wealth-English-v9-print-bleed.pdf` | Print copy, 3 mm bleed. |

## Rebuild

    node render.js . Waste-to-Wealth-English-v9.pdf
    node render.js . Waste-to-Wealth-English-v9-print-bleed.pdf '?print'

The script prints a fit report. A page is full when its content reaches the footer line at 198 mm. Pages 3, 4, 5 and 6 are within about a millimetre of it, so adding text on those pages means cutting something else.

## Things to know before editing

- Page 8's dot texture is drawn by a small script at the foot of `index.html`. Do not replace it with a CSS gradient: Chrome then turns every page into a blurry 72 dpi image in the PDF.
- Any image edit in Canva is not editable text. The Canva copies are flat 300 dpi page images.
- Colours: plum #5d164d, orange #ee842a, magenta #a7248d, cream #f6f1e9. Green, blue and red are reserved for the three bins.

## Decisions already made

- No Japan 3R, no reduce-reuse-recycle pyramid, no "kabari" (use "scrap dealer"), no jobs or work as an outcome.
- Page 3 has four questions; a cross on any one means leave it on the shelf.
- Page 6 plan: Organise, Awareness, Coordination, Advocacy. Items follow Kiran Naghma's original plan of action. Medical waste is deliberately kept out of community bins, which differs from her document.
- Law page lists only fines taken from the Act texts. Three press-only figures were removed (Islamabad Rs 5,000 personal fine, KP plastic bags Rs 500,000, Quetta polythene ban).

## Open items

1. Urdu version not started. Every change above needs mirroring.
2. Law figures still need checking against current gazette texts (federal, Punjab, Sindh, KP, Balochistan, GB, AJK). The page now has no "check with your EPA" note.
3. Photos: confirm source, licence and consent. Some may be AI-generated; check VSO's policy before printing.
4. "They can raise your risk of cancer" (page 3) is the safe wording. "Can cause cancer" overstates the evidence for hot food in plastic.
5. Kiran should confirm the plan wording, week labels, the advocacy verbs, and the medical waste change.
6. No contact line on the back page.

# Precision Fencing Pretoria: website redesign brief

## Goal
Redesign https://www.precisionfencingpretoria.co.za/ so it looks similar to the reference
https://ironmanworks.co.za/services/customised-fencing/.
Build it in this folder and push it to the private repo https://github.com/BonganiAI/Fencing-site.git
(branch `main`, which holds only a README so far).

- Follow `~/Downloads/CLAUDE.md`: a single `index.html`, Tailwind via CDN, served on localhost, screenshot comparison rounds.
- The `frontend-design` skill that CLAUDE.md mentions is not installed.
- `gh` 2.103.3 is installed at `~/.local/bin/gh` and signed in as BonganiAI (since 2026-10-27),
  with git set up to use it, so commits can be pushed to `main` directly.

## Screenshots (in `reference/`, ignored by git)
- `ironmanworks-customised-fencing.png`: the design to match (1440px wide, full page).
- `current-precisionfencing.png`: the current site.

## Reference design notes (Ironman Works)
- Font: Montserrat throughout. Accent and divider colour: `#008037` (green). Borders: `#E2E6E7`.
- Top contact strip with phone numbers, email and address, then a bar with the logo and the menu
  (Home, About Us, Services with a dropdown, Contact Us).
- Page hero: H1 "Customised Fencing", tagline "Where Metal Meets Mastery".
- Sections in order:
  1. Intro (H2) plus a paragraph.
  2. "What we offer": bullets and an image.
  3. "Get a Quote" form (First name, Last name, Email, Phone, Subject, Message) beside an image.
  4. Badge: "Proudly South African Owned & Operated".
  5. "Why customise?": image and text.
  6. "Our approach": 5 steps (Site inspection & consultation; Design & proposal; Manufacture;
     Installation; Support & warranty).
  7. "Ready to proceed?": a CTA with a "Get a Quote" button.
  8. Contact block (Phone, Address, E-mail).
  9. Footer: logo, Quick Links, Services, Experience, copyright line.
- Floating WhatsApp button (the qlwapp plugin).

## Real content (current site)
- Business: **Precision Fencing Pretoria**. "Here to help with all your fencing needs", with strong,
  reliable fences for homes and businesses.
- Phone: 082 815 3262 (+27 82 815 3262). WhatsApp: https://wa.me/27828153262
- The site lists no email, address, hours or socials. Ask the user for them.
- About: "a trusted name in the fencing industry for years". Mission: durable fencing that meets
  high standards of quality and customer satisfaction, customised to each client.
- Services:
  1. **Supply & Installation**: quality materials, professional installation.
  2. **Steel Fences**: palisade and mesh styles; durable, secure, low maintenance, versatile.
  3. **Mesh Fencing**: unobstructed views with strong security; residential, commercial and
     agricultural; includes chain link.
  4. **Clearview Fencing**: closely spaced vertical wires that resist climbing and cutting;
     high-quality steel with a neat look.
  5. **Palisade Fencing**: hot-dip galvanised steel, bolt-on or welded; commercial and
     industrial perimeters.
  6. **Razor Wire**: added to existing fences; legally compliant, correct height and fastening.
  7. **Electric Fencing**: a harmless deterrent shock; integrates with alarms and cameras.
- Why choose us: skilled, experienced technicians; performance and longevity; top-grade,
  weather-resistant materials; custom solutions, including coatings; a workmanship guarantee.
- Real photos (use these, not placeholders):
  - https://www.precisionfencingpretoria.co.za/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-09-10-at-12.20.04-qu3fzcrr3u2w4nbndktf8soqfx2qjblufnjfktjb74.jpeg
  - https://www.precisionfencingpretoria.co.za/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-09-10-at-12.20.06-qu3fzfl9oc6r3h7jx41ay9z482ou6ex1g1hw0nf4og.jpeg
  - https://www.precisionfencingpretoria.co.za/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-09-10-at-12.20.07-1-qu3fz90echxqu7h3zj6wytmw2dl9oj6x34xhnpovw0.jpeg
  - https://www.precisionfencingpretoria.co.za/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-09-10-at-12.20.09-qu3fz9y8jbz15tfqu1ljjbecnrgmw8anf9kz4znhps.jpeg
  - Download the full-size versions into `brand_assets/`.

## Open questions for the user
- Email, physical address, service areas, opening hours.
- Logo, if one exists. The site icon is a cropped photo.
- Whether to keep an Ironman-style page per service or use a single page.

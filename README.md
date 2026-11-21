# Kyne Solutions website

Static site: HTML, CSS, JS, Bootstrap 5.3.3 and Font Awesome 6.5.2 (both bundled in assets/vendor, so no CDN needed).
Fonts: Plus Jakarta Sans and IBM Plex Mono from Google Fonts.

Upload the contents of this folder to the web root of your host. Open index.html locally to preview.

## Before going live, replace these placeholders
1. Domain: every canonical URL, Open Graph URL, sitemap.xml, robots.txt and llms.txt use https://www.kynesolutions.com.
   Find and replace it with the real domain across all files.
2. WhatsApp: the WhatsApp links use 0915 178 2751 (wa.me/2349151782751). Remove them if that number is not on WhatsApp.
3. Office address and opening hours: not published. Add them to contact.html, the footer and the schema if you want them shown.
4. Pricing: no prices on the site (item 10 is in progress). FAQ says rates show on kyneparcel.com when booking.
5. Testimonials: a commented slot is in vendors.html. Add real vendor quotes only.
6. Founder quote on about.html is a paraphrase of the brief. Swap in Mr. Ogunmikan's own words.
7. Privacy policy and terms are general templates. Have them reviewed.
8. Contact form opens the visitor's email app (mailto). Connect a form service (e.g. Formspree) later if you want submissions stored.

## Editing
The pages are generated from ../kyne-website-source (data.py holds content, build.py holds templates).
Run `python3 build.py` there to regenerate, or edit the HTML directly.

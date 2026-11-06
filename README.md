# BLOOM Dental & Medical Clinic — Website

A responsive, static HTML/CSS/JavaScript website prepared for GitHub Pages.

## Files

- `index.html` — homepage with clinic introduction, service overview, doctor profile section and before-and-after gallery.
- `inquiry.html` — dedicated enquiry page. The form creates a WhatsApp message addressed to **+91 70286 57619**.
- `styles.css` — responsive styling and visual design.
- `script.js` — mobile navigation, reveal animations and WhatsApp form handling.
- `assets/` — local image and brand assets used by the site.

## Important content to update before publishing

Some clinic details were not provided, so these have been left as editable placeholders rather than made up:

1. Replace `[Add doctor's full name]`, qualifications, speciality and registration details with verified information.
2. Replace the sample doctor portrait with the actual treating dentist's photograph.
3. Add the clinic's verified street address and location/map link.
4. Confirm which listed services are actually offered and remove any that do not apply.
5. Replace the illustrative before-and-after visuals with genuine patient photographs only where the clinic has permission and patient consent. Do not present the included examples as actual BLOOM patient results.

The photos included in this starter package are AI-generated illustrative assets. They are not photographs of BLOOM's premises, staff or patients.

## WhatsApp enquiry setup

The contact buttons and enquiry form are set to the supplied number. The form opens WhatsApp with the visitor's details filled in. The visitor must press **Send** inside WhatsApp to deliver the message. This is expected behaviour for a static HTML website; it does not submit messages invisibly or store enquiries in a database.

The number is configured as India's country code plus the supplied number: `+91 70286 57619`.

## Publish with GitHub Pages

1. Extract the ZIP file.
2. Create a new GitHub repository.
3. Upload the **contents** of the `BLOOM_Dental_Medical_Clinic` folder (not the parent folder) so `index.html` is at the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then save.
7. Wait for GitHub Pages to publish and open the URL shown in the Pages section.

No build command, server, database or framework is required.

## Local preview

Double-click `index.html` to open the homepage in a browser. Open `inquiry.html` to test the enquiry page. The WhatsApp form requires a device/browser with WhatsApp Web or the WhatsApp app available.

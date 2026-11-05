# Prescription Maker

A small web app for writing prescriptions and downloading them as signed A4 PDFs.
Works on phone or desktop, installs to the home screen, and works offline.

**Privacy:** everything runs in the browser. Doctor details, the signature and
patient data never leave the device — there is no server or database. Doctor
details and signature are saved in that browser's local storage only.

## Using it
1. Open the site, expand **Doctor & clinic details**, fill them in, sign in the
   box (or upload a signature image) and tap **Save details on this device**.
2. Enter patient name, age, gender, diagnosis and the medicines.
3. Tap **Download PDF**.

**Install on the phone:** open the site, then
- iPhone (Safari): Share → *Add to Home Screen*
- Android (Chrome): ⋮ menu → *Add to Home screen* / *Install app*

## Publishing (GitHub Pages)
Settings → Pages → *Build and deployment* → Source: **Deploy from a branch**,
Branch: **main**, folder **/ (root)** → Save. The site appears at
`https://13swat.github.io/prescription/` after a minute or two.

## Updating
After changing any file, bump `VERSION` in `sw.js` so installed copies refresh.

## Files
- `index.html` — the app
- `sw.js`, `manifest.webmanifest`, `icons/` — offline + home-screen install
- `vendor/` — jsPDF 2.5.1 and jsPDF-AutoTable 3.8.2 (MIT), bundled so it works offline

Note: the PDF uses standard fonts, so text in Devanagari/Hindi script won't render.

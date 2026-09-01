# Venu Kumar P J — Personal Portfolio Website

A static personal portfolio for Venu Kumar P J: Full Stack Developer, AI/ML Engineer, Data Analyst, and CRM Consultant.

## Setup Instructions (Local Execution)

1. Clone or download this repository.
2. Open `index.html` directly in any standard browser (Chrome, Edge, Firefox, Safari).
3. No build scripts or Node.js environment required.

## Customization Guide

- **Profile Photo:** Add your picture at `assets/profile.jpg`. If omitted, the UI displays an initials avatar.
- **Resume:** Place your resume PDF file at `assets/resume.pdf`.
- **Project Screenshots:** Save images as `crime-hotspot.png`, `plant-disease.png`, and `iot-safety.png` inside `assets/projects/`. If omitted, the interface falls back to visual UI graphics.
- **Contact Form Connection:** Open `index.html`, locate `<form id="contact-form">`, and replace `https://formspree.io/f/YOUR_FORM_ID` with your Formspree or Web3Forms API endpoint.

## Deployment to GitHub Pages

1. Push all files to a public repository on GitHub named `portfolio` or `venukumarpj.github.io`.
2. Navigate to repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` (or `master`) branch and `/root` folder, then click **Save**.
5. Your live site will be accessible at `https://<username>.github.io/`.
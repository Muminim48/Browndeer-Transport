# Browndeer Transport LLC — Website

A fast, static website for Browndeer Transport LLC, built with plain HTML, CSS, and JavaScript, and ready to deploy on Netlify. No build tools, no backend, no database.

## What's in this folder

```
index.html        The homepage (everything lives on one page)
privacy.html       Privacy Policy placeholder
terms.html         Terms & Conditions placeholder
success.html       Fallback "thank you" page for the quote form
css/styles.css     All styling
js/main.js         Mobile menu, scroll effects, and the quote form
assets/img/logo.png  Your logo
netlify.toml       Netlify configuration
config.md          A quick-reference table of every company detail and where it lives
```

You don't need to know how any of this works to make routine updates — just follow the steps below.

---

## 1. Running the website locally

You don't need to install anything to preview the site.

- **Easiest way:** double-click `index.html` and it will open in your browser. (The quote form won't fully work this way — that's expected, it needs Netlify.)
- **Better preview (optional):** if you have the free [VS Code](https://code.visualstudio.com/) editor, install the "Live Server" extension, open this folder, right-click `index.html`, and choose "Open with Live Server."

## 2. Changing company information

Open `index.html` in any text editor (VS Code, Notepad, TextEdit). Use your editor's "Find" (Ctrl/Cmd+F) to search for the current value — for example, search for `320-391-0734` — and it will show you every place that number appears so you can update them all. The `config.md` file lists every piece of company info and exactly where it appears, so you always know what to search for.

## 3. Replacing the logo

1. Save your new logo file as `logo.png` (same file name).
2. Drop it into the `assets/img` folder, replacing the existing file.
3. Keep it roughly square — the site displays it at about 50–55px tall in the header/footer and scales it automatically.

## 4. Replacing photographs

The current photos are professional stock photography, hot-linked directly from Unsplash (a free stock photo service) as realistic placeholders. To use your own truck and yard photos instead:

1. Save your photos into `assets/img` (e.g. `hero.jpg`, `about.jpg`).
2. In `css/styles.css`, search for `images.unsplash.com` — you'll find three spots (`.hero`, `.volume-banner`, `.final-cta`). Replace each `url("https://images.unsplash.com/...")` with `url("assets/img/your-file-name.jpg")`.
3. In `index.html`, search for `images.unsplash.com` to find the two `<img>` tags (in the "Experience" and "About" sections) and swap the `src="..."` value the same way.

## 5. Updating monthly and annual load figures

Search `index.html` for `100–150` (monthly) and `1,200–1,800` (annual). Each appears in the stat strip near the top, the "Built for Consistent Freight Movement" section, and the fleet section. Update every instance.

## 6. Updating the fleet size

Search for the number `5` near the words "Trucks" — it appears in the stat strip, the hero credibility line, and the fleet section (which also draws 5 small truck icons — add or remove a `<svg class="fleet-truck is-active">...</svg>` block in the "Capacity With Personal Service" section to match).

## 7. Adding the email address

Search `index.html` for `[EMAIL ADDRESS]` in the Contact section and replace it with your real email. If you'd like it clickable, wrap it like this: `<a class="value" href="mailto:you@browndeertransport.com">you@browndeertransport.com</a>`.

## 8. Adding the service area

Search for `[INSERT SERVICE AREA / STATES]` in the "Service Area" section and replace it with your actual coverage (for example, "Minnesota, Wisconsin & Iowa" or a list of regions).

## 9. Confirming and updating services

In the "Services" section, each card currently shows a placeholder tag like "Confirm service." Once you know your exact service mix, delete the `<span class="placeholder-tag">...</span>` line for that card and add a short sentence describing the service instead.

## 10. Configuring Netlify Forms

This is already done in the code — you don't need to build anything. Netlify automatically detects the form because of the `data-netlify="true"` attribute on it. Once you deploy (next step), do this one-time setup:

1. In your Netlify site dashboard, go to **Forms**. You should see "quote-request" listed after your first deploy.
2. Go to **Site configuration → Forms → Form notifications** and add an email notification (or Slack) so you're alerted every time someone submits a quote request.
3. Submissions also collect in the Netlify dashboard under **Forms** even without notifications turned on.

## 11. Deploying the project to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in (or create a free account).
2. Click **Add new site → Deploy manually**.
3. Drag the entire project folder (this folder) into the upload area.
4. Netlify will give you a live `.netlify.app` URL within a minute — your site is now live.

(If you'd rather connect this to GitHub for automatic updates later, that also works — Netlify's "Import from Git" option — but manual drag-and-drop is the simplest path to start.)

## 12. Connecting the existing custom domain Browndeertransport.com

1. In your Netlify site dashboard, go to **Domain management → Add a domain** and enter `browndeertransport.com`.
2. Netlify will show you DNS records to add. Log into wherever you registered the domain (GoDaddy, Namecheap, etc.) and add those records in its DNS settings.
3. It can take a few hours for the domain to fully connect. Netlify will show a green "Netlify DNS" or "DNS verified" status once it's live, and will automatically issue a free HTTPS certificate.

## 13. Updating the website after deployment

- **If you deployed by drag-and-drop:** make your edits locally, then go back to your Netlify site dashboard and drag the updated folder in again — it will replace the live site.
- **If you connected GitHub:** just push your changes to the repository and Netlify redeploys automatically.

---

### A few notes
- The site has no database — all company info lives directly in `index.html` and `css/styles.css`, so there's nothing else to keep in sync.
- Testimonials, the service area, the email address, and the exact service list are intentionally left as placeholders (clearly marked in brackets) since that information wasn't confirmed yet — nothing was invented.
- No broker relationships, partnerships, certifications, or endorsements are listed anywhere on the site, since none were confirmed.

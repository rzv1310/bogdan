## Change on the "Despre mine" page

In the contact details section, I will replace the "LinkedIn" row ("LinkedIn - av. Bogdan Lamatic") with a "Social media" row that shows all the icons from the footer, each with its link and in the same order:

LinkedIn, X, Instagram, Facebook, YouTube, Google Maps, TikTok, Pinterest

- The icons open in a new tab.
- They are the same color as the page's links and change shade when the cursor is over them.
- The rest of the page stays the same.

## Technical

To avoid duplication, I will move the list of social links from `Footer.tsx` into a shared component, `SocialLinks`, used in both the footer and `About.tsx`. The footer will look exactly the same as now.

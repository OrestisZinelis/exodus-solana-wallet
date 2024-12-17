# Web Development / CMS Hire Code Challenge

## CI/CD - CMS Integration

### Repo

- [GitHub repo](https://github.com/OrestisZinelis/exodus-solana-wallet)
  - Production: Main branch
  - Preview: Preview branch

### Netlify

- [Netlify production page](https://exodus-solana-wallet.netlify.app/)
- [Netlify preview page](https://preview--exodus-solana-wallet.netlify.app/)

** Please send me your email addresses to send you invitations for Contentful **

### Netlify/Contentful Configuration

- [Images/Video](https://drive.google.com/drive/folders/1BKWtC3-PQnEETfmCLBDAjhYedFB_XVKa)
- Merging to main or preview branches will trigger a deployment to Netlify (production and preview pages accordingly).
- Publishing or publishing content from Contentful will trigger Netlify deployment. For this to happen I used two webhooks from Netlify.
- If we would like changes caused by a non-developer to trigger only the preview deployment, we should add some filters in the Contentful webhooks configuration.
- The CONTENTFUL_ACCESS_TOKEN is not exposed to the GitHub repo. I used secret env variables.

## Implementation Comments

### Decisions

- I used TypeScript.
- I used Tailwind because I have library experience and wanted to speed up the implementation (I saw from the source code that you did not use Tailwind, I suppose styled-components with a BEM approach).
- I did not use MaterialUI or other UI component libraries, because I saw that there are no complex UI components.
- Basic light-dark theming, based on OS theme.
- I used Netlify for simplified deployment, automatic builds and great integration with Gatsby and Contentful.
- I used Contentful because it is fast, user-friendly and secure. TBH I had experience only with WordPress CMS in the past.
- Set all react component props nullable, which I know, is not a good practice, but the data from contentful are nullable.I did not want to create multiple queries per component. UI Components should be loosely coupled to data.

### What I did not do

- Use gatsbyImage
- Get the favicon from Contentful
- Set fields required in contentful
- Add the possibility for a custom layout structure (using available components)
- Did not do the CSS background/image thing (with green and gray colors)

## Local Development

- Install dependencied `npm install` (Node `v20`)
- Start it up `gatsby develop`
- Create `.env` file in the root folder and set `CONTENTFUL_SPACE_ID` `CONTENTFUL_ACCESS_TOKEN` to get data from Contentful

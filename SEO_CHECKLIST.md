# SEO Post-Deployment Checklist

After deploying your website, use this checklist to verify all SEO elements are working correctly.

## Pre-Deployment

- [ ] Replace placeholder Open Graph image (`static/og-image.jpg`) with actual branded image (1200x630px)
- [ ] Verify `src/images/icon.png` exists and is at least 512x512px
- [ ] Review all meta descriptions in translation files
- [ ] Check that site URL in `gatsby-config.ts` matches production URL
- [ ] Run `gatsby build` locally to verify no errors

## Post-Deployment Checks

### Meta Tags Verification
- [ ] View page source (Ctrl+U) and verify:
  - [ ] `<title>` tag is present and correct
  - [ ] Meta description is present
  - [ ] Open Graph tags are present (og:title, og:description, og:image, etc.)
  - [ ] Twitter Card tags are present
  - [ ] Canonical URL points to correct page
  - [ ] Language (`lang` attribute) is set correctly on `<html>` tag

### Image SEO
- [ ] All images have descriptive alt attributes
- [ ] Open Graph image loads correctly (check in browser)
- [ ] Images are optimized (compressed)
- [ ] Logo images display correctly

### Technical SEO
- [ ] Sitemap is accessible: `https://pixelsandlogic.eu/sitemap-index.xml`
- [ ] Robots.txt is accessible: `https://pixelsandlogic.eu/robots.txt`
- [ ] Manifest is accessible: `https://pixelsandlogic.eu/manifest.webmanifest`
- [ ] 404 page has noindex meta tag
- [ ] HTTPS is working (redirects from HTTP)
- [ ] No mixed content warnings

### Structured Data
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify Organization schema is valid
- [ ] Verify WebSite schema is valid
- [ ] Check for structured data errors in Search Console

### Social Media Previews
- [ ] Test Facebook preview: [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [ ] Title displays correctly
  - [ ] Description displays correctly
  - [ ] Image displays correctly (1200x630px)
- [ ] Test Twitter preview: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [ ] Card type is "summary_large_image"
  - [ ] Title displays correctly
  - [ ] Description displays correctly
  - [ ] Image displays correctly
- [ ] Test LinkedIn preview (share a link in LinkedIn)

### Multilingual SEO
- [ ] Both language versions are accessible:
  - [ ] English: `https://pixelsandlogic.eu/en/`
  - [ ] Polish: `https://pixelsandlogic.eu/pl/`
- [ ] Hreflang tags are correct for each language
- [ ] Language switcher works correctly
- [ ] Each language has appropriate meta content

### Performance & Lighthouse
- [ ] Run Lighthouse audit (Chrome DevTools)
  - [ ] Performance score > 90
  - [ ] SEO score = 100
  - [ ] Best Practices score > 90
  - [ ] Accessibility score > 90
- [ ] Fix any Lighthouse SEO recommendations
- [ ] Verify mobile-friendliness

### Search Console Setup
- [ ] Add property to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify ownership (multiple methods recommended)
- [ ] Submit sitemap
- [ ] Check for crawl errors
- [ ] Monitor index coverage
- [ ] Set up email alerts for critical issues

### Analytics Setup
- [ ] Set up Google Analytics 4
- [ ] Add tracking code to site (if not using gatsby-plugin-google-gtag)
- [ ] Verify tracking is working (Real-Time view)
- [ ] Set up goals/conversions
- [ ] Link Google Analytics with Search Console

### Bing Webmaster Tools
- [ ] Add site to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Import data from Google Search Console (if available)

### Additional Tools
- [ ] Test schema markup: [Schema Markup Validator](https://validator.schema.org/)
- [ ] Check mobile-friendliness: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Test page speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check SSL certificate: [SSL Labs](https://www.ssllabs.com/ssltest/)

## Ongoing Monitoring (Weekly/Monthly)

### Weekly
- [ ] Check Search Console for new errors
- [ ] Monitor site performance in Lighthouse
- [ ] Review Analytics for unusual traffic patterns

### Monthly
- [ ] Review Search Console performance report
- [ ] Check for broken links
- [ ] Review and update meta descriptions if needed
- [ ] Monitor keyword rankings
- [ ] Check competitors' SEO

## Common Issues & Fixes

### Issue: Open Graph image not showing
- Clear Facebook cache: https://developers.facebook.com/tools/debug/
- Verify image is publicly accessible
- Check image dimensions (1200x630px recommended)
- Verify image URL is absolute (not relative)

### Issue: Sitemap not found
- Run `gatsby build` to regenerate sitemap
- Check `gatsby-config.ts` sitemap plugin configuration
- Verify file is in public folder after build

### Issue: Meta tags not showing
- Clear browser cache
- Check if tags are in `<Head>` component
- Verify SEO component is imported and used correctly

### Issue: Low Lighthouse SEO score
- Fix missing meta descriptions
- Ensure all links have descriptive text
- Add alt attributes to images
- Use proper heading hierarchy (h1, h2, h3)

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Notes

- SEO is an ongoing process, not a one-time setup
- Rankings take time (weeks to months)
- Focus on quality content and user experience
- Monitor and adapt based on analytics data

# SEO Checklist for surajkumar.site

## ✅ Completed

- [x] Updated README.md with new domain
- [x] Added comprehensive meta tags in index.html
- [x] Added SEO meta tags in Index.tsx (React Helmet)
- [x] Created sitemap.xml
- [x] Updated robots.txt
- [x] Added Open Graph tags for Facebook/LinkedIn
- [x] Added Twitter Card tags
- [x] Set canonical URL to https://surajkumar.site
- [x] Added theme color meta tag
- [x] Added proper keywords and description

## ⚠️ Action Required

### 1. Create Open Graph Image
- [ ] Create `og-image.png` (1200 x 630 pixels)
- [ ] Place in `public/` folder
- See `OG-IMAGE-INSTRUCTIONS.md` for details

### 2. Connect Domain in Vercel
- [ ] Go to Vercel Dashboard → Your Project → Settings → Domains
- [ ] Add `surajkumar.site`
- [ ] Add `www.surajkumar.site`
- [ ] Configure DNS records at your domain registrar

### 3. After Domain is Live

#### Test Your SEO
- [ ] Test Open Graph: https://www.opengraph.xyz/url/https://surajkumar.site
- [ ] Test Twitter Cards: https://cards-dev.twitter.com/validator
- [ ] Test mobile-friendly: https://search.google.com/test/mobile-friendly
- [ ] Test page speed: https://pagespeed.web.dev/

#### Submit to Search Engines
- [ ] Google Search Console: https://search.google.com/search-console
  - Add property: surajkumar.site
  - Submit sitemap: https://surajkumar.site/sitemap.xml
  - Request indexing
  
- [ ] Bing Webmaster Tools: https://www.bing.com/webmasters
  - Add site
  - Submit sitemap

#### Optional Enhancements
- [ ] Add Google Analytics
- [ ] Add structured data (JSON-LD) for better rich snippets
- [ ] Create a blog section for better SEO
- [ ] Add alt text to all images
- [ ] Optimize images (compress, use WebP format)

## 📊 Current SEO Score

### Meta Tags: ✅ Excellent
- Title: Optimized (under 60 characters)
- Description: Optimized (under 160 characters)
- Keywords: Added
- Open Graph: Complete
- Twitter Cards: Complete

### Technical SEO: ✅ Good
- Sitemap: Created
- Robots.txt: Updated
- Canonical URL: Set
- Mobile-friendly: Yes (responsive design)
- HTTPS: Will be enabled by Vercel

### Content SEO: ✅ Good
- Clear headings structure
- Semantic HTML
- Fast loading (Vite + React)
- Accessible navigation

## 🎯 Next Steps Priority

1. **HIGH**: Create and add og-image.png
2. **HIGH**: Connect domain in Vercel
3. **MEDIUM**: Submit to Google Search Console after domain is live
4. **LOW**: Add Google Analytics (optional)

## 📝 Notes

- Your portfolio is already well-optimized for SEO
- The main thing needed is the OG image for social media previews
- Once domain is connected, wait 24-48 hours for DNS propagation
- After going live, it may take 1-2 weeks for Google to index your site

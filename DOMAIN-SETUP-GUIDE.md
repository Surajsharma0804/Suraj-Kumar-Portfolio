# Domain Setup Guide for surajkumar.site

## 🎉 What's Been Updated

All code has been updated to use your new domain `surajkumar.site`!

### Files Modified:
1. ✅ `README.md` - Updated project URL
2. ✅ `index.html` - Updated all meta tags and canonical URL
3. ✅ `src/pages/Index.tsx` - Enhanced SEO meta tags with React Helmet
4. ✅ `src/pages/NotFound.tsx` - Added meta tags for 404 page
5. ✅ `public/robots.txt` - Updated with new domain
6. ✅ `public/sitemap.xml` - Created with all pages

### Files Created:
- ✅ `SEO-CHECKLIST.md` - Complete SEO checklist
- ✅ `OG-IMAGE-INSTRUCTIONS.md` - Guide to create social media preview image
- ✅ `DOMAIN-SETUP-GUIDE.md` - This file

---

## 🚀 Next Steps to Go Live

### Step 1: Connect Domain in Vercel (REQUIRED)

1. **Login to Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Select your project: `suraj-kumar-portfolio-0804`

2. **Add Your Domain**
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter: `surajkumar.site`
   - Click "Add"
   - Also add: `www.surajkumar.site` (recommended)

3. **Vercel Will Show DNS Records**
   You'll see something like:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 2: Configure DNS at Your Domain Registrar

1. **Login to Your Domain Registrar**
   - Where you bought `surajkumar.site` (GoDaddy, Namecheap, etc.)

2. **Find DNS Settings**
   - Look for "DNS Management" or "DNS Settings"

3. **Add the Records Vercel Showed You**
   
   **For root domain (surajkumar.site):**
   - Type: `A`
   - Host/Name: `@` or leave blank
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: Automatic or 3600
   
   **For www subdomain:**
   - Type: `CNAME`
   - Host/Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: Automatic or 3600

4. **Save Changes**

### Step 3: Wait for DNS Propagation

- **Time**: Usually 5-30 minutes, can take up to 48 hours
- **Check Status**: 
  - In Vercel dashboard, you'll see "Valid Configuration" when ready
  - Test at: https://dnschecker.org/#A/surajkumar.site

### Step 4: SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificate
- Your site will be available at `https://surajkumar.site`
- This happens automatically once DNS is configured

---

## 📸 Create Your Social Media Preview Image

**IMPORTANT**: You need to create an Open Graph image for social media previews.

See detailed instructions in: `OG-IMAGE-INSTRUCTIONS.md`

**Quick Summary:**
- Create image: 1200 x 630 pixels
- Name it: `og-image.png`
- Place in: `public/` folder
- Include: Your name, title, and branding

---

## ✅ After Domain is Live

### 1. Test Everything

- [ ] Visit https://surajkumar.site (should load your portfolio)
- [ ] Visit https://www.surajkumar.site (should redirect to main domain)
- [ ] Check HTTPS is working (green padlock in browser)
- [ ] Test on mobile devices

### 2. Test SEO & Social Media

- [ ] **Open Graph Test**: https://www.opengraph.xyz/url/https://surajkumar.site
- [ ] **Twitter Card Test**: https://cards-dev.twitter.com/validator
- [ ] **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- [ ] **PageSpeed Test**: https://pagespeed.web.dev/

### 3. Submit to Search Engines

#### Google Search Console
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `surajkumar.site`
4. Verify ownership (Vercel makes this easy)
5. Submit sitemap: `https://surajkumar.site/sitemap.xml`
6. Request indexing for main page

#### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap

### 4. Share Your New Domain!

Update your domain on:
- [ ] LinkedIn profile (website section)
- [ ] GitHub profile bio
- [ ] Resume (if it includes website)
- [ ] Email signature
- [ ] Social media bios

---

## 🔧 Troubleshooting

### Domain Not Working?

1. **Check DNS Configuration**
   - Use: https://dnschecker.org/#A/surajkumar.site
   - Should show Vercel's IP: 76.76.21.21

2. **Check Vercel Dashboard**
   - Should show "Valid Configuration" next to your domain
   - If not, review DNS records

3. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. **Wait Longer**
   - DNS can take up to 48 hours (usually much faster)

### SSL Certificate Issues?

- Vercel handles this automatically
- If not working after 24 hours, contact Vercel support

### Old Vercel URL Still Works?

- That's normal! Both will work
- You can redirect the old URL in Vercel settings if desired

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **DNS Help**: Contact your domain registrar's support
- **General Questions**: Check Vercel's community forum

---

## 🎯 Summary

**What You Need to Do:**
1. Connect domain in Vercel dashboard
2. Add DNS records at your domain registrar
3. Wait for DNS propagation (5-30 minutes)
4. Create og-image.png and add to public/ folder
5. Test everything once live
6. Submit to Google Search Console

**What's Already Done:**
- ✅ All code updated with new domain
- ✅ SEO meta tags optimized
- ✅ Sitemap created
- ✅ Robots.txt updated
- ✅ Social media tags configured

Your portfolio is ready to go live! 🚀

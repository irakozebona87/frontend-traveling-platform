# 🚀 Deployment Guide for SURA RWANDA

Complete guide to deploy your Rwanda tourism platform to production.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploy to Vercel (Recommended)](#deploy-to-vercel)
3. [Deploy to Netlify](#deploy-to-netlify)
4. [Deploy to GitHub Pages](#deploy-to-github-pages)
5. [Deploy Backend API](#deploy-backend-api)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Environment Variables](#environment-variables)

---

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] All images added to `/public/images/`
- [ ] API keys added to environment variables
- [ ] Tested all features locally
- [ ] Production build works: `npm run build`
- [ ] All console errors fixed
- [ ] Mobile responsiveness tested
- [ ] Authentication flow tested
- [ ] API endpoints configured

---

## Deploy to Vercel (Recommended) ⭐

### Why Vercel?
- ✅ Free tier with generous limits
- ✅ Automatic deployments from Git
- ✅ Built-in CDN
- ✅ Zero configuration for React
- ✅ Environment variable management

### Step-by-Step:

**1. Install Vercel CLI:**
```bash
npm install -g vercel
```

**2. Login to Vercel:**
```bash
vercel login
```

**3. Deploy:**
```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? sura-rwanda
# - Directory? ./
```

**4. Set Environment Variables:**
Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add all variables from `.env`:
```
VITE_OPENWEATHER_API_KEY = your_key
VITE_BACKEND_API_URL = your_backend_url
```

**5. Deploy to Production:**
```bash
vercel --prod
```

Your site is now live! 🎉

**Automatic Deployments:**
Connect GitHub repository for automatic deployments on every push:
1. Go to Vercel Dashboard
2. Import Git Repository
3. Connect your GitHub repo
4. Every push to `main` branch auto-deploys!

---

## Deploy to Netlify

### Step-by-Step:

**1. Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

**2. Build your project:**
```bash
npm run build
```

**3. Deploy:**
```bash
netlify deploy

# Follow prompts:
# - Create new site
# - Team: Your account
# - Site name: sura-rwanda
# - Publish directory: dist
```

**4. Deploy to Production:**
```bash
netlify deploy --prod
```

**Or use Netlify UI:**
1. Go to https://app.netlify.com
2. Drag & drop your `dist` folder
3. Done!

**Add Environment Variables:**
Netlify Dashboard → Site Settings → Environment Variables

**Enable Continuous Deployment:**
1. Site Settings → Build & Deploy
2. Connect to Git provider
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## Deploy to GitHub Pages

**1. Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

**2. Update `package.json`:**
```json
{
  "homepage": "https://yourusername.github.io/sura-rwanda",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**3. Update `vite.config.ts`:**
```typescript
export default defineConfig({
  base: '/sura-rwanda/',
  // ... other config
});
```

**4. Deploy:**
```bash
npm run deploy
```

**5. Enable GitHub Pages:**
- Go to repository Settings → Pages
- Source: gh-pages branch
- Save

Site will be live at: `https://yourusername.github.io/sura-rwanda/`

---

## Deploy Backend API

### Option 1: Railway (Free)

**1. Sign up:** https://railway.app

**2. Install Railway CLI:**
```bash
npm install -g @railway/cli
```

**3. Login and deploy:**
```bash
railway login
railway init
railway up
```

**4. Add environment variables:**
```bash
railway variables set DATABASE_URL=your_database_url
```

### Option 2: Render (Free)

**1. Sign up:** https://render.com

**2. Create new Web Service:**
- Connect GitHub repository
- Build command: `npm install`
- Start command: `node server.js`

**3. Add environment variables in dashboard**

### Option 3: Fly.io (Free)

**1. Install Fly CLI:**
```bash
curl -L https://fly.io/install.sh | sh
```

**2. Deploy:**
```bash
fly launch
fly deploy
```

### Option 4: Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create sura-rwanda-api

# Deploy
git push heroku main

# Set environment variables
heroku config:set OPENWEATHER_API_KEY=your_key
```

---

## Custom Domain Setup

### For Vercel:

**1. Buy domain** (Namecheap, GoDaddy, etc.)

**2. Add domain in Vercel:**
- Project Settings → Domains
- Add `yourdomain.com`

**3. Update DNS records at domain registrar:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**4. Wait for DNS propagation** (up to 48 hours)

### For Netlify:

**1. Netlify Dashboard → Domain Settings**

**2. Add custom domain**

**3. Update DNS:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: your-site.netlify.app
```

### Free SSL:
Both Vercel and Netlify provide free SSL certificates automatically!

---

## Environment Variables

### Local Development (`.env`):
```env
VITE_OPENWEATHER_API_KEY=abc123
VITE_BACKEND_API_URL=http://localhost:3000/api
```

### Production:
Never commit `.env` to Git!

**Vercel:**
```bash
vercel env add VITE_OPENWEATHER_API_KEY production
```

**Netlify:**
```bash
netlify env:set VITE_OPENWEATHER_API_KEY abc123
```

**GitHub Pages:**
Use GitHub Secrets:
1. Repository → Settings → Secrets
2. Add secrets
3. Access in GitHub Actions

---

## Performance Optimization

### Before Deploying:

**1. Optimize Images:**
```bash
# Install image optimizer
npm install --save-dev imagemin imagemin-webp

# Convert images to WebP
# Or use online tool: https://squoosh.app
```

**2. Enable Gzip Compression:**
Most hosting providers enable this automatically.

**3. Lazy Load Images:**
```typescript
<img loading="lazy" src="/images/attraction.jpg" alt="..." />
```

**4. Code Splitting:**
Already handled by Vite!

**5. Add Service Worker (PWA):**
```bash
npm install vite-plugin-pwa
```

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SURA RWANDA',
        short_name: 'SURA',
        description: 'Rwanda Tourism Platform',
        theme_color: '#16a34a',
      }
    })
  ]
})
```

---

## Monitoring & Analytics

### Google Analytics:

**1. Create GA4 property:** https://analytics.google.com

**2. Add to your app:**
```bash
npm install react-ga4
```

```typescript
// src/main.tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');

// Track page views
ReactGA.send("pageview");
```

### Vercel Analytics:
```bash
npm install @vercel/analytics
```

```typescript
// src/app/App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

---

## Testing Deployed Site

### Checklist:
- [ ] Homepage loads correctly
- [ ] All images display
- [ ] Navigation works
- [ ] Login/signup functional
- [ ] Protected routes redirect to login
- [ ] API calls work
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] No console errors
- [ ] Forms submit correctly

### Tools:
- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **Lighthouse** (Chrome DevTools)

---

## Troubleshooting

### Issue: Images not loading
**Solution:** 
- Check image paths (case-sensitive)
- Ensure images are in `/public/images/`
- Correct path: `/images/hero/hero-1.jpg` (not `../images/...`)

### Issue: API calls failing
**Solution:**
- Check CORS settings on backend
- Verify environment variables are set
- Check API URL is correct

### Issue: Blank page after deploy
**Solution:**
- Check browser console for errors
- Verify build succeeded (`npm run build`)
- Check router base path configuration

### Issue: 404 on page refresh
**Solution:**
Add `_redirects` file (Netlify) or `vercel.json` (Vercel):

**Netlify - Create `public/_redirects`:**
```
/*    /index.html   200
```

**Vercel - Create `vercel.json`:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## CI/CD Pipeline (Advanced)

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Cost Breakdown

### Free Tier Hosting:
- **Vercel:** Free (Unlimited personal projects)
- **Netlify:** Free (100GB bandwidth/month)
- **GitHub Pages:** Free (1GB storage)

### Backend:
- **Supabase:** Free (500MB database)
- **Firebase:** Free tier (generous limits)
- **Railway:** Free ($5 credit/month)

### Domain:
- **.com domain:** $10-15/year
- **.rw domain:** Contact Rwanda registry

### Total: $0-15/year for full stack app! 🎉

---

## Post-Deployment

### Share Your Site:
- Add to your portfolio
- Share on social media
- Submit to directories
- Add to competition submission

### Monitor:
- Check analytics weekly
- Monitor error logs
- Update content regularly
- Respond to user feedback

---

## Competition Submission Tips

1. **Live Demo Link:** Use custom domain if possible
2. **GitHub Repository:** Make it public with good README
3. **Video Demo:** Record 2-3 minute walkthrough
4. **Documentation:** Show API integration and features
5. **Screenshots:** Include mobile and desktop views
6. **Figma Link:** Convert using methods from INFO page

---

**You're Ready to Deploy! 🚀**

Good luck with your competition! 🏆

Questions? Check the official docs:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Vite: https://vitejs.dev

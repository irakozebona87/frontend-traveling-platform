# 📥 Download & Setup Instructions for SURA RWANDA

## Your Complete Project is Ready!

All files have been created in your current workspace. Here's what you have:

---

## 📂 **Complete File List**

### Root Directory Files:
```
✅ package.json              - Project dependencies
✅ vite.config.ts            - Build configuration
✅ tsconfig.json             - TypeScript config
✅ postcss.config.mjs        - PostCSS config
✅ .env.example              - Environment variables template
✅ .gitignore                - Git ignore rules
```

### Documentation (6 Guides):
```
✅ README.md                      - Main overview
✅ GETTING_STARTED.md            - Quick start guide
✅ API_INTEGRATION_GUIDE.md      - API setup tutorial
✅ IMAGE_PLACEHOLDER_GUIDE.md    - Image guide
✅ DEPLOYMENT_GUIDE.md           - Hosting guide
✅ PROJECT_STRUCTURE.md          - Architecture overview
✅ DOWNLOAD_INSTRUCTIONS.md      - This file
```

### Source Code - `/src/` Directory:
```
✅ main.tsx                  - App entry point

src/app/
  ✅ App.tsx                 - Main component
  ✅ routes.tsx              - Route configuration
  
  pages/
    ✅ Home.tsx              - Homepage with slideshow
    ✅ Login.tsx             - Auth page
    ✅ Places.tsx            - Attractions
    ✅ FoodGuide.tsx         - Traditional food
    ✅ TripPlanner.tsx       - AI planner
    ✅ MyItinerary.tsx       - Personal planner
    ✅ TravelInfo.tsx        - Travel info + contact
  
  components/
    ✅ Navigation.tsx        - Main navbar
    ✅ ProtectedRoute.tsx    - Auth wrapper
    ✅ LanguageChatbot.tsx   - Kinyarwanda tutor
    
  context/
    ✅ AuthContext.tsx       - Authentication
  
  hooks/
    ✅ useWeatherAPI.ts      - Weather data
    ✅ useExchangeRateAPI.ts - Currency rates
  
  api/
    ✅ rwandaData.ts         - API functions

styles/
  ✅ index.css               - Main styles
  ✅ tailwind.css            - Tailwind imports
  ✅ theme.css               - Theme variables
  ✅ fonts.css               - Font imports
```

---

## 🚀 **Step-by-Step Setup on Your Computer**

### Step 1: Download the Project

**If using Figma Make interface:**
- Look for "Download", "Export", or "Download Project" button
- Save the ZIP file to your computer

**OR manually copy files:**
- Select all files from the file explorer
- Copy to your local machine

### Step 2: Extract and Open

```bash
# 1. Extract the ZIP file to a folder
# For example: C:\Users\YourName\Projects\sura-rwanda

# 2. Open Terminal/Command Prompt

# 3. Navigate to the folder
cd C:\Users\YourName\Projects\sura-rwanda

# OR on Mac/Linux:
cd ~/Projects/sura-rwanda
```

### Step 3: Open in VS Code

**Option A - From Terminal:**
```bash
code .
```

**Option B - From VS Code:**
1. Open VS Code
2. File → Open Folder
3. Select the `sura-rwanda` folder
4. Click "Open"

### Step 4: Install Dependencies

**In VS Code Terminal (Ctrl + ` or View → Terminal):**

```bash
# Install all packages
npm install
```

This will download ~200MB of dependencies including React, TypeScript, Tailwind, etc.

### Step 5: Create Environment File

```bash
# Copy the example file
cp .env.example .env

# OR on Windows:
copy .env.example .env
```

Edit `.env` file (optional - defaults work):
```env
VITE_OPENWEATHER_API_KEY=your_key_here
```

### Step 6: Add Your Images

**Create image folders:**

```bash
# Windows:
mkdir public\images\hero
mkdir public\images\attractions
mkdir public\images\food
mkdir public\images\hotels

# Mac/Linux:
mkdir -p public/images/{hero,attractions,food,hotels}
```

**Add your images:**
- See `IMAGE_PLACEHOLDER_GUIDE.md` for details
- Drag and drop images into folders

### Step 7: Run the Project

```bash
npm run dev
```

**Open in browser:**
- Visit: http://localhost:5173
- Project is now running locally! 🎉

---

## 📁 **Folder Structure You'll See**

```
sura-rwanda/
├── 📄 README.md
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
├── 📁 node_modules/          (created after npm install)
├── 📁 public/
│   └── 📁 images/            (add your images here)
│       ├── hero/
│       ├── attractions/
│       ├── food/
│       └── hotels/
├── 📁 src/
│   ├── 📄 main.tsx
│   ├── 📁 app/
│   │   ├── 📁 pages/         (7 page files)
│   │   ├── 📁 components/
│   │   ├── 📁 context/
│   │   ├── 📁 hooks/
│   │   └── 📁 api/
│   └── 📁 styles/
└── 📁 dist/                   (created after npm run build)
```

---

## 💻 **Required Software**

Before starting, make sure you have:

### 1. Node.js (Required)
**Download:** https://nodejs.org/

**Version:** 18 or higher

**Check if installed:**
```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

**If not installed:**
- Windows/Mac: Download installer from nodejs.org
- Mac (Homebrew): `brew install node`
- Linux: `sudo apt install nodejs npm`

### 2. VS Code (Recommended)
**Download:** https://code.visualstudio.com/

**Recommended Extensions:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

**Install extensions:**
1. Open VS Code
2. Click Extensions icon (Ctrl+Shift+X)
3. Search and install each extension

### 3. Git (Optional, but recommended)
**Download:** https://git-scm.com/

**Used for:**
- Version control
- Deployment to Vercel/Netlify
- GitHub integration

---

## 🎯 **First Time Setup Checklist**

After downloading and opening in VS Code:

- [ ] Node.js installed (v18+)
- [ ] VS Code installed
- [ ] Project folder opened in VS Code
- [ ] Terminal opened in VS Code (Ctrl + `)
- [ ] Run `npm install` (wait 2-5 minutes)
- [ ] Create `.env` file from `.env.example`
- [ ] Create `public/images/` folders
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173 in browser
- [ ] Test login functionality
- [ ] Add your images

---

## 🔍 **Verify Everything is Working**

### Test 1: Dependencies Installed
```bash
npm list react
# Should show: react@18.3.1
```

### Test 2: Development Server
```bash
npm run dev
# Should show: Local: http://localhost:5173
```

### Test 3: Build Works
```bash
npm run build
# Should create 'dist' folder with no errors
```

### Test 4: Authentication
1. Visit http://localhost:5173
2. Click "Places" → Should redirect to login
3. Create account
4. Should access all pages ✅

---

## 📝 **Editing Files in VS Code**

### To Edit a Page:
```bash
# In VS Code Explorer:
src/
  app/
    pages/
      Home.tsx        ← Click to edit homepage
      Places.tsx      ← Click to edit places
      FoodGuide.tsx   ← Click to edit food guide
```

### To Change Colors:
```bash
src/
  styles/
    theme.css       ← Edit color variables here
```

### To Add Images:
```bash
public/
  images/
    hero/           ← Add hero images here
    attractions/    ← Add attraction images
    food/           ← Add food images
```

### To Configure APIs:
```bash
src/
  app/
    api/
      rwandaData.ts  ← Edit API endpoints here
    hooks/
      useWeatherAPI.ts ← Weather API config
```

---

## 🎨 **Customizing the Project**

### Change Logo Text:
**File:** `src/app/components/Navigation.tsx`
**Line:** Find "SURA RWANDA"
```typescript
<span className="text-2xl font-bold">YOUR NAME</span>
```

### Change Colors:
**File:** `src/styles/theme.css`
```css
:root {
  --color-primary-green: #16a34a;  /* Change this */
}
```

### Add New Page:
1. Create file: `src/app/pages/NewPage.tsx`
2. Add route: `src/app/routes.tsx`
3. Add to navbar: `src/app/components/Navigation.tsx`

---

## 🚨 **Troubleshooting**

### Error: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Error: "Cannot find module 'react'"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Port 5173 already in use
**Solution:**
```bash
# Kill existing process or use different port
npm run dev -- --port 3000
```

### Images not showing
**Solution:**
- Check path: `/images/hero/hero-1.jpg` (not `../images/...`)
- Ensure images are in `public/images/`
- Restart dev server

### TypeScript errors
**Solution:**
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

---

## 📦 **Project Size**

**After download:**
- Source code: ~5 MB
- After `npm install`: ~300 MB (node_modules)
- With images: +50-200 MB (depends on your images)

**Total:** ~350-500 MB

---

## 🔄 **Keeping Files in Sync**

### Using Git (Recommended):
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push to GitHub (optional)
git remote add origin https://github.com/yourusername/sura-rwanda.git
git push -u origin main
```

### Manual Backup:
- Copy entire folder to external drive
- Use cloud storage (Google Drive, Dropbox)
- ZIP and save regularly

---

## 🎓 **Learning Resources**

### VS Code Basics:
- Official docs: https://code.visualstudio.com/docs
- Keyboard shortcuts: Ctrl+K Ctrl+S

### Terminal Commands:
- `ls` (Mac/Linux) or `dir` (Windows) - List files
- `cd folder` - Change directory
- `cd ..` - Go back one folder
- `pwd` - Show current directory
- `clear` - Clear terminal

### npm Commands:
```bash
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Build for production
npm install package # Add new package
```

---

## ✅ **Final Checklist**

Before you start working:

- [ ] Downloaded project folder
- [ ] Opened in VS Code
- [ ] Node.js installed
- [ ] `npm install` completed successfully
- [ ] `.env` file created
- [ ] `npm run dev` works
- [ ] Browser shows the app
- [ ] Can login and access pages
- [ ] Read `GETTING_STARTED.md`
- [ ] Know where to add images

---

## 🎉 **You're All Set!**

Your project is now:
✅ On your local computer
✅ Editable in VS Code
✅ Running on localhost
✅ Ready to customize
✅ Ready to deploy

**Next Steps:**
1. Read `GETTING_STARTED.md` for features overview
2. Add your images following `IMAGE_PLACEHOLDER_GUIDE.md`
3. Customize colors and content
4. Deploy using `DEPLOYMENT_GUIDE.md`

---

## 📞 **Quick Commands Reference**

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Update all packages
npm update
```

---

**Happy Coding! 🚀**

Your SURA RWANDA platform is ready to edit in VS Code!

Any changes you make will automatically refresh in the browser when dev server is running.

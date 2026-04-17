# 📁 SURA RWANDA - Project Structure

Complete overview of the project architecture and file organization.

## 🌳 Directory Tree

```
sura-rwanda/
│
├── 📄 Documentation Files
│   ├── README.md                      # Main project overview
│   ├── GETTING_STARTED.md            # Quick start guide
│   ├── API_INTEGRATION_GUIDE.md      # API setup tutorial
│   ├── IMAGE_PLACEHOLDER_GUIDE.md    # Image management guide
│   ├── DEPLOYMENT_GUIDE.md           # Hosting & deployment
│   ├── PROJECT_STRUCTURE.md          # This file!
│   └── .env.example                  # Environment variables template
│
├── 🛠️ Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── vite.config.ts               # Vite configuration
│   ├── tsconfig.json                # TypeScript config
│   ├── postcss.config.mjs           # PostCSS config
│   └── .gitignore                   # Git ignore rules
│
├── 📦 public/                        # Static assets (served as-is)
│   └── images/                      # 📸 PUT YOUR IMAGES HERE
│       ├── hero/                    # Homepage slideshow (4 images)
│       ├── attractions/             # Tourist destinations
│       │   ├── parks/              # National parks
│       │   ├── lakes/              # Lakes & water bodies
│       │   ├── cities/             # Cities & towns
│       │   ├── mountains/          # Mountains & hills
│       │   └── culture/            # Cultural sites
│       ├── food/                    # Traditional dishes (10+ images)
│       └── hotels/                  # Accommodation (5+ images)
│           ├── luxury/
│           ├── mid-range/
│           └── budget/
│
└── 📂 src/                           # Source code
    ├── main.tsx                     # App entry point
    │
    ├── 🎨 styles/                    # CSS files
    │   ├── index.css               # Main styles
    │   ├── tailwind.css            # Tailwind imports
    │   ├── theme.css               # Theme variables
    │   └── fonts.css               # Font imports
    │
    └── 🏗️ app/                       # Application code
        │
        ├── App.tsx                  # Main App component
        ├── routes.tsx              # Route configuration
        │
        ├── 📄 pages/                # Page components
        │   ├── Home.tsx            # Homepage with slideshow
        │   ├── Login.tsx           # Authentication page
        │   ├── Places.tsx          # All attractions (combined)
        │   ├── FoodGuide.tsx       # Traditional cuisine
        │   ├── TripPlanner.tsx     # AI budget planner
        │   ├── MyItinerary.tsx     # Personal trip planner
        │   └── TravelInfo.tsx      # Travel information + contact
        │
        ├── 🧩 components/           # Reusable components
        │   ├── Navigation.tsx      # Main navbar
        │   ├── ProtectedRoute.tsx  # Auth route wrapper
        │   ├── LanguageChatbot.tsx # Kinyarwanda tutor
        │   ├── figma/
        │   │   └── ImageWithFallback.tsx  # Image component
        │   └── ui/                 # UI components library
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── input.tsx
        │       └── [50+ components]
        │
        ├── 🔐 context/              # React Context
        │   └── AuthContext.tsx     # Authentication state
        │
        ├── 🪝 hooks/                # Custom React hooks
        │   ├── useWeatherAPI.ts    # Weather data fetching
        │   └── useExchangeRateAPI.ts # Currency exchange
        │
        └── 🌐 api/                  # API integration layer
            └── rwandaData.ts       # Data fetching functions
```

---

## 📝 File Descriptions

### 📄 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview, features, installation |
| `GETTING_STARTED.md` | Quick start guide for beginners |
| `API_INTEGRATION_GUIDE.md` | How to connect real APIs |
| `IMAGE_PLACEHOLDER_GUIDE.md` | Image management & specs |
| `DEPLOYMENT_GUIDE.md` | Deploy to Vercel, Netlify, etc. |
| `PROJECT_STRUCTURE.md` | This file - architecture overview |

### 🎨 Pages (7 Total)

| Page | Route | Auth Required | Description |
|------|-------|---------------|-------------|
| `Home.tsx` | `/` | ❌ No | Homepage with hero slideshow |
| `Login.tsx` | `/login` | ❌ No | Login & signup forms |
| `Places.tsx` | `/places` | ✅ Yes | All attractions categorized |
| `FoodGuide.tsx` | `/food-guide` | ✅ Yes | Traditional Rwandan food |
| `TripPlanner.tsx` | `/trip-planner` | ✅ Yes | AI budget planner |
| `MyItinerary.tsx` | `/my-itinerary` | ✅ Yes | Personal trip builder |
| `TravelInfo.tsx` | `/travel-info` | ✅ Yes | Info + contact + Figma guide |

### 🧩 Components

**Main Components:**
- `Navigation.tsx` - Responsive navbar with user menu
- `ProtectedRoute.tsx` - Redirects to login if not authenticated
- `LanguageChatbot.tsx` - Interactive Kinyarwanda learning chatbot

**UI Library (50+ components):**
- Pre-built shadcn/ui components
- Buttons, cards, dialogs, forms, etc.
- Fully customizable with Tailwind

### 🔐 Authentication

**AuthContext.tsx:**
```typescript
// Provides:
- user: User | null           // Current user
- login(email, password)      // Login function
- signup(name, email, password) // Signup function
- logout()                    // Logout function
- isAuthenticated: boolean    // Auth status
```

### 🌐 API Integration

**rwandaData.ts:**
```typescript
// Exports:
- attractionsAPI.getAll()
- attractionsAPI.getByCategory(category)
- foodAPI.getAll()
- hotelsAPI.getAll()
- tripPlannerAPI.generatePlan(budget, duration, travelers, interests)
- languageAPI.translate(phrase)
```

**useWeatherAPI.ts:**
```typescript
// Returns:
{ weather, loading, error }
```

**useExchangeRateAPI.ts:**
```typescript
// Returns:
{ rates, loading, error }
```

---

## 🎯 Data Flow

### Authentication Flow:
```
User visits protected page
    ↓
ProtectedRoute checks AuthContext
    ↓
Not authenticated? → Redirect to /login
    ↓
User logs in
    ↓
AuthContext updates user state
    ↓
Navigate to protected page
```

### API Data Flow:
```
Component mounts
    ↓
Calls custom hook (e.g., useWeatherAPI)
    ↓
Hook fetches from API
    ↓
Returns { data, loading, error }
    ↓
Component renders based on state
```

### Trip Planner Flow:
```
User inputs budget, duration, travelers
    ↓
Clicks "Generate Plan"
    ↓
tripPlannerAPI.generatePlan() called
    ↓
AI logic processes inputs
    ↓
Returns personalized recommendations
    ↓
Display accommodation, activities, food
```

---

## 🔧 Key Configuration Files

### vite.config.ts
```typescript
// Configures:
- React plugin
- Build settings
- Dev server
- Path aliases
```

### tsconfig.json
```typescript
// TypeScript settings:
- Compiler options
- Module resolution
- Type checking rules
```

### package.json
```json
{
  "scripts": {
    "dev": "vite",              // Start dev server
    "build": "vite build",      // Production build
    "preview": "vite preview"   // Preview build
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-router": "^7.1.3",
    "lucide-react": "^0.469.0"  // Icons
    // ... more
  }
}
```

---

## 📊 Component Architecture

```
App.tsx (Root)
    ↓
AuthProvider (Context)
    ↓
RouterProvider
    ↓
Routes
    ├── Public Routes
    │   ├── Home
    │   └── Login
    │
    └── Protected Routes (wrapped in ProtectedRoute)
        ├── Places
        ├── FoodGuide
        ├── TripPlanner
        ├── MyItinerary
        └── TravelInfo

Every page includes:
    ↓
Navigation Component
```

---

## 🎨 Styling Architecture

### Tailwind CSS v4
- Utility-first CSS framework
- Custom theme in `theme.css`
- Responsive design utilities

### Theme Variables (theme.css):
```css
:root {
  --color-primary-green: #16a34a;
  --color-emerald: #10b981;
  --font-sans: 'Inter', sans-serif;
}
```

### Component Styling:
```typescript
// Using Tailwind classes directly
<div className="bg-white rounded-xl p-6 shadow-lg">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
</div>
```

---

## 📦 Dependencies Breakdown

### Core:
- `react` - UI library
- `react-router` - Client-side routing
- `typescript` - Type safety

### UI:
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `@radix-ui/*` - Accessible UI primitives

### Utilities:
- `clsx` - Conditional className utility
- `tailwind-merge` - Merge Tailwind classes

### Dev:
- `vite` - Build tool & dev server
- `@vitejs/plugin-react` - React support for Vite
- `@types/*` - TypeScript type definitions

---

## 🚀 Build Output

After running `npm run build`:

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js    # Bundled JavaScript
│   └── index-[hash].css   # Bundled CSS
└── images/                # Copied from public/images/
```

This `dist/` folder is what you deploy!

---

## 🔄 State Management

### Local State (useState):
- Component-level data
- Forms, UI toggles

### Context API (AuthContext):
- Global user authentication state
- Accessible from any component

### Future Options:
- Redux Toolkit (for complex state)
- Zustand (lightweight alternative)
- React Query (for server state)

---

## 📱 Responsive Design

All pages are responsive:

**Breakpoints:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

**Example:**
```typescript
<div className="
  grid 
  grid-cols-1      {/* Mobile: 1 column */}
  md:grid-cols-2   {/* Tablet: 2 columns */}
  lg:grid-cols-3   {/* Desktop: 3 columns */}
">
```

---

## 🔐 Security Considerations

**Current (Development):**
- ⚠️ Passwords stored in localStorage (NOT production-ready)
- ⚠️ No encryption
- ⚠️ Client-side only

**For Production:**
- ✅ Use Supabase/Firebase Auth
- ✅ Implement JWT tokens
- ✅ HTTPS only
- ✅ Secure password hashing
- ✅ Rate limiting

---

## 🧪 Testing Structure (To Add)

Suggested test files:

```
src/
└── __tests__/
    ├── pages/
    │   ├── Home.test.tsx
    │   └── Login.test.tsx
    ├── components/
    │   └── Navigation.test.tsx
    └── context/
        └── AuthContext.test.tsx
```

Setup:
```bash
npm install -D vitest @testing-library/react
```

---

## 📈 Performance Optimizations

**Already Implemented:**
- ✅ Code splitting (Vite automatic)
- ✅ Tree shaking (removes unused code)
- ✅ Lazy loading images
- ✅ Optimized bundle size

**You Can Add:**
- Image optimization (WebP format)
- Service Worker (PWA)
- React Query for caching
- Virtualization for long lists

---

## 🎓 Learning Path

**If you're new to this stack:**

1. **Start Here:**
   - HTML/CSS/JavaScript basics
   - React fundamentals
   - TypeScript basics

2. **Then Learn:**
   - React Hooks (useState, useEffect)
   - React Router
   - Tailwind CSS

3. **Advanced:**
   - Context API
   - API integration
   - Authentication flows

4. **Resources:**
   - React: https://react.dev/learn
   - TypeScript: https://www.typescriptlang.org/docs/
   - Tailwind: https://tailwindcss.com/docs

---

## 🔍 Code Navigation Tips

**Find Component:**
```bash
# Use VS Code: Ctrl+P (Windows) or Cmd+P (Mac)
# Type component name
```

**Find Usage:**
```bash
# Right-click on component
# Select "Find All References"
```

**Search in Files:**
```bash
# Ctrl+Shift+F (Windows)
# Cmd+Shift+F (Mac)
```

---

## 📊 Project Stats

- **Total Pages:** 7
- **React Components:** 60+
- **Custom Hooks:** 2
- **Context Providers:** 1
- **Lines of Code:** ~3,500+
- **Dependencies:** 40+
- **Documentation:** 2,000+ lines

---

## 🎯 Customization Points

**Easy to Change:**
- ✅ Colors (theme.css)
- ✅ Logo (Navigation.tsx)
- ✅ Content (pages/*.tsx)
- ✅ Images (public/images/)

**Moderate:**
- ✅ Add new pages (create file + add route)
- ✅ Modify navigation (Navigation.tsx)
- ✅ Change authentication (AuthContext.tsx)

**Advanced:**
- ✅ Add database (API integration)
- ✅ Implement payment (Stripe)
- ✅ Add real-time features (WebSockets)

---

## 🚀 Next Steps

1. **Read:** `GETTING_STARTED.md`
2. **Add Images:** See `IMAGE_PLACEHOLDER_GUIDE.md`
3. **Configure APIs:** See `API_INTEGRATION_GUIDE.md`
4. **Deploy:** See `DEPLOYMENT_GUIDE.md`
5. **Customize:** Make it your own!

---

**You now understand the complete architecture! 🎉**

Start coding and good luck with your project! 🇷🇼

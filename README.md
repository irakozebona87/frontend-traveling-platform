# 🦍 SURA RWANDA - All-in-One Tourism Platform

A comprehensive, dynamic Rwanda tourism platform built with React, TypeScript, and Tailwind CSS. Features include AI-powered trip planning, interactive language learning, destination guides, and complete travel information.

## 🚀 Features

### Core Functionality
- ✅ **User Authentication** - Signup/Login with protected routes
- ✅ **Dynamic Data Fetching** - API integration ready
- ✅ **AI Trip Planner** - Personalized recommendations based on budget
- ✅ **Interactive Language Tutor** - Learn Kinyarwanda with AI chatbot
- ✅ **Comprehensive Places Guide** - All tourist attractions categorized
- ✅ **Food Discovery** - Traditional Rwandan cuisine explorer
- ✅ **Personal Itinerary Builder** - Save and plan your trip
- ✅ **Travel Information** - Visa, health, currency, emergency contacts
- ✅ **Real-time Weather** - Current conditions for Rwanda
- ✅ **Currency Exchange Rates** - Live USD to RWF conversion

## 📁 Project Structure

```
sura-rwanda/
├── src/
│   ├── app/
│   │   ├── api/              # API integration layer
│   │   │   └── rwandaData.ts # Data fetching functions
│   │   ├── components/       # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── LanguageChatbot.tsx
│   │   ├── context/          # React context
│   │   │   └── AuthContext.tsx # Authentication state
│   │   ├── hooks/            # Custom hooks
│   │   │   ├── useWeatherAPI.ts
│   │   │   └── useExchangeRateAPI.ts
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Places.tsx
│   │   │   ├── FoodGuide.tsx
│   │   │   ├── TripPlanner.tsx
│   │   │   ├── MyItinerary.tsx
│   │   │   └── TravelInfo.tsx
│   │   ├── routes.tsx        # React Router config
│   │   └── App.tsx          # Main app component
│   ├── styles/              # CSS files
│   └── imports/             # Images and assets
├── public/
│   └── images/              # 📸 PUT YOUR IMAGES HERE
│       ├── volcanoes-park.jpg
│       ├── lake-kivu.jpg
│       ├── kigali-city.jpg
│       └── [more images...]
├── package.json
└── README.md
```

## 🖼️ Image Management

### Where to Add Your Images

All images should be placed in the `/public/images/` directory:

```
/public/images/
├── attractions/
│   ├── volcanoes-park.jpg
│   ├── akagera-park.jpg
│   ├── nyungwe-forest.jpg
│   └── lake-kivu.jpg
├── food/
│   ├── ugali.jpg
│   ├── isombe.jpg
│   ├── brochettes.jpg
│   └── sambaza.jpg
├── hotels/
│   ├── bisate-lodge.jpg
│   ├── kigali-marriott.jpg
│   └── lake-kivu-serena.jpg
└── hero/
    ├── hero-1.jpg
    ├── hero-2.jpg
    └── hero-3.jpg
```

### Recommended Images

**Hero Section (4 images):**
- Rwanda landscape/mountains
- Mountain gorillas
- Lake Kivu sunset
- Kigali city skyline

**Places/Attractions:**
- Volcanoes National Park
- Akagera National Park wildlife
- Nyungwe Forest canopy walk
- Lake Kivu beaches
- Kigali Genocide Memorial
- Traditional villages

**Food:**
- Ugali with sides
- Isombe (cassava leaves)
- Brochettes (grilled meat skewers)
- Fresh tropical fruits
- Traditional buffet spreads

**Hotels:**
- Luxury lodges
- Mid-range hotels
- Budget guesthouses

### Image Specifications
- **Format:** JPG or PNG
- **Size:** Optimized for web (under 500KB each)
- **Dimensions:** 
  - Hero images: 1920x1080 or larger
  - Cards/thumbnails: 800x600 minimum
  - Keep aspect ratio 16:9 or 4:3

## 🔌 API Integration

### Current API Setup

The project includes hooks and functions for these APIs:

#### 1. Weather API (OpenWeatherMap)
```typescript
// File: src/app/hooks/useWeatherAPI.ts
// Get free API key: https://openweathermap.org/api
// Replace 'YOUR_OPENWEATHER_API_KEY_HERE' with your key
```

#### 2. Currency Exchange API
```typescript
// File: src/app/hooks/useExchangeRateAPI.ts
// Uses free exchangerate-api.com (no key required)
// Already configured and working!
```

#### 3. Rwanda Tourism Data
```typescript
// File: src/app/api/rwandaData.ts
// Replace mock data with your backend API calls
```

### Setting Up Your Backend API

**Option 1: Use Firebase (Recommended for beginners)**
```bash
npm install firebase
```

**Option 2: Build with Node.js/Express**
```bash
# Create a separate backend folder
mkdir backend
cd backend
npm init -y
npm install express cors dotenv
```

**Option 3: Use Supabase (Database + API)**
- Sign up at https://supabase.com
- Create tables for attractions, foods, hotels
- Use their auto-generated REST API

### Example API Integration

Replace the mock data in `/src/app/api/rwandaData.ts`:

```typescript
export const attractionsAPI = {
  getAll: async (): Promise<Attraction[]> => {
    const response = await fetch('YOUR_API_URL/api/attractions');
    return response.json();
  }
};
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
Place all images in `/public/images/` directory (create if doesn't exist)

### Step 3: Configure API Keys

Create a `.env` file in the root directory:
```env
VITE_OPENWEATHER_API_KEY=your_openweather_key_here
VITE_BACKEND_API_URL=http://localhost:3000/api
```

Update the API hooks to use environment variables:
```typescript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit http://localhost:5173

## 🔐 Authentication System

The platform uses a local authentication system:

### How It Works
- User credentials stored in browser's localStorage
- Protected routes require login
- Session persists across page refreshes

### For Production
Replace with real authentication:
- **Firebase Auth** (easiest)
- **Auth0**
- **Custom backend with JWT**

Example Firebase setup:
```bash
npm install firebase
```

## 📦 Building for Production

### Create Production Build
```bash
npm run build
```

### Deploy to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use gh-pages package
- **Firebase Hosting**: `firebase deploy`

## 🎨 Converting to Figma

### Method 1: HTML to Figma Extension
1. Install "HTML to Figma" Chrome extension
2. Deploy your site (Vercel, Netlify, etc.)
3. Use extension to import live site into Figma

### Method 2: Screenshot Method
1. Use "Full Page Screenshot" browser extension
2. Take screenshots of all pages
3. Import into Figma and trace/recreate

### Method 3: Anima Plugin
1. Install Anima plugin in Figma
2. Export React components
3. Import into Figma for editing

## 🔧 Customization

### Change Colors
Edit `/src/styles/theme.css`:
```css
:root {
  --color-primary: #16a34a; /* Green */
  --color-secondary: #10b981; /* Emerald */
}
```

### Add New Pages
1. Create component in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Add nav item in `/src/app/components/Navigation.tsx`

### Modify API Endpoints
Edit `/src/app/api/rwandaData.ts` with your backend URLs

## 📱 Free APIs You Can Use

### Weather
- OpenWeatherMap: https://openweathermap.org/api
- WeatherAPI: https://www.weatherapi.com/

### Currency
- ExchangeRate-API: https://www.exchangerate-api.com/ (no key needed)
- Fixer.io: https://fixer.io/

### Images
- Unsplash API: https://unsplash.com/developers
- Pexels API: https://www.pexels.com/api/

### Maps
- Mapbox: https://www.mapbox.com/
- Google Maps API: https://developers.google.com/maps

## 🐛 Troubleshooting

### Images Not Loading
- Ensure images are in `/public/images/`
- Check file names match exactly (case-sensitive)
- Use relative paths: `/images/your-image.jpg`

### API Not Working
- Check console for error messages
- Verify API key is correct
- Check CORS settings on backend

### Authentication Issues
- Clear localStorage: `localStorage.clear()`
- Check if routes are properly protected
- Verify AuthProvider wraps entire app

## 📄 License

This project is open source and available for educational and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use for your competition or projects!

## 📧 Support

For questions about implementation or customization, refer to:
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

---

**Built with ❤️ for Rwanda Tourism** 🇷🇼

Good luck with your competition! 🏆

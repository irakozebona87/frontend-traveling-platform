# 🔌 API Integration Guide for SURA RWANDA

Complete guide to integrating real APIs into your Rwanda tourism platform.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Weather API Integration](#weather-api)
3. [Backend API Setup](#backend-api)
4. [Database Integration](#database)
5. [Authentication API](#authentication)
6. [Third-Party Services](#third-party-services)

---

## Quick Start

### Option 1: No-Code Backend (Easiest)
Use **Supabase** for instant database + API:

```bash
npm install @supabase/supabase-js
```

```typescript
// src/app/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

### Option 2: Firebase (Easy)
```bash
npm install firebase
```

```typescript
// src/app/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### Option 3: Custom Node.js Backend
See [Backend API Setup](#backend-api) section below.

---

## Weather API Integration

### Using OpenWeatherMap (Free Tier: 1000 calls/day)

**Step 1:** Sign up at https://openweathermap.org/api

**Step 2:** Get your API key

**Step 3:** Update `/src/app/hooks/useWeatherAPI.ts`:

```typescript
import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export function useWeatherAPI(city: string = 'Kigali') {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},RW&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();
        setWeather({
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
      } catch (error) {
        console.error('Weather fetch error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { weather, loading };
}
```

**Step 4:** Use in components:

```typescript
import { useWeatherAPI } from '../hooks/useWeatherAPI';

function WeatherWidget() {
  const { weather, loading } = useWeatherAPI('Kigali');

  if (loading) return <div>Loading weather...</div>;

  return (
    <div>
      <p>{weather?.temperature}°C</p>
      <p>{weather?.description}</p>
    </div>
  );
}
```

---

## Backend API Setup

### Building Your Own Node.js/Express Backend

**Step 1:** Create backend folder (outside your React app)

```bash
mkdir rwanda-api
cd rwanda-api
npm init -y
npm install express cors dotenv mongoose
npm install -D typescript @types/express @types/node
```

**Step 2:** Create `server.ts`:

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample attraction endpoint
app.get('/api/attractions', (req, res) => {
  res.json([
    {
      id: '1',
      name: 'Volcanoes National Park',
      category: 'Parks',
      description: 'Home to mountain gorillas',
      price: '$1500',
      rating: 5
    }
  ]);
});

// Trip planner endpoint
app.post('/api/trip-planner', (req, res) => {
  const { budget, duration, travelers } = req.body;
  
  // Your AI logic here
  const plan = {
    accommodation: budget > 2000 ? ['Luxury Lodge'] : ['Budget Hotel'],
    activities: ['Gorilla Trekking', 'City Tour'],
    estimated_cost: budget
  };

  res.json(plan);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Step 3:** Connect from React:

```typescript
// src/app/api/rwandaData.ts
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000/api';

export const attractionsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/attractions`);
    return response.json();
  }
};
```

---

## Database Integration

### Using Supabase (Recommended)

**Step 1:** Create account at https://supabase.com

**Step 2:** Create tables in Supabase Dashboard:

```sql
-- Attractions table
CREATE TABLE attractions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  price TEXT,
  rating DECIMAL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Hotels table
CREATE TABLE hotels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT,
  price_per_night DECIMAL,
  rating DECIMAL,
  amenities TEXT[],
  image_url TEXT
);

-- User itineraries
CREATE TABLE itineraries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  day INTEGER,
  title TEXT,
  location TEXT,
  time TEXT,
  cost TEXT,
  notes TEXT
);
```

**Step 3:** Query from React:

```typescript
import { supabase } from '../lib/supabase';

export const attractionsAPI = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('attractions')
      .select('*')
      .order('rating', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  getByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('attractions')
      .select('*')
      .eq('category', category);
    
    return data || [];
  }
};
```

---

## Authentication API

### Using Supabase Auth

```typescript
// src/app/context/AuthContext.tsx
import { supabase } from '../lib/supabase';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  // Sign up
  const signup = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (!error) setUser(data.user);
    return !error;
  };

  // Login
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (!error) setUser(data.user);
    return !error;
  };

  // Logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### Using Firebase Auth

```typescript
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
import { auth } from '../lib/firebase';

const signup = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

const logout = async () => {
  await signOut(auth);
};
```

---

## Third-Party Services

### Google Maps Integration

```bash
npm install @googlemaps/react-wrapper
```

```typescript
import { Wrapper } from "@googlemaps/react-wrapper";

function MapComponent() {
  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map center={{ lat: -1.9403, lng: 29.8739 }} zoom={8} />
    </Wrapper>
  );
}
```

### Unsplash Images API

```typescript
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

async function searchImages(query: string) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data.results;
}
```

---

## Sample Data Structure

### Attractions JSON
```json
{
  "id": "vol-001",
  "name": "Volcanoes National Park",
  "category": "Parks",
  "description": "Home to endangered mountain gorillas",
  "location": {
    "lat": -1.4656,
    "lng": 29.5756,
    "address": "Musanze, Northern Province"
  },
  "price": {
    "currency": "USD",
    "amount": 1500,
    "period": "per permit"
  },
  "rating": 4.9,
  "images": [
    "/images/volcanoes-1.jpg",
    "/images/volcanoes-2.jpg"
  ],
  "activities": [
    "Gorilla Trekking",
    "Golden Monkey Tracking",
    "Volcano Hiking"
  ],
  "bestTime": "June to September",
  "duration": "1-2 days"
}
```

---

## API Testing

### Using Postman
1. Download Postman: https://www.postman.com/
2. Create collection for your API endpoints
3. Test each endpoint before integrating

### Using Thunder Client (VS Code Extension)
1. Install Thunder Client extension
2. Create requests inline in VS Code
3. Save requests for future use

---

## Error Handling Best Practices

```typescript
async function fetchData() {
  try {
    const response = await fetch('YOUR_API_URL');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    // Return fallback data or show error to user
    return null;
  }
}
```

---

## Performance Optimization

### Caching with React Query

```bash
npm install @tanstack/react-query
```

```typescript
import { useQuery } from '@tanstack/react-query';

function useAttractions() {
  return useQuery({
    queryKey: ['attractions'],
    queryFn: () => attractionsAPI.getAll(),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}
```

---

## Security Best Practices

1. **Never expose API keys in client code**
   - Use environment variables
   - Set up backend proxy for sensitive APIs

2. **Validate user input**
   ```typescript
   if (!email || !email.includes('@')) {
     throw new Error('Invalid email');
   }
   ```

3. **Use HTTPS in production**

4. **Implement rate limiting**

5. **Sanitize database queries**

---

## Deployment Checklist

- [ ] All API keys in environment variables
- [ ] CORS configured for production domain
- [ ] Database security rules enabled
- [ ] Authentication flows tested
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] API rate limits considered

---

## Free API Resources

| Service | Purpose | Free Tier | Link |
|---------|---------|-----------|------|
| Supabase | Database + Auth | 500MB, 50K users | https://supabase.com |
| Firebase | Backend services | Generous free tier | https://firebase.google.com |
| OpenWeatherMap | Weather data | 1000 calls/day | https://openweathermap.org |
| ExchangeRate-API | Currency rates | 1500 requests/month | https://exchangerate-api.com |
| Unsplash | Stock photos | 50 requests/hour | https://unsplash.com/developers |
| Mapbox | Maps | 50K requests/month | https://mapbox.com |

---

**Happy Coding! 🚀**

For questions, refer to each service's official documentation.

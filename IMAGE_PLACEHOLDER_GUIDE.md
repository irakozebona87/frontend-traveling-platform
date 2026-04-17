# 📸 Image Placeholder Guide for SURA RWANDA

Complete guide for adding your own images to the platform.

## 📁 Directory Structure

Create this folder structure in your `/public` directory:

```
public/
├── images/
│   ├── hero/                  # Homepage slideshow images
│   │   ├── hero-1.jpg        # Rwanda landscape
│   │   ├── hero-2.jpg        # Mountain gorillas
│   │   ├── hero-3.jpg        # Lake Kivu
│   │   └── hero-4.jpg        # Kigali city
│   │
│   ├── attractions/           # Tourist destinations
│   │   ├── parks/
│   │   │   ├── volcanoes-park.jpg
│   │   │   ├── akagera-park.jpg
│   │   │   ├── nyungwe-forest.jpg
│   │   │   └── gishwati-park.jpg
│   │   ├── lakes/
│   │   │   ├── lake-kivu.jpg
│   │   │   ├── lake-muhazi.jpg
│   │   │   └── lake-burera.jpg
│   │   ├── cities/
│   │   │   ├── kigali.jpg
│   │   │   ├── gisenyi.jpg
│   │   │   └── huye.jpg
│   │   ├── mountains/
│   │   │   ├── mount-karisimbi.jpg
│   │   │   └── mount-bisoke.jpg
│   │   └── culture/
│   │       ├── genocide-memorial.jpg
│   │       ├── kings-palace.jpg
│   │       ├── cultural-village.jpg
│   │       └── musanze-caves.jpg
│   │
│   ├── food/                  # Traditional Rwandan cuisine
│   │   ├── ugali.jpg
│   │   ├── isombe.jpg
│   │   ├── ibihaza.jpg
│   │   ├── brochettes.jpg
│   │   ├── sambaza.jpg
│   │   ├── matoke.jpg
│   │   ├── mizuzu.jpg
│   │   ├── akabenz.jpg
│   │   ├── urwagwa.jpg
│   │   └── fresh-fruits.jpg
│   │
│   ├── hotels/                # Accommodation
│   │   ├── luxury/
│   │   │   ├── bisate-lodge.jpg
│   │   │   └── nyungwe-house.jpg
│   │   ├── mid-range/
│   │   │   ├── kigali-marriott.jpg
│   │   │   └── serena-hotel.jpg
│   │   └── budget/
│   │       └── guesthouse.jpg
│   │
│   └── misc/                  # Other images
│       ├── logo.png
│       ├── gorilla-icon.png
│       └── placeholder.jpg
```

## 🖼️ Image Requirements by Section

### 1. Hero Section (Homepage Slideshow)
**Quantity:** 4 images
**Dimensions:** 1920x1080 pixels (16:9 ratio)
**File Size:** < 500KB each (optimize for web)
**Subject Matter:**
- Image 1: Panoramic Rwanda landscape with mountains
- Image 2: Mountain gorillas in natural habitat
- Image 3: Lake Kivu sunset/beach scene
- Image 4: Modern Kigali cityscape

**Current Placeholders in Code:**
```typescript
// File: /src/app/pages/Home.tsx
const heroImages = [
  { url: '/images/hero/hero-1.jpg', title: 'Discover the Land...' },
  { url: '/images/hero/hero-2.jpg', title: 'Meet Majestic Gorillas...' },
  { url: '/images/hero/hero-3.jpg', title: 'Relax at Lake Kivu...' },
  { url: '/images/hero/hero-4.jpg', title: 'Explore Kigali...' },
];
```

---

### 2. Places/Attractions Page
**Quantity:** 20+ images
**Dimensions:** 800x600 pixels minimum (4:3 ratio)
**File Size:** < 300KB each

#### National Parks (4 images)
- **volcanoes-park.jpg** - Misty volcanic mountains, bamboo forests
- **akagera-park.jpg** - Safari wildlife (elephants, lions, zebras)
- **nyungwe-forest.jpg** - Canopy walkway or dense rainforest
- **gishwati-park.jpg** - Montane forest landscape

#### Lakes (3 images)
- **lake-kivu.jpg** - Beach scene with blue water
- **lake-muhazi.jpg** - Winding lake with greenery
- **lake-burera.jpg** - Twin lakes with mountain backdrop

#### Cities (3 images)
- **kigali.jpg** - Clean city streets, modern buildings
- **gisenyi.jpg** - Lake Kivu waterfront town
- **huye.jpg** - University town or museum exterior

#### Mountains (2 images)
- **mount-karisimbi.jpg** - High-altitude volcanic peak
- **mount-bisoke.jpg** - Crater lake view

#### Cultural Sites (4 images)
- **genocide-memorial.jpg** - Memorial gardens (respectful)
- **kings-palace.jpg** - Traditional thatched dome structure
- **cultural-village.jpg** - Traditional dancers or crafts
- **musanze-caves.jpg** - Cave entrance or interior

**How to Add:**
```typescript
// File: /src/app/pages/Places.tsx
// Update the image paths in the attractions array:
{
  name: 'Volcanoes National Park',
  image: '/images/attractions/parks/volcanoes-park.jpg',
  // ... other properties
}
```

---

### 3. Food Guide Page
**Quantity:** 10+ images
**Dimensions:** 600x600 pixels (square, 1:1 ratio)
**File Size:** < 200KB each

**Traditional Dishes to Photograph:**
1. **Ugali** - White cornmeal porridge on plate
2. **Isombe** - Green cassava leaves with peanut sauce
3. **Ibihaza** - Pumpkin/squash dish
4. **Brochettes** - Grilled meat skewers
5. **Sambaza** - Fried small fish from Lake Kivu
6. **Matoke** - Cooked plantains
7. **Mizuzu** - Fried plantains
8. **Akabenz** - Grilled pork
9. **Urwagwa** - Traditional banana beer
10. **Fresh Fruits** - Tropical fruit platter

**Where to Update:**
```typescript
// File: /src/app/pages/FoodGuide.tsx
const foods = [
  {
    name: 'Ugali',
    image: '/images/food/ugali.jpg',
    // ... other properties
  }
];
```

---

### 4. Hotels/Accommodation
**Quantity:** 5+ images
**Dimensions:** 1200x800 pixels (3:2 ratio)
**File Size:** < 400KB each

**Luxury Hotels:**
- **bisate-lodge.jpg** - Eco-lodge with volcano views
- **nyungwe-house.jpg** - Resort in tea plantations

**Mid-Range:**
- **kigali-marriott.jpg** - Modern hotel exterior/lobby
- **serena-hotel.jpg** - Lake Kivu beachfront property

**Budget:**
- **guesthouse.jpg** - Simple, clean accommodation

---

## 🎨 Image Optimization Tips

### Before Uploading:
1. **Resize images** to exact dimensions needed
   - Use tools: Photoshop, GIMP, or online tools like TinyPNG

2. **Compress images** without losing quality
   - Recommended: https://tinypng.com
   - Aim for < 500KB for large images, < 200KB for thumbnails

3. **Choose the right format:**
   - JPG for photos (better compression)
   - PNG for logos/graphics with transparency
   - WebP for modern browsers (best compression)

4. **Consistent naming convention:**
   - Use lowercase
   - Separate words with hyphens
   - Example: `lake-kivu-sunset.jpg`

---

## 🔍 Where to Find Rwanda Images

### Free Stock Photo Sites:
1. **Unsplash** - https://unsplash.com/s/photos/rwanda
2. **Pexels** - https://pexels.com/search/rwanda
3. **Pixabay** - https://pixabay.com/images/search/rwanda
4. **Wikimedia Commons** - Creative Commons licensed images

### Rwanda Tourism Board:
- **Official Website:** https://www.visitrwanda.com
- Request permission for official tourism photos

### Your Own Photos:
- If you've visited Rwanda, use your own photos!
- Ensure you have rights to use any images

---

## 📝 Image Attribution

If using Creative Commons or stock photos, add attribution:

```typescript
// Create a file: /src/app/data/imageCredits.ts
export const imageCredits = {
  'volcanoes-park.jpg': 'Photo by John Doe on Unsplash',
  'lake-kivu.jpg': 'Photo by Jane Smith on Pexels',
  // ... more attributions
};
```

Display in footer or credits page.

---

## 🚀 Quick Setup Steps

1. **Create the directories:**
```bash
mkdir -p public/images/{hero,attractions/{parks,lakes,cities,mountains,culture},food,hotels/{luxury,mid-range,budget},misc}
```

2. **Download placeholder image:**
```bash
# Use a gray placeholder for missing images
# You can generate at: https://placehold.co/800x600/png
```

3. **Add a fallback image component:**
```typescript
// Already implemented in ImageWithFallback component
<ImageWithFallback
  src="/images/attractions/parks/volcanoes-park.jpg"
  alt="Volcanoes National Park"
  fallback="/images/misc/placeholder.jpg"
/>
```

---

## 🎯 Priority Images (Start With These)

If you're short on time, start with these essential images:

### Must-Have (10 images):
1. Hero slideshow (4 images)
2. Volcanoes National Park (1 image)
3. Lake Kivu (1 image)
4. Kigali city (1 image)
5. Ugali food (1 image)
6. Brochettes (1 image)
7. One luxury hotel (1 image)

### Nice-to-Have (20 more images):
- Complete all national parks
- All traditional foods
- Cultural sites
- More hotels

---

## 💡 Pro Tips

1. **Maintain aspect ratios:**
   - Hero: 16:9 (landscape)
   - Attractions: 4:3 (landscape)
   - Food: 1:1 (square)
   - Hotels: 3:2 (landscape)

2. **Use consistent lighting:**
   - Bright, natural light
   - Avoid overly dark or washed-out images

3. **Show context:**
   - For attractions: Include landscape/environment
   - For food: Nice plating, colorful presentation
   - For hotels: Show amenities, not just exterior

4. **Test on mobile:**
   - Images should look good on small screens
   - Text overlays should remain readable

---

## 📊 Image Checklist

Use this checklist to track your progress:

### Hero Section
- [ ] Hero image 1 (Rwanda landscape)
- [ ] Hero image 2 (Mountain gorillas)
- [ ] Hero image 3 (Lake Kivu)
- [ ] Hero image 4 (Kigali city)

### National Parks
- [ ] Volcanoes National Park
- [ ] Akagera National Park
- [ ] Nyungwe Forest
- [ ] Gishwati-Mukura Park

### Lakes
- [ ] Lake Kivu
- [ ] Lake Muhazi
- [ ] Lake Burera/Ruhondo

### Cities
- [ ] Kigali
- [ ] Gisenyi
- [ ] Huye

### Food (10 dishes)
- [ ] Ugali
- [ ] Isombe
- [ ] Ibihaza
- [ ] Brochettes
- [ ] Sambaza
- [ ] Matoke
- [ ] Mizuzu
- [ ] Akabenz
- [ ] Urwagwa
- [ ] Fresh fruits

### Hotels
- [ ] Bisate Lodge
- [ ] One&Only Nyungwe House
- [ ] Kigali Marriott
- [ ] Lake Kivu Serena
- [ ] Budget guesthouse

---

## 🛠️ Tools & Resources

### Image Editing:
- **Online:** Canva, Photopea (free Photoshop alternative)
- **Desktop:** GIMP (free), Adobe Photoshop

### Compression:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim (Mac): https://imageoptim.com

### Bulk Rename:
- **Windows:** Bulk Rename Utility
- **Mac:** Automator or Name Changer
- **Online:** https://bulkrenameutility.co.uk

---

**Good luck with your image collection! 🎨📸**

Remember: High-quality, relevant images will make your platform stand out in the competition!

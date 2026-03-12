# CMS Structure Documentation

## Overview
All website content is now stored in MongoDB collections and manageable through the Admin CMS. No more hardcoded content in frontend components!

## Database Collections Created

### 1. **hero** - Hero Section
**API Endpoints:**
- GET `/api/cms/hero` - Fetch hero content
- PUT `/api/cms/hero` - Update hero content (Admin only)

**Schema:**
```json
{
  "title": "Building Dreams, Creating Futures",
  "subtitle": "Aikya Builds Future",
  "tagline": "Excellence in Real Estate & Construction",
  "buttonText": "Explore Projects",
  "buttonLink": "/projects"
}
```

---

### 2. **about** - About Section
**API Endpoints:**
- GET `/api/cms/about`
- PUT `/api/cms/about`

**Schema:**
```json
{
  "heading": "About Aikya Builds Future",
  "content": "Aikya Builders Pvt. Ltd. is a trusted real estate..."
}
```

---

### 3. **whychoose** - Why Choose Section
**API Endpoints:**
- GET `/api/cms/why-choose`
- PUT `/api/cms/why-choose`

**Schema:**
```json
{
  "heading": "Why Choose Aikya Builders?",
  "reasons": [
    {
      "icon": "Award",
      "title": "Quality Assurance",
      "description": "Every project adheres to the highest standards..."
    }
  ]
}
```

---

### 4. **contact** - Contact Information
**API Endpoints:**
- GET `/api/cms/contact`
- PUT `/api/cms/contact`

**Schema:**
```json
{
  "heading": "Get In Touch",
  "description": "Have questions or need guidance?",
  "email": "enquiry@aikyabuilders.com",
  "phone": "+91 9042 666 555",
  "address": "No.247/B, Velachery Main Road..."
}
```

---

### 5. **leadership** - Leadership Team
**API Endpoints:**
- GET `/api/cms/leadership`
- PUT `/api/cms/leadership`

**Schema:**
```json
{
  "heading": "Meet Our Leadership",
  "leaders": [
    {
      "name": "Rajesh Kumar",
      "role": "Chairman & Managing Director",
      "bio": "Visionary leader with over 30 years...",
      "image": "https://..."
    }
  ]
}
```

---

### 6. **testimonials** - Customer Testimonials
**API Endpoints:**
- GET `/api/cms/testimonials`
- PUT `/api/cms/testimonials`

**Schema:**
```json
{
  "heading": "What Our Clients Say",
  "testimonials": [
    {
      "name": "Ramesh Iyer",
      "role": "Homeowner",
      "company": "Aikya Eden Park Resident",
      "content": "The quality of construction...",
      "image": "https://...",
      "rating": 5
    }
  ]
}
```

---

### 7. **specialoffers** - Special Offers/Featured Projects
**API Endpoints:**
- GET `/api/cms/special-offers`
- PUT `/api/cms/special-offers`

**Schema:**
```json
{
  "heading": "Special Offers",
  "subheading": "Limited Time Opportunities",
  "offers": [
    {
      "title": "Aikya Eden Park",
      "description": "Premium 2 & 3 BHK apartments...",
      "price": "Starting ₹45 Lakhs",
      "discount": "Early Bird Discount Available",
      "features": ["2 & 3 BHK", "286 Units", "..."],
      "image": "https://...",
      "location": "Guduvanchery, Chennai",
      "status": "Available",
      "contactPhone": "+91 9042 666 555",
      "contactEmail": "enquiry@aikyabuilders.com",
      "validTill": "2026-12-31"
    }
  ]
}
```

---

### 8. **services** - Services Offered
**API Endpoints:**
- GET `/api/cms/services`
- PUT `/api/cms/services`

**Schema:**
```json
{
  "heading": "Our Services",
  "description": "Comprehensive infrastructure...",
  "services": [
    {
      "title": "Highway Construction",
      "description": "We specialize in designing...",
      "features": ["Advanced engineering", "..."],
      "icon": "Truck",
      "image": "https://...",
      "category": "Infrastructure"
    }
  ]
}
```

---

### 9. **news** - News Articles
**API Endpoints:**
- GET `/api/cms/news`
- PUT `/api/cms/news`

**Schema:**
```json
{
  "heading": "Latest News",
  "description": "Stay updated with our latest...",
  "articles": [
    {
      "title": "Aikya Eden Park Launched",
      "excerpt": "New premium residential project...",
      "content": "Full article content...",
      "image": "https://...",
      "author": "Aikya Team",
      "publishedDate": "2026-02-15",
      "category": "Project Launch",
      "tags": ["residential", "new launch", "chennai"]
    }
  ]
}
```

---

### 10. **csr** - Corporate Social Responsibility
**API Endpoints:**
- GET `/api/cms/csr`
- PUT `/api/cms/csr`

**Schema:**
```json
{
  "heading": "Corporate Social Responsibility",
  "description": "Building communities...",
  "whyWeCare": {
    "heading": "Why We Care",
    "content": "At Aikya Builders, we believe..."
  },
  "initiatives": [
    {
      "title": "Education for All",
      "description": "Supporting underprivileged...",
      "image": "https://...",
      "category": "Education",
      "impact": "500+ students supported"
    }
  ]
}
```

---

### 11. **events** - Upcoming Events
**API Endpoints:**
- GET `/api/cms/events`
- PUT `/api/cms/events`

**Schema:**
```json
{
  "heading": "Upcoming Events",
  "description": "Join us at our upcoming...",
  "events": [
    {
      "title": "Aikya Eden Park Open House",
      "description": "Visit our sample flats...",
      "image": "https://...",
      "date": "2026-03-15",
      "location": "Guduvanchery, Chennai",
      "category": "Property Showcase",
      "registrationLink": "/contact"
    }
  ]
}
```

---

### 12. **careers** - Job Openings
**API Endpoints:**
- GET `/api/cms/careers`
- PUT `/api/cms/careers`

**Schema:**
```json
{
  "heading": "Join Our Team",
  "description": "Be part of a team that builds...",
  "whyJoinUs": {
    "heading": "Why Work With Us?",
    "points": ["Competitive compensation", "..."]
  },
  "openings": [
    {
      "title": "Civil Engineer",
      "department": "Engineering",
      "location": "Chennai",
      "type": "Full-time",
      "experience": "3-5 years",
      "description": "Looking for experienced...",
      "requirements": ["B.E/B.Tech", "..."],
      "responsibilities": ["Oversee construction", "..."],
      "applyLink": "/contact"
    }
  ]
}
```

---

### 13. **groupcompany** - Group of Companies
**API Endpoints:**
- GET `/api/cms/group-company`
- PUT `/api/cms/group-company`

**Schema:**
```json
{
  "heading": "Our Extended Vision",
  "description": "Explore our child companies...",
  "companies": [
    {
      "name": "Aikya Builders & Promoters",
      "fullName": "Aikya Builders & Promoters Pvt. Ltd.",
      "description": ["Established in 2006...", "..."],
      "logo": "",
      "images": ["https://...", "..."],
      "establishedYear": 2006,
      "category": "Real Estate"
    }
  ],
  "partnershipInfo": {
    "heading": "Why Partner With Aikya?",
    "description": ["With years of proven expertise...", "..."]
  }
}
```

---

### 14. **partnership** - Partnership Opportunities
**API Endpoints:**
- GET `/api/cms/partnership`
- PUT `/api/cms/partnership`

**Schema:**
```json
{
  "heading": "Partner With Us",
  "description": "Join hands with Aikya Builders...",
  "whyPartner": {
    "heading": "Why Partner With Us?",
    "reasons": ["Proven track record", "..."]
  },
  "categories": [
    {
      "title": "Channel Partners",
      "description": "Join as a channel partner...",
      "benefits": ["Attractive commission", "..."],
      "image": "https://...",
      "icon": "Handshake"
    }
  ]
}
```

---

### 15. **footer** - Footer Content
**API Endpoints:**
- GET `/api/cms/footer`
- PUT `/api/cms/footer`

**Schema:**
```json
{
  "companyName": "Aikya Builders and Promoters",
  "tagline": "Building Future",
  "address": "No.247/B, Velachery Main Road...",
  "phone": ["+91 9042 666 555", "+91 44 6009 6009"],
  "email": "enquiry@aikyabuilders.com",
  "socialMedia": [
    {
      "platform": "Instagram",
      "url": "#",
      "icon": "Instagram"
    }
  ],
  "links": {
    "company": [{"label": "Home", "href": "/"}],
    "resources": [{"label": "News", "href": "/news"}]
  },
  "copyright": "© Aikya Builders and Promoters...",
  "developedBy": "Knowbin Technologies"
}
```

---

## How to Update Frontend Components

### Example 1: Updating Hero Section Component

**Before (Hardcoded):**
```typescript
const HeroSection = () => {
  const title = "Building Dreams, Creating Futures";
  const subtitle = "Aikya Builds Future";
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
```

**After (CMS-Driven):**
```typescript
import { useState, useEffect } from 'react';
import { api } from '@/services/api';

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await api.get('/cms/hero');
        if (response.data.success) {
          setHeroData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHeroData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (!heroData) return null;
  
  return (
    <div>
      <h1>{heroData.title}</h1>
      <p>{heroData.subtitle}</p>
      <p className="tagline">{heroData.tagline}</p>
      <button onClick={() => navigate(heroData.buttonLink)}>
        {heroData.buttonText}
      </button>
    </div>
  );
};
```

---

### Example 2: Updating Special Offers Component

**Before (Hardcoded):**
```typescript
const SpecialOffersSection = () => {
  const offer = {
    title: "Aikya Eden Park",
    price: "Starting ₹45 Lakhs",
    features: ["2 & 3 BHK", "286 Units"]
  };
  
  return <div>...</div>;
};
```

**After (CMS-Driven):**
```typescript
import { useState, useEffect } from 'react';
import { api } from '@/services/api';

const SpecialOffersSection = () => {
  const [offersData, setOffersData] = useState(null);
  
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await api.get('/cms/special-offers');
        if (response.data.success) {
          setOffersData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };
    
    fetchOffers();
  }, []);
  
  if (!offersData || !offersData.offers.length) return null;
  
  return (
    <div>
      <h2>{offersData.heading}</h2>
      <p>{offersData.subheading}</p>
      {offersData.offers.map((offer, index) => (
        <div key={index}>
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <p className="price">{offer.price}</p>
          <ul>
            {offer.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```

---

## Admin CMS Usage

### Accessing the CMS
1. Navigate to `/admin-cms`
2. Login with admin credentials
3. You'll see tabs for each content section

### Updating Content
1. Select the section you want to edit (Hero, About, Services, etc.)
2. Modify the content in the form fields
3. Click "Save Changes"
4. The frontend will automatically reflect the updates

### Best Practices
- Always preview changes before saving
- Use high-quality images (recommended: 1920x1080 for banners)
- Keep content concise and user-friendly
- Regularly backup your database

---

## Running the Seed Script

To populate all collections with initial Aikya Builders content:

```bash
cd backend
node scripts/seedAllContent.js
```

This will:
- Clear existing content from all collections
- Insert fresh content for all sections
- Log success/error messages

---

## API Authentication

### Public Endpoints (GET)
- All GET endpoints are publicly accessible
- No authentication required to fetch content

### Admin Endpoints (PUT)
- All PUT endpoints require admin authentication
- Include JWT token in Authorization header:
```javascript
headers: {
  'Authorization': `Bearer ${token}`
}
```

---

## Next Steps

1. ✅ Database models created
2. ✅ API routes configured
3. ✅ All content seeded
4. ⏳ Update frontend components to use API
5. ⏳ Enhance Admin CMS interface with all sections
6. ⏳ Add image upload functionality
7. ⏳ Add content preview before saving

---

## Database Connection

The system connects to MongoDB Atlas using the credentials in `.env`:

```
MONGODB_URI=mongodb+srv://Aikya2026:Aikya2026@cluster0.0g0in.mongodb.net/AikyaBuilders?retryWrites=true&w=majority
```

All collections are stored in the `AikyaBuilders` database.

---

## Support

For any issues or questions:
- Email: enquiry@aikyabuilders.com
- Phone: +91 9042 666 555

---

**Last Updated:** February 27, 2026
**Version:** 1.0.0

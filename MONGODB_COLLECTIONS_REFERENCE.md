# MongoDB Collection Names - Admin Panel Reference

## Overview
All MongoDB collection names now match the Admin panel section names for easy identification and consistency.

## Collection Mapping

| Admin Panel Section | MongoDB Collection | Document Count | Status |
|---------------------|-------------------|----------------|--------|
| **Projects Manager** | `projects` | 9 | ✅ Active |
| **Testimonials** | `testimonials` | 4 | ✅ Active |
| **Special Offers** | `specialoffers` | 4 | ✅ Active |
| **Leadership** | `leadership` | 2 | ✅ Active |
| **Why Choose Us** | `whychoose` | 6 | ✅ Active |
| **Location Cards** | `locationcards` | 3 | ✅ Active |
| **Footer** | `footer` | 1 | ✅ Active |
| **Services Manager** | `services` | 4 | ✅ Active |
| **CSR Manager** | `csr` | 5 | ✅ Active |
| **Events Manager** | `events` | 4 | ✅ Active |
| **Careers Manager** | `careers` | 4 | ✅ Active |
| **News Manager** | `news` | 6 | ✅ Active |

**Total Items:** 52 documents across 12 collections

## Technical Details

### Collection Name Format
- Simple, lowercase names
- No "items", "articles", or other suffixes
- Matches what users see in the Admin panel
- Easy to identify and query

### Previous Collection Names (Deprecated)
The following old collection names have been migrated:
- `projectitems` → `projects`
- `testimonialitems` → `testimonials`
- `specialofferitems` → `specialoffers`
- `leadershipitems` → `leadership`
- `whychooseitems` → `whychoose`
- `locationcarditems` → `locationcards`
- `footeritems` → `footer`
- `newsarticles` → `news`
- `serviceitems` → `services`
- `csritems` → `csr`
- `eventitems` → `events`
- `careeritems` → `careers`

## Model Definitions

All models are defined in `backend/models/CMSItems.js`:

```javascript
const ProjectItem = mongoose.model('ProjectItem', projectItemSchema, 'projects');
const TestimonialItem = mongoose.model('TestimonialItem', testimonialItemSchema, 'testimonials');
const SpecialOfferItem = mongoose.model('SpecialOfferItem', specialOfferItemSchema, 'specialoffers');
const LeadershipItem = mongoose.model('LeadershipItem', leadershipItemSchema, 'leadership');
const WhyChooseItem = mongoose.model('WhyChooseItem', whyChooseItemSchema, 'whychoose');
const LocationCardItem = mongoose.model('LocationCardItem', locationCardItemSchema, 'locationcards');
const FooterItem = mongoose.model('FooterItem', footerItemSchema, 'footer');
const NewsArticle = mongoose.model('NewsArticle', newsArticleSchema, 'news');
const ServiceItem = mongoose.model('ServiceItem', serviceItemSchema, 'services');
const CSRItem = mongoose.model('CSRItem', csrItemSchema, 'csr');
const EventItem = mongoose.model('EventItem', eventItemSchema, 'events');
const CareerItem = mongoose.model('CareerItem', careerItemSchema, 'careers');
```

## API Endpoints

All sections follow the pattern: `/api/cms-items/{section}/{endpoint}`

### Examples:
- **Projects:** `GET /api/cms-items/projects/items`
- **Services:** `GET /api/cms-items/services/items`
- **CSR:** `GET /api/cms-items/csr/initiatives`
- **News:** `GET /api/cms-items/news/articles`
- **Careers:** `GET /api/cms-items/careers/positions`
- **Events:** `GET /api/cms-items/events/items`

## Benefits of This Structure

1. **Intuitive:** Collection names match what admins see in the UI
2. **Simple:** No confusing suffixes or prefixes
3. **Consistent:** All collections follow the same naming pattern
4. **Maintainable:** Easy to understand and work with
5. **Scalable:** Clear structure for adding new sections

## Migration Scripts

The following scripts were used for the migration:

### `fixCollectionNames.js`
Renames all collections to match the new naming convention:
```bash
node scripts/fixCollectionNames.js
```

### `populateServicesCSREventsCareers.js`
Populates Services, CSR, Events, and Careers with sample data:
```bash
node scripts/populateServicesCSREventsCareers.js
```

### `populateNewsArticles.js`
Populates News section with sample articles:
```bash
node scripts/populateNewsArticles.js
```

## Database Connection

**Database:** MongoDB Atlas  
**Database Name:** AikyaBuilders  
**Connection:** Server connects automatically on startup

## Verification

To verify all collections and their document counts:

```bash
# Start the backend server
cd backend
node server.js

# In another terminal, run verification
curl http://localhost:5000/api/cms-items/projects/items
curl http://localhost:5000/api/cms-items/testimonials/items
curl http://localhost:5000/api/cms-items/specialoffers/items
# ... and so on for all sections
```

Or use the PowerShell verification script for all sections at once.

## Last Updated
March 3, 2026

---

**Status:** ✅ All collections successfully renamed and verified

# Complete CMS Content Guide

## ✅ What's in Your Admin CMS

Your website now has **34 individual items + 3 sections** fully manageable through the Admin CMS, all stored in MongoDB and persisting across server restarts.

### 📱 **Hero Section** (Editable via CMS)
- **Title**: "Building Dreams, Creating Futures"
- **Subtitle**: "Aikya Builds Future"
- **Tagline**: Custom tagline
- **Button**: Text and link customizable

**How to Edit:**
1. Login to Admin CMS: http://localhost:5173/admin
2. Wait for expansion of "Content Management" section
3. Click "Hero Section"
4. Edit fields and click "Update Hero Section"

**⚠️ Still Hardcoded** (in frontend code):
- Stats: "100+ Projects", "20+ Years"
- Social media icons (Instagram, Facebook, LinkedIn, Twitter, YouTube)

---

### 📖 **About Section** (Editable via CMS)
- **Heading**: "About Aikya Builds Future"
- **Content**: Full paragraph describing the company

**How to Edit:**
1. Admin CMS → Content Management → About Section
2. Edit heading and content
3. Click "Update About Section"

**⚠️ Still Hardcoded**:
- Stats: "100+ Projects Delivered", "95% Success Rate", "20+ Years Experience", "50+ Active Partners"

---

### 🏢 **Projects** (9 items - Fully Manageable)
Current projects in database:
1. Aikya Eden Park
2. Aikya Green Terrace
3. Aikya Grand Avenue
4. Aikya Silver Nest
5. Aikya Horizon Towers
6. Aikya Paradise Villa
7. Aikya Blue Wave Residency
8. Aikya Royal Heights
9. Aikya Pine Woods

**How to Manage:**
1. Admin CMS → Projects Manager
2. **Create**: Click "Create New" button
3. **Edit**: Click pencil icon next to project
4. **Delete**: Click trash icon

**Fields you can edit:**
- Name, Location, Category, Type, Status
- Description, Amenities, Image URL

---

### 📍 **Location Cards** (3 items - Fully Manageable)
1. CHENNAI - 45+ Projects
2. TIRUNELVELI - 20+ Projects
3. CHENGALPATTU - 15+ Projects

**How to Manage:**
1. Admin CMS → Location Cards
2. Add/Edit/Delete location cards
3. Edit name, description, project count, image

---

### 🎁 **Special Offers** (4 items - Fully Manageable)
All current offers are active and editable.

**How to Manage:**
1. Admin CMS → Special Offers
2. Create new offers, edit existing ones
3. Set status (active/expired), pricing, features

**Fields:**
- Title, Price, Discount %, Features list
- Location, Status, Validity dates

---

### 💬 **Testimonials** (4 items - Fully Manageable)
Current average rating: 5.0/5

**How to Manage:**
1. Admin CMS → Testimonials
2. Add customer testimonials
3. Edit name, role, company, content, rating (1-5)

---

### 👔 **Leadership** (2 items - Fully Manageable)
1. B. Gopalakrishnan - Managing Director
2. M B FURHAN SIDDIQ - Director

**How to Manage:**
1. Admin CMS → Leadership
2. Add/Edit/Delete team members
3. Set name, title, bio, image URL, display order

**⚠️ Still Hardcoded**:
- Achievement stats below leadership section

---

### ⭐ **Why Choose Us** (6 items - Fully Manageable)
1. Rapid Delivery
2. Proven Track Record
3. Customer-Centric Approach
4. Quality Assurance
5. Innovative Designs
6. Premium Locations

**How to Manage:**
1. Admin CMS → Why Choose Us
2. Add/Edit/Delete reasons
3. Set title, description, icon name, order

---

### 🔗 **Footer** (Editable via CMS)

**Main Footer Info** (Section-level editing):
- Company Name: "Aikya Builders and Promoters"
- Tagline: "Building Future"
- Address: Full company address
- Phone Numbers: 2 numbers
- Email: enquiry@aikyabuilders.com
- Social Media: 5 platforms (Instagram, Facebook, LinkedIn, Twitter, YouTube)
- Quick Links: Company links + Resource links

**How to Edit Footer:**
Currently managed through old CMS model at `/api/cms/footer`
To update, you can edit directly in Admin CMS → Footer section

**Footer Items** (6 individual items - newer structure):
- 1 phone item
- 1 email item
- 3 social media items

**How to Manage Footer Items:**
1. Admin CMS → Footer (management section)
2. Shows item-level management
3. Add/Edit/Delete individual footer items

---

## 🎯 How to Access & Use Admin CMS

### 1. **Start Your Servers**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 2. **Login to Admin**
- URL: http://localhost:5173/admin
- Use your admin credentials
- You must be an admin user to access CMS

### 3. **Navigate Sections**
Left sidebar shows all manageable sections:
- Dashboard (overview)
- Content Management (Hero, About, etc.)
- News Manager
- Projects Manager
- Services Manager
- CSR Manager
- Events Manager
- Careers Manager
- Testimonials
- Special Offers
- Leadership
- Why Choose Us
- Location Cards
- Footer

### 4. **Edit Content**
- Click any section
- Use filters/search if available
- Click "Create New"/"Edit"/"Delete" buttons
- Fill in forms
- Click "Save" or "Update"

### 5. **Verify Changes**
- Visit http://localhost:5173 (homepage)
- Check if your changes appear
- Changes persist across server restarts!

---

## 📊 Content Summary

### ✅ **Fully Editable Content**
| Section | Items | Database Collection |
|---------|-------|---------------------|
| Projects | 9 | `projectitems` |
| Testimonials | 4 | `testimonialitems` |
| Special Offers | 4 | `specialofferitems` |
| Leadership | 2 | `leadershipitems` |
| Why Choose Us | 6 | `whychooseitems` |
| Location Cards | 3 | `locationcarditems` |
| Footer Items | 6 | `footeritems` |
| Hero Section | 1 | `hero` |
| About Section | 1 | `about` |
| Footer Section | 1 | `footer` |

**Total: 37 editable entries**

### ⚠️ **Still Hardcoded** (Cannot edit via CMS yet)
1. **Hero Stats**:
   - "100+ Projects Completed"
   - "20+ Years of experience"
   - File: `frontend/src/components/HeroSection.tsx` (line 7-10)

2. **Hero Social Icons**:
   - Instagram, Facebook, LinkedIn, Twitter, YouTube links
   - File: `frontend/src/components/HeroSection.tsx` (line 12-18)

3. **About Stats**:
   - "100+ Projects Delivered"
   - "95% Success Rate"
   - "20+ Years Experience"
   - "50+ Active Partners"
   - File: `frontend/src/components/AboutSection.tsx` (line 7-12)

4. **Leadership Achievements**:
   - "20+ Years in Real Estate"
   - "100+ Projects Delivered"
   - "95% Client Success Rate"
   - "50+ Strategic Partnerships"
   - File: `frontend/src/components/LeadershipSection.tsx` (line 6-11)

5. **Contact Form**:
   - Static form (doesn't need CMS management)
   - File: `frontend/src/components/ContactSection.tsx`

---

## 🔧 To Make Hardcoded Content Editable

If you want stats and social links to also be editable via CMS:

### Option 1: Add to Existing Models
1. Update Hero/About/Leadership schemas in `backend/models/Content.js`
2. Add `stats: []` and `socialLinks: []` fields
3. Update frontend components to pull from API
4. Update Admin CMS forms to manage these arrays

### Option 2: Create Stats as Separate Items
1. Create `StatsItem` model (like we did for FooterItem)
2. Create stats management in Admin CMS
3. Update frontend to fetch stats from API

### Option 3: Accept as Static
- These stats rarely change
- Can be updated directly in code when needed
- Reduces complexity of CMS

---

## ✅ Testing Checklist

Use this to verify everything works:

### Backend Tests
- [ ] Backend server starts: `cd backend && npm start`
- [ ] MongoDB connection successful
- [ ] No errors in backend console
- [ ] API endpoints respond:
  - http://localhost:5000/api/cms/hero
  - http://localhost:5000/api/cms/about
  - http://localhost:5000/api/cms-items/projects/items
  - http://localhost:5000/api/cms-items/leadership/items

### Frontend Tests
- [ ] Frontend dev server starts: `cd frontend && npm run dev`
- [ ] Homepage loads: http://localhost:5173
- [ ] All sections display properly:
  - [ ] Hero section
  - [ ] About section
  - [ ] Projects location cards
  - [ ] Special offers
  - [ ] Testimonials
  - [ ] Leadership
  - [ ] Why Choose Us
  - [ ] Contact form
  - [ ] Footer

### Admin CMS Tests
- [ ] Admin page loads: http://localhost:5173/admin
- [ ] Login works with admin credentials
- [ ] Dashboard displays
- [ ] Can navigate to each section:
  - [ ] Projects Manager shows 9 projects
  - [ ] Testimonials shows 4 testimonials
  - [ ] Special Offers shows 4 offers
  - [ ] Leadership shows 2 leaders
  - [ ] Why Choose Us shows 6 reasons
  - [ ] Location Cards shows 3 locations
  - [ ] Footer shows items

### CRUD Operations Tests
For each section, test:
- [ ] **Create**: Add a new item
- [ ] **Read**: View item in list
- [ ] **Update**: Edit an existing item
- [ ] **Delete**: Remove an item
- [ ] **Verify**: Check homepage reflects changes

### Persistence Test
- [ ] Make changes in Admin CMS
- [ ] Stop both servers (Ctrl+C)
- [ ] Restart both servers
- [ ] Verify changes are still there
- [ ] Check MongoDB database directly

---

## 🗄️ Database Structure

Your MongoDB database: **`AikyaBuilders`**

### Collections:
1. `auth` - User authentication
2. `users` - User accounts
3. `hero` - Hero section content
4. `about` - About section content
5. `footer` - Footer section content
6. `projectitems` - Individual projects (9 docs)
7. `testimonialitems` - Customer testimonials (4 docs)
8. `specialofferitems` - Marketing offers (4 docs)
9. `leadershipitems` - Team leaders (2 docs)
10. `whychooseitems` - Value propositions (6 docs)
11. `locationcarditems` - Project locations (3 docs)
12. `footeritems` - Footer contact/social items (6 docs)
13. `newsarticles` - News/blog articles (currently empty)
14. `serviceitems` - Services offered (currently empty)
15. `csritems` - CSR initiatives (currently empty)
16. `eventitems` - Company events (currently empty)
17. `careeritems` - Job postings (currently empty)

---

## 🚀 Next Steps

1. **Test Everything**: Use the testing checklist above
2. **Add More Content**: Use Admin CMS to add more projects, testimonials, etc.
3. **Update Images**: Replace placeholder image URLs with real images
4. **Populate Empty Collections**: Add News, Services, CSR, Events, Careers content
5. **Make Hardcoded Parts Editable** (optional): Follow "To Make Hardcoded Content Editable" section

---

## 💡 Tips

- **Images**: Use full URLs (https://...) or upload images to a CDN
- **Backup**: Export MongoDB data regularly
- **Testing**: Always test on homepage after making CMS changes
- **Order**: Use the "order" field to control display sequence
- **Status**: Use status fields (active/inactive) to hide items without deleting

---

## 🎉 Success!

You now have a fully functional CMS with 37 editable content entries stored persistently in MongoDB. All changes through the Admin panel will automatically update your website and survive server restarts!

**Questions or issues?** Check the backend console for errors or MongoDB connection status.

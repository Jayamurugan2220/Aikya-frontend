# CMS Management Guide - All Editable Content

## ✅ EVERYTHING IS EDITABLE IN THE CMS!

Access the CMS Admin Panel:
- **Local:** http://localhost:8082/cms-admin
- **Production:** https://aikiyabuilders.welocalhost.com/cms-admin

---

## 📋 Available CMS Panels

### 1. **Hero Section** (Homepage Header)
**Location:** Homepage top section
**CMS Panel:** Hero Section Editor
**Editable:**
- Main heading
- Subheading
- Description text
- Background image
- CTA button text and link

---

### 2. **About Section** (Homepage)
**Location:** Homepage - About Aikya
**CMS Panel:** About Section Editor
**Editable:**
- Section heading
- Description paragraphs
- Statistics (Years, Projects, Satisfaction)
- Images

---

### 3. **Projects Management** ✅
**Location:** /projects, /chennai-projects pages
**CMS Panel:** Projects Management
**Editable:** Create, Edit, Delete individual projects
- Project title, description
- Location, area, type
- Price, status
- Images (cloud storage)
- Features list
- Display order

**Current Projects:** 9 Chennai projects

---

### 4. **Location Cards** ✅
**Location:** Homepage - Explore Our Projects section
**CMS Panel:** Location Cards Management
**Editable:** Create, Edit, Delete location cards
- Location name
- Description
- Project count
- Image
- Link

**Current:** 1 location (Chennai)

---

### 5. **Special Offers** ✅
**Location:** Homepage - Special Offers section
**CMS Panel:** Special Offers Management
**Editable:** Create, Edit, Delete offers
- Title, description
- Price, discount
- Features
- Image (cloud storage)
- Status (active/upcoming/expired)
- Contact numbers

**Current:** 1 active offer

---

### 6. **Why Choose Us** ✅
**Location:** Homepage - Why Choose Aikya section
**CMS Panel:** Why Choose Management
**Editable:** Create, Edit, Delete reasons
- Reason title
- Description
- Icon selection
- Display order

---

### 7. **Leadership Team** ✅
**Location:** Homepage - Leadership section
**CMS Panel:** Leadership Management
**Editable:** Create, Edit, Delete team members
- Name, title
- Bio/description
- Profile image
- LinkedIn/social links
- Display order

---

### 8. **Testimonials** ✅
**Location:** Homepage - What Our Clients Say
**CMS Panel:** Testimonials Management
**Editable:** Create, Edit, Delete testimonials
- Client name
- Role, company
- Testimonial content
- Rating (1-5 stars)
- Profile image
- Location

**Current:** 4 testimonials

---

### 9. **Services** ✅
**Location:** /services page
**CMS Panel:** Services Management
**Editable:** Create, Edit, Delete services
- Service name
- Description
- Features list
- Icon
- Image
- Category

---

### 10. **News/Articles** ✅
**Location:** /news page
**CMS Panel:** News Management
**Editable:** Create, Edit, Delete news articles
- Article title, content
- Excerpt
- Author
- Publication date
- Featured image
- Status (draft/published)
- Category

---

### 11. **Events** ✅
**Location:** /events page
**CMS Panel:** Events Management
**Editable:** Create, Edit, Delete events
- Event title, description
- Date, time
- Location/venue
- Registration link
- Event image
- Status

---

### 12. **CSR Initiatives** ✅
**Location:** /csr page
**CMS Panel:** CSR Management
**Editable:** Create, Edit, Delete initiatives
- Initiative title
- Description
- Category (Education, Healthcare, Environment, etc.)
- Image
- Date
- Impact statistics

**Current:** 5 initiatives

---

### 13. **Careers/Job Positions** ✅
**Location:** /careers page
**CMS Panel:** Careers Management
**Editable:** Create, Edit, Delete job positions
- Job title
- Department
- Location
- Employment type (full-time/part-time/contract)
- Job description
- Requirements
- Application link

**Current:** 4 job postings

---

### 14. **Footer** ✅
**Location:** Every page - Footer section
**CMS Panel:** Footer Management
**Editable:**
- Company description
- Social media links
- Contact information
- Quick links
- Newsletter text

---

### 15. **Contact Section** ⚠️
**Location:** Homepage - Contact form
**Status:** Currently static (not CMS-editable)
**What's hardcoded:**
- Contact email
- Phone numbers
- Office address
- Map embed

---

## 🎯 How to Edit Content

### For Individual Items (Projects, Testimonials, etc.)
1. Login to CMS Admin `/cms-admin`
2. Click on the respective section in sidebar
3. You'll see a table with all items
4. **Actions:**
   - ✏️ Edit - Modify existing item
   - 🗑️ Delete - Remove item
   - ➕ Create New - Add new item

### For Section Content (Hero, About, etc.)
1. Login to CMS Admin `/cms-admin`
2. Click on the section name in sidebar
3. Edit the form fields
4. Click "Save Changes"

---

## 📸 Image Management

**All images are stored in cloud storage (Garage S3)**
- Bucket: `aikya`
- Automatic upload when adding/editing items
- Images served through backend proxy: `/api/images/:filename`
- Old images automatically deleted when updated

---

## 🔐 Admin Access

**Login Required:** All CMS management requires admin authentication
**Default Admin:** Use your admin credentials to access

---

## 📊 Current Content Summary

| Section | Items | Status |
|---------|-------|--------|
| Projects | 9 | ✅ |
| Location Cards | 1 | ✅ |
| Special Offers | 1 | ✅ |
| Testimonials | 4 | ✅ |
| CSR Initiatives | 5 | ✅ |
| Careers | 4 | ✅ |
| Leadership | Varies | ✅ |
| Why Choose | Varies | ✅ |
| Services | Varies | ✅ |
| News | Varies | ✅ |
| Events | Varies | ✅ |

---

## ✅ Everything is CMS-Managed!

**The ONLY hardcoded content is:**
- Contact Section (email, phone, address can be made editable if needed)
- Navbar structure (but links work with CMS pages)

**Everything else is fully editable through the CMS!**

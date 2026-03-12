# Database Collections Audit - Admin CMS vs MongoDB

## ✅ ADMIN CMS SECTIONS (14 sections)

### 1. Authentication
- **Section**: N/A (Login/Signup)
- **Data Source**: MongoDB Collections `auth` + `users`
- **Status**: ✅ KEEP

### 2. Static Content Sections (use MongoDB)
| Section | Data Source | Collection | Status |
|---------|-------------|------------|--------|
| Hero Section | MongoDB | `hero` | ✅ KEEP |
| About Section | MongoDB | `about` | ✅ KEEP |

### 3. Dynamic Content Sections (use memoryStore)
| Section | Data Source | Old Collection | Status |
|---------|-------------|----------------|--------|
| News Management | memoryStore | `news` | 🗑️ DELETE |
| Projects Management | memoryStore | `projects` | 🗑️ DELETE |
| Services Management | memoryStore | `services` | 🗑️ DELETE |
| CSR Management | memoryStore | `csr` | 🗑️ DELETE |
| Events Management | memoryStore | `events` | 🗑️ DELETE |
| Careers Management | memoryStore | `careers` | 🗑️ DELETE |
| Testimonials | memoryStore | `testimonials` | 🗑️ DELETE |
| Special Offers | memoryStore | `specialoffers` | 🗑️ DELETE |
| Leadership | memoryStore | `leadership` | 🗑️ DELETE |
| Why Choose Us | memoryStore | `whychoose` | 🗑️ DELETE |
| Location Cards | memoryStore | N/A | N/A |
| Footer | memoryStore | `footer` + `footeritems` | 🗑️ DELETE |

### 4. Unused Collections
| Collection | Used By | Status |
|------------|---------|--------|
| `contact` | Nothing | 🗑️ DELETE |
| `groupcompany` | Nothing (old page) | 🗑️ DELETE |
| `partnership` | Nothing (old page) | 🗑️ DELETE |

---

## 📊 SUMMARY

### Collections to KEEP (4):
1. `auth` - User authentication
2. `users` - User accounts  
3. `hero` - Hero section content
4. `about` - About section content

### Collections to DELETE (15):
1. `whychoose` - Replaced by memoryStore
2. `contact` - Not used
3. `leadership` - Replaced by memoryStore
4. `projects` - Replaced by memoryStore
5. `testimonials` - Replaced by memoryStore
6. `specialoffers` - Replaced by memoryStore
7. `services` - Replaced by memoryStore
8. `news` - Replaced by memoryStore
9. `csr` - Replaced by memoryStore
10. `events` - Replaced by memoryStore
11. `careers` - Replaced by memoryStore
12. `groupcompany` - Not used
13. `partnership` - Not used
14. `footer` - Replaced by memoryStore
15. `footeritems` - Replaced by memoryStore

---

## 🔧 HOW TO CLEAN UP

### Option 1: Run the cleanup script
```bash
cd backend
node scripts/cleanupCollections.js
```

### Option 2: Manual cleanup via MongoDB Compass
1. Connect to MongoDB Atlas
2. Select `aikya-builders` database
3. Delete the 15 collections listed above

---

## ✅ FINAL DATABASE STRUCTURE

After cleanup, your database will have:
```
aikya-builders/
├── auth          (authentication data)
├── users         (user accounts)
├── hero          (hero section)
└── about         (about section)
```

All other content (projects, testimonials, news, etc.) is managed via **memoryStore** (in-memory storage) which is perfect for development and fast access.

---

## 📝 NOTES

- **memoryStore** provides full CRUD operations without database overhead
- Data persists in backend/data/memoryStore.js during runtime
- For production, you may want to persist memoryStore data to a file or database
- Current setup is optimal for demo/development

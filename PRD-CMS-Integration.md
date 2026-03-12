# Product Requirements Document (PRD)
## Aikya Builds Future - CMS Integration

**Document Version:** 1.0  
**Date:** February 25, 2026  
**Product Owner:** Aikya Builds Future Team  
**Status:** Draft  

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Problem Statement](#problem-statement)
4. [Goals & Objectives](#goals--objectives)
5. [CMS Requirements](#cms-requirements)
6. [Technical Specifications](#technical-specifications)
7. [User Stories & Use Cases](#user-stories--use-cases)
8. [Content Model](#content-model)
9. [Implementation Plan](#implementation-plan)
10. [Success Metrics](#success-metrics)
11. [Security & Compliance](#security--compliance)
12. [Timeline & Milestones](#timeline--milestones)

---

## 1. Executive Summary

### Overview
Aikya Builds Future requires a Content Management System (CMS) integration to enable non-technical team members to manage website content dynamically without developer intervention. This PRD outlines the requirements for integrating a modern headless CMS into the existing React/TypeScript application.

### Business Impact
- **Reduce Content Update Time:** From days to minutes
- **Empower Marketing Team:** Self-service content management
- **Improve Scalability:** Support for multi-language and future growth
- **Enhanced SEO:** Dynamic meta tags and structured content
- **Cost Efficiency:** Reduce dependency on developers for content changes

---

## 2. Current State Analysis

### 2.1 Current Technology Stack
```json
{
  "Frontend Framework": "React 18 + TypeScript",
  "Build Tool": "Vite",
  "UI Library": "Shadcn UI (Radix UI components)",
  "Styling": "Tailwind CSS",
  "Animations": "Framer Motion",
  "State Management": "TanStack Query (React Query)",
  "Routing": "React Router DOM",
  "SEO": "React Helmet Async",
  "Package Manager": "Bun"
}
```

### 2.2 Current Website Structure

#### Pages
1. **Home Page (/)** - Main landing page
   - Hero Section
   - About Section
   - Leadership Section
   - Why Choose Section
   - Contact Section
   - Footer

2. **Projects Page (/projects)** - Portfolio showcase
   - Filterable project listings
   - Categories: Flats & Apartments, Villas & Homes, Commercial, Plots
   - Project cards with images, location, status

3. **404 Page** - Not Found error handling

#### Components Inventory
- **Layout Components:** Navbar, Footer
- **Section Components:** 
  - HeroSection (stats, CTAs, background image)
  - AboutSection (4 pillars with icons)
  - LeadershipSection (team profiles, achievements)
  - WhyChooseSection
  - ContactSection
- **UI Components:** 50+ Shadcn UI components (buttons, cards, forms, dialogs, etc.)

### 2.3 Current Content Types

**Hero Section:**
- Headline text
- Subheadline
- CTA buttons
- Background image
- Statistics (4 metrics with values and labels)

**About Section:**
- Section title
- Description text
- 4 pillar cards (icon, title, description)

**Leadership Section:**
- Section title
- Achievement metrics (4 stats)
- Project examples (6 bullet points)
- Leadership profiles (2 team members: name, title, bio, initial)

**Projects:**
- Project name
- Location
- Category
- Status (Completed/Ongoing)
- Featured image
- Detailed descriptions
- Specifications

**Contact Information:**
- Company details
- Contact forms
- Location information
- Social media links

### 2.4 Current Content Management Limitations
- ❌ All content is hardcoded in TSX components
- ❌ Requires developer to update any text or images
- ❌ No version control for content
- ❌ No preview functionality
- ❌ No multi-language support
- ❌ No content scheduling
- ❌ No media asset management
- ❌ No collaboration workflow

---

## 3. Problem Statement

### Current Challenges
1. **Developer Dependency:** Every content change requires a developer, causing delays and increased costs
2. **Slow Time-to-Market:** Content updates require build and deployment cycles
3. **No Content Workflow:** No approval process, drafting, or scheduling capabilities
4. **Poor Asset Management:** Images and media scattered across codebase
5. **Scalability Issues:** Adding new projects or team members requires code changes
6. **No SEO Flexibility:** Meta tags and structured data are hardcoded
7. **Limited Collaboration:** Marketing team cannot preview or draft content

### Business Impact
- Marketing team waits 2-5 days for simple content updates
- Lost opportunities due to slow response time
- Developer time spent on non-technical tasks
- Inability to A/B test content variations
- Risk of content inconsistencies

---

## 4. Goals & Objectives

### Primary Goals
1. **Enable Self-Service Content Management**
   - Marketing team can update content independently
   - No technical knowledge required

2. **Reduce Content Update Cycle**
   - Target: From 2-5 days to <15 minutes
   - Real-time or near-real-time updates

3. **Improve Content Quality**
   - Preview capabilities
   - Approval workflows
   - Content validation

4. **Enhance Developer Productivity**
   - Developers focus on features, not content updates
   - Standardized content structure

### Secondary Goals
- Multi-language support preparation
- A/B testing capability
- Content scheduling
- Analytics integration
- Media optimization

### Non-Goals (Out of Scope for v1)
- E-commerce functionality
- User authentication/personalization
- Community features (comments, reviews)
- Complex form builders
- Video streaming

---

## 5. CMS Requirements

### 5.1 CMS Selection Criteria

#### Must-Have Features
- ✅ **Headless/API-First Architecture**
- ✅ **React/TypeScript SDK**
- ✅ **Rich Text Editor** (WYSIWYG)
- ✅ **Media Management** with CDN
- ✅ **Content Preview** (draft mode)
- ✅ **Versioning & Rollback**
- ✅ **API Rate Limits** suitable for traffic
- ✅ **Free or Affordable Tier** for initial deployment
- ✅ **Good Developer Experience**
- ✅ **Active Community & Documentation**

#### Nice-to-Have Features
- 🔹 Content Scheduling
- 🔹 Workflow & Approvals
- 🔹 Multi-language Support (i18n)
- 🔹 Webhooks for build triggers
- 🔹 Asset Optimization (WebP, responsive images)
- 🔹 GraphQL API
- 🔹 Content Relationships
- 🔹 Search/Filtering in CMS

### 5.2 Recommended CMS Options

| CMS | Pros | Cons | Cost |
|-----|------|------|------|
| **Sanity** | Excellent DX, real-time preview, powerful schema, React support | Learning curve for studio customization | Free tier: 3 users, 2 datasets |
| **Contentful** | Mature, enterprise-ready, great UI, extensive features | Can be expensive at scale | Free tier: 3 users, 2 locales |
| **Strapi** | Self-hosted, full control, open-source, customizable | Requires hosting, maintenance | Free (self-hosted) |
| **PayloadCMS** | TypeScript-native, React admin panel, modern | Newer, smaller ecosystem | Free (self-hosted) |
| **Hygraph (GraphCMS)** | GraphQL-first, good performance, CDN | Less flexible than Sanity | Free tier available |

**Recommendation:** **Sanity CMS**
- Best Developer Experience for React/TypeScript
- Real-time collaborative editing
- Excellent documentation
- GROQ query language is powerful and intuitive
- Portable Text for rich content
- Free tier sufficient for current needs

### 5.3 Content Management Features

#### User Roles & Permissions
- **Admin:** Full access to content, settings, and user management
- **Editor:** Create, edit, publish content; manage media
- **Contributor:** Create and edit drafts; cannot publish
- **Viewer:** Read-only access for review purposes

#### Content Operations
- ✅ Create new content entries
- ✅ Edit existing content
- ✅ Delete content (with confirmation)
- ✅ Duplicate content entries
- ✅ Save as draft
- ✅ Publish/Unpublish
- ✅ Schedule publication (future)
- ✅ Restore previous versions
- ✅ Preview before publishing

#### Media Management
- ✅ Upload images, videos, documents
- ✅ Automatic image optimization
- ✅ Responsive image generation
- ✅ Alt text and metadata
- ✅ Asset organization (folders/tags)
- ✅ CDN delivery
- ✅ File size limits and validation

---

## 6. Technical Specifications

### 6.1 Architecture Overview

```
┌─────────────────┐
│   End Users     │
└────────┬────────┘
         │
    ┌────▼─────┐
    │  Vercel  │ (Frontend Hosting)
    │  /Netlify│
    └────┬─────┘
         │
    ┌────▼─────────────────┐
    │  React Application   │
    │  (Static Site/SSR)   │
    └────┬─────────────────┘
         │
         │ API Calls
         │
    ┌────▼─────────┐
    │  Sanity CMS  │
    │  (Headless)  │
    │              │
    │ - Content API│
    │ - Studio UI  │
    │ - Media CDN  │
    └──────────────┘
         │
         │ Webhook (Optional)
         │
    ┌────▼────────┐
    │ CI/CD       │
    │ Rebuild     │
    └─────────────┘
```

### 6.2 Integration Points

#### Frontend (React App)
```typescript
// Dependencies to add
{
  "@sanity/client": "^6.x",
  "@sanity/image-url": "^1.x",
  "@portabletext/react": "^3.x", // For rich text rendering
  "next-sanity": "^7.x" // If using Next.js (optional)
}
```

#### API Integration
- **REST API** for data fetching
- **GROQ** as query language
- **Real-time updates** via listeners (optional)
- **CDN-backed** content delivery

### 6.3 Data Fetching Strategy

#### Option 1: Static Generation (SSG) - Recommended for v1
```typescript
// Fetch at build time
// Pros: Fast, SEO-friendly, low API calls
// Cons: Requires rebuild for updates
// Solution: Webhook-triggered rebuilds
```

#### Option 2: Incremental Static Regeneration (ISR)
```typescript
// Revalidate on interval or on-demand
// Requires Next.js or similar
```

#### Option 3: Client-Side Fetching (CSR)
```typescript
// Fetch in browser using React Query
// Pros: Instant updates, no rebuild
// Cons: SEO challenges, TTFB slower
```

**Recommendation:** Start with SSG + webhook rebuilds, migrate to ISR when scaling

### 6.4 Development Environment

```typescript
// Environment Variables
VITE_SANITY_PROJECT_ID=abc123xyz
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-02-25
SANITY_AUTH_TOKEN=sk_xxx // For mutations (server-only)
```

### 6.5 Folder Structure Enhancement

```
future-builders-studio/
├── sanity/                     # NEW: CMS Studio
│   ├── schemas/               # Content type definitions
│   │   ├── hero.ts
│   │   ├── about.ts
│   │   ├── leadership.ts
│   │   ├── project.ts
│   │   └── index.ts
│   ├── sanity.config.ts       # Studio configuration
│   ├── sanity.cli.ts
│   └── package.json
│
├── src/
│   ├── lib/
│   │   ├── sanity/             # NEW: Sanity client utilities
│   │   │   ├── client.ts       # API client
│   │   │   ├── queries.ts      # GROQ queries
│   │   │   ├── imageBuilder.ts # Image URL builder
│   │   │   └── types.ts        # TypeScript types
│   ├── components/
│   │   ├── HeroSection.tsx     # MODIFIED: Use CMS data
│   │   ├── AboutSection.tsx    # MODIFIED: Use CMS data
│   │   └── ...
│   └── pages/
│       ├── Index.tsx           # MODIFIED: Fetch CMS data
│       └── Projects.tsx        # MODIFIED: Fetch CMS data
│
├── .env.local                  # Environment variables
└── package.json
```

---

## 7. User Stories & Use Cases

### 7.1 Marketing Team User Stories

**US-1: Update Hero Section Content**
```
As a marketing manager,
I want to update the hero headline and CTA text,
So that I can run promotional campaigns without developer help.

Acceptance Criteria:
- Can edit hero headline text in CMS
- Can update CTA button text and links
- Changes reflect on website within 5 minutes
- Can preview before publishing
```

**US-2: Add New Project**
```
As a content editor,
I want to add a new real estate project to the Projects page,
So that potential clients can see our latest developments.

Acceptance Criteria:
- Can create new project entry in CMS
- Can upload project images (multiple)
- Can set project details (name, location, status, category)
- Can add rich text description
- Project appears in correct category filter
- Mobile-responsive display
```

**US-3: Update Team Member Bio**
```
As an HR administrator,
I want to update leadership team member information,
So that the website reflects current company structure.

Acceptance Criteria:
- Can edit name, title, bio
- Can upload profile photo
- Can reorder team members
- Can add/remove team members
```

**US-4: Manage Achievement Stats**
```
As a marketing manager,
I want to update company statistics,
So that we showcase current achievements.

Acceptance Criteria:
- Can edit all stat values and labels
- Numbers update across all sections
- Changes are instant after publishing
```

### 7.2 Developer User Stories

**US-5: Schema-Driven Development**
```
As a developer,
I want strongly-typed content schemas,
So that I have type safety and prevent runtime errors.

Acceptance Criteria:
- TypeScript types generated from schemas
- Autocomplete in IDE
- Build-time type checking
```

**US-6: Preview Mode**
```
As a developer,
I want to implement draft preview mode,
So that editors can see unpublished changes.

Acceptance Criteria:
- Preview URL with draft token
- Shows unpublished content
- Different styling for draft mode
```

### 7.3 Administrator User Stories

**US-7: User Management**
```
As an admin,
I want to manage CMS user access,
So that only authorized personnel can edit content.

Acceptance Criteria:
- Can invite users via email
- Can assign roles (Admin/Editor/Contributor)
- Can revoke access
- Activity logging
```

---

## 8. Content Model

### 8.1 Schema Definitions

#### 8.1.1 Site Configuration
```typescript
{
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url'
    },
    {
      name: 'seo', 
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        { name: 'title', title: 'Default Page Title', type: 'string' },
        { name: 'description', title: 'Default Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Social Share Image', type: 'image' }
      ]
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'address', type: 'text' }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url' },
        { name: 'twitter', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'instagram', type: 'url' }
      ]
    }
  ]
}
```

#### 8.1.2 Hero Section
```typescript
{
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'object',
      fields: [
        { name: 'text', title: 'Text', type: 'string' },
        { name: 'icon', title: 'Icon Name', type: 'string' }
      ]
    },
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3
    },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Button Text', type: 'string' },
          { name: 'link', title: 'Link', type: 'string' },
          { name: 'variant', title: 'Style', type: 'string', 
            options: { list: ['primary', 'secondary', 'outline'] } }
        ]
      }],
      validation: Rule => Rule.max(2)
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' }
        ]
      }],
      validation: Rule => Rule.length(4)
    }
  ]
}
```

#### 8.1.3 About Section
```typescript
{
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }] // Rich text
    },
    {
      name: 'pillars',
      title: 'Four Pillars',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string',
            options: { list: ['Brain', 'Rocket', 'Target', 'Zap'] } },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' }
        ]
      }],
      validation: Rule => Rule.length(4)
    }
  ]
}
```

#### 8.1.4 Leadership Section
```typescript
{
  name: 'leadershipSection',
  title: 'Leadership Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' }
        ]
      }]
    },
    {
      name: 'projectExamples',
      title: 'Project Examples',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'leaders',
      title: 'Leadership Team',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }]
    }
  ]
}
```

#### 8.1.5 Team Member
```typescript
{
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4
    },
    {
      name: 'initial',
      title: 'Initial (for avatar)',
      type: 'string',
      validation: Rule => Rule.max(2)
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url' },
        { name: 'twitter', type: 'url' }
      ]
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
```

#### 8.1.6 Project
```typescript
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Flats & Apartments', value: 'flats' },
          { title: 'Villas & Homes', value: 'villas' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Plots', value: 'plots' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Upcoming', value: 'upcoming' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'area', title: 'Area', type: 'string' },
        { name: 'units', title: 'Number of Units', type: 'string' },
        { name: 'floors', title: 'Floors', type: 'string' },
        { name: 'amenities', title: 'Amenities', type: 'array', of: [{ type: 'string' }] }
      ]
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'featuredImage'
    }
  }
}
```

#### 8.1.7 Why Choose Section
```typescript
{
  name: 'whyChooseSection',
  title: 'Why Choose Section',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' }
        ]
      }]
    }
  ]
}
```

### 8.2 Content Relationships

```
Site Config (1)
    │
    ├─── Hero Section (1)
    ├─── About Section (1)
    ├─── Leadership Section (1)
    │        └─── Team Members (N)
    ├─── Why Choose Section (1)
    └─── Projects (N)
```

---

## 9. Implementation Plan

### Phase 1: Setup & Infrastructure (Week 1)

#### 1.1 CMS Setup
- [ ] Create Sanity.io account
- [ ] Initialize Sanity project
- [ ] Configure project (dataset: production, staging)
- [ ] Set up Sanity Studio locally
- [ ] Deploy Studio to Sanity cloud

#### 1.2 Schema Development
- [ ] Create base schema types
- [ ] Implement validation rules
- [ ] Configure field customizations
- [ ] Set up previews in Studio
- [ ] Test schema in Studio UI

#### 1.3 Environment Configuration
- [ ] Add environment variables
- [ ] Configure Vite for env vars
- [ ] Set up CORS policies
- [ ] Configure CDN settings

### Phase 2: Frontend Integration (Week 2)

#### 2.1 Install Dependencies
```bash
bun add @sanity/client @sanity/image-url @portabletext/react
bun add -d @sanity/types
```

#### 2.2 Create Sanity Client
- [ ] Set up Sanity client utility
- [ ] Create image URL builder
- [ ] Implement GROQ queries
- [ ] Generate TypeScript types

#### 2.3 Update Components (Migration)
- [ ] Hero Section → Fetch from CMS
- [ ] About Section → Fetch from CMS
- [ ] Leadership Section → Fetch from CMS
- [ ] Why Choose Section → Fetch from CMS
- [ ] Projects Page → Fetch from CMS
- [ ] Site Config (footer, contact) → Fetch from CMS

#### 2.4 Content Migration
- [ ] Copy existing content to CMS
- [ ] Upload existing images to Sanity
- [ ] Validate all content displays correctly
- [ ] Test all links and CTAs

### Phase 3: Advanced Features (Week 3)

#### 3.1 Preview Mode
- [ ] Implement draft preview mode
- [ ] Create preview API endpoint
- [ ] Add preview banner
- [ ] Test draft content visibility

#### 3.2 SEO Enhancement
- [ ] Dynamic meta tags from CMS
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generation
- [ ] robots.txt configuration

#### 3.3 Performance Optimization
- [ ] Implement image optimization
- [ ] Add lazy loading
- [ ] Configure caching strategy
- [ ] Optimize bundle size

### Phase 4: Deployment & Training (Week 4)

#### 4.1 Deployment
- [ ] Set up webhook for auto-rebuild
- [ ] Configure production environment
- [ ] Deploy to hosting (Vercel/Netlify)
- [ ] Smoke testing

#### 4.2 User Training
- [ ] Create CMS user guides
- [ ] Record video tutorials
- [ ] Conduct training session
- [ ] Document common workflows

#### 4.3 Monitoring & Handoff
- [ ] Set up error logging
- [ ] Configure analytics
- [ ] Document troubleshooting
- [ ] Establish support process

---

## 10. Success Metrics

### 10.1 Performance KPIs

| Metric | Current | Target | Measurement Method |
|--------|---------|--------|-------------------|
| Content Update Time | 2-5 days | <15 minutes | Track from change request to live |
| Developer Hours/Month (Content) | 40 hours | <5 hours | Time tracking |
| Page Load Time (LCP) | N/A | <2.5s | Lighthouse/WebPageTest |
| SEO Score | N/A | 95+ | Lighthouse |
| Content Errors | N/A | <1/month | Error tracking |

### 10.2 User Adoption Metrics
- CMS logins per week
- Content updates per user
- Time spent in CMS
- Training completion rate
- User satisfaction score (survey)

### 10.3 Technical Metrics
- API response time (<200ms)
- Build time (<3 minutes)
- Image optimization rate (>90% WebP)
- Cache hit rate (>80%)
- Uptime (>99.9%)

---

## 11. Security & Compliance

### 11.1 Authentication & Authorization
- **CMS Access:** SSO via Google/Microsoft (if available)
- **API Keys:** Stored in environment variables, never committed
- **CORS Policy:** Whitelist allowed origins
- **Rate Limiting:** Prevent API abuse

### 11.2 Data Security
- **Data Encryption:** TLS/HTTPS for all connections
- **Token Security:** Sanity tokens with read/write scopes
- **Backup Strategy:** Daily automated backups by Sanity
- **GDPR Compliance:** Data processing agreement with Sanity

### 11.3 Content Security
- **Input Validation:** Sanity schema validation
- **XSS Prevention:** Sanitize HTML in rich text
- **Asset Scanning:** Virus scan on file uploads
- **Version Control:** Content versioning for rollback

### 11.4 Access Control
- **Role-Based Access:** Admin, Editor, Contributor roles
- **Audit Logging:** Track all content changes
- **Session Management:** Auto-logout after inactivity
- **IP Whitelisting:** (Optional) Restrict Studio access

---

## 12. Timeline & Milestones

### Overall Timeline: 4 Weeks

```
Week 1: Setup & Infrastructure
├─ Day 1-2: CMS account, project setup
├─ Day 3-4: Schema development
└─ Day 5: Testing & validation

Week 2: Frontend Integration
├─ Day 1-2: Install dependencies, create client
├─ Day 3-4: Migrate components
└─ Day 5: Content migration

Week 3: Advanced Features
├─ Day 1-2: Preview mode
├─ Day 3: SEO enhancements
└─ Day 4-5: Performance optimization

Week 4: Deployment & Training
├─ Day 1-2: Deploy to production
├─ Day 3: User training
└─ Day 4-5: Documentation & handoff
```

### Key Milestones

| Date | Milestone | Deliverable |
|------|-----------|-------------|
| End Week 1 | CMS Setup Complete | Working Sanity Studio with all schemas |
| End Week 2 | Frontend Integration | All components fetching from CMS |
| End Week 3 | Feature Complete | Preview, SEO, optimization done |
| End Week 4 | Production Launch | Live site with trained users |

---

## 13. Risks & Mitigation

### 13.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| API rate limit exceeded | High | Low | Implement caching, upgrade plan if needed |
| Build times increase | Medium | Medium | Use ISR, optimize queries |
| Content migration errors | High | Medium | Thorough testing, staged rollout |
| Third-party dependency | Medium | Low | Choose well-supported CMS (Sanity) |

### 13.2 Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| User adoption resistance | High | Medium | Training, simple UX |
| Increased hosting costs | Low | Low | Monitor usage, optimize |
| Content inconsistency | Medium | Medium | Validation rules, templates |
| Loss of SEO ranking | High | Low | Maintain URLs, 301 redirects |

### 13.3 Operational Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Key person dependency | High | Medium | Documentation, training |
| Inadequate backup | High | Low | Daily automated backups |
| Security breach | Critical | Low | Follow security best practices |

---

## 14. Future Enhancements (Post-MVP)

### Phase 2 Features (3-6 months)
- **Multi-language Support (i18n)**
  - English, Hindi, Tamil
  - Language switcher
  - Translated content management

- **Advanced Search**
  - Project search by location, type, price
  - Autocomplete suggestions
  - Filter combinations

- **Blog/News Section**
  - Company news and updates
  - Industry insights
  - Author management

- **Testimonials & Reviews**
  - Client testimonials
  - Star ratings
  - Moderation workflow

- **Contact Form Management**
  - Store form submissions in CMS
  - Lead management
  - Email notifications

### Phase 3 Features (6-12 months)
- **Analytics Dashboard**
  - Content performance metrics
  - User engagement tracking
  - A/B testing results

- **Advanced Media Features**
  - 360° virtual tours
  - Video gallery
  - Interactive floor plans

- **Personalization**
  - User preferences
  - Location-based content
  - Recommendation engine

- **Marketing Automation**
  - Email campaigns
  - Lead scoring
  - CRM integration

---

## 15. Support & Maintenance

### 15.1 Support Structure
- **L1 Support:** Marketing team self-service via documentation
- **L2 Support:** Developer assistance (CMS issues)
- **L3 Support:** Sanity support team (platform issues)

### 15.2 Maintenance Schedule
- **Daily:** Monitor errors, check build status
- **Weekly:** Review content updates, user feedback
- **Monthly:** Performance audit, dependency updates
- **Quarterly:** Security review, feature retrospective

### 15.3 Documentation
- [ ] User manual for content editors
- [ ] Developer setup guide
- [ ] Schema reference documentation
- [ ] API documentation
- [ ] Troubleshooting guide
- [ ] Video tutorials

---

## 16. Budget Estimate

### 16.1 Development Costs

| Item | Hours | Rate | Total |
|------|-------|------|-------|
| CMS Setup & Schema | 16 | $80/hr | $1,280 |
| Frontend Integration | 32 | $80/hr | $2,560 |
| Advanced Features | 24 | $80/hr | $1,920 |
| Testing & QA | 16 | $60/hr | $960 |
| Training & Documentation | 12 | $60/hr | $720 |
| **Total Development** | **100** | - | **$7,440** |

### 16.2 Recurring Costs

| Item | Monthly | Annually |
|------|---------|----------|
| Sanity CMS (Free Tier) | $0 | $0 |
| Sanity CMS (Growth Plan) | $199* | $2,388 |
| Hosting (Vercel/Netlify) | $0-20 | $0-240 |
| CDN/Image Optimization | Included | Included |
| Maintenance (10 hrs/month) | $800 | $9,600 |
| **Total (Free Tier)** | **$800** | **$9,600** |
| **Total (Growth Plan)** | **$999** | **$11,988** |

*Upgrade to Growth plan when exceeding free tier limits

### 16.3 ROI Calculation

**Cost Savings:**
- Developer time saved: 35 hrs/month × $80/hr = **$2,800/month**
- Faster time-to-market: Estimated **$1,000/month** value
- Reduced errors/rework: Estimated **$500/month** savings

**Total Savings:** ~$4,300/month = **$51,600/year**

**Break-even:** Development cost ($7,440) recovered in ~2 months

---

## 17. Approval & Sign-off

### Document Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | | | |
| Technical Lead | | | |
| Marketing Manager | | | |
| Project Sponsor | | | |

### Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-25 | System | Initial PRD creation |

---

## 18. Appendices

### Appendix A: References
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Web Vitals Guide](https://web.dev/vitals/)

### Appendix B: Glossary

| Term | Definition |
|------|------------|
| **Headless CMS** | Content management system that provides content via API, separated from presentation layer |
| **GROQ** | Graph-Relational Object Queries - Sanity's query language |
| **SSG** | Static Site Generation - pre-rendering pages at build time |
| **ISR** | Incremental Static Regeneration - updating static pages without full rebuild |
| **CDN** | Content Delivery Network - distributed server network for fast content delivery |
| **Portable Text** | Sanity's rich text format, platform-agnostic structured content |

### Appendix C: Sample GROQ Queries

```groq
// Fetch hero section
*[_type == "heroSection"][0] {
  headline,
  subheadline,
  ctaButtons,
  "backgroundImage": backgroundImage.asset->url,
  stats
}

// Fetch all projects
*[_type == "project"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  location,
  category,
  status,
  "featuredImage": featuredImage.asset->url,
  featured
}

// Fetch team members
*[_type == "teamMember"] | order(order asc) {
  name,
  title,
  bio,
  "photo": photo.asset->url
}
```

---

## Contact & Questions

For questions about this PRD, please contact:
- **Product Owner:** [Your Name] - [email]
- **Technical Lead:** [Developer Name] - [email]
- **Project Manager:** [PM Name] - [email]

---

**Document Status:** 📝 Draft | Ready for Review  
**Next Steps:** Review → Approval → Implementation Kickoff

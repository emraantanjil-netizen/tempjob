# 📱 Screen-by-Screen Implementation Guide

**Priority Level**: Implementation Guide for All 7+ Screens  
**Est. Dev Time**: 20-30 hours (one developer, mobile-first)  
**Framework**: Tailwind CSS v3 + HTML  
**Backend**: Express.js at http://10.0.2.2:4000  

---

## Quick Reference: Build Priority

**Phase 1 Priority (Shortest to Longest)**:
1. **Login Screen** (1-2 hours) - Simplest, 2 fields form
2. **Register Screen** (2-3 hours) - Multi-field form, same patterns
3. **Job List Screen** (2-3 hours) - Lists + filtering
4. **Job Detail Screen** (2-3 hours) - Detail + apply form
5. **Profile Screen** (2-3 hours) - Mixed content layout
6. **Post Job Screen** (3-4 hours) - Stepper + multi-step form
7. **My Applications Screen** (2-3 hours) - List variation

---

## SCREEN 1: LOGIN SCREEN

### Design Overview
- Very simple: logo, title, 2 input fields, 1 button, sign up link
- Est. Dev Time: 1-2 hours
- File: `Login Screen.html` (812px × 849px)

### Layout Structure
```
Header (sticky, 70px)
├─ Logo + Title
└─ Notification icon

Main Content (centered, full-height flex)
├─ Logo (circle, 40px)
├─ Title "Temp Job Marketplace" (18px, blue)
├─ Subtitle "Sign In" (30px, bold)
├─ Form Container
│  ├─ Email Input
│  ├─ Password Input
│  ├─ "Remember Me" checkbox
│  └─ Sign In Button
├─ Divider "Or"
├─ Social Login (optional)
└─ Sign Up Link (bottom)
```

### Key Elements

**Email Input**:
```html
<div class="flex flex-col gap-2">
  <label class="text-xs font-bold uppercase text-gray-600">Email</label>
  <input
    type="email"
    placeholder="your@email.com"
    class="h-11 px-4 py-3 rounded-lg bg-blue-50
           border-0 focus:ring-2 focus:ring-blue-400/40"
  />
</div>
```

**Password Input**:
```html
<div class="flex flex-col gap-2">
  <label class="text-xs font-bold uppercase text-gray-600">Password</label>
  <input
    type="password"
    placeholder="••••••••"
    class="h-11 px-4 py-3 rounded-lg bg-blue-50
           border-0 focus:ring-2 focus:ring-blue-400/40"
  />
</div>
```

**Sign In Button**:
```html
<button
  class="w-full h-12 rounded-lg
         bg-gradient-to-r from-blue-700 to-blue-500
         text-white font-semibold
         hover:shadow-lg hover:scale-102
         active:scale-95
         transition-all duration-150
         focus:ring-2 focus:ring-blue-400/40">
  Sign In
</button>
```

### Form Validation
- Email: Required, valid format
- Password: Required, min 8 chars
- Show error messages below each field if invalid
- Disable button while submitting

### Backend Integration
```javascript
POST /api/auth/login
Body: { email, password }
Response: { token, user: { id, name, email } }
Error: { message, code }
```

---

## SCREEN 2: REGISTER SCREEN

### Design Overview
- Multi-step form (3 steps visible)
- Step 1: Name + email
- Step 2: Password + phone
- Step 3: Skills + location
- Est. Dev Time: 2-3 hours

### Layout Structure
```
Stepper (3 steps)
├─ Step 1 (active)
├─ Step 2 (inactive)
└─ Step 3 (inactive)

Form Content (changes per step)

Action Buttons
├─ Back (disabled on step 1)
└─ Next / Complete
```

### Step 1: Basic Info

**Fields**:
- Full Name (required, text input)
- Email (required, email input)
- Phone (required, tel input)

```html
<form class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase">Full Name</label>
    <input placeholder="Your full name"
           class="h-11 px-4 py-3 rounded-lg bg-blue-50
                  border-0 focus:ring-2 focus:ring-blue-400/40" />
  </div>
  
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase">Email</label>
    <input type="email" placeholder="your@email.com"
           class="h-11 px-4 py-3 rounded-lg bg-blue-50
                  border-0 focus:ring-2 focus:ring-blue-400/40" />
  </div>
  
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase">Phone</label>
    <input type="tel" placeholder="+880 17XX XXXXXX"
           class="h-11 px-4 py-3 rounded-lg bg-blue-50
                  border-0 focus:ring-2 focus:ring-blue-400/40" />
  </div>
</form>
```

### Step 2: Security

**Fields**:
- Password (required, 8+ chars, show/hide toggle)
- Confirm Password (required, must match)
- Password Strength Indicator

### Step 3: Profile

**Fields**:
- Primary Skillset (multi-select dropdown)
- Location (text input or select)
- Job Category Preference (select)
- Agree to Terms (checkbox)

### Stepper Component

```html
<div class="flex items-center justify-between gap-4 mb-8">
  <!-- Step 1 -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-blue-700
                text-white font-bold flex items-center
                justify-center">1</div>
    <span class="text-xs text-gray-600 mt-2">Basic Info</span>
  </div>
  
  <div class="flex-1 h-1 bg-gray-300"></div>
  
  <!-- Step 2 -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-gray-300
                text-gray-600 font-bold flex items-center
                justify-center">2</div>
    <span class="text-xs text-gray-600 mt-2">Security</span>
  </div>
  
  <div class="flex-1 h-1 bg-gray-300"></div>
  
  <!-- Step 3 -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-gray-300
                text-gray-600 font-bold flex items-center
                justify-center">3</div>
    <span class="text-xs text-gray-600 mt-2">Profile</span>
  </div>
</div>
```

### Form Navigation

```html
<div class="flex gap-4 mt-8">
  <button
    onclick="previousStep()"
    disabled={step === 1}
    class="flex-1 h-12 px-4 rounded-lg border border-gray-300
           text-gray-700 font-semibold
           disabled:opacity-50 disabled:cursor-not-allowed
           hover:bg-gray-100 transition-colors">
    Back
  </button>
  
  <button
    onclick="nextStep()"
    class="flex-1 h-12 px-4 rounded-lg
           bg-blue-700 text-white font-semibold
           hover:bg-blue-600 active:bg-blue-800
           transition-colors">
    {step === 3 ? "Complete" : "Next"}
  </button>
</div>
```

### Backend Integration
```
POST /api/auth/register
Body: { name, email, phone, password, skills, location, category }
```

---

## SCREEN 3: JOB LIST SCREEN

### Design Overview
- Header with search + filters
- Search inputs: job title, location
- Filter chips: All Jobs, Delivery, Retail, etc.
- Job cards in vertical list
- Bottom navigation
- Est. Dev Time: 2-3 hours

### Layout Structure
```
Header (sticky)
├─ Logo + title
└─ Notification icon

Search Section
├─ Job title input (search icon)
├─ Location input (location icon)
└─ Search Jobs button

Filter Chips
├─ All Jobs (active, blue background)
├─ Delivery
├─ Retail
├─ Warehouse
├─ Hospitality
└─ Events

Job Card List
├─ Card 1 (with verified badge)
├─ Card 2
├─ Card 3
├─ Load more button
└─ Notification banner at bottom

Bottom Navigation (sticky)
├─ Home (inactive)
├─ Search (active, blue)
├─ + Post
├─ Applications
└─ Profile
```

### Search Section HTML

```html
<section class="flex flex-col gap-4 px-6 py-8">
  <h1 class="text-3xl font-bold text-gray-900">Find your next gig</h1>
  
  <!-- Search Container -->
  <div class="flex flex-col gap-4 p-2 rounded-lg bg-white border border-gray-200">
    <!-- Job Title Input -->
    <div class="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50">
      <span class="text-gray-500">🔍</span>
      <input
        type="text"
        placeholder="Search job titles or keywords..."
        class="flex-1 bg-transparent border-0 text-base
               placeholder-gray-500 focus:outline-none"
      />
    </div>
    
    <!-- Location Input -->
    <div class="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50">
      <span class="text-gray-500">📍</span>
      <input
        type="text"
        placeholder="Dhaka, Bangladesh"
        class="flex-1 bg-transparent border-0 text-base
               placeholder-gray-500 focus:outline-none"
      />
    </div>
    
    <!-- Search Button -->
    <button class="w-full h-12 px-8 rounded-lg
                  bg-blue-700 text-white font-semibold
                  hover:bg-blue-600 transition-colors">
      Search Jobs
    </button>
  </div>
</section>
```

### Filter Chips

```html
<section class="flex gap-3 px-6 py-4 overflow-x-auto">
  <!-- Active Filter -->
  <button class="px-4 py-2 rounded-full
                bg-blue-700 text-white font-medium
                whitespace-nowrap">
    All Jobs
  </button>
  
  <!-- Inactive Filters -->
  <button class="px-4 py-2 rounded-full
                bg-blue-100 text-blue-700 font-medium
                whitespace-nowrap hover:bg-blue-200
                transition-colors">
    Delivery
  </button>
  
  <button class="px-4 py-2 rounded-full
                bg-blue-100 text-blue-700 font-medium
                whitespace-nowrap hover:bg-blue-200
                transition-colors">
    Retail
  </button>
  
  <!-- More buttons... -->
</section>
```

### Job Card Component

```html
<article class="mx-6 mb-6 p-6 rounded-lg bg-white
               border border-gray-200 shadow-sm">
  
  <!-- Header with Badge -->
  <div class="flex justify-between items-start mb-4">
    <div class="flex items-center gap-3">
      <img src="company-logo.png"
           class="w-10 h-10 rounded" />
      <div>
        <h3 class="font-bold text-gray-900">Senior Event Logistics Coordinator</h3>
        <p class="text-sm text-gray-600">Dhaka Convention Center</p>
      </div>
    </div>
    
    <span class="px-3 py-1 rounded-full bg-green-200
               text-green-800 text-xs font-bold">
      ✓ Verified
    </span>
  </div>
  
  <!-- Content Grid -->
  <div class="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
    <div>
      <p class="text-xs text-gray-600 uppercase">Daily Wage</p>
      <p class="text-lg font-bold text-blue-700">৳ 4,500</p>
    </div>
    <div>
      <p class="text-xs text-gray-600 uppercase">Location</p>
      <p class="text-lg font-bold text-gray-900">Purbachal</p>
    </div>
    <div>
      <p class="text-xs text-gray-600 uppercase">Applicants</p>
      <p class="text-lg font-bold text-green-700">24 Applied</p>
    </div>
    <div>
      <p class="text-xs text-gray-600 uppercase">Posted</p>
      <p class="text-lg font-bold text-gray-900">2h ago</p>
    </div>
  </div>
  
  <!-- Footer with CTA -->
  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
    <div class="flex gap-1">
      <img class="w-8 h-8 rounded-full" src="applicant1.jpg" />
      <img class="w-8 h-8 rounded-full" src="applicant2.jpg" />
      <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center
                 justify-center text-xs font-bold text-gray-900">
        +12
      </div>
    </div>
    
    <button class="h-12 px-10 rounded-lg
                  bg-blue-600 text-white font-semibold
                  hover:bg-blue-700 transition-colors">
      Apply Now
    </button>
  </div>
</article>
```

### Bottom Navigation

```html
<nav class="fixed bottom-0 left-0 right-0
          h-20 bg-white border-t border-gray-200
          rounded-t-2xl flex items-center justify-around">
  
  <a href="#"
     class="flex flex-col items-center gap-1 py-2 px-3
            text-gray-600 hover:text-gray-900">
    <span class="text-2xl">🏠</span>
    <span class="text-xs font-medium">Home</span>
  </a>
  
  <a href="#"
     class="flex flex-col items-center gap-1 py-2 px-4
            bg-blue-700 text-white rounded-xl
            hover:bg-blue-600">
    <span class="text-2xl">🔍</span>
    <span class="text-xs font-semibold">Search</span>
  </a>
  
  <!-- ... more nav items ... -->
</nav>
```

### Backend Integration
```
GET /api/jobs?search=&location=&category=&page=
Response: { jobs: [...], total, page }

GET /api/jobs/categories
Response: { categories: ['Delivery', 'Retail', ...] }
```

---

## SCREEN 4: JOB DETAIL SCREEN

### Design Overview
- Full job details + application form (bottom sheet)
- Header, job description, requirements, project info
- Est. Dev Time: 2-3 hours

### Layout Structure
```
Header (sticky)
├─ Back button
└─ Company name

Main Content
├─ Category badge
├─ Job title
├─ Location, duration, employment type
├─ Compensation card
├─ Project images/cards
├─ Project vision
├─ Requirements list
├─ Skills/tech tags
└─ Application pulse info

Bottom Actions
├─ Bookmark button
└─ Apply Now button (sticky)

Modal (on Apply click)
├─ Project Proposal form
├─ Expected retainer input
├─ Start date picker
├─ Cover note textarea
├─ File upload
└─ Submit/Discard buttons
```

### Key Components

**Compensation Card**:
```html
<div class="mx-6 mb-6 p-6 rounded-lg border border-gray-200
           bg-white">
  <p class="text-xs uppercase font-bold text-gray-600">Target Compensation</p>
  <p class="text-2xl font-bold text-green-700 my-2">৳180k - 250k</p>
  <p class="text-xs uppercase font-medium text-gray-600">Monthly Retainer</p>
</div>
```

**Requirement Item**:
```html
<div class="flex gap-4 p-6 rounded-lg bg-gray-100
           border-0">
  <div class="flex-shrink-0">
    <span class="text-2xl">🎓</span>
  </div>
  <div>
    <h4 class="font-bold text-gray-900">Masters in Architecture</h4>
    <p class="text-sm text-gray-600">Top-tier university accreditation required.</p>
  </div>
</div>
```

**Application Form Modal**:
```html
<div class="fixed bottom-0 left-0 right-0
           bg-white rounded-t-3xl shadow-2xl
           max-h-[90vh] overflow-y-auto p-8 z-50">
  
  <h2 class="text-2xl font-bold text-gray-900 mb-6">Project Proposal</h2>
  
  <form class="flex flex-col gap-6">
    <!-- Expected Retainer -->
    <div class="flex flex-col gap-2">
      <label class="text-xs font-bold uppercase text-gray-600">
        Expected Retainer (৳)
      </label>
      <input
        type="number"
        placeholder="220,000"
        class="h-14 px-4 py-3 rounded-lg bg-gray-100
               border-0 focus:ring-2 focus:ring-green-400/40"
      />
    </div>
    
    <!-- Earliest Start Date -->
    <div class="flex flex-col gap-2">
      <label class="text-xs font-bold uppercase text-gray-600">
        Earliest Start Date
      </label>
      <input
        type="date"
        class="h-14 px-4 py-3 rounded-lg bg-gray-100
               border-0 focus:ring-2 focus:ring-green-400/40"
      />
    </div>
    
    <!-- Cover Note -->
    <div class="flex flex-col gap-2">
      <label class="text-xs font-bold uppercase text-gray-600">
        Executive Summary / Cover Note
      </label>
      <textarea
        rows="6"
        placeholder="Detail your approach to the Atrium Project..."
        class="px-4 py-3 rounded-lg bg-gray-100
               border-0 focus:ring-2 focus:ring-green-400/40
               resize-none"
      ></textarea>
    </div>
    
    <!-- File Upload -->
    <div class="border-2 border-dashed border-gray-300
               rounded-2xl bg-gray-50 p-8 text-center
               cursor-pointer hover:bg-gray-100">
      <span class="text-4xl text-gray-400 block mb-2">📁</span>
      <h3 class="font-semibold text-gray-900">Upload Portfolio & CV</h3>
      <p class="text-sm text-gray-600">PDF or ZIP format (max 25MB)</p>
    </div>
    
    <!-- Action Buttons -->
    <div class="flex gap-4 pt-4 border-t border-gray-200">
      <button
        type="button"
        onclick="closeModal()"
        class="flex-1 h-12 px-4 rounded-lg
               bg-white border border-gray-300
               text-gray-700 font-semibold
               hover:bg-gray-100 transition-colors">
        Discard
      </button>
      
      <button
        type="submit"
        class="flex-1 h-12 px-4 rounded-lg
               bg-green-700 text-white font-semibold
               hover:bg-green-600 transition-colors">
        Submit Proposition
      </button>
    </div>
  </form>
</div>
```

---

## SCREEN 5: PROFILE SCREEN

### Design Overview
- User profile with avatar, stats, skills
- Trust score + security badges
- Recent feedback from clients
- Settings section
- Est. Dev Time: 2-3 hours

### Layout Structure
```
Header (sticky)

Profile Card
├─ Large avatar (128px)
├─ Name
├─ Title + location
├─ Rating (4.9 stars, 124 reviews)
├─ Hourly rate
├─ Edit Profile + Share Portfolio buttons

Stats Section
├─ Total Earnings (large, with trending)
├─ Skills list (pills)

Feedback Section
├─ Recent Job Feedback title
├─ Feedback items (avatar + comment + date)

Trust Score Section
├─ Trust score bar
├─ Verification checklist
│  ├─ Identity Verified ✓
│  ├─ Background Check ✓
│  └─ NID Linked ✓

Settings Navigation

Upgrade Banner

Bottom Navigation
```

### Profile Card HTML

```html
<section class="mx-6 mb-6 p-8 rounded-lg bg-white
               shadow-sm border border-gray-200">
  
  <!-- Avatar with Badge -->
  <div class="flex justify-center mb-6 relative">
    <img src="profile.jpg"
         class="w-32 h-32 rounded-2xl object-cover" />
    <span class="absolute bottom-0 right-0 px-3 py-1
               rounded-full bg-green-300 text-green-800
               text-xs font-semibold flex items-center gap-1">
      ✓ Verified Pro
    </span>
  </div>
  
  <!-- Info -->
  <div class="text-center mb-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Ariful Islam</h1>
    <p class="text-gray-600">Senior Electrical Technician • Dhaka, BD</p>
  </div>
  
  <!-- Stats -->
  <div class="flex justify-center gap-3 mb-6">
    <div class="px-4 py-2 rounded-lg bg-blue-50
               text-center flex items-center gap-2">
      <span class="text-blue-700 font-semibold">⭐ 4.9</span>
      <span class="text-blue-700 text-sm">(124 reviews)</span>
    </div>
    <div class="px-4 py-2 rounded-lg bg-green-50
               text-center flex items-center gap-2">
      <span class="text-green-700 font-semibold">৳1,200/hr</span>
    </div>
  </div>
  
  <!-- Buttons -->
  <div class="flex flex-col gap-3">
    <button class="h-11 rounded-lg bg-blue-700 text-white
                  font-semibold hover:bg-blue-600">
      Edit Profile
    </button>
    <button class="h-11 rounded-lg bg-blue-100 text-blue-700
                  font-semibold hover:bg-blue-200">
      Share Portfolio
    </button>
  </div>
</section>
```

### Earnings & Skills Section

```html
<section class="mx-6 mb-6 p-6 rounded-lg bg-gradient-to-r
               from-green-700 to-green-600 text-white">
  <p class="text-sm font-medium mb-2">Total Earnings</p>
  <h2 class="text-4xl font-bold mb-2">৳84,200</h2>
  <div class="flex items-center gap-2 text-sm">
    <span class="text-sm">📈</span>
    <span>+12% from last month</span>
  </div>
</section>

<section class="mx-6 mb-6 p-6 rounded-lg bg-white
               border border-gray-200">
  <h3 class="flex items-center gap-2 mb-4 text-lg font-bold
            text-gray-900">
    <span class="text-2xl">🧠</span>
    Core Skills
  </h3>
  
  <div class="flex flex-wrap gap-2">
    <span class="px-3 py-1 rounded-lg bg-blue-100
               text-gray-700 text-xs font-medium">
      Industrial Wiring
    </span>
    <span class="px-3 py-1 rounded-lg bg-blue-100
               text-gray-700 text-xs font-medium">
      Home Automation
    </span>
    <span class="px-3 py-1 rounded-lg bg-blue-100
               text-gray-700 text-xs font-medium">
      Solar Panel Setup
    </span>
    <!-- More skills... -->
  </div>
</section>
```

### Feedback Section

```html
<section class="mx-6 mb-6 p-6 rounded-lg bg-white
               border border-gray-200">
  <div class="flex justify-between items-center mb-4">
    <h3 class="text-lg font-bold text-gray-900">Recent Job Feedback</h3>
    <a href="#" class="text-blue-700 text-sm hover:underline">View All</a>
  </div>
  
  <div class="flex flex-col gap-6">
    <!-- Feedback Item -->
    <div class="flex gap-3 pb-6 border-b border-gray-200">
      <div class="w-10 h-10 rounded-full bg-blue-100
                 text-blue-700 font-bold flex items-center
                 justify-center flex-shrink-0">
        KM
      </div>
      
      <div class="flex-1">
        <div class="flex justify-between items-start mb-1">
          <h4 class="font-bold text-gray-900">Karim Mohammed</h4>
          <span class="text-xs text-gray-500">2 days ago</span>
        </div>
        <p class="text-sm text-gray-700">
          "Ariful was extremely professional. He fixed the entire office
          wiring in record time. Highly recommended for industrial projects."
        </p>
      </div>
    </div>
    
    <!-- More feedback items... -->
  </div>
</section>
```

---

## SCREEN 6: POST JOB SCREEN (FORM FLOW)

### Design Overview
- 3-step form for posting a job
- Step 1: Job details and requirements
- Step 2: Compensation and benefits
- Step 3: Review and publish
- Est. Dev Time: 3-4 hours

### Step Progression
```
Step 1: Job Details (12-15 form fields)
├─ Job title
├─ Job category
├─ Job description
├─ Skills required
├─ Experience level
├─ Employment type
├─ Location
├─ Urgency (Urgent checkbox)
├─ Number of positions
└─ Application deadline

Step 2: Compensation (4-6 fields)
├─ Salary type (Fixed, Hourly, Range)
├─ Minimum salary
├─ Maximum salary
├─ Currency
├─ Benefits (checkboxes)
└─ Bonuses/Incentives

Step 3: Review
├─ Preview of job listing
├─ Confirm details
└─ Publish button
```

### Step 1 Form

```html
<form class="flex flex-col gap-6">
  <!-- Job Title -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Job Title *
    </label>
    <input
      type="text"
      placeholder="e.g., Senior Engineer, Product Manager"
      class="h-11 px-4 py-3 rounded-lg bg-blue-50
             border-0 focus:ring-2 focus:ring-blue-400/40"
    />
  </div>
  
  <!-- Job Category -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Job Category *
    </label>
    <select
      class="h-11 px-4 py-3 rounded-lg bg-blue-50
             border-0 focus:ring-2 focus:ring-blue-400/40
             cursor-pointer">
      <option>Select a category...</option>
      <option>Engineering</option>
      <option>Design</option>
      <option>Marketing</option>
      <option>Sales</option>
    </select>
  </div>
  
  <!-- Job Description -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Job Description *
    </label>
    <textarea
      rows="6"
      placeholder="Detail what the role entails..."
      class="px-4 py-3 rounded-lg bg-blue-50
             border-0 focus:ring-2 focus:ring-blue-400/40
             resize-none"
    ></textarea>
  </div>
  
  <!-- Experience Level -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Minimum Experience *
    </label>
    <select
      class="h-11 px-4 py-3 rounded-lg bg-blue-50
             border-0 focus:ring-2 focus:ring-blue-400/40">
      <option>Entry level</option>
      <option>Junior (1-3 years)</option>
      <option>Mid-level (3-5 years)</option>
      <option>Senior (5+ years)</option>
    </select>
  </div>
  
  <!-- Employment Type -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Employment Type *
    </label>
    <div class="flex gap-4">
      <label class="flex items-center gap-2">
        <input type="radio" name="employment" value="full-time" />
        <span>Full-time</span>
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" name="employment" value="part-time" />
        <span>Part-time</span>
      </label>
      <label class="flex items-center gap-2">
        <input type="radio" name="employment" value="contract" />
        <span>Contract</span>
      </label>
    </div>
  </div>
  
  <!-- Location -->
  <div class="flex flex-col gap-2">
    <label class="text-xs font-bold uppercase text-gray-600">
      Job Location *
    </label>
    <input
      type="text"
      placeholder="e.g., Dhaka, Bangladesh"
      class="h-11 px-4 py-3 rounded-lg bg-blue-50
             border-0 focus:ring-2 focus:ring-blue-400/40"
    />
  </div>
  
  <!-- More fields... -->
</form>
```

### Navigation Between Steps

```html
<div class="flex gap-4 mt-8 pt-6 border-t border-gray-200">
  <button
    onclick="previousStep()"
    disabled={step === 1}
    class="flex-1 h-12 px-4 rounded-lg border border-gray-300
           text-gray-700 font-semibold
           disabled:opacity-50 disabled:cursor-not-allowed
           hover:bg-gray-100 transition-colors">
    Back
  </button>
  
  <button
    onclick="nextStep()"
    disabled={!isStepValid()}
    class="flex-1 h-12 px-4 rounded-lg
           bg-blue-700 text-white font-semibold
           disabled:opacity-50 disabled:cursor-not-allowed
           hover:bg-blue-600 transition-colors">
    {step === 3 ? "Publish Job" : "Next"}
  </button>
</div>
```

### Backend Integration
```
POST /api/jobs/create
Body: {
  title, category, description,
  experience, employmentType, location,
  salaryMin, salaryMax, currency,
  benefits, urgency, positions,
  deadline
}
Response: { jobId, slug, publishedAt }
```

---

## SCREEN 7: MY APPLICATIONS SCREEN

### Design Overview
- List of user's applications with status
- Filter by status (Pending, Accepted, Rejected)
- Each card shows job, company, date applied, status
- Est. Dev Time: 2 hours

### Card Structure
```
Each Application Card:
├─ Company logo (40px)
├─ Job title + company
├─ Application date + status badge
├─ Salary range
├─ Action buttons (View, Message)
└─ Status indicator (pulse/badge)
```

### Implementation

```html
<div class="mx-6 mb-6 p-6 rounded-lg bg-white
           border border-gray-200 shadow-sm">
  
  <div class="flex items-start gap-4 mb-4">
    <img src="company.jpg"
         class="w-12 h-12 rounded" />
    
    <div class="flex-1">
      <h3 class="font-bold text-gray-900">
        Senior Engineer
      </h3>
      <p class="text-sm text-gray-600">
        Acme Corp • Applied 2 days ago
      </p>
    </div>
    
    <!-- Status Badge -->
    <span class="px-3 py-1 rounded-full bg-blue-100
               text-blue-700 text-xs font-semibold">
      Pending Review
    </span>
  </div>
  
  <!-- Salary -->
  <div class="py-4 border-t border-b border-gray-200 mb-4">
    <p class="text-xs text-gray-600 uppercase mb-1">Salary</p>
    <p class="text-lg font-bold text-blue-700">$80,000 - $120,000</p>
  </div>
  
  <!-- Actions -->
  <div class="flex gap-3">
    <button class="flex-1 h-10 px-4 rounded-lg
                  border border-blue-700 text-blue-700
                  font-semibold hover:bg-blue-50
                  transition-colors">
      View Details
    </button>
    <button class="flex-1 h-10 px-4 rounded-lg
                  bg-blue-700 text-white font-semibold
                  hover:bg-blue-600 transition-colors">
      Message Employer
    </button>
  </div>
</div>
```

---

## 📚 Additional Screens (Similar Patterns)

### My Applications Screen
- Same card pattern as Job List
- Use status badges instead of filter chips
- Filter buttons: All, Pending (blue), Accepted (green), Rejected (red)

### Saved Jobs Screen
- Same job card as Job List
- Add "Remove" button instead of "Apply Now"
- Show when saved in card

### Profile Settings
- List of settings items (Settings menu pattern)
- Different sections: Wallet, Privacy, Language, Help
- Side-by-side toggle switches for boolean settings

### Track Applications Screen
- Application status with timeline
- Step indicators: Applied → Interviewing → Offered → Accepted
- Timeline with dates and transitions

---

## 🎯 Common Patterns to Reuse

### Button Styles
```html
<!-- Primary Full Width -->
<button class="w-full h-12 px-6 rounded-lg
               bg-blue-700 text-white font-semibold
               hover:bg-blue-600 active:bg-blue-800
               transition-all duration-150">

<!-- Secondary Outline -->
<button class="h-12 px-6 border border-gray-300
               bg-white text-gray-700 font-semibold
               hover:bg-gray-50">

<!-- Icon Button -->
<button class="w-10 h-10 rounded-full flex items-center
               justify-center hover:bg-gray-100">
```

### Input Styles
```html
<!-- Standard Input -->
<input class="w-full h-11 px-4 py-3 rounded-lg
             bg-blue-50 border-0
             focus:ring-2 focus:ring-blue-400/40
             transition-all" />

<!-- Disabled Input -->
<input disabled
       class="w-full h-11 px-4 py-3 rounded-lg
              bg-gray-200 text-gray-500
              border-0 cursor-not-allowed" />
```

### Card Containers
```html
<div class="rounded-lg bg-white border border-gray-200
           shadow-sm shadow-blue-900/5 p-6">
  <!-- Content -->
</div>
```

---

## ✅ Implementation Checklist

**Phase 1 (Days 1-3)**:
- [ ] Setup Tailwind CSS + HTML project structure
- [ ] Create component library (buttons, inputs, cards)
- [ ] Build Login screen
- [ ] Build Register screen (3-step form)

**Phase 2 (Days 4-6)**:
- [ ] Build Job List screen with filtering
- [ ] Build Job Detail screen
- [ ] Build Profile screen

**Phase 3 (Days 7-10)**:
- [ ] Build Post Job screen (3-step form)
- [ ] Build My Applications screen
- [ ] Setup backend API integration
- [ ] Test responsiveness

**Phase 4 (Days 11-15)**:
- [ ] Build remaining screens
- [ ] Form validation
- [ ] Error handling
- [ ] Loading states
- [ ] Testing & bug fixes

---

**Total Estimated Timeline**: 20-30 hours for one developer  
**Ready for**: Immediate handoff to development team ✅


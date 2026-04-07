# 🎛️ Component Library Specifications

**Source**: Extracted from 34 Figma Design Files  
**Framework**: Tailwind CSS v3  
**Design System**: Material Design 3  
**Status**: Ready for Implementation  

---

## Component Inventory

Total Components Identified: **15 core types** with **50+ variants**

---

## 1️⃣ INPUT COMPONENT

### Specifications

**Standard Text Input**
```
Height: 44px
Padding: 12px (vertical), 16px (horizontal)
Border Radius: 6px (rounded)
Background: #EFF4FF (surface-low)
Border: None (by default)
Focus: ring-2 ring-primary/40 (blue outline, 2px)
Text Color: #121C2A (primary-text)
Placeholder Color: #737686 (tertiary-text)
Font: Inter, 16px, weight 400
Transition: all 150ms ease
```

**States**:
- **Default** (empty): Light blue background, placeholder text
- **Filled**: Light blue background, dark text
- **Focus**: 2px blue ring around field
- **Disabled**: Gray background, faded text
- **Error**: Red ring (1px or 2px), red text label

**Found In Designs**: 30+ instances
- Job search (2 fields: job title + location)
- Register form (5+ fields)
- Login form (2 fields)
- Post Job form (8+ fields)
- Profile edit (10+ fields)
- Chat search
- Application search

**Tailwind Class Example**:
```html
<input 
  type="text"
  class="w-full h-11 px-4 py-3 rounded-lg bg-blue-50
         text-base text-slate-800 placeholder-slate-600
         border-0 focus:ring-2 focus:ring-blue-400/40
         transition-all duration-150 ease-out
         disabled:bg-gray-200 disabled:text-gray-500"
  placeholder="Search job titles or keywords..."
/>
```

---

### Textarea

**Specifications**:
- Height: 120-152px (depends on content)
- Padding: 16px
- Border Radius: 6px
- Background: #E1E3E1 (light gray)
- Font: Inter, 16px, weight 400
- Resize: vertical only

**Found In**: 
- Executive summary (Project Proposal form)
- Job description
- Application note

**Tailwind Class Example**:
```html
<textarea
  class="w-full px-4 py-4 rounded-lg bg-gray-100
         text-base text-gray-800 placeholder-gray-600
         border-0 focus:ring-2 focus:ring-blue-400/40
         resize-y transition-all duration-150"
  rows="8"
  placeholder="Detail your approach..."
></textarea>
```

---

### Select / Dropdown

**Specifications**:
- Height: 44-56px
- Padding: 16px
- Border Radius: 8px
- Background: #F2F4F2 (light gray-green)
- Has dropdown arrow icon
- Text: #3F4944 (dark gray)

**Found In**: 
- Job type selector
- Category filters
- Experience level
- Employment type

**Tailwind Class Example**:
```html
<select
  class="w-full h-12 px-4 rounded-lg bg-gray-100
         text-base text-gray-800
         border-0 focus:ring-2 focus:ring-green-400/40
         appearance-none transition-all duration-150
         cursor-pointer"
>
  <option>Select an option</option>
  <option>Option 1</option>
</select>
```

---

### File Upload Input

**Specifications**:
- Layout: Centered, icon + text
- Dimensions: 281px × 168px
- Border: 2px dashed #EBEFED
- Border Radius: 16px
- Background: #F2F4F2 (light gray)
- Icon: upload_file (Material Icon, 36px, #99B9B0)
- Text: "Upload Portfolio & CV" (bold, 16px)
- Subtext: "PDF or ZIP format (max 25MB)" (12px, gray)

**Found In**:
- Job application form (Project Proposal)
- Profile upload
- Portfolio submission

**Tailwind Class Example**:
```html
<div class="w-full border-2 border-dashed border-gray-300
           rounded-2xl bg-gray-50 p-8 text-center
           cursor-pointer hover:bg-gray-100 transition">
  <div class="text-4xl text-gray-300 mb-4">📁</div>
  <h3 class="text-base font-semibold text-gray-900">Upload Portfolio & CV</h3>
  <p class="text-sm text-gray-600">PDF or ZIP format (max 25MB)</p>
</div>
```

---

## 2️⃣ BUTTON COMPONENT

### Primary Button

**Specifications**:
```
Height: 44-56px (flexible based on padding)
Width: Auto (content-based) or full-width
Padding: 12-16px (vertical), 32-48px (horizontal)
Border Radius: 6-8px for form buttons, 12px for main CTAs
Background: Linear gradient from #004AC6 to #2563EB
Text Color: #FFFFFF
Font: Inter, weight 600-700, 14-16px
Shadow: shadow-lg shadow-blue-900/20 (when floating)
Hover: scale(1.02) + opacity increase
Active: scale(0.98) + darker shadow
Focus: ring-2 ring-primary/40
Transition: all 150-200ms ease
```

**Variants**:
- **Standard CTA**: 56px tall, full width, "Apply Now"
- **Form Button**: 48px tall, inline, "Submit", "Search"
- **Secondary Action**: 44px, smaller padding

**Found In Designs**: 50+ instances
- Job apply button (prominent, bottom-sticky)
- Form submission buttons
- Filter trigger
- Navigation actions

**Tailwind Class Example**:
```html
<!-- Primary CTA Button -->
<button
  class="w-full h-14 px-12 py-4 rounded-lg
         bg-gradient-to-r from-blue-700 to-blue-500
         text-white font-semibold text-base
         shadow-lg shadow-blue-900/20
         hover:scale-102 active:scale-95
         transition-all duration-150 ease-out
         focus:ring-2 focus:ring-blue-400/40"
>
  Apply Now
</button>

<!-- Form Button -->
<button
  class="h-12 px-8 rounded-lg
         bg-blue-700 text-white font-semibold text-sm
         hover:bg-blue-600 active:bg-blue-800
         transition-colors duration-150"
>
  Search Jobs
</button>
```

---

### Secondary Button

**Specifications**:
```
Height: 44-56px (same as primary)
Padding: 12-16px vertical, 24-32px horizontal
Background: #DEE9FC or #E1E3E1 (light gray/blue)
Text Color: #3F4944 (dark gray) or #004AC6 (blue)
Border: None
Shadow: None (flat design)
Hover: background darkens slightly
Active: background becomes darker
Transition: background 150ms ease
```

**Used For**:
- Secondary actions ("View Details", "Share Portfolio")
- Deselected filters
- Inactive navigation items

**Tailwind Class Example**:
```html
<!-- Secondary Button -->
<button
  class="h-12 px-8 rounded-lg
         bg-blue-100 text-blue-700
         font-semibold text-sm
         hover:bg-blue-200 active:bg-blue-300
         transition-colors duration-150"
>
  View Details
</button>
```

---

### Text/Link Button

**Specifications**:
```
No button styling (plain text)
Text Color: #004AC6 (primary blue)
Text Decoration: Underline on hover
Cursor: pointer
Font: Inter, 14px, weight 400
Hover: Underline added
Transition: text-decoration 150ms ease
```

**Found In**: 
- "View All" links
- "Learn More" actions
- Navigation links

---

### Icon Button

**Specifications**:
```
Size: 40-48px square
Border Radius: 9999px (fully circular)
Background: #DBE1FF (light blue) or transparent
Icon: Material Symbols, 24px
Icon Color: Primary color (#004AC6)
Hover: Background becomes slightly darker
Padding: 8px (icon centered inside)
```

**Tailwind Class Example**:
```html
<button
  class="w-12 h-12 rounded-full
         bg-blue-100 text-blue-700
         flex items-center justify-center
         hover:bg-blue-200
         transition-colors duration-150"
>
  <span class="text-2xl">❤️</span>
</button>
```

---

## 3️⃣ CARD COMPONENT

### Basic Card

**Specifications**:
```
Width: Full-width or fixed (312px on mobile)
Min-Height: Content-dependent
Padding: 24-32px
Border Radius: 8-12px (rounded-lg to rounded-xl)
Background: #FFFFFF (white)
Border: 1px solid #F5F7F6 (very faint, optional)
Shadow: shadow-sm shadow-blue-900/5 (subtle)
Margin/Spacing: gap-6 between cards, gap-4 inside

Interior Layout:
- Flex column
- Gap between sections: 16-24px
- Text spacing: 4px between label + value
```

**Card Variants Found**:

1. **Job Card**:
   - Company logo (40px, top-left)
   - Category badge (top-right corner)
   - Job title (20px, bold)
   - Company name + type (14px, gray)
   - Skills/tech tags (11px, gray background)
   - Salary + applicant count (18px, bold)
   - Footer: Action buttons

2. **Simple Card** (Profile feedback):
   - Small avatar (40px circle, background)
   - Initials or name
   - Name + timestamp
   - Feedback text (italic quote)
   - Bottom section divided with border

3. **Featured Card**:
   - Full dark background (#00503A green)
   - White text
   - Large padding (32px)
   - Icon/image on one side
   - CTA button at bottom

**Tailwind Class Example**:
```html
<div class="rounded-lg bg-white border border-gray-100
           shadow-sm shadow-blue-900/5 p-6">
  <div class="flex gap-4">
    <img src="logo.png" class="w-10 h-10 rounded" />
    <div class="flex-1">
      <h3 class="text-lg font-bold text-gray-900">Senior Engineer</h3>
      <p class="text-sm text-gray-600">Company • Full-time</p>
    </div>
    <span class="px-3 py-1 rounded-full bg-orange-100 text-orange-700
                 text-xs font-semibold">Urgent</span>
  </div>
</div>
```

---

## 4️⃣ BADGE COMPONENT

### Success/Verified Badge

**Specifications**:
```
Height: 28-32px
Padding: 4px 12px
Border Radius: 9999px (fully rounded)
Background: #6CF8BB (light green)
Text Color: #00714D (dark green)
Font: Inter, 12px, weight 700
Icon: Optional (verified checkmark, 14px)
Display: Inline-flex, centered
```

**Variants Found**:
- **Verified Pro** (with checkmark icon)
- **Verified** (text only)
- **Success** (generic success state)

**Tailwind Class Example**:
```html
<span class="inline-flex items-center gap-1 px-3 py-1
            rounded-full bg-green-200 text-green-800
            text-xs font-bold">
  ✓ Verified
</span>
```

---

### Status Badges

**Urgent Badge**:
- Background: #FFDBCB (warm orange)
- Text: #341100 (dark brown)
- Font: 10px bold

**New Badge**:
- Background: #9EF4D0 (light green)
- Text: #00513B (dark green)

**Warehouse/Category Badge**:
- Background: #E5F0ED (pale green)
- Text: #4EDEA3 (medium green)
- Used for category labels

**Tailwind Class Examples**:
```html
<!-- Urgent -->
<span class="px-3 py-1 rounded-full bg-orange-100
            text-orange-900 text-xs font-bold">
  Urgent
</span>

<!-- New -->
<span class="px-3 py-1 rounded-full bg-green-200
            text-green-900 text-xs font-bold">
  New
</span>
```

---

## 5️⃣ NAVIGATION COMPONENT

### Header/Sticky Navigation

**Specifications**:
```
Height: 64-70px
Width: Full-width
Padding: 12px 24px
Background: #FFFFFF (white) or semi-transparent
Position: Sticky top (z-index: 50)
Display: Flex, space-between, items-center

Left Section:
- Logo (40px circle, #DBE1FF background)
- App title ("Temp Job Marketplace", 18px, bold)
- OR Back button + page title

Right Section:
- Notification button (40px, icon)
- Profile image or menu button

Responsive: 
- On desktop: More spacing, horizontal logo
- On mobile: Logo on left, actions on right
```

**Tailwind Class Example**:
```html
<header class="sticky top-0 h-16 px-6 py-3
              bg-white border-b border-gray-100
              flex items-center justify-between
              z-50">
  <div class="flex items-center gap-3">
    <img src="logo.svg" class="w-10 h-10 rounded-full" />
    <h1 class="text-lg font-bold text-blue-700">Temp Job Marketplace</h1>
  </div>
  <button class="w-10 h-10 rounded-full hover:bg-gray-100">
    🔔
  </button>
</header>
```

---

### Bottom Navigation (Mobile)

**Specifications**:
```
Height: 83px (with padding)
Position: Fixed bottom
Width: Full-width
Background: #FFFFFF (white)
Border: Top border 1px solid #DCDDDD
Border Radius: 24px 24px 0 0
Padding: 12px 16px 24px

Layout:
- 5 navigation items (Home, Search, Post, Apps, Profile)
- Flex, space-evenly
- Each tab: 48-56px height

Tab Styling:
- Icon (24px) centered
- Label (10px) below icon
- Active tab: White/full background color, colored text
- Inactive tab: Lighter gray, white text

Active Tab:
- Background color filled (e.g., #004AC6 blue or #006C49 green)
- Text color: White
- Rounded pill background (8-16px radius)
```

**Tab States**:
1. **Home** - Always inactive text
2. **Search** - Active (blue filled background)
3. **Post** - Inactive
4. **Applications** - Inactive
5. **Profile** - Inactive

**Tailwind Class Example**:
```html
<nav class="fixed bottom-0 left-0 right-0 
           h-20 bg-white border-t border-gray-200
           rounded-t-2xl flex items-center justify-around
           z-40">
  
  <!-- Inactive Tab -->
  <a href="#home"
     class="flex flex-col items-center gap-1 py-2 px-3
            text-gray-500 hover:text-gray-700">
    <span class="text-2xl">🏠</span>
    <span class="text-xs font-medium">Home</span>
  </a>

  <!-- Active Tab -->
  <a href="#search"
     class="flex flex-col items-center gap-1 py-2 px-4
            bg-blue-700 text-white rounded-xl
            hover:bg-blue-600">
    <span class="text-2xl">🔍</span>
    <span class="text-xs font-semibold">Search</span>
  </a>
  
</nav>
```

---

## 6️⃣ FORM GROUP COMPONENT

### Label + Input Pattern

**Specifications**:
```
Layout: Flex column, gap-2
Label:
  - Font: Inter, 12px, weight 700, uppercase
  - Color: #6F7A73 (gray) or #8C8D8D (darker)
  - Margin: 0
Input:
  - See Input Component specifications
Spacing:
  - Between label and input: 8px
  - Between form groups: 16-24px
Error State:
  - Label color becomes: #BA1A1A (red)
  - Input ring becomes: 2px ring-red-500
  - Error message: 12px, red text, below input
```

**Tailwind Class Example**:
```html
<div class="flex flex-col gap-2">
  <label class="text-xs font-bold uppercase text-gray-600">
    Email Address
  </label>
  <input
    type="email"
    class="h-11 px-4 py-3 rounded-lg bg-blue-50
           text-base text-gray-800
           border-0 focus:ring-2 focus:ring-blue-400/40
           transition-all"
    placeholder="your@email.com"
  />
  <p class="text-xs text-red-600">Invalid email format</p>
</div>
```

---

## 7️⃣ AVATAR COMPONENT

### Specifications

**Sizes**:
- **Small**: 32px × 32px (initials or icon)
- **Medium**: 64px × 64px (profile preview)
- **Large**: 128px × 128px (profile header)

**Styling**:
```
Border Radius: Full circle (9999px)
Background: Avatar color or placeholder
Border: 2px white border (for stacking)
Text (initials):
  - Font: Inter, weight 700, centered
  - Size: Proportional (8px for 32px, 16px for 128px)
Image:
  - Fill container
  - Object-fit: cover
```

**Variations**:
1. **With Image**: Photo fills circle
2. **Initials**: Colored background + text
3. **Icon**: Material Symbols centered
4. **Status Badge**: Small colored dot in corner

**Tailwind Class Example**:
```html
<!-- Avatar with Image -->
<img src="user.jpg"
     class="w-16 h-16 rounded-full object-cover
            border-2 border-white shadow-md" />

<!-- Avatar with Initials -->
<div class="w-16 h-16 rounded-full
           bg-blue-100 text-blue-700
           flex items-center justify-center
           font-bold text-lg border-2 border-white">
  KM
</div>

<!-- Avatar with Status -->
<div class="relative w-16 h-16">
  <img src="user.jpg"
       class="w-full h-full rounded-full object-cover" />
  <span class="absolute bottom-0 right-0
               w-5 h-5 rounded-full bg-green-500
               border-2 border-white"></span>
</div>
```

---

## 8️⃣ PROGRESS/STEPPER COMPONENT

### Stepper (Multi-step Form)

**Specifications Found** (Post Job Screen):
```
Layout: Horizontal, 3 visible steps
Type: Number-based steps (1, 2, 3)

Step Item:
- Size: 40-48px height
- Border Radius: Full circle
- Background (inactive): #E1E3E1 (gray)
- Background (active): #004AC6 (blue)
- Background (completed): #006C49 (green)
- Number/Icon: White, centered
- Font: Bold, 16px

Connector Line:
- Height: 2-4px
- Color: #E1E3E1 (gray) or #004AC6 (blue if in progress)

Label (below step):
- Font: 12px, weight 500, gray
- Margin-top: 8px
```

**Tailwind Class Example**:
```html
<div class="flex items-center gap-4 justify-between">
  <!-- Step 1: Active -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-blue-700
                text-white font-bold flex items-center
                justify-center text-lg">1</div>
    <span class="text-xs text-gray-600 mt-2">Job Details</span>
  </div>

  <!-- Connector -->
  <div class="flex-1 h-1 bg-gray-200"></div>

  <!-- Step 2: Inactive -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-gray-300
                text-gray-600 font-bold flex items-center
                justify-center text-lg">2</div>
    <span class="text-xs text-gray-600 mt-2">Compensation</span>
  </div>

  <!-- Connector -->
  <div class="flex-1 h-1 bg-gray-200"></div>

  <!-- Step 3: Inactive -->
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-gray-300
                text-gray-600 font-bold flex items-center
                justify-center text-lg">3</div>
    <span class="text-xs text-gray-600 mt-2">Review</span>
  </div>
</div>
```

---

## 9️⃣ MODAL/SHEET COMPONENT

### Bottom Sheet (Project Proposal Form)

**Specifications Found**:
```
Position: Fixed bottom
Width: Full-width (360px on mobile)
Height: Auto (content-dependent, starts at ~600px)
Border Radius: 32px 32px 0 0 (top corners rounded)
Background: #F8FAF7 (light surface)
Padding: 32px (vertical), 32px (horizontal)
Shadow: Elevation 5+
Scroll: Y-axis if content overflows
Exit: Swipe down or click close button

Header:
- Close button (28px, top-right)
- Title (30px, bold, dark)
- Subtitle (16px, gray)

Content:
- Flex column layout
- Gap between sections: 24-32px
- Full-width form fields

Footer:
- Two buttons (side-by-side or stacked)
- "Discard" (ghost button)
- "Submit" (primary button)
- Padding-top: 16px, border-top separator
```

**Tailwind Class Example**:
```html
<!-- Overlay -->
<div
  class="fixed inset-0 bg-black/30 z-40
         opacity-100 transition-opacity duration-300">
</div>

<!-- Sheet -->
<div
  class="fixed bottom-0 left-0 right-0
         bg-white rounded-t-3xl shadow-2xl z-50
         max-h-[90vh] overflow-y-auto px-8 py-8">
  
  <div class="flex justify-between mb-6">
    <h2 class="text-2xl font-bold text-gray-900">Apply Now</h2>
    <button class="text-2xl text-gray-600">✕</button>
  </div>
  
  <form class="flex flex-col gap-6">
    <!-- Form Content -->
  </form>
</div>
```

---

## 🔟 ADDITIONAL COMPONENTS

### Loading Skeleton

**Specifications**:
```
Placeholder for content while loading
Height: Match actual content height
Background: Animated gray gradient
Border Radius: Match content radius
Animation: Shimmer effect, 2-second loop
```

### Empty State

**Specifications**:
```
Centered layout
Icon/Illustration (if available)
Heading: 20px bold
Message: 14px gray text
Action: CTA button
Height: Full screen or container
```

### Toast/Notification

**Specifications**:
```
Position: Bottom-right or top-right
Padding: 16px 24px
Border Radius: 8px
Background: Color-based (success=green, error=red)
Text: White, 14px
Width: Max 320px
Auto-dismiss: 3-5 seconds
Animation: Slide in from bottom/right
```

---

## 📋 Component Copy-Paste Library

### Ready-to-Use Tailwind Snippets

All components include complete HTML + Tailwind examples above. Key patterns:

**Button Pattern**:
```html
<button class="h-12 px-8 rounded-lg bg-blue-700 text-white
             font-semibold hover:bg-blue-600 active:bg-blue-800
             transition-colors duration-150">
  Click Me
</button>
```

**Card Pattern**:
```html
<div class="rounded-lg bg-white border border-gray-100
           shadow-sm shadow-blue-900/5 p-6">
  <!-- Content -->
</div>
```

**Form Group Pattern**:
```html
<div class="flex flex-col gap-2">
  <label class="text-xs font-bold uppercase text-gray-600">Label</label>
  <input class="h-11 px-4 py-3 rounded-lg bg-blue-50
               border-0 focus:ring-2 focus:ring-blue-400/40" />
</div>
```

---

## 🎨 Design Tokens for Developers

### Colors (CSS Variables)
```css
--color-primary: #004AC6;
--color-primary-container: #2563EB;
--color-secondary: #006A4E;
--color-secondary-container: #6CF8BB;
--color-surface: #F8F9FF;
--color-surface-low: #EFF4FF;
--color-error: #BA1A1A;
```

### Typography
```css
--font-display: 'Manrope';
--font-body: 'Inter';
--text-3xl: 30px weight 700;
--text-xl: 20px weight 700;
--text-base: 16px weight 400;
--text-sm: 14px weight 400;
--text-xs: 12px weight 700;
```

### Spacing
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
```

---

## ✅ Component Implementation Checklist

- [ ] Input (text, textarea, select, file)
- [ ] Button (primary, secondary, text, icon)
- [ ] Card (basic, featured, job)
- [ ] Badge (success, status, category)
- [ ] Header Navigation (sticky)
- [ ] Bottom Navigation (mobile fixed)
- [ ] Form Group (label + input + error)
- [ ] Avatar (sizes: 32, 64, 128px)
- [ ] Stepper (3-step progress)
- [ ] Bottom Sheet/Modal
- [ ] Skeleton Loader
- [ ] Empty State
- [ ] Toast Notification
- [ ] Badge Group (pill layout)
- [ ] Image Placeholder (gray box)

---

**Total Components**: 15 core types  
**Total Variants**: 50+  
**Implementation Time Estimate**: 8-12 hours  
**Ready for**: Immediate development ✅


# Design System Implementation Guide

## Using the Working Post Job Design as Your Gold Standard

Your "Post Job" screen is now your **design reference implementation**. Use it to ensure all other screens maintain consistency.

---

## Quick Navigation

| Need | Document |
|------|----------|
| **Working Design Reference** | [DESIGN_REFERENCE_IMPLEMENTATION.md](DESIGN_REFERENCE_IMPLEMENTATION.md) |
| **Copy-Paste Prompts** | [QUICK_UI_PROMPTS.md](QUICK_UI_PROMPTS.md) |
| **Step-by-Step Guide** | [DESIGN_IMPLEMENTATION_GUIDE.md](DESIGN_IMPLEMENTATION_GUIDE.md) |
| **Full Specifications** | [UI_DESIGN_PROMPT.md](UI_DESIGN_PROMPT.md) |

---

## The 7 Screens - Using Your Reference Design

### Screen 1: Login Screen
**What to verify from reference design:**
- ✅ Header: Sticky, frosted glass, user avatar right-aligned
- ✅ Form fields: Blue ring-1/ring-2 on focus pattern
- ✅ Primary button: Gradient blue, hover scale 1.02, shadow
- ✅ Typography: Manrope headlines, Inter body text
- ✅ Colors: Use exact token values from DESIGN_REFERENCE_IMPLEMENTATION.md
- ✅ Bottom nav: 5 tabs, Home active, fixed mobile-only
- ✅ Spacing: space-y-6 between sections

**Specific elements:**
- Email/password inputs: Copy input styling exactly from Post Job screen
- Google OAuth button: Style as secondary button (no gradient)
- "Forgot Password" link: text-on-surface-variant color
- Login button: Full-width gradient primary

---

### Screen 2: Register Screen
**Reference elements to maintain:**
- ✅ Same header and bottom nav as Screen 1
- ✅ Progress stepper: Use exact pattern from Post Job (3 circles, connecting line)
  - Active step: bg-primary (#004AC6) with shadow
  - Pending: bg-surface-container-highest
- ✅ Form sections: 8 spacing between field groups
- ✅ Radio/toggle buttons: On-site/Remote styling for role selection
- ✅ Labels: text-sm font-semibold with Required badge
- ✅ All inputs: Same ring and focus pattern as Post Job

**Multi-step considerations:**
- Step 1: Name, Email, Password (use Post Job textarea for password confirmation)
- Step 2: Phone, Role toggle (Worker/Employer with same styling)
- Step 3: Location, Address fields
- Use gradient button for "Next" and "Continue"

---

### Screen 3: Job List Screen
**Card styling from reference:**
- ✅ Use "Preview Card" component design (from Post Job sidebar)
- ✅ Job Title: Manrope headline, bold
- ✅ Salary: Green badge (secondary-container: #6CF8BB) with on-secondary-container text
- ✅ Location: Material Symbols icon + text (text-on-surface-variant)
- ✅ Posted time: "2 hours ago" (text-xs, text-on-surface-variant)
- ✅ Applicant count: Gray secondary info
- ✅ Background: bg-surface-container-lowest (white)
- ✅ Padding: p-6 or p-8
- ✅ Radius: rounded-xl
- ✅ Shadow: shadow-sm shadow-blue-900/5

**Interactions:**
- Tap card: Navigate to Job Detail
- Swipe: (optional, but test)
- Pull-to-refresh: Material Design pattern

**Colors for tags:**
- Posted: gray (on-surface-variant)
- Applicants: gray (on-surface-variant)
- Salary: GREEN tertiary-fixed-background with on-tertiary-fixed text

---

### Screen 4: Job Detail Screen
**Layout from reference:**
- ✅ Header: Sticky, back button + share/bookmark icons
- ✅ Job Title: Large Manrope headline (text-3xl)
- ✅ Salary: Very prominent, green color (#6CF8BB or secondary-container)
- ✅ Description: Text blocks with leading-relaxed
- ✅ Employer info section: Avatar (64px circular), name, rating (Material Symbols star icon)
- ✅ Sticky footer: Full-width gradient primary button "Apply"

**Button placement:**
- Not inline like Post Job
- Sticky to bottom (position sticky, or fixed on mobile)
- py-3.5, px-10 minimum
- Gradient: from-primary to-primary-container
- Shadow: shadow-lg shadow-primary/20

**Applied job state:**
- After clicking Apply: Show confirmation modal
- Modal background: Surface-dim with backdrop blur
- Modal buttons: Primary + Secondary options

---

### Screen 5: Post Job Screen (YOUR REFERENCE)
✅ This screen is already designed and implemented!

**Study this screen for:**
- Exact color values from Tailwind config
- Input field ring pattern (subtle outline, strong focus glow)
- Form section spacing and organization
- Sidebar layout (Trust badge + Preview + Tips)
- Button gradient and animations
- Icon usage (Material Symbols, 24px, filled when active)
- Label and required indicator styling
- Location toggle button design
- Progress stepper implementation

---

### Screen 6: My Applications Screen
**Layout strategy from reference:**
- ✅ Header: Same as all screens (sticky, frosted glass)
- ✅ Tab navigation: 5-status tabs at top (NOT bottom nav tabs)
  - Pending (default active)
  - Accepted
  - Rejected
  - Withdrawn
  - All
  
**Tab styling:**
- Active: text-primary (#004AC6), border-b-2 border-primary
- Inactive: text-on-surface-variant, border-b-2 border-transparent
- Font: Label-style (Inter, font-medium, text-sm)

**Application cards:**
- Use Job List card pattern as base
- Add status badge at top-right:
  - Pending: orange/amber (tertiary-fixed: #FFDDB8)
  - Accepted: green (secondary-container: #6CF8BB)
  - Rejected: light error red
- Content:
  - Job title (bold)
  - Company name (secondary text)
  - Status badge (color-coded)
  - Applied date (xs text)
  - Quick action buttons:
    - "View Job" (text link, text-primary)
    - "Message" (secondary button style)
    - "Withdraw" (error text, if applicable)

**Colors:**
- Background: #F8F9FF (surface)
- Cards: #FFFFFF (surface-container-lowest)
- Pending badge: #FFDDB8 (tertiary-fixed) with #2A1700 text (on-tertiary-fixed)
- Accepted badge: #6CF8BB (secondary-container) with #00714D text
- Rejected badge: error color (#BA1A1A) or error-container background

---

### Screen 7: Profile Screen
**Reference elements:**
- ✅ Header: Sticky, same as all screens
- ✅ Avatar: 128px circular at top (large)
- ✅ Edit button: Over avatar (bottom-right corner)
  - Icon: pencil or edit (Material Symbols)
  - Circular button (48px minimum)
  - bg-primary, text-on-primary
  
**Profile sections:**

**Personal Info Section:**
- Background: bg-surface-container-lowest
- Padding: p-6 or p-8
- Rounded: rounded-xl
- Fields: Name, Email, Phone
  - Label: text-sm font-semibold
  - Value: text-on-surface
  - Verified badge: green checkmark (Material Symbols)
  - Edit icon: top-right (text-primary)

**Professional Info Section** (Workers only):
- Skills section: Chips/badges (bg-primary-container, text-on-primary)
  - X icon to remove
  - "Add Skills" button (secondary style)
- Portfolio section: Placeholder for documents
  - + button to add documents

**Verification Section:**
- NID Verification: Status indicator
  - Verified: green checkmark
  - Pending: orange indicator
  - Not Verified: gray indicator
- Email Verification: Similar
- Phone Verification: Similar
- Upload NID button: If not verified

**Settings Section:**
- Toggle switches (using Tailwind forms plugin):
  - Notifications (on/off)
  - Email updates
  - Push notifications
- Dropdown: Language (English default)
- Toggle: Dark mode (if implemented)

**Danger Zone:**
- "Logout" button: Text-error color (#BA1A1A)
- "Delete Account": Small link, text-on-surface-variant

**Colors for status:**
- Verified: green (secondary-container #6CF8BB)
- Pending: amber (tertiary-fixed #FFDDB8)
- Not Verified: gray (surface-container-high)

---

## Color Token Reference (Use These EXACT Values)

Copy-paste these hex values from the working design:

```
PRIMARY:
primary = #004ac6
primary-container = #2563eb
on-primary = #ffffff

SECONDARY (Green/Success):
secondary = #006c49
secondary-container = #6cf8bb  ← Use for salary badges, success
on-secondary-container = #00714d

ACCENT (Orange/Amber):
tertiary = #784b00
tertiary-fixed = #ffddb8  ← Use for pending/warning badges
on-tertiary-fixed = #2a1700

SURFACES:
surface = #f8f9ff  ← Main background
surface-container-lowest = #ffffff  ← Cards
surface-container-low = #eff4ff  ← Input backgrounds
surface-container-high = #dee9fc  ← Hover states
surface-container-highest = #d9e3f6  ← Skeleton

TEXT:
on-surface = #121c2a  ← Primary text (dark)
on-surface-variant = #434655  ← Secondary text, hints
outline-variant = #c3c6d7  ← Input borders

ERROR:
error = #ba1a1a
error-container = #ffdad6
on-error = #ffffff
```

---

## Typography Reference (Use EXACT Specifications)

From the working design:

```
FONTS:
Headline: Manrope (weights: 600, 700, 800)
Body: Inter (weights: 400, 500, 600)
(Load from Google Fonts CDN)

SCALE:
H1: 30px (text-3xl), weight: 700, family: Manrope
H3: 18px, weight: 700, family: Manrope
Label: 14px (text-sm), weight: 600, family: Inter
Body: 14px, weight: 400, family: Inter
Small: 12px (text-xs), weight: 400, family: Inter
Caption: 10px (text-[10px]), weight: 700, family: Inter

LEADING:
Body text: leading-relaxed (1.5 for readability)
Headings: tracking-tight (letter-spacing: -0.015em)
Labels: default (normal)
Captions: tracking-widest (letter-spacing: 0.025em) for ALL CAPS

WEIGHT MATRIX:
Headlines: 700 (bold)
Labels/Semibold: 600 (medium-bold)
Body/Regular: 400 (normal)
Button text: 700 (bold)
Small text: 400 (normal)
```

---

## Component Library to Build

Extract these components from the Post Job design:

### Inputs
- [ ] Text Input (ring-1, focus ring-2, rounded-xl)
- [ ] Email Input (validation state: error)
- [ ] Password Input (show/hide toggle)
- [ ] Text Area (rows variant)
- [ ] Number Input (with unit selector)
- [ ] Select/Dropdown (appearance-none)

### Buttons
- [ ] Primary Button (gradient, shadow, hover scale)
- [ ] Secondary Button (no fill, border outline)
- [ ] Text Link Button (text-primary, underline on hover)
- [ ] Icon Button (circular, 44px minimum)
- [ ] Toggle Button (on-site/remote style)

### Navigation
- [ ] Header/Top Bar (sticky, frosted glass)
- [ ] Bottom Navigation (5 tabs, mobile-only)
- [ ] Progress Stepper (3-step)

### Feedback
- [ ] Button Badge (green, amber, etc.)
- [ ] Status Badge (pending, accepted, rejected)
- [ ] Verified Checkmark
- [ ] Loading Skeleton
- [ ] Toast Notification

### Sections
- [ ] Trust Badge (green secondary-container)
- [ ] Info Card (avatar + text)
- [ ] Job Card (preview on list)
- [ ] Profile Section (with edit button)

---

## Responsive Breakpoints to Follow

From working design (Tailwind):

```
Mobile (default): Single column, stacked
md (768px): 2-column grids for field pairs
lg (1024px): 12-column asymmetric layout (8+4 sidebar)

Navigation:
- Header: Always sticky
- Bottom nav: md:hidden (mobile only, use top nav on desktop)
- Sidebar: hidden on mobile, appears on lg+

Typography:
- Same across breakpoints (no size changes)
- Spacing adjusts (tighter on mobile)

Spacing:
- Mobile: px-6 (16px), space-y-6
- Desktop: Same, larger containers with max-w-4xl
```

---

## Checklist for Each Screen

Before considering a screen "done":

- [ ] Header implemented (sticky, frosted glass, user avatar)
- [ ] Bottom navigation visible (mobile, 5 tabs, correct active state)
- [ ] All colors match exact token values
- [ ] Typography matches (Manrope headlines, Inter body)
- [ ] Input fields have ring-1 base, ring-2 focus state
- [ ] Buttons have gradient (primary) or secondary styling
- [ ] Buttons have hover scale(1.02) and active scale(0.95)
- [ ] Spacing follows space-y-6 and space-y-2 pattern
- [ ] Icons are 24px Material Symbols, filled when active
- [ ] Labels are text-sm font-semibold with text-on-surface
- [ ] Shadows match: shadow-sm shadow-blue-900/5
- [ ] Border radius consistent: rounded-xl for inputs/cards
- [ ] Responsive layout: single column mobile, 2-col md, 8+4 lg
- [ ] Dark mode variant tested (class="dark" behavior)
- [ ] Loading states with skeleton elements
- [ ] Error states with error color messages
- [ ] Empty states with helpful messaging

---

## Implementation Order

1. **Extract design tokens** from Post Job HTML
2. **Build Tailwind config** with color/font/spacing tokens
3. **Create component library** (Input, Button, Card, etc.)
4. **Build screens in order**:
   - Screen 1: Login (simplest, reference header/nav)
   - Screen 2: Register (adds progress stepper)
   - Screen 3: Job List (adds cards, spacing)
   - Screen 4: Job Detail (adds sticky footer)
   - Screen 5: Post Job (already done - refine if needed)
   - Screen 6: My Applications (adds tab nav)
   - Screen 7: Profile (adds user content sections)

5. **Test consistency**:
   - All inputs look the same
   - All buttons behave the same
   - Colors match tokens everywhere
   - Spacing is consistent
   - Typography hierarchy is clear

6. **Create handoff documentation**:
   - Color tokens (JSON)
   - Component specs (Figma or HTML)
   - Typography scale (CSS)
   - Animation specs (timing/easing)

---

## Pro Tips for Consistency

✅ **DO:**
- Reference the Post Job screen constantly
- Use ctrl+f / cmd+f to find color hex values in the design
- Copy button classes directly
- Measure spacing in the working design
- Check hover/focus/active states

❌ **DON'T:**
- Invent new colors (use token system)
- Change button heights or padding
- Use different fonts
- Adjust border-radius arbitrarily
- Mix font families (Manrope for headlines, Inter for body only)

---

## Quick Copy-Paste Classes

From the working Post Job design:

**Input Field:**
```html
<input class="w-full bg-surface-container-low border-0 ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary/40 rounded-xl px-4 py-3.5 transition-all outline-none text-on-surface" />
```

**Primary Button:**
```html
<button class="px-10 py-3.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
  Continue
  <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
```

**Secondary Button:**
```html
<button class="px-6 py-3 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container-high transition-all">
  Save Draft
</button>
```

**Section Container:**
```html
<div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm shadow-blue-900/5 space-y-6">
  <!-- content -->
</div>
```

**Label:**
```html
<label class="text-sm font-semibold text-on-surface flex justify-between">
  Label Text
  <span class="text-primary text-[10px] uppercase font-bold tracking-widest">REQUIRED</span>
</label>
```

---

## Success Criteria

Your design system is successful when:

✅ All 7 screens look cohesive
✅ Colors are consistent (same hex values everywhere)
✅ Typography hierarchy is clear and consistent
✅ Buttons behave identically across screens
✅ Spacing and alignment use 8px grid
✅ Mobile navigation works smoothly
✅ Dark mode support works
✅ Responsive breakpoints look good
✅ Loading/error/empty states are handled
✅ Developers have clear component library

---

## Next Steps

1. **Review** DESIGN_REFERENCE_IMPLEMENTATION.md thoroughly
2. **Generate** remaining 6 screens using Prompt 2 from QUICK_UI_PROMPTS.md
3. **Compare** each generated screen against the Post Job reference
4. **Adjust** colors, spacing, typography to match
5. **Build** a Tailwind component library
6. **Document** all component specs
7. **Share** with development team

---

**Reference Design**: Post Job Screen (HTML implemented in working production)
**Color System**: 144+ tokens in Tailwind config (exact hex values provided)
**Gold Standard**: Use Post Job screen for all consistency decisions

🎨 **You now have a proven design system. Use it consistently.** 🎨


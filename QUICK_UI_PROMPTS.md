# Quick UI Design Prompts - Ready to Use

## ⭐ Reference Implementation

A working design for the **Post Job Screen** has been successfully created and is available in [DESIGN_REFERENCE_IMPLEMENTATION.md](DESIGN_REFERENCE_IMPLEMENTATION.md). This document includes:
- Exact color tokens and hex codes
- Button and form field specifications
- Typography system (Manrope for headlines, Inter for body)
- Layout patterns and responsive breakpoints
- Micro-interactions and animations
- Tailwind CSS implementation details

**Use this reference when:**
- Generating other screens (maintain consistency)
- Fine-tuning AI-generated designs
- Creating component specifications for developers
- Ensuring visual harmony across all 7 screens

---

## For Figma Make / Google AI Design Tools

Use one of these prompts directly in your design generation tool:

---

## Prompt 1: Concise (Best for AI Generation)

```
Design a mobile job marketplace app for gig workers and employers in Bangladesh.
Create 7 screens: Login, Register, Job List, Job Detail, Post Job (wizard), 
My Applications, and Profile. Use color scheme: Primary blue (#2563EB), 
success green (#10B981), amber accent (#F59E0B), light gray backgrounds. 
Follow Material Design 3 with bottom tab navigation. Include loading states, 
error states, and empty states. Make it modern, clean, and user-friendly 
for workers aged 18-50 and employers aged 20-60.
```

---

## Prompt 2: Detailed (For Better Results) - Based on Working Design

```
Design a mobile gig job marketplace application. Reference implementation: https://... (Post Job Screen)

PROJECT INFO:
- App: "Temp Job Marketplace" - connects temporary workers with employers
- Platform: Android mobile app (Portrait orientation), responsive to desktop
- Target users: Workers (18-50) and Employers (20-60) in Bangladesh
- Tone: Professional, trustworthy, friendly, modern

DESIGN SYSTEM & COLOR TOKENS:
Primary Colors:
- Primary: #004ac6 (main actions, active states)
- Primary Container: #2563EB (gradients, accents)
- On Primary: #FFFFFF (text on primary buttons)

Secondary/Success:
- Secondary: #006C49 (secondary actions)
- Secondary Container: #6CF8BB (green trust/success badges)
- On Secondary Container: #00714D (text on green badges)

Neutrals & Surfaces:
- Surface: #F8F9FF (main app background, light blue-gray)
- Surface Container Lowest: #FFFFFF (card backgrounds)
- Surface Container Low: #EFF4FF (input field backgrounds)
- Surface Container High: #DEE9FC (hover states, elevated)
- Surface Container Highest: #D9E3F6 (skeleton elements)
- On Surface: #121C2A (primary text)
- On Surface Variant: #434655 (secondary text, hints)
- Outline Variant: #C3C6D7 (input borders)

Accents:
- Tertiary: #784B00
- Tertiary Fixed: #FFDDB8 (amber/orange badges, highlights)
- Amber: #F59E0B (alt accent if needed)

Error: #BA1A1A (validation errors, warnings)

TYPOGRAPHY SYSTEM:
- Headline Font: Manrope (weights: 600, 700, 800)
  - H1 (Main titles): 30px, weight 700, letter tracking tight
  - H3 (Section titles): 18px, weight 700
  
- Body Font: Inter (weights: 400, 500, 600)
  - Body text: 14px, weight 400, leading relaxed
  - Label/Semibold: 14px, weight 600
  - Small/Caption: 12px, weight 400
  - Form labels: 14px, weight 600, text-on-surface
  - Required badges: 10px, weight 700, uppercase, tracking widest, text-primary

SPACING & LAYOUT:
- Base grid unit: 8px (Tailwind default)
- Standard padding: 16px (px-4) containers
- Section gaps: 24px (space-y-6, gap-6)
- Form field groups: 8px (space-y-2)
- Border radius: 12px for inputs/cards (rounded-xl), 8px buttons (rounded-lg)

FORM COMPONENTS:
- Text Inputs:
  - Height: 44px (py-3.5)
  - Padding: px-4
  - Border: None, ring-1 ring-outline-variant/20 (subtle outline)
  - Focus: ring-2 ring-primary/40 (blue glow)
  - Background: bg-surface-container-low (#EFF4FF)
  - Radius: rounded-xl (12px)
  - Smooth transition on focus

- Select/Dropdowns: Same as inputs, appearance-none for custom styling

- Buttons:
  - Primary CTA: bg-gradient-to-r from-primary (#004AC6) to-primary-container (#2563EB)
  - Height: 44px minimum (py-3.5)
  - Padding: px-10
  - Text color: on-primary (#FFFFFF)
  - Font: bold
  - Radius: rounded-xl (12px)
  - Shadow: shadow-lg shadow-primary/20
  - Hover: scale(1.02)
  - Active: scale(0.95)
  - Duration: 150-200ms transition
  
  - Secondary button: text-on-surface-variant, hover:bg-surface-container-high, no gradient

- Toggle buttons (On-site/Remote):
  - Active: ring-2 ring-primary, bg-primary-fixed/30 (light blue)
  - Inactive: ring-1 ring-outline-variant/20, bg-surface-container-low
  - Icon: 24px Material Symbol, filled on active

SCREENS REQUIRED (7 total):
1. Login Screen: Email/password form with Google OAuth button, clean layout
2. Register Screen: Multi-step form (name, email, password, phone, role selection as toggle)
3. Job List Screen: Scrollable cards (job title, salary in green badge, location icon, posted time, applicant count)
4. Job Detail Screen: Full job description, employer avatar + rating, sticky green Apply button footer
5. Post Job Screen: 3-step progress stepper (Step 1: Job Details, Compensation, Requirements)
   - Left: Form content (title, category, duration, description, location with on-site/remote toggle)
   - Right: Trust badge (green secondary-container), job preview card, tips sidebar
   - Bottom: Save Draft + Continue buttons
6. My Applications Screen: 5 status tabs (Pending badge, Accepted, Rejected, etc.), card-based layout
7. Profile Screen: Large avatar (128px), personal info sections, verification status badges (checkmarks), settings

INTERACTIONS:
- Header: Sticky top, frosted glass (backdrop-blur-xl), user avatar + notifications
- Navigation: Bottom tab bar (5 tabs: Home, Search, Post/Add, Applications, Profile) - mobile only
  - Active/Post tab: bg-blue-50, text-blue-700, rounded-2xl, scale animation on press
  - Inactive: text-slate-400, hover:text-blue-600
  - Icons: Material Symbols 24px outlined
  
- Forms:
  - Progress stepper with active/pending visual states
  - Required field indicators (uppercase badge)
  - Form validation with error messages below fields
  - Help text sections with lightbulb icon
  - Save Draft option for incomplete forms
  
- Micro-interactions:
  - Button press: scale 95% active, 102% hover (smooth 150ms)
  - Input focus: Blue glow ring, smooth color transition
  - Navigation tap: Icon color change, scale animation
  - Skeleton loaders for data fetching (gray placeholder blocks)
  - Toast notifications for success confirmations

LAYOUT PATTERN:
- Mobile-first responsive approach
- sm/md: 2-column field grids within forms
- lg+: 12-column grid (8 cols form + 4 cols sidebar)
- Sticky header (top), fixed bottom nav (mobile)
- Max-width container: 4xl (56rem)

VISUAL STYLE:
- Minimal, modern, clean aesthetic
- Frosted glass effects (backdrop-blur) on headers/nav
- Subtle shadows (shadow-sm shadow-blue-900/5)
- No dark, heavy elements - bright and airy
- Material Design 3 inspired
- Outlined icons (Material Symbols)
- Circular avatars (32px small, 64px medium, 128px large)
- Card-based content sections
- Gradient buttons (blue primary)
- Full dark mode support using Tailwind dark: variants

TECHNICAL DETAILS:
- CSS Framework: Tailwind CSS 3 with forms plugin
- Font Loading: Google Fonts (Manrope, Inter)
- Icons: Material Symbols Outlined (Google Fonts CDN)
- No JavaScript required (semantic HTML)
- Dark mode: Class-based ("dark" class on html element)
- Responsive: Mobile-first, md/lg breakpoints
```

---

## Prompt 3: Ultra-Concise (Copy-Paste Ready)

```
Mobile gig work marketplace app (Android). 7 screens: Login, Register (2-step), 
Job List (cardholder), Job Detail (sticky CTA), Post Job (wizard), My Apps 
(tabbed), Profile. Blue primary (#2563EB), green success (#10B981), Material 
Design 3, bottom nav (5 tabs). Include loading/error/empty states. Modern, clean.
```

---

## Usage Guide

### For Figma Make:
1. Go to [figma.com/make](https://figma.com/make)
2. Click "Design with AI"
3. Copy **Prompt 2** above into the text field
4. Select "Mobile App" preset
5. Choose "Component Library" generation method
6. Generate & customize as needed

### For Google Design Tool:
1. Open your Google design workspace
2. Use AI-powered screen generation
3. Paste **Prompt 2** into the prompt field
4. Select "Mobile" as device type
5. Let AI generate initial designs
6. Manually refine component library

### For Webflow / Other Tools:
1. Create new mobile project
2. Use **Prompt 1** or **Prompt 2**
3. Generate wireframes first
4. Refine with color palette
5. Export to design system

### For Manual Design (Adobe XD, Sketch):
1. Use **Prompt 2** as specification document
2. Create components first (buttons, cards, inputs)
3. Build screens using components
4. Apply color tokens
5. Create prototype flows

---

## Custom Variations

### If you want darker theme:
Add to prompt: "Use dark mode with dark gray backgrounds (#1F2937) and white text."

### If you want multiple themes:
Add to prompt: "Include both light and dark theme variants for all screens."

### If you want animation specs:
Add to prompt: "Include smooth animations (200-300ms) for transitions, button presses, and loading states."

### If you want specific fonts:
Add to prompt: "Use Inter font for all typography with weights: 400 regular, 600 semi-bold, 700 bold."

---

## Component Library Prompt

If you just want the design system/components:

```
Create a Material Design 3 component library with:
- Color tokens (blue, green, amber, grays)
- Button variants (primary, secondary, tertiary, disabled)
- Text input and password fields
- Dropdown selectors
- Card component with shadow
- Badge and chip components
- Bottom navigation with 5 items
- Tab component
- Rating stars (1-5)
- Avatar circles (small, medium, large)
- Icons (40+: job, location, salary, user, etc.)

Use 8px grid system, 48px minimum touch targets.
```

---

## Prototype Flow Prompt

If you want interaction design:

```
Create interactive prototype flows for a job marketplace app:

Flow 1 - Job Search to Apply:
User starts on Job List → Scrolls through cards → Taps job → Views Job Detail 
→ Scrolls down → Taps Apply → Confirmation modal → Returns to My Applications

Flow 2 - Job Creation:
Employer starts on Post Job → Fills step 1 (job details) → Next to step 2 
(salary/dates) → Next to step 3 (requirements) → Review → Post → Success confirmation

Flow 3 - Profile Management:
User taps Profile tab → Views profile info → Taps Edit → Updates field → Saves 
→ Confirmation toast → Returns to profile

Include micro-interactions: button press states, form validation, loading spinners.
```

---

## Design Specifications Export

After AI generation, export with these specs:

**Component Specs**:
- Button: 48px height, 16px padding, 12px radius
- Card: 16px padding, 12px radius, shadow 0 2px 4px rgba(0,0,0,0.1)
- Input: 44px height, 12px radius, 12px padding
- Avatar: 32px (small), 64px (medium), 128px (large)

**Spacing**:
- Horizontal padding: 16px
- Vertical gap between sections: 24px
- Gap between cards: 12px
- Gap between list items: 8px

**Typography**:
- Heading: 24px, weight 700
- Subheading: 18px, weight 600
- Body: 14px, weight 400
- Caption: 12px, weight 400

**Color Usage**:
- Primary actions: #2563EB (blue)
- Success/positive: #10B981 (green)
- Warnings/highlights: #F59E0B (amber)
- Errors: #EF4444 (red)
- Text: #1F2937 (dark gray)
- Backgrounds: #F3F4F6 (light gray) or #FFFFFF (white)

---

## File Output Structure

After generation, organize as:

```
Temp_Job_Marketplace_UI/
├── System/
│   ├── Colors.txt
│   ├── Typography.txt
│   ├── Spacing.txt
│   └── Components.fig (or .sketch)
├── Screens/
│   ├── 01_Login.png
│   ├── 02_Register.png
│   ├── 03_JobList.png
│   ├── 04_JobDetail.png
│   ├── 05_PostJob.png
│   ├── 06_MyApplications.png
│   └── 07_Profile.png
├── Assets/
│   ├── Icons/ (SVG)
│   ├── Avatars/ (PNG)
│   └── Illustrations/ (SVG)
└── Documentation/
    ├── Design_System.md
    ├── Component_Specs.md
    └── Prototype_Flows.md
```

---

## Post-Generation Refinement Checklist

After AI generates initial design:

- [ ] Verify all 7 screens created
- [ ] Check color consistency (3 hex codes used)
- [ ] Ensure 48px minimum button height
- [ ] Confirm bottom tab nav present
- [ ] Verify touch target sizes (44px minimum)
- [ ] Check typography hierarchy (4 distinct sizes)
- [ ] Validate form error states
- [ ] Review loading states
- [ ] Test prototype interactions
- [ ] Ensure responsive layout
- [ ] Check text contrast (4.5:1+)
- [ ] Verify icon consistency
- [ ] Review empty states
- [ ] Validate dark/light mode (if applicable)

---

## Integration Tips

### With Your Backend:
- Design considers your Express API structure
- Use actual endpoint data in mock designs
- Account for loading states from API calls
- Plan error handling UIs for API failures

### With Android Codebase:
- Design matches existing Kotlin screens
- Component hierarchy aligned with MVVM
- Navigation matches bottom tab structure
- API integration points documented

### With Working Reference Design:
**Key**: All 7 screens should maintain consistency with the Post Job screen implementation:
- Use the exact same color token values (see DESIGN_REFERENCE_IMPLEMENTATION.md)
- Apply the same input field styling (ring-1 → ring-2 on focus, bg-surface-container-low)
- Match button styles (gradient primary, scale animations)
- Replicate typography (Manrope headlines, Inter body)
- Follow spacing rules (space-y-6 for sections, space-y-2 for form fields)
- Implement bottom navigation exactly as designed (5 tabs, fixed, mobile-only)
- Use Material Symbols icons in the same sizes and fill patterns

**Steps**:
1. Reference DESIGN_REFERENCE_IMPLEMENTATION.md before generating each screen
2. Compare AI-generated screens against the working Post Job design
3. Adjust colors, spacing, typography to match token system
4. Extract component specs from the reference implementation
5. Build a Tailwind CSS component library matching the patterns

### For Development Handoff:
- Export design tokens as JSON
- Create component specs document
- Include animation durations (milliseconds)
- Document all color values
- Provide SVG icons for all actions
- Include Tailwind CSS configuration that matches the design system

---

## FAQ

**Q: Can I use this prompt with ChatGPT?**  
A: Yes, ask ChatGPT to help you refine the prompt or create variations.

**Q: Should I use Prompt 1, 2, or 3?**  
A: Start with Prompt 3 for speed, use Prompt 2 for detailed results, Prompt 1 is balanced.

**Q: Can I generate this with free tools?**  
A: Yes, with Figma (free tier) or open-source tools, though AI features may require paid version.

**Q: How do I export for development?**  
A: Export PNG for preview, SVG for icons, JSON for tokens, HTML for specs.

**Q: What if AI generation doesn't match my vision?**  
A: Refine prompt with more specific color/style requirements, regenerate, or manually adjust.

---


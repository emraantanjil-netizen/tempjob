# UI Design Prompt - Step-by-Step Implementation Guide

## Quick Navigation

- **Full Design Brief**: See [UI_DESIGN_PROMPT.md](UI_DESIGN_PROMPT.md)
- **Quick Prompts**: See [QUICK_UI_PROMPTS.md](QUICK_UI_PROMPTS.md)
- **This Guide**: Step-by-step instructions

---

## Your Project Summary

**App Name**: Temp Job Marketplace  
**Platform**: Android Mobile  
**Purpose**: Connect gig workers with employers  
**Screens**: 7 (Login, Register, Job List, Job Detail, Post Job, Applications, Profile)  
**Users**: Workers & Employers in Bangladesh  

---

## Design System at a Glance

| Element | Specification |
|---------|---------------|
| **Primary Color** | #2563EB (Blue) |
| **Success Color** | #10B981 (Green) |
| **Accent Color** | #F59E0B (Amber) |
| **Font** | Inter or Roboto |
| **Button Height** | 48px |
| **Card Radius** | 12px |
| **Color Style** | Material Design 3 |

---

## Option A: Using Figma Make (Recommended)

### Step 1: Open Figma Make
1. Go to [figma.com/make](https://figma.com/make)
2. Sign in to your Figma account (or create one)
3. Click "Try Figma Make"

### Step 2: Choose Project Type
- Select "Mobile App"
- Choose Android as platform
- Set device width: 375px (standard Android phone)

### Step 3: Enter Design Prompt
Copy and paste this into the prompt field:

```
Design a mobile gig job marketplace app with 7 screens: Login, Register, 
Job List, Job Detail, Post Job (multi-step form), My Applications (tabbed), 
and Profile. 

Color scheme: Primary blue (#2563EB), success green (#10B981), 
amber accent (#F59E0B), light gray backgrounds (#F3F4F6). 

Include Material Design 3 components, bottom tab navigation (5 tabs: Home, 
Search, Post, Applications, Profile), loading states, error states, and empty 
states. Modern, clean aesthetic. Employer and worker focused, Bangladesh context.
```

### Step 4: Configure Options
- **Design Style**: Material Design 3
- **Theme**: Light mode
- **Platform**: Android
- **Generate**: All 7 screens

### Step 5: Generate
- Click "Generate Design"
- Wait 2-5 minutes for AI generation
- Review generated design

### Step 6: Customize
- Adjust spacing if needed
- Fine-tune colors
- Add specific content/text
- Create interactions/prototypes

### Step 7: Export
- Export screens as PNG
- Export components as Figma library
- Export design tokens as JSON
- Create handoff documentation

---

## Option B: Using Google Materials Design Tool

### Step 1: Access Google Tool
1. Open [design.google](https://design.google) or Google's design platform
2. Create new project
3. Select "AI-Assisted Design"

### Step 2: Input Specifications
- **Project Name**: Temp Job Marketplace
- **Platform**: Mobile - Android
- **Screen Size**: 375x812 (standard ratio)
- **Design System**: Material Design 3

### Step 3: Use Full Design Brief
1. Open [UI_DESIGN_PROMPT.md](UI_DESIGN_PROMPT.md) (the full document)
2. Copy the "Design System Foundation" section
3. Paste into tool
4. Let AI generate components first

### Step 4: Generate Each Screen
Generate in this order:
1. Login Screen
2. Register Screen
3. Job List Screen
4. Job Detail Screen
5. Post Job Screen
6. My Applications Screen
7. Profile Screen

Use the detailed screen descriptions from the full design brief.

### Step 5: Iterate
- Compare AI output to specifications
- Adjust as needed
- Request variations if unsatisfied

### Step 6: Export Components
- Download component library
- Export design tokens
- Save for development handoff

---

## Option C: Using Adobe XD (Manual + AI)

### Step 1: Create New Project
1. Open Adobe XD
2. New Mobile App project (375x812)
3. Enable "Share for Review"

### Step 2: Create Design System
1. Go to Assets panel
2. Create color library:
   - Primary: #2563EB
   - Success: #10B981
   - Accent: #F59E0B
   - Neutral: #F3F4F6, #1F2937, #FFFFFF
3. Create text styles:
   - Heading: 24px, 700
   - Subheading: 18px, 600
   - Body: 14px, 400
   - Caption: 12px, 400

### Step 3: Build Components
Create base components:
- Button (primary, secondary)
- Input field
- Card
- Badge
- Tab
- Bottom navigation

### Step 4: Create Screens
Using the [full design brief](UI_DESIGN_PROMPT.md), manually create:
1. Login screen (1 artboard)
2. Register screen (1 artboard)
3. Job List (1 artboard)
4. Job Detail (2 artboards: list + detail)
5. Post Job (3 artboards: steps 1, 2, 3)
6. Applications (1 artboard)
7. Profile (1 artboard)

### Step 5: Add Interactions
- Create prototype links between screens
- Set up navigation flows
- Add button interactions
- Test prototype

### Step 6: Export & Document
- Export screens as PNG
- Export icon library as SVG
- Create components specs document

---

## Option D: Using Sketch (macOS Only)

### Step 1: Setup
1. Open Sketch
2. Create new file
3. Set up artboards: 375x812 (iPhone 12/13)

### Step 2: Create Symbols Library
In Sketch's Symbols:
- Buttons (primary, secondary, tertiary)
- Input fields
- Cards
- Navigation tabs
- Icons

### Step 3: Build Design System
- Create color library (6 colors)
- Create typography styles
- Create spacing guide (8px grid)
- Document component patterns

### Step 4: Design Screens
Following [UI_DESIGN_PROMPT.md](UI_DESIGN_PROMPT.md):
1. Create artboard for each screen
2. Use symbols for components
3. Apply color variables
4. Apply text styles

### Step 5: Create Prototype
- Set prototyping points
- Create navigation flows
- Test interactive prototype

### Step 6: Handoff
- Use Sketch Cloud for sharing
- Export assets (SVG icons)
- Generate specs for developers
- Share prototype link

---

## Option E: AI + Manual (Most Control)

### Step 1: Generate with AI
Use any tool above (Figma Make preferred) to generate initial design

### Step 2: Extract Design System
Export from AI generation:
- Color palette (save hex codes)
- Component library
- Typography settings
- Spacing values

### Step 3: Manual Refinement
1. Adjust colors to match brand
2. Refine component details
3. Enhance typography
4. Improve spacing consistency

### Step 4: Build Prototype
- Create interactive flows
- Add micro-interactions
- Test user journeys
- Get feedback

### Step 5: Developer Handoff
- Document all specifications
- Export all assets
- Create component library
- Write implementation guide

---

## Quick Copy-Paste Prompts

### For Figma Make:
```
Create 7 mobile screens for a gig job marketplace: Login (email/password form 
with Google OAuth), Register (name/email/password/phone/role), Job List (scrollable 
cards), Job Detail (full info + Apply button), Post Job (3-step form), My Applications 
(tabbed status view), Profile (user info + settings). Use blue #2563EB primary, 
green #10B981 success, amber #F59E0B accent. Include 5-tab bottom navigation, 
loading states, error states, empty states. Modern Material Design 3 aesthetic.
```

### For Google Tool:
```
Mobile job marketplace app design system with 7 screens. Colors: Blue (#2563EB), 
Green (#10B981), Amber (#F59E0B). Components: Buttons (48px), Cards (12px radius), 
Inputs (44px). Bottom navigation with 5 tabs. Include all user flows: authentication, 
job browsing, job posting, application tracking, profile management. Material Design 3.
```

### For Adobe/Sketch:
```
Design system: 8px grid, 375x812 mobile. Colors: Primary blue, success green, 
accent amber. Type: Heading 24/700, Subhead 18/600, Body 14/400, Caption 12/400. 
Components: Button, Input, Card, Badge, Tab, Nav. Screens: Login, Register, 
Job List, Job Detail, Post Job (3 steps), Apps (tabbed), Profile. Material Design 3.
```

---

## File Organization (After Generation)

```
TempJobMarketplace_UI/
│
├── 📄 UI_DESIGN_PROMPT.md (Full specification)
├── 📄 QUICK_UI_PROMPTS.md (Copy-paste prompts)
├── 📄 IMPLEMENTATION_GUIDE.md (This file)
│
├── 📁 Design_Files/
│   ├── TempJobMarketplace.fig (Figma)
│   ├── TempJobMarketplace.xd (Adobe XD)
│   └── TempJobMarketplace.sketch (Sketch)
│
├── 📁 Design_System/
│   ├── Colors.json (Color tokens)
│   ├── Typography.json (Font styles)
│   ├── Spacing.json (Spacing grid)
│   ├── Components.md (Component specs)
│   └── Icons/ (SVG icons, 40+)
│
├── 📁 Screens/
│   ├── 01_Login.png
│   ├── 02_Register.png
│   ├── 03_JobList.png
│   ├── 04_JobDetail.png
│   ├── 05_PostJob.png
│   ├── 06_MyApplications.png
│   └── 07_Profile.png
│
├── 📁 Components/
│   ├── Buttons.png
│   ├── Cards.png
│   ├── Form_Fields.png
│   ├── Navigation.png
│   └── Status_Indicators.png
│
├── 📁 Prototype/
│   ├── PrototypeLink.txt
│   ├── Navigation_Flow.md
│   └── Interaction_Specs.md
│
└── 📁 Handoff/
    ├── Design_Tokens.json
    ├── Component_Library.md
    ├── Animation_Specs.md
    └── Developer_Guide.md
```

---

## Integration with Your Backend

### Backend Endpoints to Consider in UI
```
POST /auth/login          → Login screen
POST /auth/register       → Register screen
GET /jobs                 → Job List screen
GET /jobs/:id             → Job Detail screen
POST /applications/:jobId → Apply action
POST /jobs                → Post Job screen
GET /applications         → My Applications screen
GET /user/profile         → Profile screen
PUT /user/profile         → Profile edit
```

### Mock Data for Design
For realistic prototypes, use:
- Sample job titles: "House Cleaning", "Data Entry", "Tuition Assistance"
- Sample salaries: "500-1000 BDT/day"
- Sample locations: "Dhaka", "Sylhet"
- Sample avatars: Initials or placeholder icons
- Sample ratings: 4-5 stars

---

## Testing Your Design

### User Flow Testing
1. **Discovery Flow**: Home → Search → Job Detail → Apply ✓
2. **Creation Flow**: Post → Fill form → Review → Submit ✓
3. **Management Flow**: Applications → Status filter → View details ✓
4. **Profile Flow**: Profile → Edit → Save → Confirm ✓

### Accessibility Testing
- [ ] Text contrast 4.5:1+
- [ ] Touch targets 44px+
- [ ] Icon labels present
- [ ] Form error messages clear
- [ ] Keyboard navigation works
- [ ] Focus states visible

### Visual Testing
- [ ] Colors match specifications
- [ ] Typography hierarchy clear
- [ ] Spacing consistent (8px grid)
- [ ] Icons recognizable
- [ ] Empty states helpful
- [ ] Loading states visible

---

## Exporting for Development

### What Developers Need
1. **Design File** (.fig, .xd, .sketch)
2. **Exported Screens** (PNG, @1x and @2x)
3. **Component Library** (with specs)
4. **Design Tokens** (JSON format)
5. **Icon Set** (SVG format)
6. **Animation Specs** (timing, easing)
7. **Prototype Link** (interactive flows)

### Design Token Export Format
```json
{
  "colors": {
    "primary": "#2563EB",
    "success": "#10B981",
    "accent": "#F59E0B",
    "text.primary": "#1F2937",
    "background.light": "#F3F4F6"
  },
  "typography": {
    "heading": { "size": 24, "weight": 700 },
    "body": { "size": 14, "weight": 400 }
  },
  "spacing": {
    "base": 8,
    "padding": 16,
    "gap": 12
  }
}
```

---

## Timeline Estimate

| Activity | Time |
|----------|------|
| Choose tool | 5 min |
| Set up account | 2 min |
| Input specifications | 5 min |
| Generate design | 5-10 min |
| Review & adjust | 15-30 min |
| Export assets | 5 min |
| Create handoff docs | 15-30 min |
| **Total** | **~1-2 hours** |

---

## Next Steps

1. **Pick your tool**: Figma Make (easiest), or manual (most control)
2. **Use the prompt**: Copy from Quick_UI_Prompts.md
3. **Generate**: Create initial design
4. **Refine**: Adjust to your preferences
5. **Export**: Save assets and documentation
6. **Share**: Send to developers and stakeholders
7. **Iterate**: Get feedback and refine
8. **Implement**: Use in Android development

---

## Pro Tips

✅ **DO**:
- Start with Prompt 3 (quick), refine with Prompt 2 (detailed)
- Export design tokens as JSON for code
- Keep component library updated
- Document all design decisions
- Version control your design files (Git or Figma version history)

❌ **DON'T**:
- Ignore accessibility requirements
- Over-complicate interactions
- Change colors randomly
- Skip empty states and error states
- Forget about loading states
- Ignore mobile constraints

---

## Support Resources

- **Figma Help**: [help.figma.com](https://help.figma.com)
- **Google Material Design**: [material.io](https://material.io)
- **Android Design**: [developer.android.com/design](https://developer.android.com/design)
- **DesignBetter**: [designbetter.co](https://designbetter.co)

---

## Ready to Start?

1. Open your chosen design tool
2. Create new project (375x812 mobile)
3. Paste prompt from [QUICK_UI_PROMPTS.md](QUICK_UI_PROMPTS.md)
4. Generate design
5. Export and iterate

**Time to complete**: 1-2 hours for complete design system with 7 screens


# Design Reference - Post Job Screen Implementation

## 🎨 Working Design Analysis & Specifications

This document captures the design patterns and specifications from the successfully implemented "Post Job" screen, providing a reference for consistency across all 7 screens.

---

## Visual Hierarchy & Layout

### Header (Top AppBar)
- **Height**: ~56px
- **Background**: `bg-white/80 dark:bg-slate-900/80` (frosted glass effect)
- **Backdrop Filter**: `backdrop-blur-xl`
- **Positioning**: `sticky top-0 z-40`
- **Padding**: `px-6 py-3`
- **Shadow**: Subtle `shadow-sm shadow-blue-900/5`
- **Content**: 
  - Left: Avatar (40x40px, circular) + Brand text
  - Right: Notification bell button

### Main Content Area
- **Max Width**: `max-w-4xl mx-auto`
- **Padding**: `px-6 py-10`
- **Grid Layout**: 12-column grid responsive
  - Desktop (lg): 8 cols (form) + 4 cols (sidebar)
  - Mobile: 1 col (stacked)

### Progress Stepper
- **Position**: Above form content
- **Style**: 3-step progress indicator
  - Current step: Blue (#2563EB) with shadow
  - Pending steps: Light container color
  - Connected by horizontal line
  - Labels: All caps, small, 11px font size
- **Spacing**: `mb-12` below stepper

---

## Form Elements Specifications

### Input Fields
**Base Structure**:
```
- Background: bg-surface-container-low (#eff4ff)
- Border: border-0 (no border)
- Ring: ring-1 ring-outline-variant/20 (subtle outline)
- Focus State: ring-2 ring-primary/40 (stronger blue glow)
- Padding: px-4 py-3.5
- Radius: rounded-xl (0.75rem = 12px)
- Transition: transition-all ease
```

**Text Input Example**:
- Placeholder color: Subtle gray
- Font size: `text-on-surface` (body text)
- Width: Full (`w-full`)
- Outline: None on focus

**Textarea**:
- Multiple rows (rows="5" for description)
- `resize-none` (fixed size)
- Same color & focus state as input
- Min height recommended

**Select Dropdowns**:
- `appearance-none` (custom styling)
- Same styling as input fields
- Icon handling: Material symbols for location toggle

### Labels
- **Font Size**: 0.875rem (14px, "text-sm")
- **Font Weight**: `font-semibold` (600)
- **Color**: `text-on-surface` (dark)
- **Layout**: Flex with space-between for required indicator
- **Required Badge**: 
  - Font size: `text-[10px]`
  - Text: "REQUIRED"
  - Color: `text-primary` (blue)
  - Font weight: `font-bold`
  - Letter spacing: `tracking-widest`

### Button Styles

**Primary CTA (Continue)**:
```css
px-10 py-3.5
bg-gradient-to-r from-primary to-primary-container
text-on-primary
rounded-xl
font-bold
shadow-lg shadow-primary/20
hover:scale-[1.02]
active:scale-95
transition-all
```
- Icon on right: `flex items-center gap-2`

**Secondary Button (Save Draft)**:
```css
px-6 py-3
text-on-surface-variant
hover:bg-surface-container-high
rounded-xl
font-semibold
transition-all
```

**Toggle Buttons (Location)**:
- **Active State**:
  - `ring-2 ring-primary`
  - `bg-primary-fixed/30` (light blue background)
  - Icons filled with `style="font-variation-settings: 'FILL' 1;"`
  
- **Inactive State**:
  - `ring-1 ring-outline-variant/20`
  - `bg-surface-container-low`
  - Icons not filled

### Form Sections
- **Spacing**: `space-y-6` between major sections
- **Container**: `bg-surface-container-lowest rounded-xl p-8`
- **Shadow**: Subtle `shadow-sm shadow-blue-900/5`

---

## Sidebar Components

### Trust Badge (Secondary Container)
```
Background: bg-secondary-container (#6cf8bb - green)
Padding: p-6
Border Radius: rounded-xl
Relative positioning for icon in background

Content:
- Icon: verified_user (24px, opacity-10 positioned top-right)
- Badge: "EMPLOYER TRUST" (uppercase, small font)
- Heading: "Get Verified Faster" (font-bold, text-lg)
- Description: xs text with /80 opacity
```

### Preview Card (Job Listing Preview)
```
Outer: bg-surface-container-low rounded-xl p-1
Inner: bg-surface-container-lowest rounded-lg p-5

Skeleton Elements:
- h-4 w-3/4 bg-surface-container-high (title line)
- h-3 w-1/2 bg-surface-container (subtitle line)
- Grid of h-8 elements (metadata placeholders)
```

### Tips Section
```
Background: bg-surface-container-high/40
Padding: p-6
Border Radius: rounded-xl
Spacing: space-y-4

Title: xs font-bold uppercase text-on-surface-variant
Icon: lightbulb (material symbol)
List: space-y-3, text-xs, text-on-surface-variant
```

---

## Bottom Navigation Bar (Mobile)

### Structure
- **Position**: `fixed bottom-0 left-0 w-full`
- **Background**: `bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl`
- **Padding**: `px-4 pt-2 pb-6` (extra bottom padding for safe area)
- **Shadow**: `shadow-[0_-4px_20px_rgba(18,28,42,0.06)]`
- **Border**: `rounded-t-3xl`
- **Z-index**: z-50
- **Display**: `md:hidden` (mobile only)

### Navigation Items
- **Layout**: `flex justify-around items-center`
- **Icon Size**: Standard (24px material symbols)
- **Label**: `text-[10px] font-medium mt-1`

**Inactive State**:
- Color: `text-slate-400 dark:text-slate-500`
- Icon: Outlined
- Hover: `hover:text-blue-600 transition-colors`
- Padding: `px-3 py-1.5`

**Active State (Post button)**:
- Background: `bg-blue-50 dark:bg-blue-900/30`
- Color: `text-blue-700 dark:text-blue-300`
- Rounded: `rounded-2xl`
- Icon: Filled (`style="font-variation-settings: 'FILL' 1;"`)
- Animation: `active:scale-90 duration-200`

---

## Color Tokens Used

From Tailwind config, applied colors:

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `primary` | #004ac6 | Main CTA, active states, focus rings |
| `primary-container` | #2563eb | Gradient backgrounds, accent color |
| `on-primary` | #ffffff | Text on primary buttons |
| `secondary` | #006c49 | Secondary elements |
| `secondary-container` | #6cf8bb | Trust badge background |
| `on-secondary-container` | #00714d | Text in secondary container |
| `surface` | #f8f9ff | Main background |
| `surface-container-lowest` | #ffffff | Card backgrounds |
| `surface-container-low` | #eff4ff | Input field backgrounds |
| `surface-container-high` | #dee9fc | Hover states |
| `surface-container-highest` | #d9e3f6 | Skeleton elements |
| `on-surface` | #121c2a | Primary text |
| `on-surface-variant` | #434655 | Secondary text |
| `outline-variant` | #c3c6d7 | Input borders |
| `error` | #ba1a1a | Error states |
| `tertiary` | #784b00 | Accent highlights |
| `tertiary-fixed` | #ffddb8 | Preview badges |
| `on-tertiary-fixed` | #2a1700 | Badge text |

---

## Typography System

### Font Setup
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>

body { font-family: 'Inter', sans-serif; }
h1, h2, h3 { font-family: 'Manrope', sans-serif; }
```

### Type Scales

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| H1 | Manrope | 30px (text-3xl) | 700 | "Hire a Skilled Professional" |
| H3 | Manrope | 18px | 700 | "Get Verified Faster" |
| Label | Inter | 14px (text-sm) | 600 | Form labels |
| Body | Inter | 14px | 400 | Descriptions, help text |
| Small | Inter | 12px (text-xs) | 400 | Tips, hints |
| Caption | Inter | 10px (text-[10px]) | 700 | Required badges, labels |
| Button | Inter | 14px+ | 700 | CTA text |

### Font Styles Applied
- **Tracking**: 
  - Labels: `tracking-tight` on headings
  - Badges: `tracking-widest` on all-caps text
  - Body: Default
- **Leading**:
  - Body text: `leading-relaxed`
  - Tips: `leading-relaxed`

---

## Spacing & Grid System

### Base Unit
- **Grid**: 8px base unit (Tailwind default)
- **Padding**: 16px (px-4) standard
- **Gap**: 24px (gap-6) between sections, 12px (gap-2, gap-3) for small groups

### Common Patterns
```
Form sections: space-y-6 (24px vertical gap)
Form fields: space-y-2 (8px label-to-input gap)
Grid layouts: gap-6 (col-span-2)
Button groups: flex gap-2
Lists: space-y-3 (12px between items)
```

### Responsive Breakpoints
- **Mobile First**: Single column
- **md (768px+)**: 2-column grids for field groups
- **lg (1024px+)**: 12-column asymmetric layout (8+4)

---

## Micro-interactions

### Button Hover States
```css
/* Primary button */
hover:scale-[1.02]      /* Slight scale increase */
active:scale-95         /* Press animation */
transition-all          /* Smooth transition */

/* Secondary button */
hover:bg-surface-container-high  /* Background change */
transition-all
```

### Input Focus States
```css
ring-1 ring-outline-variant/20           /* Default outline */
focus:ring-2 focus:ring-primary/40       /* Focused: stronger, blue */
transition-all                           /* Smooth transition */
```

### Navigation Item Interactions
```css
hover:text-blue-600           /* Color change on hover */
active:scale-90               /* Press animation */
duration-200                  /* Smooth timing */
transition-colors             /* Color transition */
```

---

## Responsive Design Pattern

### Layout Strategy
```
Mobile (< lg):
- Single column (space-y-8)
- Full width form
- Bottom navigation visible
- Stack all sections vertically

Desktop (lg+):
- 12-column grid
- 8 cols: Form
- 4 cols: Sidebar (sticky preferred)
- Top navigation
- Bottom nav hidden (md:hidden)
```

### Form Field Responsive
```
Default: Full width (w-full)
md: 2-column grid for pairs (grid grid-cols-1 md:grid-cols-2)
lg: Same, as part of larger layout
```

---

## Accessibility Features Implemented

1. **Semantic HTML**:
   - Proper `<label>` elements linked to inputs
   - `<header>`, `<main>`, `<nav>` structural tags
   - Form fields with proper names and types

2. **Visual Indicators**:
   - Focus rings on inputs (ring-2 on focus)
   - Color + text for state changes (required badges)
   - Icon + text for buttons

3. **Touch Targets**:
   - Buttons: minimum 48px height (py-3.5 = 44px + padding)
   - Navigation items: `px-3 py-1.5`
   - Icons: 24px material symbols

4. **Color Contrast**:
   - Dark text on light backgrounds
   - Blue primary (#2563EB) on white
   - Gray secondary on light backgrounds

5. **Motion**:
   - Smooth transitions (transition-all)
   - Reasonable timing (duration-200, no easing specified = ease default)
   - Scale animations with active states

---

## Implementation Checklist

- ✅ Sticky header with user avatar
- ✅ Progress stepper (3 steps)
- ✅ Main content max-width container
- ✅ Form fields with blue focus states
- ✅ Category and duration combo inputs
- ✅ Location toggle buttons (on-site/remote)
- ✅ Trust badge (green secondary color)
- ✅ Job preview card (skeleton style)
- ✅ Tips sidebar section
- ✅ Primary and secondary buttons
- ✅ Bottom navigation (mobile only)
- ✅ Dark mode support (dark: variants)
- ✅ Responsive grid layout
- ✅ Gradient button effects
- ✅ Icon integration (Material Symbols)

---

## Design Pattern Rules

### When Creating Similar Screens:

1. **Form Inputs**: Always use `ring-1 ring-outline-variant/20` base, `focus:ring-2 focus:ring-primary/40` focus
2. **Buttons**: Use gradient `bg-gradient-to-r from-primary to-primary-container` for CTAs
3. **Sections**: Wrap in `rounded-xl p-8` container with subtle shadow
4. **Labels**: `text-sm font-semibold text-on-surface`
5. **Help Text**: `text-xs text-on-surface-variant`
6. **Spacing**: `space-y-6` between form groups, `space-y-2` within
7. **Icons**: Use Material Symbols Outlined, 24px default
8. **Colors**: Use the token system (not hardcoded hex values in CSS)
9. **Mobile Navigation**: Always include bottom nav with 5 tabs
10. **Responsive**: Grid-based layout, mobile-first approach

---

## CSS Custom Setup Required

```tailwind
@extend colors from config (144+ color tokens)
@extend border-radius (full, xl, lg)
@extend font-family (headline: Manrope, body/label: Inter)
@extend Material Symbols font from Google Fonts
```

---

## File Structure Notes

- **Font Loading**: Google Fonts CDN (Manrope, Inter)
- **Icons**: Material Symbols Outlined (Google Fonts CDN)
- **Styling**: Tailwind CSS 3 with plugins (forms, container-queries)
- **Dark Mode**: Class-based (`class="light"` on html, toggleable)
- **Responsive**: Mobile-first with md and lg breakpoints

---

## Performance Observations

- ✅ Minimal CSS (Tailwind utility classes)
- ✅ CDN-loaded fonts and icons
- ✅ No JavaScript framework required
- ✅ Backdrop blur (GPU accelerated on modern browsers)
- ✅ No heavy animations (only brief scale/color transitions)
- ✅ Semantic HTML (good for SEO)

---

## Next Steps for Integration

1. **Apply to all 7 screens**: Use this pattern system
2. **Create component library**: Extract reusable Tailwind components
3. **Build design tokens**: Export color, typography, spacing to JSON
4. **Prototype interactions**: Link screens using these specifications
5. **Document variants**: Show component states (hover, focus, active, disabled)

---


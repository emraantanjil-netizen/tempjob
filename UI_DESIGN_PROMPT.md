# Temp Job Marketplace - AI UI Design Prompt

## Project Overview

**Product Name**: Temp Job Marketplace  
**Platform**: Mobile App (Android)  
**Purpose**: A gig job marketplace connecting temporary workers with employers in Bangladesh  
**Target Users**: Workers (18-50) and Employers (20-60) seeking flexible labor  

---

## Design System Foundation

### Color Palette
- **Primary Color**: #2563EB (Modern Blue) - for CTAs and key interactions
- **Secondary Color**: #10B981 (Emerald Green) - for success states and positive actions
- **Accent Color**: #F59E0B (Amber) - for ratings and highlights
- **Neutral**: #F3F4F6 (Light Gray) - backgrounds
- **Dark**: #1F2937 (Dark Gray) - text and headers
- **Error**: #EF4444 (Red) - warnings and validation errors
- **Background**: #FFFFFF (White) - primary surface

### Typography
- **Heading (Bold)**: Font size 24px, weight 700
- **Subheading (Medium)**: Font size 18px, weight 600
- **Body Text (Regular)**: Font size 14px, weight 400
- **Caption (Small)**: Font size 12px, weight 400
- **Font Family**: Inter or Roboto (modern, clean, readable)

### Spacing & Layout
- **Base Unit**: 8px grid system
- **Padding**: 16px default for containers
- **Corner Radius**: 8px for cards, 12px for buttons
- **Elevation/Shadow**: Subtle shadows for depth (0-4px blur radius)

### Components
- **Buttons**: 48px height (thumb-friendly), rounded corners, 16px padding
- **Cards**: Rounded 12px, 16px padding, white with subtle shadow
- **Input Fields**: 44px height, 12px border radius, clear focus states
- **Navigation**: Bottom tab bar with 5 tabs
- **Icons**: Outlined 24px icons, consistent stroke width

---

## Screen Requirements (7 Screens)

### Screen 1: Login Screen
**Purpose**: User authentication entry point  
**Key Elements**:
- App logo (top-center, 80x80px)
- Email input field with icon
- Password input field with show/hide toggle
- "Forgot Password?" link (secondary text)
- "Login" CTA button (full-width, primary blue)
- "Don't have an account? Register" link
- Social login option (Google button with icon)
- Loading state for submit action

**Layout**: Vertical form, centered, with ample spacing between sections

---

### Screen 2: Register Screen
**Purpose**: New user account creation with role selection  
**Key Elements**:
- Progress indicator showing Step 1 of 2 (or 1 of 3)
- Full Name input field
- Email input field
- Password input field with strength indicator
- Confirm Password field
- Phone number field (Bangladesh format +880)
- Role selector (Worker / Employer) - toggle or radio buttons
- "Next" or "Register" CTA button
- "Already have an account? Login" link
- Validation messages under invalid fields (red text)

**Layout**: Clear form sections, large input targets, role selection prominent

---

### Screen 3: Job List Screen
**Purpose**: Browse available jobs/gigs  
**Key Elements**:
- Top: Search bar with filters icon
- Filter drawer (category, salary range, location, date)
- Job cards in vertical list with:
  - Job title (bold)
  - Employer name and avatar (small 32x32px)
  - Brief description (2 lines max)
  - Salary badge (green background: "500-1000 BDT/day")
  - Location (with map icon)
  - Posted date ("2 hours ago")
  - Number of applicants (gray text)
  - Tap/swipe interactions for job details
- Bottom tab navigation with 5 tabs:
  - Home (filled icon, active)
  - Search
  - Post Job
  - Applications
  - Profile
- Pull-to-refresh gesture
- Empty state with icon when no jobs found

**Layout**: Feed-style with consistent card spacing (12px gap)

---

### Screen 4: Job Detail Screen
**Purpose**: View complete job information and apply  
**Key Elements**:
- Header with job title and location
- Back button (top-left)
- Share/Bookmark icons (top-right)
- Salary prominently displayed (large, green)
- Job description (expandable text block)
- Requirements list (bullet points)
- Job type badge (e.g., "Contract", "Full-time")
- Posted date and deadline
- Employer info section:
  - Avatar (64x64px)
  - Name, rating (stars), review count
  - "View Profile" button
- Sticky "Apply" button at bottom (full-width, primary color)
- Modal after apply: confirmation message with "View Application" button
- Application form modal (if first-time):
  - Optional message field
  - Attach portfolio/documents
  - Submit button

**Layout**: Scrollable card with sticky action button, modal overlays

---

### Screen 5: Post Job Screen
**Purpose**: Employers create new job listings  
**Key Elements**:
- Multi-step form (Step 1 of 3, Step 2 of 3, etc.)
- Step 1 - Job Details:
  - Job title input field
  - Description text area (with character counter)
  - Job category dropdown
  - Job type selector (toggle: One-time / Contract)
- Step 2 - Compensation & Details:
  - Min salary input
  - Max salary input
  - Currency selector (BDT default)
  - Start date picker
  - End date picker (optional)
  - Location/address input with autocomplete
- Step 3 - Requirements:
  - Skills checkboxes (with suggested skills)
  - Experience level dropdown
  - Custom requirements text area
  - Add more skills button
- "Back" button (left) and "Next"/"Post" button (right) at bottom
- Review screen before posting:
  - Show full job preview
  - Edit button for each section
  - "Post Now" final CTA

**Layout**: Vertical form with clear step progression

---

### Screen 6: My Applications Screen
**Purpose**: Track applications and their status  
**Key Elements**:
- Filter/sort tabs at top:
  - Pending (badge with count)
  - Accepted (green)
  - Rejected (red)
  - Withdrawn
- Application cards showing:
  - Job title (bold)
  - Company name
  - Status badge (color-coded)
  - Applied date
  - Last update date
  - Employer/Worker message preview (gray, truncated)
  - Quick action buttons:
    - "View Job" link
    - "Message" button
    - "Withdraw" button (if applicable)
- Empty state with icon when no applications
- Pull-to-refresh to update status

**Layout**: Tabbed filter view with status-based card styling

---

### Screen 7: Profile Screen
**Purpose**: User account settings and preferences  
**Key Elements**:
- User header section:
  - Large avatar (128x128px, editable with camera icon)
  - Full name (editable)
  - Role badge (Worker / Employer)
  - Rating (if applicable)
- Profile sections:
  - **Personal Info**:
    - Email (with verified badge)
    - Phone (with verified badge)
    - Location/Address
    - Edit button for each
  - **Professional** (for Workers):
    - Skills (scrollable chips with remove icon)
    - Add Skills button
    - Portfolio/Documents section
  - **Verification** (for Workers):
    - NID Verification status (green checkmark or pending)
    - Email Verification status
    - Phone Verification status
  - **Account Settings**:
    - Notification preferences (toggle switch)
    - Language selector
    - Privacy settings
    - Dark mode toggle
- **Logout** button (outlined, red text)
- **Delete Account** link (small, gray text)

**Layout**: Scrollable profile with sections, edit capabilities, clear status indicators

---

## Interaction Patterns

### Navigation Flow
- Tab bar persistent at bottom across all screens
- Back button (when not on primary tab)
- Modal sheets slide up from bottom
- Swipe back gesture support
- Loading spinners during API calls

### Micro-interactions
- Button press states: slight scale/opacity change
- Card tap: subtle highlight or lift effect
- Input field focus: blue border, blue label
- Validation errors: red text below field, red border
- Success confirmations: green checkmark, toast notification
- Pull-to-refresh: spinner animation

### Form Validation
- Real-time validation (async for email availability)
- Clear error messages below fields
- Visual indicators: red border + red text
- Helper text for valid inputs (optional)
- Disabled submit button until form is valid

### Loading States
- Skeleton loaders for job list cards
- Spinner overlay for full-screen operations
- Disabled states for buttons during submission

---

## Accessibility & Usability

- **Touch Targets**: Minimum 44px x 44px
- **Contrast**: Text contrast ratio 4.5:1 for WCAG A compliance
- **Typography**: Clear hierarchy with distinct sizes
- **Keyboard Support**: All inputs keyboard accessible
- **Toast Notifications**: Auto-dismiss after 4 seconds
- **Feedback**: Clear action confirmations

---

## Edge Cases & States

- **Empty States**: Illustrated icons with helpful text
- **No Connection**: Offline banner with retry option
- **Error States**: Clear error messages with retry actions
- **Loading**: Skeleton screens for faster perceived performance
- **Expired Token**: Graceful logout with re-login prompt
- **No Search Results**: Friendly message with filter suggestions

---

## Device Specifications

- **Target Devices**: 
  - Small phones (360px wide): Android 5.0+
  - Medium phones (375-412px wide): Android 6.0+
  - Large phones (480px+): Android 8.0+
- **Orientation**: Portrait primary, landscape supported
- **Status Bar**: Light/Dark adaptive
- **Safe Areas**: Proper padding for notches

---

## Design Tone & Style

- **Visual Style**: Modern, clean, minimal
- **Mood**: Trustworthy, friendly, professional
- **Imagery**: 
  - Illustrated icons (outlined style)
  - User avatars (circular, 32-128px sizes)
  - No heavy photography
  - Emoji for status indicators (optional)
- **Animations**: Subtle, purposeful, < 300ms duration
- **Feedback**: Positive, encouraging language

---

## File Structure (for Design Tool)

```
Temp Job Marketplace/
├── Design System/
│   ├── Colors & Tokens
│   ├── Typography Styles
│   ├── Components Library
│   │   ├── Buttons (primary, secondary, tertiary)
│   │   ├── Input Fields
│   │   ├── Cards
│   │   ├── Navigation
│   │   └── Badges
│   └── Icons (set of 40+ icons)
├── Screens/
│   ├── 01_Login
│   ├── 02_Register
│   ├── 03_JobList
│   ├── 04_JobDetail
│   ├── 05_PostJob
│   ├── 06_MyApplications
│   └── 07_Profile
├── Prototypes/
│   ├── Navigation Flow
│   ├── Job Application Flow
│   └── Profile Management Flow
└── Handoff/
    ├── Component Specifications
    ├── Spacing Guidelines
    └── Animation Specifications
```

---

## Integration with Backend API

### Key Data Models to Display
- User (name, email, role, avatar, rating)
- Job (title, description, salary, location, requirements)
- Application (status, timestamp, messages)
- Notification (type, timestamp, action)

### API Endpoints Used
- POST /auth/login, /auth/register
- GET /jobs (with filters)
- GET /jobs/:id
- POST /applications/:jobId
- GET /applications (with status filter)
- POST /jobs (for employers)
- GET /user/profile
- PUT /user/profile

---

## Performance Considerations
- Lazy load images (job images, avatars)
- Paginated job list (25 items per page)
- Cached API responses
- Offline capability (cached data)
- Minimal animations on low-end devices

---

## Testing Scenarios
- **Happy Path**: User registers → searches jobs → views details → applies → checks status
- **Edge Cases**: No internet, validation errors, duplicate email, rate limit exceeded
- **Accessibility**: Screen reader support, keyboard navigation, high contrast mode
- **Performance**: Load time under 3 seconds, smooth scrolling, 60fps animations

---

## Brand Guidelines

**App Name**: Temp Job Marketplace  
**Tagline**: "Find Flexible Work, Fast"  
**Brand Values**: Trust, Opportunity, Simplicity  
**Brand Voice**: Professional yet approachable, clear and direct  

**App Icon** (outline):
- Simplified handshake or briefcase + calendar symbol
- Rounded square icon with 20% corner radius
- Primary blue background, white foreground

---

## Summary for AI Design Generator

When using this prompt with an AI design tool (Figma Make, Google Stitch, etc.), use:

**Short Prompt**:
```
Design a modern, mobile-first gig job marketplace app with 7 screens: 
Login, Register, Job List (with cards), Job Detail, Post Job (multi-step), 
My Applications (tabbed), and Profile. Use a blue primary color (#2563EB), 
emerald green for success (#10B981), and follow Material Design 3. 
All screens should have a bottom tab navigation. Include proper error states, 
loading states, and empty states. The app connects temporary workers with 
employers in Bangladesh for flexible work.
```

**Detailed Prompt** (use the full document above)

---

## Export Specifications

- **Format**: Figma file, Design tokens (JSON), Component library
- **Resolution**: 1x assets (pixel-perfect for mobile)
- **Exports**: 
  - PNG screenshots (all 7 screens)
  - SVG icons (all 40+ icons)
  - Color palette (hex codes)
  - Component specs document


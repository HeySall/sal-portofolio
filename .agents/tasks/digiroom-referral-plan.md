# Implementation Plan: Auto2000 Digiroom Referral Case Study

## Investigation Summary

### Codebase Patterns Identified

**Component Architecture:**
- Detail pages follow a consistent structure: hero header with two-column layout (left: content, right: mockup), followed by sections with borders
- Motion animations use framer-motion with page-level variants and stagger animations
- TypeScript with React Router for navigation
- CSS modules with BEM-style naming (namespace__element--modifier)

**Data Structure Pattern (from digiroom.ts and lolly-job.ts):**
- Exported constant with nested objects
- Hero section with image, titles, description, and meta array
- Multiple content sections with structured data
- Each section contains: label, title, description, and media assets
- Supports HTML in paragraphs via dangerouslySetInnerHTML

**Styling Conventions:**
- CSS custom properties (--space-*, --font-size-*, --color-*)
- Responsive breakpoints: 900px, 768px, 480px
- Consistent spacing scale and typography
- Border-bottom separators between sections
- Two-column layouts for meta/content and feature comparisons

**Asset Organization:**
- Project thumbnails: `/assets/projects/{project-name}.png`
- Detailed assets: `/assets/projects/{project-name}/{descriptive-name}.png`
- Follow kebab-case naming convention

**Navigation & Routing:**
- App.tsx contains all route definitions
- Custom detail pages for major projects (DigiRoomDetailPage, LollyJobDetailPage)
- Generic ProjectDetailPage as fallback
- Next project linking via projects array index

---

## Implementation Plan

### Phase 1: Content Data Structure

- [ ] 1. Create `/Users/cstadity2516/Documents/1234/sal-portofolio/src/data/digiroom-referral.ts`
      
      Following the existing pattern from `digiroom.ts` and `lolly-job.ts`, create the data structure with these sections:
      
      - `hero`: image, titleMain, titleAccent, description, meta array (Role, Timeline, Scope, Status: "In Development")
      - `businessContext`: label, title, description covering customer recommendations → referral submission → sales follow-up
      - `designChallenge`: label, title, quote from PRD
      - `experienceMapping`: label, title, description, diagram image path for two-journey visualization
      - `referrerJourney`: label, title, steps array with referral link access, copy/share, recipient opens
      - `recipientJourney`: label, title, steps array covering form → OTP → confirmation
      - `keyDecisions`: array of 4 decision objects (referral link/WhatsApp, form structure, OTP verification, confirmation)
      - `visualShowcase`: array of mockup objects with labels and image paths
      - `reflection`: label, mockup, quote about trust and transparency
      - `thankYou`: bgImage, title, subtitle, cta, ctaHref
      
      **Important PRD compliance:**
      - Mark status as "In Development" in meta
      - Use "intended business opportunities" language for business context
      - No fabricated metrics or research claims
      - Only describe features visible in actual design
      - All field lists must match supplied designs (name, phone, car model, province, city, branch)
      
      Files: `/Users/cstadity2516/Documents/1234/sal-portofolio/src/data/digiroom-referral.ts`
      
      Verify: TypeScript compilation passes with `npm run build` (TSC validation only, no runtime execution needed yet)

- [ ] 2. Update projects metadata in `/Users/cstadity2516/Documents/1234/sal-portofolio/src/data/projects.ts`
      
      Insert new project object after `lolly-job` (index 3) and before `aurelia` (index 4):
      
      ```typescript
      {
        id: 'digiroom-referral',
        title: 'Auto2000 Digiroom Referral',
        subtitle: 'Customer Recommendation to Sales Leads',
        tags: ['Automotive', 'Referral System', 'App Design'],
        status: 'live',
        thumbnail: '/assets/projects/digiroom-referral.png',
        overview: 'Designing an end-to-end referral experience connecting Digiroom users with prospective car buyers.',
        role: 'Product Designer',
        duration: '1 Month',
        year: '2025',
        sections: [],
      }
      ```
      
      This maintains the requested card order: digiroom → capital-desk → lolly-job → **digiroom-referral** → aurelia
      
      Files: `/Users/cstadity2516/Documents/1234/sal-portofolio/src/data/projects.ts`
      
      Verify: Run `npm run build` and confirm no TypeScript errors; the projects array should compile successfully with the new entry

### Phase 2: Page Component Implementation

- [ ] 3. Create `/Users/cstadity2516/Documents/1234/sal-portofolio/src/pages/DigiRoomReferralDetailPage.tsx`
      
      Following the structure from `LollyJobDetailPage.tsx` and `DigiRoomDetailPage.tsx`:
      
      **Component Structure:**
      - Import framer-motion, react-router-dom (Link), lucide-react (ArrowLeft, ArrowUpRight)
      - Import data from `../data/digiroom-referral`
      - Import projects array to calculate next project
      - Import Footer component
      - Import CSS: `'./DigiRoomReferralDetailPage.css'`
      
      **Page Sections (in order):**
      1. Hero header with two-column layout (left: back link, titles, description, meta; right: hero mockup)
      2. Business Context section with centered text and visual relationship diagram
      3. Design Challenge section with quote box
      4. Experience Mapping with dual-journey visualization
      5. Key Design Decisions (4 decision cards with icons, titles, explanations)
      6. Visual Showcase section with feature mockups
      7. Reflection section with quote and mockup
      8. Thank You section with background image overlay
      9. Next Project link (aurelia)
      
      **Motion Patterns:**
      - Page-level variants: initial (opacity: 0, y: 24), animate (opacity: 1, y: 0), exit (opacity: 0)
      - Use motion.main wrapper with className "dgr" (DigiRoom Referral namespace)
      
      **Next Project Calculation:**
      ```typescript
      const referralIndex = projects.findIndex(p => p.id === 'digiroom-referral')
      const nextProject = projects[(referralIndex + 1) % projects.length]
      ```
      
      **Content Rendering:**
      - Use dangerouslySetInnerHTML for paragraphs that may contain HTML
      - Map over arrays for repeating elements (meta items, decision cards, mockups)
      - Include error handling for images with onError fallback
      
      Files: `/Users/cstadity2516/Documents/1234/sal-portofolio/src/pages/DigiRoomReferralDetailPage.tsx`
      
      Verify: Run `npm run build` to confirm TypeScript compilation. Check for import errors and type mismatches.

- [ ] 4. Create `/Users/cstadity2516/Documents/1234/sal-portofolio/src/pages/DigiRoomReferralDetailPage.css`
      
      Following the styling patterns from `DigiRoomDetailPage.css` and `LollyJobDetailPage.css`:
      
      **Namespace:** `.dgr` (DigiRoom Referral)
      
      **Core Layout:**
      - `.dgr` - main container with min-height: 100vh, padding-top: 76px
      - `.dgr__wrap` - max-width: 900px, centered, padding
      - `.dgr__hero` - gradient background, two-column grid at desktop
      - `.dgr__section` - padding, border-bottom, flex column with gap
      
      **Typography:**
      - `.dgr__section-title` - clamp(1.2rem, 2.5vw, 1.5rem), weight 800
      - `.dgr__p` - font-size-sm, color-text-secondary, line-height 1.75
      - `.dgr__label` - font-size-xs, uppercase, accent color, weight 600
      
      **Components:**
      - `.dgr__quote-box` - surface background, border, padding, flex layout
      - `.dgr__two-col` - grid with 1fr 1fr at desktop, single column at mobile
      - `.dgr__decision-cards` - grid of 2 columns, gap space-6
      - `.dgr__decision-card` - surface background, border, radius-md, padding
      - `.dgr__full-img` - width 100%, border-radius, overflow hidden
      - `.dgr__thankyou` - relative positioning with background overlay
      
      **Responsive Breakpoints:**
      - @media (max-width: 900px) - hero becomes single column
      - @media (max-width: 768px) - reduce padding, stack two-col grids
      - @media (max-width: 480px) - minimal padding, single column cards
      
      **Visual Effects:**
      - `.dgr__zoomable:hover img` - transform: scale(1.05)
      - Transitions using --transition-fast and --transition-base
      - Button hover states with color and transform
      
      Files: `/Users/cstadity2516/Documents/1234/sal-portofolio/src/pages/DigiRoomReferralDetailPage.css`
      
      Verify: Run the dev server with `npm run dev` and navigate to `/work/digiroom-referral` (after route is added). Visually inspect that CSS variables resolve correctly and responsive breakpoints work. Use browser DevTools to confirm no CSS warnings.

### Phase 3: Routing Configuration

- [ ] 5. Add route in `/Users/cstadity2516/Documents/1234/sal-portofolio/src/App.tsx`
      
      Add these lines:
      
      **Import statement (with other page imports):**
      ```typescript
      import DigiRoomReferralDetailPage from './pages/DigiRoomReferralDetailPage'
      ```
      
      **Route definition (after lolly-job route, before generic :id route):**
      ```typescript
      <Route path="/work/digiroom-referral" element={<DigiRoomReferralDetailPage />} />
      ```
      
      **Important:** The specific route must come before the generic `<Route path="/work/:id" element={<ProjectDetailPage />} />` to match correctly.
      
      Files: `/Users/cstadity2516/Documents/1234/sal-portofolio/src/App.tsx`
      
      Verify: Run `npm run build` to confirm no compilation errors. Then run `npm run dev` and manually navigate to http://localhost:5173/work/digiroom-referral in browser. The page should load without 404 errors (content will show placeholders until assets exist).

### Phase 4: Asset Requirements & Placeholder Strategy

- [ ] 6. Create asset directory and placeholder documentation
      
      **Directory Structure:**
      ```
      /Users/cstadity2516/Documents/1234/sal-portofolio/public/assets/projects/
      ├── digiroom-referral.png (thumbnail for card)
      └── digiroom-referral/
          ├── ASSETS.md (documentation of required assets)
          ├── dgr-hero.png (hero mockup)
          ├── dgr-business-flow.png (business context diagram)
          ├── dgr-experience-map.png (dual journey visualization)
          ├── dgr-decision-1.png (referral link design)
          ├── dgr-decision-2.png (form structure)
          ├── dgr-decision-3.png (OTP verification)
          ├── dgr-decision-4.png (confirmation screen)
          ├── dgr-showcase-1.png (referrer flow mockup)
          ├── dgr-showcase-2.png (recipient form mockup)
          ├── dgr-showcase-3.png (OTP screen mockup)
          ├── dgr-showcase-4.png (success state mockup)
          ├── dgr-reflection.png (closing mockup)
          └── dgr-thankyou-bg.png (thank you background)
      ```
      
      **ASSETS.md Content Template:**
      ```markdown
      # Auto2000 Digiroom Referral - Asset Requirements
      
      ## Status: PLACEHOLDER PHASE
      All paths below reference design mockups that must be provided.
      
      ## Required Assets (17 total)
      
      ### Thumbnail (1)
      - `digiroom-referral.png` - Card thumbnail for All Works page (recommended: 800x600px)
      
      ### Hero Section (1)
      - `dgr-hero.png` - Hero mockup showing referral feature (recommended: 600x700px)
      
      ### Business Context (1)
      - `dgr-business-flow.png` - Diagram: customer recommendation → referral → sales follow-up
      
      ### Experience Mapping (1)
      - `dgr-experience-map.png` - Dual journey: referrer path + recipient path visualization
      
      ### Key Design Decisions (4)
      - `dgr-decision-1.png` - Referral link and WhatsApp sharing screen
      - `dgr-decision-2.png` - Referral form with all fields visible
      - `dgr-decision-3.png` - WhatsApp OTP verification flow
      - `dgr-decision-4.png` - Submission confirmation screen
      
      ### Visual Showcase (4)
      - `dgr-showcase-1.png` - Referrer accessing referral feature
      - `dgr-showcase-2.png` - Recipient completing form
      - `dgr-showcase-3.png` - OTP entry and verification
      - `dgr-showcase-4.png` - Success confirmation message
      
      ### Reflection & Closing (2)
      - `dgr-reflection.png` - Mockup for reflection section
      - `dgr-thankyou-bg.png` - Background image for thank you section (recommended: 1200x400px)
      
      ## Placeholder Approach
      Until real assets are provided:
      1. Create placeholder images with descriptive text
      2. Use onError handlers in components to prevent broken image icons
      3. Maintain correct aspect ratios for layout testing
      
      ## PRD Compliance Checklist
      - [ ] No fabricated research or user quotes in mockups
      - [ ] "In Development" status clearly visible
      - [ ] Form fields match PRD: name, phone, car model, province, city, branch
      - [ ] No invented metrics or conversion data
      - [ ] All UI states shown are from actual design, not proposed improvements
      ```
      
      **Implementation Steps:**
      1. Create `/public/assets/projects/digiroom-referral/` directory
      2. Create `ASSETS.md` with above content
      3. Create simple placeholder images (can be 100x100 colored squares with text labels) for each asset path
      4. Update data file paths to match actual asset locations
      
      Files: 
      - `/Users/cstadity2516/Documents/1234/sal-portofolio/public/assets/projects/digiroom-referral/ASSETS.md`
      - `/Users/cstadity2516/Documents/1234/sal-portofolio/public/assets/projects/digiroom-referral/*.png` (placeholders)
      
      Verify: Run `npm run dev` and navigate to the case study page. Confirm images load (even as placeholders) with no broken image icons. Check browser Console for 404 errors on asset paths.

### Phase 5: PRD Compliance Validation

- [ ] 7. Content integrity review and compliance checklist
      
      **Review the implemented case study against PRD requirements:**
      
      **Content Integrity (MANDATORY):**
      - [ ] Status marked as "In Development" in hero meta
      - [ ] No fabricated user research or pain points claimed
      - [ ] Business opportunities described as "intended", not "proven"
      - [ ] No invented metrics (no "X% conversion increase", no fake statistics)
      - [ ] Only features visible in actual design are described
      - [ ] Form fields match PRD spec: name, phone, car model, province, city, purchase branch
      - [ ] No claims about usability testing or user validation without evidence
      - [ ] Astra Poin benefit mentioned ONLY if confirmed by actual design
      
      **Design Decision Quality:**
      - [ ] Each of 4 key decisions has clear rationale grounded in actual design
      - [ ] Trade-offs discussed, not just benefits
      - [ ] WhatsApp OTP explanation includes user instruction clarity
      - [ ] Submission confirmation explains expectation-setting
      - [ ] No claims about fraud prevention or lead quality guarantees
      
      **Visual Direction Compliance:**
      - [ ] Follows existing portfolio patterns from digiroom.ts and lolly-job.ts
      - [ ] CSS matches existing design system variables
      - [ ] Two-column layouts consistent with other case studies
      - [ ] Section hierarchy and spacing matches portfolio standards
      - [ ] Typography scale and color usage aligned with site theme
      
      **Information Architecture:**
      - [ ] Hero → Business Context → Design Challenge → Experience Mapping → Key Decisions → Showcase → Reflection → Thank You
      - [ ] Clear visual distinction between referrer and recipient journeys
      - [ ] Each section builds on previous context
      - [ ] No orphaned sections or unclear transitions
      
      **Copy Quality:**
      - [ ] All copy matches PRD language and tone
      - [ ] Technical terms explained where needed
      - [ ] No marketing buzzwords or unsubstantiated claims
      - [ ] Professional tone appropriate for portfolio
      - [ ] Indonesian terms used where appropriate (matching digiroom case study)
      
      **Implementation:**
      1. Review all text content in `digiroom-referral.ts` against PRD
      2. Verify meta tags and status labels
      3. Check that no fabricated claims exist in any section
      4. Confirm visual direction notes match actual portfolio CSS
      5. Document any PRD ambiguities that need clarification
      
      Files: 
      - `/Users/cstadity2516/Documents/1234/sal-portofolio/src/data/digiroom-referral.ts` (content review)
      - `/Users/cstadity2516/Documents/1234/sal-portofolio/.agents/tasks/prd-compliance-report.md` (new file documenting review)
      
      Verify: Create a checklist document at `.agents/tasks/prd-compliance-report.md` with each requirement marked as PASS/FAIL/NEEDS_CLARIFICATION. All items must be PASS before considering the case study complete.

### Phase 6: Cross-Browser Testing & Polish

- [ ] 8. Test responsive behavior and cross-page navigation
      
      **Testing Checklist:**
      
      **Responsive Breakpoints:**
      - [ ] Desktop (1440px+): Two-column hero, side-by-side layouts work correctly
      - [ ] Tablet (768px-900px): Hero stacks, meta becomes two-column grid
      - [ ] Mobile (480px-768px): All grids become single column, padding reduces
      - [ ] Small mobile (320px-480px): Touch targets remain accessible, text readable
      
      **Navigation Flow:**
      - [ ] Clicking card in All Works page navigates to detail page
      - [ ] Back to home link returns to /work page
      - [ ] Next project link navigates to aurelia detail page
      - [ ] Footer links work correctly
      - [ ] Browser back/forward buttons work as expected
      
      **Visual Polish:**
      - [ ] All images load without broken icons
      - [ ] Hover states work on interactive elements
      - [ ] Transitions feel smooth, not janky
      - [ ] Text contrast meets accessibility standards
      - [ ] No layout shifts during page load
      - [ ] Framer Motion animations run smoothly
      
      **Content Verification:**
      - [ ] All sections render with correct content
      - [ ] HTML in paragraphs renders correctly (dangerouslySetInnerHTML)
      - [ ] Meta information displays properly
      - [ ] No console errors or warnings
      - [ ] TypeScript compilation produces no errors
      
      **Browser Compatibility:**
      - [ ] Chrome/Edge (latest)
      - [ ] Firefox (latest)
      - [ ] Safari (latest)
      
      **Implementation:**
      1. Run `npm run dev` and test at each breakpoint using DevTools
      2. Test navigation paths systematically
      3. Verify animations and transitions
      4. Check console for errors
      5. Test in multiple browsers
      6. Document any issues found
      
      Files: 
      - All implemented files (review only, no changes unless bugs found)
      - `/Users/cstadity2516/Documents/1234/sal-portofolio/.agents/tasks/testing-report.md` (new file documenting test results)
      
      Verify: Run `npm run build` to create production build. Run `npm run preview` and test the built version. All tests should pass with no critical issues. Document any minor issues or known limitations.

---

## Summary of Deliverables

### Code Files (5 new, 2 modified)
1. **NEW:** `src/data/digiroom-referral.ts` - Content data following existing patterns
2. **NEW:** `src/pages/DigiRoomReferralDetailPage.tsx` - React component with framer-motion
3. **NEW:** `src/pages/DigiRoomReferralDetailPage.css` - Styles with BEM convention
4. **MODIFIED:** `src/data/projects.ts` - Added project entry after lolly-job
5. **MODIFIED:** `src/App.tsx` - Added route for /work/digiroom-referral

### Asset Files (17 placeholders + 1 doc)
6. **NEW:** `public/assets/projects/digiroom-referral.png` - Thumbnail
7. **NEW:** `public/assets/projects/digiroom-referral/ASSETS.md` - Documentation
8. **NEW:** `public/assets/projects/digiroom-referral/*.png` - 16 placeholder images

### Documentation (2 reports)
9. **NEW:** `.agents/tasks/prd-compliance-report.md` - PRD compliance verification
10. **NEW:** `.agents/tasks/testing-report.md` - Testing results and browser compatibility

### Key Implementation Notes

**Build Commands:**
- Development: `npm run dev` (Vite dev server)
- Production: `npm run build` (TypeScript + Vite build)
- Preview: `npm run preview` (Test production build)
- Lint: `npm run lint` (Oxlint)

**Critical Dependencies:**
- framer-motion: Page transitions and animations
- react-router-dom: Navigation and routing
- lucide-react: Icon components
- TypeScript: Type safety throughout

**PRD Non-Negotiables:**
1. Status MUST be "In Development"
2. NO fabricated research, metrics, or testimonials
3. Only describe features visible in actual design
4. Form fields MUST match: name, phone, car model, province, city, branch
5. Business opportunities described as "intended", not "proven"

**Visual Direction:**
- Follow existing portfolio CSS custom properties
- Match digiroom.ts and lolly-job.ts section structure
- Maintain two-column hero pattern
- Use consistent spacing and typography scales
- Responsive breakpoints at 900px, 768px, 480px

---

## Estimated Timeline

- Phase 1 (Data): 1-2 hours
- Phase 2 (Components): 3-4 hours
- Phase 3 (Routing): 30 minutes
- Phase 4 (Assets): 1-2 hours (placeholder creation)
- Phase 5 (Compliance): 1-2 hours
- Phase 6 (Testing): 2-3 hours

**Total: 9-14 hours** (depending on asset preparation time)

---

## Risk Mitigation

**Risk: Missing Design Assets**
- Mitigation: Placeholder strategy with clear ASSETS.md documentation
- Impact: Page loads correctly but shows placeholder content
- Resolution: Replace placeholders when real assets provided

**Risk: PRD Ambiguity**
- Mitigation: Document all unclear requirements in compliance report
- Impact: Some sections may need revision after clarification
- Resolution: Create NEEDS_CLARIFICATION list for client review

**Risk: Form Field Mismatch**
- Mitigation: Explicitly list all fields in data structure and verify against PRD
- Impact: Inaccurate representation of actual product
- Resolution: Confirm field list before final content lock

**Risk: Navigation Conflicts**
- Mitigation: Place specific route before generic :id route in App.tsx
- Impact: 404 errors or wrong component loading
- Resolution: Route testing in Phase 6 catches this early

---

## Post-Implementation Checklist

Before considering the case study complete:

- [ ] All 8 plan items marked as done with verification passed
- [ ] PRD compliance report shows all PASS (no FAIL items)
- [ ] Testing report confirms responsive behavior at all breakpoints
- [ ] No TypeScript compilation errors
- [ ] No console errors or warnings in browser
- [ ] Card appears in correct position in All Works page (after lolly-job)
- [ ] Navigation works: All Works → Detail → Next Project → Detail
- [ ] Assets documented even if placeholders (ASSETS.md complete)
- [ ] "In Development" status clearly visible in hero meta
- [ ] No fabricated metrics or research claims in content

**Final Build Command:**
```bash
npm run build && npm run preview
```

Test the production build in browser before considering implementation complete.

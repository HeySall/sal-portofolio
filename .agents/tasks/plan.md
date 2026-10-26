# Implementation Plan: Refine User Journey and Design Approach Sections

## Task Summary
Refine ONLY two specific sections in the Auto2000 Digiroom Referral case study:
1. User Journey section → Two journey panels with visual connection
2. Key Design Decisions section → Four design proposal blocks with structured content

This is a focused refinement to improve product thinking communication, NOT a full redesign.

---

## Current Structure Analysis

### 1. User Journey Section (Lines 113-144 in DigiRoomReferralDetailPage.tsx)

**Current implementation:**
- Two-column grid layout (`.dgr__two-col`)
- Separate Referrer Journey and Recipient Journey columns (`.dgr__journey-col`)
- Vertical list of steps with numbered badges (`.dgr__step`)
- Each step has: number badge, title, description
- Desktop: side-by-side columns
- Mobile: stacks vertically

**Current data structure (digiroomReferral.ts):**
```typescript
referrerJourney: {
  label: 'Referrer Journey'
  title: 'Existing Digiroom User'
  steps: [{ number, title, description }] // 4 steps
}
recipientJourney: {
  label: 'Recipient Journey'
  title: 'Referral Recipient'
  steps: [{ number, title, description }] // 5 steps
}
```

**Current styling:**
- `.dgr__two-col`: 2-column grid, gap 2.5rem
- `.dgr__journey-col`: flex column
- `.dgr__step`: flex row with number badge + text
- `.dgr__step-number`: 36px square, accent background, white text
- Responsive: stacks to single column at 900px

### 2. Key Design Decisions Section (Lines 147-185 in DigiRoomReferralDetailPage.tsx)

**Current implementation:**
- Vertical stack of decision cards (`.dgr__decisions`)
- Each card has: header with number + title, mockup image, content with rationale + tradeoff + optional note
- Cards are full-width, stacked with spacing
- Desktop: single column
- Mobile: same layout, smaller padding

**Current data structure (digiroomReferral.ts):**
```typescript
keyDecisions: {
  label: 'Key Design Decisions'
  title: 'Four critical decisions that shaped the experience'
  decisions: [{
    number: '01'
    title: string
    rationale: string
    tradeoff: string
    image: string
    note?: string
  }] // 4 decisions
}
```

**Current styling:**
- `.dgr__decisions`: flex column, gap 2.5rem
- `.dgr__decision-card`: surface background, border, rounded
- `.dgr__decision-header`: flex row, number badge + title
- `.dgr__decision-mockup`: 3:2 aspect ratio image
- `.dgr__decision-content`: padding, flex column with rationale, tradeoff, note sections

---

## Required Changes

### PHASE 1: Data Structure Changes (digiroomReferral.ts)

**1.1 Update User Journey data structure**

Replace existing `referrerJourney` and `recipientJourney` with new unified structure:

```typescript
userJourneys: {
  label: 'USER JOURNEYS'
  title: 'Two journeys, one connection'
  description: 'The referral experience connects existing Digiroom users with potential car buyers, leading to a submission that can be followed up by the Auto2000 team.'
  referrer: {
    user: 'Existing Digiroom User'
    accentColor: '#0d6e6e' // teal from existing palette
    steps: [
      { number: '01', title: 'Access referral feature', description: 'Open the account menu in Digiroom and access the Referral feature.' },
      { number: '02', title: 'View referral link', description: 'View the referral information and unique referral link.' },
      { number: '03', title: 'Share invitation', description: 'Copy the link or share it through WhatsApp.' },
      { number: '04', title: 'Recipient opens', description: 'The recipient opens the shared invitation.' }
    ]
  }
  recipient: {
    user: 'Referral Recipient'
    accentColor: '#2563eb' // blue accent for recipient
    steps: [
      { number: '01', title: 'Open landing page', description: 'Open the referral landing page from the shared link.' },
      { number: '02', title: 'Complete form', description: 'Provide personal information and vehicle purchase interest.' },
      { number: '03', title: 'Verify phone number', description: 'Verify the phone number through WhatsApp OTP.' },
      { number: '04', title: 'Receive confirmation', description: 'Receive a submission confirmation.' },
      { number: '05', title: 'Eligible for follow-up', description: 'Become eligible for follow-up from the Auto2000 team.' }
    ]
  }
}
```

**1.2 Update Design Approach data structure**

Replace existing `keyDecisions` with new `designApproach`:

```typescript
designApproach: {
  label: 'DESIGN APPROACH'
  title: 'From business goals to design solutions'
  description: 'Each design decision addresses a specific business need, connecting referral sharing, lead information collection, and sales follow-up into one cohesive experience.'
  proposals: [
    {
      number: '01',
      title: 'Simplify referral sharing',
      businessNeed: 'Make it easier for existing Digiroom users to introduce prospective buyers to Auto2000.',
      proposal: 'Provide a referral link with copy and WhatsApp sharing options.',
      rationale: 'Allows users to share the invitation through familiar, readily available channels.',
      image: '/assets/projects/digiroom-referral/dgr-decision-1.png',
      annotations?: [] // optional, for future annotations
    },
    {
      number: '02',
      title: 'Structure lead information',
      businessNeed: 'Capture initial personal information and vehicle purchase interest.',
      proposal: 'Provide a structured referral form with relevant personal details, vehicle model, and preferred location.',
      rationale: 'Organizes the information intended to support sales follow-up while keeping the form focused on the information being requested.',
      image: '/assets/projects/digiroom-referral/dgr-decision-2.png'
    },
    {
      number: '03',
      title: 'Add phone verification',
      businessNeed: 'Include a phone verification step before form submission is completed.',
      proposal: 'Integrate WhatsApp OTP verification.',
      rationale: 'Adds a verification step for the submitted phone number before the flow is completed.',
      image: '/assets/projects/digiroom-referral/dgr-decision-3.png'
    },
    {
      number: '04',
      title: 'Clarify submission status',
      businessNeed: 'Give recipients clear feedback after submitting the form.',
      proposal: 'Display a submission confirmation state.',
      rationale: 'Confirms that the form submission has been completed and communicates the next step when supported by the actual product flow.',
      image: '/assets/projects/digiroom-referral/dgr-decision-4.png'
    }
  ]
}
```

Files to modify: `src/data/digiroomReferral.ts`

Verification: Run `npm run build` and confirm no TypeScript errors.

---

### PHASE 2: Component Markup Changes (DigiRoomReferralDetailPage.tsx)

**2.1 Replace User Journey section markup (lines ~113-144)**

New structure:
```tsx
{/* ── User Journeys ──────────────────────────── */}
<section className="dgr__section dgr__section--journeys">
  <span className="dgr__label">{d.userJourneys.label}</span>
  <h2 className="dgr__section-title">{d.userJourneys.title}</h2>
  <p className="dgr__p">{d.userJourneys.description}</p>
  
  <div className="dgr__journey-panels">
    {/* Left Panel - Referrer */}
    <div className="dgr__journey-panel dgr__journey-panel--referrer">
      <div className="dgr__journey-panel-header">
        <h3 className="dgr__journey-panel-title">{d.userJourneys.referrer.user}</h3>
      </div>
      <div className="dgr__journey-steps-horizontal">
        {d.userJourneys.referrer.steps.map((step, i) => (
          <div key={i} className="dgr__journey-step">
            <div className="dgr__journey-step-badge">{step.number}</div>
            <h4 className="dgr__journey-step-title">{step.title}</h4>
            <p className="dgr__journey-step-desc">{step.description}</p>
            {i < d.userJourneys.referrer.steps.length - 1 && (
              <div className="dgr__journey-connector" aria-hidden="true"></div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    {/* Connection indicator */}
    <div className="dgr__journey-connection" aria-label="Referral link connects both journeys">
      <div className="dgr__journey-connection-line"></div>
      <div className="dgr__journey-connection-label">Referral Link</div>
    </div>
    
    {/* Right Panel - Recipient */}
    <div className="dgr__journey-panel dgr__journey-panel--recipient">
      <div className="dgr__journey-panel-header">
        <h3 className="dgr__journey-panel-title">{d.userJourneys.recipient.user}</h3>
      </div>
      <div className="dgr__journey-steps-horizontal">
        {d.userJourneys.recipient.steps.map((step, i) => (
          <div key={i} className="dgr__journey-step">
            <div className="dgr__journey-step-badge">{step.number}</div>
            <h4 className="dgr__journey-step-title">{step.title}</h4>
            <p className="dgr__journey-step-desc">{step.description}</p>
            {i < d.userJourneys.recipient.steps.length - 1 && (
              <div className="dgr__journey-connector" aria-hidden="true"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

**2.2 Replace Key Design Decisions section markup (lines ~147-185)**

New structure:
```tsx
{/* ── Design Approach ───────────────────────── */}
<section className="dgr__section dgr__section--design-approach">
  <span className="dgr__label">{d.designApproach.label}</span>
  <h2 className="dgr__section-title">{d.designApproach.title}</h2>
  <p className="dgr__p">{d.designApproach.description}</p>
  
  <div className="dgr__proposals-grid">
    {d.designApproach.proposals.map((proposal, i) => (
      <div key={i} className="dgr__proposal-card">
        <div className="dgr__proposal-number">{proposal.number}</div>
        <h3 className="dgr__proposal-title">{proposal.title}</h3>
        
        <div className="dgr__proposal-content">
          <div className="dgr__proposal-field">
            <h4 className="dgr__proposal-field-label">Business need</h4>
            <p className="dgr__proposal-field-text">{proposal.businessNeed}</p>
          </div>
          
          <div className="dgr__proposal-field">
            <h4 className="dgr__proposal-field-label">Our proposal</h4>
            <p className="dgr__proposal-field-text">{proposal.proposal}</p>
          </div>
          
          <div className="dgr__proposal-field">
            <h4 className="dgr__proposal-field-label">Why this approach</h4>
            <p className="dgr__proposal-field-text">{proposal.rationale}</p>
          </div>
        </div>
        
        <div className="dgr__proposal-mockup">
          <img 
            src={proposal.image} 
            alt={proposal.title} 
            className="dgr__full-img"
            onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23f0f0f0" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="14"%3EProposal ' + (i+1) + ' Screenshot%3C/text%3E%3C/svg%3E' }}
          />
        </div>
      </div>
    ))}
  </div>
</section>
```

Files to modify: `src/pages/DigiRoomReferralDetailPage.tsx`

Verification: Run `npm run dev` and visually inspect both sections at desktop and mobile widths.

---

### PHASE 3: CSS Styling Changes (DigiRoomReferralDetailPage.css)

**3.1 Remove old journey styles**

Delete or comment out:
- `.dgr__two-col`
- `.dgr__journey-col`
- `.dgr__journey-title`
- `.dgr__steps`
- `.dgr__step`
- `.dgr__step-number`
- `.dgr__step-title`
- `.dgr__step-desc`

**3.2 Add new User Journey styles**

```css
/* ── User Journeys (Revised) ───────────────────────────── */

.dgr__section--journeys {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  padding: var(--space-12) var(--space-6);
  margin-left: calc(var(--space-6) * -1);
  margin-right: calc(var(--space-6) * -1);
  border-radius: var(--radius-lg);
}

.dgr__journey-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  margin-top: var(--space-8);
  position: relative;
}

.dgr__journey-panel {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  position: relative;
}

.dgr__journey-panel--referrer {
  border-top: 3px solid var(--color-accent);
}

.dgr__journey-panel--recipient {
  border-top: 3px solid #2563eb;
}

.dgr__journey-panel-header {
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.dgr__journey-panel-title {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.dgr__journey-steps-horizontal {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.dgr__journey-step {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  position: relative;
  padding-bottom: var(--space-4);
}

.dgr__journey-step:not(:last-child) {
  border-bottom: 1px dashed var(--color-border);
}

.dgr__journey-step-badge {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 700;
  flex-shrink: 0;
}

.dgr__journey-panel--recipient .dgr__journey-step-badge {
  border-color: #2563eb;
  color: #2563eb;
}

.dgr__journey-step-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
}

.dgr__journey-step-desc {
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* Connection indicator between panels */
.dgr__journey-connection {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}

.dgr__journey-connection-line {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-accent), #2563eb);
  position: relative;
}

.dgr__journey-connection-line::before,
.dgr__journey-connection-line::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  transform: translateX(-50%);
}

.dgr__journey-connection-line::before {
  top: -4px;
}

.dgr__journey-connection-line::after {
  bottom: -4px;
  background: #2563eb;
}

.dgr__journey-connection-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
}
```

**3.3 Remove old decision styles**

Delete or comment out:
- `.dgr__decisions`
- `.dgr__decision-card`
- `.dgr__decision-header`
- `.dgr__decision-number`
- `.dgr__decision-title`
- `.dgr__decision-mockup`
- `.dgr__decision-content`
- `.dgr__decision-item`
- `.dgr__decision-subtitle`
- `.dgr__decision-note`

**3.4 Add new Design Approach styles**

```css
/* ── Design Approach (Revised) ─────────────────────────── */

.dgr__section--design-approach {
  background: var(--color-bg);
}

.dgr__proposals-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  margin-top: var(--space-8);
}

.dgr__proposal-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition-base);
}

.dgr__proposal-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
}

.dgr__proposal-number {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 700;
  z-index: 2;
}

.dgr__proposal-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.3;
  padding: var(--space-5) var(--space-6);
  padding-top: calc(var(--space-5) + 44px);
  background: #fafbfc;
  border-bottom: 1px solid var(--color-border);
}

.dgr__proposal-content {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex-grow: 1;
}

.dgr__proposal-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.dgr__proposal-field-label {
  font-size: var(--font-size-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
}

.dgr__proposal-field-text {
  font-size: var(--font-size-sm);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.dgr__proposal-mockup {
  width: 100%;
  background: #f8f9fa;
  border-top: 1px solid var(--color-border);
  overflow: hidden;
  aspect-ratio: 3 / 2;
  position: relative;
}

.dgr__proposal-mockup .dgr__full-img {
  aspect-ratio: 3 / 2;
  object-fit: cover;
}
```

**3.5 Update responsive breakpoints**

Add mobile responsive rules:

```css
/* ── Responsive (Updated) ─────────────────────────────── */

@media (max-width: 900px) {
  .dgr__journey-panels {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .dgr__journey-connection {
    position: static;
    transform: none;
    margin: var(--space-4) 0;
    pointer-events: all;
  }
  
  .dgr__journey-connection-line {
    height: 40px;
  }
  
  .dgr__proposals-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .dgr__section--journeys {
    padding: var(--space-8) var(--space-5);
    margin-left: calc(var(--space-5) * -1);
    margin-right: calc(var(--space-5) * -1);
  }
  
  .dgr__journey-panel {
    padding: var(--space-5);
  }
  
  .dgr__proposal-content {
    padding: var(--space-4);
  }
  
  .dgr__proposal-title {
    padding: var(--space-4) var(--space-5);
    padding-top: calc(var(--space-4) + 44px);
  }
}

@media (max-width: 480px) {
  .dgr__section--journeys {
    padding: var(--space-6) var(--space-4);
    margin-left: calc(var(--space-4) * -1);
    margin-right: calc(var(--space-4) * -1);
  }
  
  .dgr__journey-panel {
    padding: var(--space-4);
  }
  
  .dgr__journey-step-title {
    font-size: var(--font-size-sm);
  }
  
  .dgr__journey-step-desc {
    font-size: var(--font-size-xs);
  }
  
  .dgr__proposal-number {
    width: 36px;
    height: 36px;
    top: var(--space-3);
    left: var(--space-3);
  }
  
  .dgr__proposal-title {
    font-size: var(--font-size-base);
    padding: var(--space-3) var(--space-4);
    padding-top: calc(var(--space-3) + 40px);
  }
}
```

Files to modify: `src/pages/DigiRoomReferralDetailPage.css`

Verification: 
1. Run `npm run dev`
2. Test at desktop (1200px+), tablet (768px-900px), and mobile (320px-480px) widths
3. Check for horizontal overflow using browser DevTools
4. Verify all text is readable without excessive compression

---

## Content Integrity Verification Checklist

After implementation, verify:

- [ ] No fabricated user research findings added
- [ ] No fake usability testing results introduced
- [ ] No invented A/B test data included
- [ ] No false business metrics or conversion claims added
- [ ] Feature status remains "In Development" (not claimed as launched)
- [ ] All existing screenshot placeholders preserved (not removed or replaced with fake UI)
- [ ] Existing screenshot assets preserved if present
- [ ] Design rationale stays neutral and factual (not overstated)
- [ ] No fabricated stakeholder quotes added
- [ ] Business needs accurately reflect known objectives (not invented)

---

## Build and Test Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Build for production (runs TypeScript check + Vite build) |
| `npm run lint` | Run oxlint for code quality checks |
| `npm run preview` | Preview production build locally |

---

## Responsive Breakpoints to Test

| Breakpoint | Width | Expected Behavior |
|------------|-------|-------------------|
| Desktop | 1200px+ | Journey panels side-by-side, 2x2 proposal grid, connection indicator centered |
| Tablet | 768px-900px | Journey panels stack, proposals stack, comfortable padding |
| Mobile | 480px-768px | All content single column, readable text, no overflow |
| Small mobile | 320px-480px | Minimum safe width, compact spacing, legible typography |

**Test checklist:**
- [ ] No horizontal scrolling at any breakpoint
- [ ] Text remains readable (minimum 14px effective size)
- [ ] Touch targets minimum 44x44px
- [ ] Connection indicator visible and clear at all widths
- [ ] Proposal cards don't become too tall on mobile
- [ ] Screenshots maintain aspect ratio without distortion
- [ ] Spacing consistent with rest of portfolio

---

## Implementation Order

1. **Data structure** (digiroomReferral.ts) - MUST be done first to avoid TypeScript errors
2. **Component markup** (DigiRoomReferralDetailPage.tsx) - Update to use new data structure
3. **CSS styling** (DigiRoomReferralDetailPage.css) - Add new styles, remove old ones
4. **Build verification** - Run `npm run build` to catch TypeScript errors
5. **Visual testing** - Run `npm run dev` and test at all breakpoints
6. **Content integrity check** - Verify against checklist above

---

## Notes

- **Preserve unrelated sections**: Do not modify Hero, Business Context, Design Challenge, Experience Mapping, Visual Showcase, Reflection, Thank You, or Next Project sections
- **Color palette**: Use existing `--color-accent` (#0d6e6e) for referrer journey, introduce new blue (#2563eb) for recipient journey only
- **Typography**: Follow existing font scale and weights from index.css
- **Spacing**: Use existing CSS custom properties (--space-*) for consistency
- **Icons**: No icon library needed - using text badges and simple CSS connectors
- **Motion**: Reuse existing Framer Motion page variants, no new animations needed for these sections
- **Screenshot handling**: Keep existing onError fallback pattern for graceful degradation
- **Accessibility**: Maintain semantic HTML, add aria-labels where appropriate

---

## Risk Assessment

**Low risk:**
- Data structure changes are isolated to two sections
- TypeScript will catch any missed property references
- CSS changes use existing custom properties
- No new dependencies required

**Medium risk:**
- Mobile layout complexity (connection indicator position changes)
- Mitigation: Test thoroughly at breakpoints, use CSS Grid for reliable stacking

**High risk:**
- None identified - this is a focused refactor of two sections only

---

## Success Criteria

✅ Two sections successfully refactored with new structure  
✅ TypeScript builds without errors  
✅ No horizontal overflow at any breakpoint  
✅ Text readable at all screen sizes (minimum 14px)  
✅ Journey connection visually clear on desktop and mobile  
✅ Proposal cards display business need, proposal, rationale clearly  
✅ Screenshot placeholders preserved with proper aspect ratios  
✅ Existing visual design system maintained (colors, typography, spacing)  
✅ No fabricated content introduced  
✅ All other sections remain unchanged

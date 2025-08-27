# Design Principles for an Enterprise B2B Website

## Color Palette and Usage Principles

**Primary and Neutral Colors**  
The brand’s primary palette includes **Red (#e50106)**, black, and white.  
- Black on white is default for body content for maximal legibility and contrast.  
- White backgrounds are used extensively for clarity and openness.  
- All color combinations must meet at least **WCAG AA** contrast standards.

**Secondary Color Selection**  
Introduce a complementary **deep, cool blue** (e.g., #0078D4).  
- Blue conveys trust, stability, and professionalism.  
- Provides balance to the boldness of red.  
- Use sparingly for accents: secondary buttons, info banners, hover states.  

**Usage Guidelines**  
- Red for **primary CTAs** and high-value actions.  
- Blue for **secondary highlights** and links.  
- Neutrals (black, white, grays) dominate background and text for clarity.  
- Use whitespace as an active design element to direct focus.  

---

## Typography and Layout Principles

**Typography**  
- Modern, clean **sans-serif font** (e.g., DM Sans, Segoe UI, Helvetica/Arial).  
- Limited weights: Regular, Medium, SemiBold.  
- Establish a clear hierarchy (H1, H2, H3, body, captions).  
- Consistent typographic scale (e.g., modular scale).  

**Layout & Grid**  
- Use a **12-column grid** system with consistent spacing (e.g., 8px baseline).  
- Apply **clarity through hierarchy**: most important info emphasized first.  
- Use **whitespace generously** to avoid clutter and guide focus.  
- Ensure **consistency across similar content** types (forms, cards, etc.).  
- Favor a **minimalist, uncluttered layout**: less is more.  

---

## Visual Style: Minimalism, Grid, Whitespace, and Layering

- **Minimalism**: every element must serve a clear purpose.  
- **Grid Alignment**: ensure order and predictability.  
- **Whitespace**: treat it as a key design tool, creating openness and focus.  
- **Depth & Layering**: subtle shadows and layering to establish hierarchy.  
- **Imagery**: use high-quality, purposeful photos or illustrations.  
- **Iconography**: maintain a unified, consistent style across icons.  

---

## Motion and Animation Guidelines

- **Purposeful Transitions**: fast (200–300ms), smooth fades/slides to illustrate cause and effect.  
- **Avoid Flashiness**: stick to subtle, functional motions.  
- **Focus Guidance**: motion directs attention (e.g., error shake, hover feedback).  
- **Continuous Feedback**: loaders, skeleton screens, or progress bars.  
- **Accessibility**: respect reduced-motion preferences; avoid disorienting effects.  

---

## Tone and Mood: Visual Language and Trust Indicators

- **Consistency**: ensure all experiences feel like “one brand.”  
- **Professional & Approachable Mood**: balance competence with accessibility.  
- **Trust Indicators**:  
  - Familiar UI patterns.  
  - Security cues (locks, certifications).  
  - Client logos/testimonials.  
- **Visual Values**: echo brand attributes (strength, reliability, innovation).  
- **Quality Control**: high-quality imagery and graphics only.  

---

## Component Design Principles

**Buttons**  
- Red = primary actions.  
- Blue or neutral = secondary actions.  
- Clear hover/active states.  
- Consistent padding, border radius, and typography.  

**Navigation**  
- Clean top header with logo left, nav links center, CTA right.  
- Mega-menus allowed but structured.  
- Sticky nav recommended for long scrolls.  
- Clear active states.  

**Cards & Content Blocks**  
- Consistent backgrounds, spacing, and shadows.  
- Predictable internal structure (image, title, text, link).  
- Responsive layouts for multi-column grids.  

**Forms**  
- Single-column layout preferred.  
- Group related fields.  
- Immediate validation feedback.  
- Prominent submit button.  
- Accessibility-friendly labels and instructions.  

**Other Components**  
- Tabs: clear active states.  
- Modals: consistent styling, always dismissible.  
- Tables: clean, readable, responsive.  
- Icons: consistent library, aligned to brand style.  

---

## Modularity and Scalability (Helix-Inspired)

- **Component-Based Design**: build reusable modules (cards, banners, forms).  
- **Flexibility**: components scale with different content and contexts.  
- **Conventions**: consistent naming, spacing, and usage rules.  
- **Layered Structure**:  
  - Foundation: typography, colors, grid.  
  - Feature: reusable components.  
  - Project: assembled pages.  
- **Living Design System**: maintain a Figma/Pattern Library; propagate updates globally.  

---

## Accessibility and Inclusion

- **Contrast**: always meet WCAG AA standards.  
- **Typography**: minimum body text size ~16px, proper line height.  
- **Keyboard Navigation**: logical tab order, visible focus states.  
- **Screen Reader Support**: semantic HTML, ARIA roles, alt text.  
- **Inclusive Practices**: consider vision, hearing, motor, cognitive diversity.  
- **Testing**: automated tools + manual with assistive tech.  
- **Situational Accessibility**: design for varied contexts (mobile, glare, no sound).  

---

## Personalization and Editor-Friendly Design

**Personalization**  
- Components designed as flexible containers.  
- Multiple variants (e.g., hero banners per audience).  
- Ensure style consistency across personalized experiences.  
- Plan for fallback states when personalization data is missing.  

**Editor-Friendly**  
- CMS components clearly named and documented.  
- Guardrails: flexible inputs but locked brand styles.  
- Responsive behaviors baked into components.  
- Inline editing and previews supported.  
- Documentation and usage notes included.  

**Continuous Optimization**  
- Components should handle A/B testing and variant swaps.  
- Personalization should enhance UX without breaking layouts.  

---

## Conclusion

By combining principles from **Sitecore (modularity, personalization)**, **Microsoft Fluent (clarity, depth, inclusive design)**, and **Salesforce Lightning (scalability, governance)**, this design system ensures a professional, trustworthy, and future-proof enterprise website.  

The result is a **living, modular, accessible, and editor-friendly design framework** that:  
- Projects **trust and authority** to enterprise clients.  
- Provides a **consistent, scalable system** for designers and developers.  
- Enables **personalized, inclusive experiences** for diverse audiences.  
- Balances bold branding (red, black, white) with enterprise trust signals (blue, whitespace, structure).
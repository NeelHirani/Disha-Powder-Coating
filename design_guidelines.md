# Disha Powder Coating - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Industrial Professional Foundation

Drawing inspiration from professional service platforms like Stripe, Shopify, and manufacturing portfolio sites that balance credibility with visual impact. The design prioritizes trust-building, clear service presentation, and prominent quote-generation pathways while showcasing work quality through rich imagery.

**Core Principles:**
- Professional credibility over flashy aesthetics
- Clear hierarchy guiding users to quote requests
- Visual proof of quality workmanship
- Efficient access to service information

## Typography System

**Font Stack:**
- Primary: Inter (Google Fonts) - headings and UI elements
- Secondary: Source Sans Pro (Google Fonts) - body text and descriptions

**Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Meta: text-sm, font-medium

## Layout & Spacing System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections
- Grid gaps: gap-6 md:gap-8

**Grid Systems:**
- Services/Industries: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 (masonry-style)
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features: grid-cols-1 md:grid-cols-2

## Page-Specific Layouts

### Home Page
**Hero Section (85vh):**
- Full-width hero image showing high-quality powder coating work (machinery, automotive parts, or industrial components with perfect finish)
- Overlay gradient for text readability
- Centered content with large headline, 2-line value proposition
- Two prominent CTAs: "Request Quote" (primary) and "View Our Work" (secondary) with backdrop-blur-sm bg-white/10 treatment
- Trust indicator below CTAs: "Serving 500+ Businesses Since [Year]" with small client logos

**Services Overview (4-column grid on desktop):**
- Icon + title + brief description cards
- Hover elevation effect
- Link to full Services page

**Featured Work Section:**
- Before/After image pairs in 2-column layout
- Clear labels and transformation descriptions
- "View Full Gallery" CTA

**Industries Served (4-column icon grid):**
- Industry icons with labels
- Minimal text, visual-first approach

**Trust Section:**
- Certifications badges
- Key statistics (Years in business, Projects completed, Industries served)
- 3-column layout

**CTA Section:**
- Prominent quote request prompt
- Contact information alongside form preview

### Services Page
**Hero:**
- Medium hero (60vh) with workshop/machinery image
- Service breadth headline

**Service Cards:**
- Detailed cards in 2-column layout
- Each card: icon, title, description, materials list, sample image
- Expandable details on click

**Technology Section:**
- Equipment and process showcase
- 3-column grid with machinery images and descriptions

### Gallery Page
**Masonry Grid Layout:**
- Responsive 2/3/4 column grid
- Category filters at top (All, Automotive, Industrial, Furniture, Architecture)
- Lightbox for full-size viewing
- Each image: caption with project type and finish details
- Before/After toggle functionality for comparison images

### Industries Served
**Hero with Industry Overview**

**Per-Industry Sections:**
- Large industry image
- Services specific to that industry
- Sample projects in 2-3 image carousel
- Relevant certifications/standards

### Contact Page
**Split Layout (md:grid-cols-2):**
- Left: Contact form (name, email, phone, service interest dropdown, message)
- Right: Business information card with address, phone, email, hours, embedded Google Maps

### Quote Request Page
**Centered Form (max-w-3xl):**
- Multi-step visual progress indicator
- Step 1: Service type selection (radio cards with icons)
- Step 2: Project details (quantity, timeline, material dropdowns)
- Step 3: Specifications (text area + file upload for drawings/photos)
- Step 4: Contact information
- Clear "Submit Quote Request" button

### Testimonials
**Grid Layout:**
- 3-column testimonial cards
- Customer name, company, rating stars
- Quote text
- Optional company logo
- Featured testimonials highlighted with larger cards

### FAQ
**Accordion Layout (max-w-4xl centered):**
- Category groupings: Services, Pricing, Timeline, Maintenance
- Expand/collapse interactions
- Search functionality at top

## Component Library

### Navigation
**Desktop:** Horizontal navigation with dropdowns for Services submenu, prominent "Get Quote" button in header
**Mobile:** Hamburger menu with slide-in drawer

### Buttons
- Primary: Rounded-lg, px-8 py-4, text-lg font-semibold
- Secondary: Rounded-lg, px-8 py-4, text-lg font-semibold, border-2
- Icon buttons: Square with icon, rounded-lg

### Cards
- Standard: Rounded-xl, p-6, shadow-lg, hover:shadow-xl transition
- Image cards: Rounded-xl overflow-hidden, image with text overlay
- Testimonial: Rounded-lg, p-6, border-2

### Forms
- Input fields: Rounded-lg, px-4 py-3, border-2, focus:ring-4
- Labels: text-sm font-semibold, mb-2
- Helper text: text-sm, mt-1
- File upload: Dashed border dropzone with upload icon
- Consistent spacing: space-y-6 between field groups

### Footer
**Multi-column (grid-cols-1 md:grid-cols-4):**
- Column 1: Company logo, brief description
- Column 2: Quick links (Services, Gallery, Industries)
- Column 3: Contact information
- Column 4: Business hours, social links
- Bottom bar: Copyright, privacy policy, terms

## Images

**Hero Image (Home):** High-resolution photograph of powder-coated industrial parts or machinery showcasing perfect metallic finish, professional workshop setting with dramatic lighting

**Services Images:** Close-up shots of different coating finishes on various materials

**Gallery Images:** Before/after pairs showing transformation, variety of industries (automotive parts, furniture, industrial equipment, architectural elements)

**Industries Section:** Professional photography of finished products in each category

**About Us:** Founder/team photo in workshop setting, equipment photos

All images should be high-quality, professionally lit, showcasing the precision and quality of powder coating work.

## Admin Panel

**Dashboard Layout:**
- Sidebar navigation (Gallery, Services, Quote Requests, Contact Submissions, Settings)
- Main content area with data tables
- Action buttons for upload/edit/delete
- Modern admin UI with clear typography and spacing
- Login page: Centered card (max-w-md) with logo, email/password fields
# Rovia

> **Premium Intercity Travel, Designed for India**

Rovia is a **frontend-only, high-fidelity portfolio project** for a
modern Indian intercity mobility platform. It simulates a complete
travel booking experience for **Intercity Buses, Private Cabs, Tempo
Travellers, and Airport Transfers** across India.

The project focuses on **premium UI, responsive UX, motion design,
micro-interactions, and a realistic booking flow**. All routes,
vehicles, schedules, prices, reviews, and booking information are
powered by local mock data. No backend or real booking/payment
infrastructure is required.

------------------------------------------------------------------------

## Project Overview

  Item       Details
  ---------- ------------------------------------
  Project    Rovia
  Category   Travel / Transportation / Mobility
  Type       Frontend UI/UX Portfolio Concept
  Platform   Responsive Web Application
  Market     India
  Backend    None
  Data       Local mock data
  Payments   Simulated only
  Maps       Stylized/mock map experience

### Core Experience

**Home → Search → Results → Trip Details → Boarding/Drop Point → Seat
Selection → Add-ons → Traveller Details → Simulated Payment → Booking
Confirmation → Digital Ticket**

------------------------------------------------------------------------

## Product Goal

Rovia should feel like a real premium Indian mobility startup rather
than a static landing-page template.

Users should be able to visually explore and simulate booking:

-   Intercity Bus / Premium AC Coach
-   Private Cab
-   Tempo Traveller
-   Airport Transfer

Every visible interaction should work using frontend state.

------------------------------------------------------------------------

## Design Direction

The visual language should be:

-   Premium and minimal
-   Editorial and modern
-   Travel-focused
-   Generous with whitespace
-   Built around thin borders and clean surfaces
-   Driven by large transportation photography
-   Supported by oversized typography and numerical information
-   Rich in subtle motion and micro-interactions

Avoid a generic SaaS dashboard appearance.

India should be represented through **modern roads, cities, vehicles,
airports, landscapes, routes, terminology, and booking conventions**,
not stereotypical decoration or an excessive saffron/green palette.

### Suggested Color System

``` text
Background       #F5F3EE
Surface          #FFFFFF
Primary Text     #171717
Secondary Text   #727272
Border           #DDDCD7
Dark Sections    #222222
```

A restrained warm sand or terracotta accent may be used sparingly for
active states.

Photography should provide most of the color.

### Photography Direction

Use imagery inspired by:

-   Delhi--Jaipur highway
-   Mumbai--Pune Expressway
-   Bengaluru highways
-   Western Ghats
-   Rajasthan landscapes
-   Himalayan roads
-   Modern Indian airports
-   Premium coaches
-   SUVs and sedans
-   Tempo Travellers
-   Indian city skylines

The visual theme is **modern India in motion**.

------------------------------------------------------------------------

## Suggested Frontend Stack

``` text
React / Next.js
TypeScript
Tailwind CSS
Framer Motion
GSAP + ScrollTrigger where needed
Lucide Icons
```

Use one responsive codebase for desktop, tablet, and mobile.

No backend is required.

### Local Mock Data

Create local data for:

``` text
Cities
Airports
Routes
Vehicles
Prices
Schedules
Boarding points
Drop points
Reviews
Travellers
Amenities
Add-ons
FAQs
Booking details
```

------------------------------------------------------------------------

# Pages & Experiences

## 1. Homepage `/`

The homepage should be the strongest visual experience.

### Hero

Use cinematic Indian highway, coach, or premium cab imagery/video.

Suggested copy:

``` text
ROVIA

Go further.
Travel better.

Comfortable journeys,
wherever India takes you.
```

Alternative headline:

``` text
Your next city
is closer than you think.
```

Supporting copy:

> Comfortable intercity buses, private cabs and airport transfers across
> India.

### Hero Search

``` text
ONE WAY

From
New Delhi

To
Jaipur

Travellers
2

Departure
12 Oct

Search Rides →
```

All controls should be interactive.

The location selector should support cities and airports. The traveller
selector should support increment/decrement controls. The departure
field should open a styled calendar.

Include an animated route swap control:

``` text
New Delhi    ⇄    Jaipur
```

------------------------------------------------------------------------

## 2. Location Search

Clicking a location field should open a polished selector.

``` text
Where are you travelling from?

Search city or airport...

RECENT

New Delhi
Jaipur

POPULAR CITIES

Mumbai
Pune
Bengaluru
Hyderabad
Chandigarh
Ahmedabad
Agra
Dehradun
```

Airport examples:

``` text
Delhi Airport • DEL
Mumbai Airport • BOM
Bengaluru Airport • BLR
```

On mobile, present this experience as a full-screen selector or bottom
sheet.

------------------------------------------------------------------------

## 3. Popular Routes

Use realistic Indian demo routes:

``` text
Delhi → Jaipur
Delhi → Chandigarh
Delhi → Agra

Mumbai → Pune
Mumbai → Nashik

Bengaluru → Mysuru
Bengaluru → Chennai

Hyderabad → Vijayawada

Ahmedabad → Udaipur

Chandigarh → Manali
```

Only 8--12 routes need to exist in the mock dataset.

------------------------------------------------------------------------

## 4. Statistics

Create an editorial statistics section.

``` text
250K+
Journeys completed

80+
Cities connected

150+
Routes

4.8
Average traveller rating
```

These are fictional demo values for the portfolio concept.

Animate numbers when they enter the viewport.

------------------------------------------------------------------------

## 5. Featured Routes

Use oversized route presentations with large vehicle imagery.

### Private Cab Example

``` text
NEW DELHI                         JAIPUR

                  4h 45m

             [ PREMIUM SUV ]

Private Cab

from
₹2,499

Available
24 × 7
```

### Premium Coach Example

``` text
MUMBAI                           PUNE

                 3h 30m

             [ PREMIUM COACH ]

Premium AC Coach

from ₹599

12 departures daily
```

Vehicles can subtly travel horizontally as the user scrolls.

------------------------------------------------------------------------

## 6. Services

### Intercity Bus

**City to city, without the chaos.**

Comfortable AC coaches, clear schedules, and easy booking.

### Private Cab

**Your car. Your schedule.**

Door-to-door intercity travel with professional drivers.

### Tempo Traveller

**Better journeys, together.**

Comfortable group transportation for families and friends.

### Airport Transfer

**Land. We'll handle the rest.**

Reliable airport pickups with upfront pricing.

Use alternating full-width editorial image/text sections instead of
small generic cards.

------------------------------------------------------------------------

## 7. How Rovia Works

Suggested headline:

``` text
From your city
to the next.
```

Steps:

``` text
01
Pick your route

02
Compare your ride

03
Choose your seat

04
You're on your way
```

Use a large overhead coach/vehicle visual.

On desktop, create a sticky scroll-driven sequence. As the visitor
progresses:

-   Text changes
-   Vehicle position changes
-   Route line grows
-   Step indicator progresses
-   Supporting information transitions

The vehicle can visually travel from Delhi toward Jaipur.

On mobile, simplify the experience into vertically stacked animated
steps.

------------------------------------------------------------------------

## 8. Search Results `/search`

Example:

``` text
New Delhi → Jaipur

Saturday, 12 October
2 Travellers

14 rides available
```

### Transport Filters

``` text
All
Bus
Private Cab
Tempo Traveller
```

### Additional Filters

``` text
Departure
Price
Duration
Rating
```

### Sorting

``` text
Recommended
Lowest Price
Fastest
Earliest Departure
```

Filtering and sorting should operate on local mock data and animate
result-card changes.

------------------------------------------------------------------------

## 9. Search Result Cards

### Premium Coach

``` text
Premium AC Coach

4.8 ★
6 seats left

New Delhi                    Jaipur
06:30 AM                     11:15 AM

             4h 45m

AC     Wi-Fi     Charging

from ₹699

                    View Trip →
```

### Private Cab

``` text
Private Cab

Toyota Innova
6 seats

New Delhi                    Jaipur
08:00 AM                     12:20 PM

             4h 20m

AC • 2 Bags • Door Pickup

₹2,499

                    Select Cab →
```

### Tempo Traveller

``` text
Tempo Traveller

12 Seater
Private

New Delhi                    Jaipur

             5h

AC • Luggage • Door Pickup

₹5,499

                    View Details →
```

------------------------------------------------------------------------

## 10. Vehicle Selection

For private cabs, include a vehicle-selection layer.

``` text
Choose your ride

Sedan

Swift Dzire
4 seats • 2 bags

₹1,999


SUV

Ertiga
6 seats • 3 bags

₹2,499


Premium

Innova Crysta
6 seats • 4 bags

₹3,299
```

Selecting a vehicle should update the booking summary immediately.

------------------------------------------------------------------------

## 11. Map Experience

Use a stylized map rather than requiring a real maps API.

Example route:

``` text
Delhi
  ●
   \
    \
     ●
   Jaipur
```

Show important points along the journey:

``` text
Delhi
Gurugram
Neemrana
Jaipur
```

Route information:

``` text
281 km

Estimated travel
4h 45m
```

Animate the route line into view. A small vehicle marker can move along
part of the route.

Mobile should provide:

``` text
List | Map
```

------------------------------------------------------------------------

## 12. Trip Details `/trip/demo`

``` text
← Back to results

Premium AC Coach

4.8 ★

6 seats left
```

### Timeline

``` text
● New Delhi

  Kashmiri Gate ISBT

  06:30 AM

  │
  │
  │    4h 45m
  │    281 km
  │
  │

● Jaipur

  Sindhi Camp
  Bus Stand

  11:15 AM
```

### Amenities

``` text
Air Conditioning
Wi-Fi
USB Charging
Reclining Seats
Water Bottle
Luggage Storage
Live Tracking
```

Use a sticky price/continue action on mobile.

------------------------------------------------------------------------

## 13. Boarding & Drop Points

### Boarding

``` text
Select boarding point

○ Kashmiri Gate ISBT
  06:30 AM

○ Dhaula Kuan
  06:50 AM

○ IFFCO Chowk, Gurugram
  07:20 AM
```

### Drop Point

``` text
Select drop point

○ Sindhi Camp

○ Narayan Singh Circle

○ Jaipur Railway Station
```

Selections should update the booking summary.

------------------------------------------------------------------------

## 14. Seat Selection `/select-seat`

Create an interactive bus-seat layout.

``` text
Choose your seats

             DRIVER

1A   1B          1C   1D

2A   2B          2C   2D

3A   3B          3C   3D

4A   4B          4C   4D
```

States:

``` text
Available
Selected
Booked
```

Example:

``` text
Seat 3A selected
₹699
```

Two seats:

``` text
3A + 3B
₹1,398
```

All functionality is local frontend state.

------------------------------------------------------------------------

## 15. Add-ons

Bus add-ons:

``` text
Travel Insurance
₹49

Extra Luggage
₹199

Flexible Cancellation
₹149

Priority Boarding
₹79
```

Private-cab add-ons:

``` text
Extra Stop
₹249

Child Seat
₹199

Airport Meet & Greet
₹299
```

The total price should animate/update immediately when an option
changes.

------------------------------------------------------------------------

## 16. Checkout `/checkout`

Use a clean three-stage progress indicator:

``` text
Trip ───── Traveller ───── Payment
```

### Traveller Form

``` text
Full Name
Mobile Number (+91)
Email
Age
Gender
```

Keep the form compact and polished.

Use inline validation states.

------------------------------------------------------------------------

## 17. Simulated Indian Payment UI

No real payment gateway is required.

Payment categories:

``` text
UPI
Cards
Net Banking
Wallets
```

UPI should be prominent.

``` text
UPI ID

name@upi

Verify →
```

Optional visual choices:

``` text
Google Pay
PhonePe
Paytm
Other UPI
```

Clicking:

``` text
Pay ₹1,398
```

should trigger a short simulated sequence:

``` text
Securing your seats...

Confirming your journey...

✓

Booking Confirmed
```

------------------------------------------------------------------------

## 18. Booking Confirmation `/booking-confirmed`

Reveal a polished digital ticket.

``` text
ROVIA

DELHI
   ↓
JAIPUR

SAT • 12 OCT

06:30 AM

Premium AC Coach

Seat
3A

Boarding
Kashmiri Gate ISBT

Booking ID
RV-IND-48219

██████████
  QR CODE
██████████

View Ticket
Download
```

The QR code is decorative.

Use a restrained success animation rather than confetti.

------------------------------------------------------------------------

## 19. Destinations `/destinations`

Create a photography-led travel discovery section.

``` text
Explore India
with Rovia.
```

Examples:

``` text
JAIPUR

Delhi → Jaipur
from ₹599


MANALI

Chandigarh → Manali
from ₹899


UDAIPUR

Ahmedabad → Udaipur
from ₹749


MYSURU

Bengaluru → Mysuru
from ₹499
```

Use large destination photography with subtle hover zoom and a
`View route ↗` interaction.

------------------------------------------------------------------------

## 20. Reviews

Use large editorial testimonial cards.

Example:

``` text
Delhi → Jaipur

5.0 ★

The booking experience was simple and
the journey matched exactly what was shown.

Aarav M.
Business traveller
```

Use a controlled carousel or horizontal drag interaction.

Avoid fast automatic carousels.

------------------------------------------------------------------------

## 21. FAQ

Use a minimal animated accordion.

Suggested questions:

``` text
How does booking work?

Can I change my booking?

Can I cancel my journey?

Are prices final?

How much luggage can I carry?

Can I select my seat?

Where can I board the bus?

What payment methods are supported?
```

Animate accordion height and rotate the `+` control into `×`.

------------------------------------------------------------------------

## 22. Final CTA

Use cinematic Indian road/coach photography.

``` text
Your next city
is waiting.

Find your ride →
```

Slightly zoom the image on hover and animate the CTA arrow.

------------------------------------------------------------------------

## 23. Navigation

### Desktop

``` text
ROVIA

Book
Routes
Services
How it works
Destinations
Reviews

INR ₹

Sign In
```

The header should begin transparent over photography and transition into
a light/floating navigation on scroll.

### Mobile

``` text
ROVIA                       ☰
```

Menu:

``` text
Book a Ride
Popular Routes
Services
Destinations
How Rovia Works
Reviews
Help
```

------------------------------------------------------------------------

# Mobile UX

Mobile must be purpose-built rather than a scaled-down desktop layout.

Use:

-   Bottom sheets
-   Sticky CTAs
-   Large touch targets
-   Swipeable cards
-   Compact search controls
-   Map/List toggle
-   Collapsible filters
-   Full-screen location search
-   Full-screen date selection
-   Mobile navigation drawer

Example:

``` text
ROVIA                       ☰

Where are you going?

FROM
New Delhi

TO
Jaipur

12 Oct        2 Travellers

        Search Rides →
```

Search result:

``` text
Delhi → Jaipur

12 Oct • 2 Travellers

[ Bus ] [ Cab ] [ Traveller ]

Premium AC Coach

06:30             11:15

DEL                JAI

      4h 45m

4.8 ★
6 seats left

₹699

            Select →
```

Persistent booking action:

``` text
₹1,398

2 seats                 Continue →
```

------------------------------------------------------------------------

# Motion & Interaction System

Motion should reinforce the feeling of travel.

## Micro-interactions

Use for:

-   Buttons
-   Search controls
-   Inputs
-   Dropdowns
-   Accordions
-   Seat selection
-   Filter chips
-   Toggles
-   Icons

## Component Motion

Use for:

-   Result-card filtering
-   Bottom sheets
-   Modal transitions
-   Search panels
-   Vehicle selection
-   Price changes
-   Map/List switching

## Cinematic Motion

Use for:

-   Hero reveal
-   Vehicle movement
-   Sticky How Rovia Works sequence
-   Route-line drawing
-   Image-mask reveals
-   Page transitions
-   Destination photography

### Image Reveal

``` text
Image container appears
        ↓
Clip-path opens
        ↓
Image scale 1.08 → 1
```

Hover:

``` text
scale 1 → 1.03
```

Keep motion subtle and controlled.

------------------------------------------------------------------------

# Loading Experience

On the first visit only:

``` text
ROVIA

00
24
48
73
100
```

Transition from the loader into the hero.

Do not replay the cinematic loader on every page navigation.

------------------------------------------------------------------------

# Demo States

Include polished states for:

``` text
Loading
No routes found
Search error
Sold out
Only 2 seats left
Selected seat
Booked seat
Invalid form
Payment processing
Booking successful
```

A convincing product demo should demonstrate edge states, not only the
perfect path.

------------------------------------------------------------------------

# Responsive Strategy

Suggested ranges:

``` text
Mobile
320–767px

Tablet
768–1023px

Desktop
1024–1439px

Large Desktop
1440px+
```

Prefer component-level responsiveness instead of relying only on device
breakpoints.

For example:

``` text
Desktop
Horizontal floating search bar

Tablet
Compact multi-row search panel

Mobile
Stacked search + bottom sheets
```

------------------------------------------------------------------------

# Reusable Components

Suggested component architecture:

``` text
Header
MobileMenu
Hero
TripSearch
LocationPicker
TravellerPicker
DatePicker
RouteSwap
StatsCounter
RouteCard
VehicleCard
ServiceSection
DestinationCard
MapView
RouteMap
FilterPanel
SortMenu
TripTimeline
AmenityChip
BoardingPointPicker
DropPointPicker
SeatPicker
AddOnSelector
PriceSummary
BookingStepper
TravellerForm
PaymentSelector
DigitalTicket
ReviewCard
FAQAccordion
Footer
BottomSheet
Modal
Toast
Skeleton
PageTransition
ImageReveal
MagneticButton
```

Avoid building the entire application inside one page component.

------------------------------------------------------------------------

# Suggested Routes

``` text
/
Homepage

/search
Search Results

/trip/demo
Trip Details

/select-seat
Seat Selection

/checkout
Checkout

/booking-confirmed
Digital Ticket

/services
Services

/destinations
Popular Destinations

/reviews
Reviews
```

The project does not need dozens of pages. Depth should come from
interactions, states, responsive behavior, and motion.

------------------------------------------------------------------------

# Example Mock Data

``` ts
const routes = [
  {
    id: "RV101",
    from: "New Delhi",
    to: "Jaipur",
    vehicle: "Premium AC Coach",
    departure: "06:30",
    arrival: "11:15",
    duration: "4h 45m",
    distance: "281 km",
    price: 699,
    seatsLeft: 6,
    rating: 4.8,
  },
  {
    id: "RV102",
    from: "New Delhi",
    to: "Jaipur",
    vehicle: "Private Cab",
    departure: "08:00",
    arrival: "12:20",
    duration: "4h 20m",
    distance: "281 km",
    price: 2499,
    seatsLeft: 6,
    rating: 4.9,
  },
];
```

The UI should actually filter and sort local data so the experience is
interactive rather than decorative.

------------------------------------------------------------------------

# Complete Demo Journey

``` text
ROVIA HOME
     ↓
New Delhi → Jaipur
     ↓
Choose Date
     ↓
2 Travellers
     ↓
SEARCH
     ↓
Search Results
     ↓
Bus / Cab / Tempo Traveller
     ↓
Filter & Sort
     ↓
Select Premium AC Coach
     ↓
Trip Details
     ↓
Select Boarding Point
     ↓
Select Drop Point
     ↓
Choose Seats
     ↓
Select Add-ons
     ↓
Traveller Details
     ↓
Simulated UPI Payment
     ↓
Booking Animation
     ↓
BOOKING CONFIRMED
     ↓
Digital Rovia Ticket
```

------------------------------------------------------------------------

# Scope Boundaries

## Build

-   Complete responsive frontend
-   Desktop, tablet, and mobile experiences
-   Local mock data
-   Search interactions
-   Filtering and sorting
-   Vehicle selection
-   Mock map UI
-   Boarding/drop selection
-   Seat selection
-   Add-ons
-   Traveller form
-   Simulated payment
-   Booking confirmation
-   Digital ticket
-   Animations and micro-interactions
-   Loading, empty, validation, and success states

## Do Not Build

-   Backend
-   Database
-   Authentication
-   Real user accounts
-   Real booking APIs
-   Real transport APIs
-   Real payment gateway
-   Real UPI transaction
-   Production ticketing
-   Production GPS/live tracking
-   Production map integration unless desired purely for presentation

------------------------------------------------------------------------

# Final Implementation Brief

> Build **Rovia** as a frontend-only, high-fidelity portfolio demo for a
> modern Indian intercity mobility platform.
>
> Rovia provides a simulated booking experience for **Intercity Buses,
> Private Cabs, Tempo Travellers, and Airport Transfers** across India.
>
> Use Indian cities, routes, ₹ pricing, boarding/drop points, Indian
> transportation types, Indian airports, and realistic Indian travel
> terminology throughout the application.
>
> Maintain a premium, minimal, editorial visual style. Do not create a
> stereotypical Indian-themed interface. Represent India through
> authentic modern transportation photography, landscapes, cities,
> vehicles, routes, and UX conventions.
>
> Create a fully responsive experience for desktop, tablet, and mobile
> using one codebase. Mobile should behave like a polished travel
> application with bottom sheets, sticky CTAs, touch-friendly controls,
> seat selection, compact route cards, and Map/List switching.
>
> Implement the complete simulated journey:
>
> **Home → Search → Results → Filters → Trip Details → Boarding/Drop
> Point → Seat Selection → Add-ons → Traveller Details → Simulated UPI
> Payment → Booking Confirmation → Digital Ticket**
>
> Use only local mock data and frontend state. Do not implement a
> backend, database, authentication, real booking API, payment gateway,
> or transport API.
>
> Give special attention to motion design: vehicle movement, route-line
> drawing, sticky scroll storytelling, image-mask reveals, counters, map
> transitions, smooth filtering, animated price changes, page
> transitions, and micro-interactions.
>
> The finished project should feel like a polished Indian mobility
> startup product rather than a static landing-page template.

------------------------------------------------------------------------

## Portfolio Positioning

**Rovia** demonstrates:

-   Responsive frontend engineering
-   UI/UX design implementation
-   Component architecture
-   Local state management
-   Search/filter interactions
-   Complex booking interfaces
-   Mobile-first interaction patterns
-   Motion design
-   Form states and validation
-   Product thinking
-   Travel and mobility UX

The goal is not to build a production transport platform. The goal is to
create a **convincing, interactive frontend experience that looks and
behaves like one**.

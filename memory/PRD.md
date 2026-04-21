# Noir Ink — Tattoo & Piercing Studio Website

## Problem Statement
Build a modern, minimalistic, high-conversion website for a tattoo & piercing studio. Brand colors: #556B2F olive (primary), black and cream. Feel: artistic, hygienic, professional, premium, edgy.

## Architecture
- **Frontend**: React 19 + CRA/CRACO, Tailwind, Shadcn UI primitives, Sonner toasts, lucide-react icons, React Router v7. Fonts: Outfit (display) + DM Sans (body) via Google Fonts.
- **Backend**: FastAPI + Motor (MongoDB). Endpoints prefixed with `/api`.
- **DB collections**: `leads`, `bookings`.

## User Personas
1. **First-time tattoo client** — discovers studio, wants to see work + book consultation + claim discount.
2. **Return/referral client** — browses artists' portfolios directly to pick a specialist.
3. **Studio manager** — reviews submitted leads/bookings via API.

## Completed (2026-02-xx, Iteration 1 — MVP)
- Hero auto-slide carousel with tagline, CTA, dark overlay, grain, slide indicators
- Sticky WhatsApp floating chat (bottom-right) with ping ring
- Lead capture popup (7s delay, 30s reappear, localStorage dismissal after submit) → POST /api/leads
- Services section (Custom Tattoo + Piercings bento cards)
- Gallery grid with hover zoom + lightbox (prev/next/close)
- Social proof badges (Google rating, hygiene, clients served)
- Kinetic text marquee + testimonials marquee + Instagram image marquee
- Experience/Trust stats strip (years, clients, artists, rating)
- Location section with grayscaled Google Maps iframe + address/phone/email/hours
- Final CTA booking form → POST /api/bookings with success state
- Navbar (sticky glassmorphism), Footer
- Artists listing page + Artist detail page (portfolio + lightbox)
- Backend: Lead + Booking Pydantic models, CRUD endpoints, validation
- Full responsive design, data-testid on all interactive elements

## Test Status
Iteration 1 — Backend 100%, Frontend 100% (all 21 flows passing)

## Backlog

### P1
- Admin dashboard to view leads & bookings (with filters)
- Email notification on booking submission (via Resend)
- Real Instagram feed integration (Instagram Basic Display API)

### P2
- Aftercare blog / journal section
- Artist-specific booking form (bypass Final CTA, route to artist)
- SMS confirmation via Twilio
- Multi-studio support
- Gift card / deposit system with Stripe

### Tech improvements
- Add Pydantic phone/email validators
- Add `hero-indicator-{i}` data-testid for consistency

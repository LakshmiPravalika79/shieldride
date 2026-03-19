<img width="3929" height="3414" alt="diagram" src="https://github.com/user-attachments/assets/49546429-5753-4ab7-ab41-8fe46c710449" /># ShieldRide - Parametric Income Protection for Gig Workers
>TEAM: Logicloop (KL UNIVERSITY)
> GUIDEWIRE DEVTrails 2026 · Phase 1: Ideation & Foundation · Team Submission

[![Phase](https://img.shields.io/badge/Phase-1%20Seed-orange)](.) [![Persona](https://img.shields.io/badge/Persona-Swiggy%2FZomato%20Partners-red)](.) [![Platform](https://img.shields.io/badge/Platform-PWA%20%28Mobile--first%29-blue)](.)

---

## Problem Statement

India has **5 million+ food delivery partners** on Swiggy and Zomato. On a good day, a delivery partner earns ₹700–1,200. But when it rains heavily, when temperatures hit 43°C, or when a zone gets shut down due to a strike or civic event — they earn **zero**. There is no safety net.

Existing micro-insurance products focus on health, accidents, or vehicle damage. **Nobody insures their income.** ShieldRide does exactly that — and does it without forms, without claims, and without agents.

---

## What We Are Building

**ShieldRide** is an AI-powered **parametric micro-insurance platform** that automatically pays delivery partners when a predefined external event (rain, heat wave, zone closure) prevents them from working — with no claims process required.

> **Parametric insurance** pays out when a trigger event is objectively verified, not when an individual files and proves a loss. This eliminates the claims friction that makes traditional insurance useless for gig workers.

**Strictly in scope:** Income loss protection only.  
**Strictly excluded:** Health, life, accidents, vehicle damage, or any other coverage.

---

## Persona & Scenarios

### Target User: Ramesh, Swiggy Delivery Partner, Hyderabad

- Age 27, rides a two-wheeler, active from 11 AM–10 PM
- Earns ₹850/day on average, ₹5,500–6,000/week
- Owns a ₹6,000 Android phone, uses WhatsApp daily
- Has no savings buffer; a lost day of income means skipped meals or unpaid EMIs
- Cannot file insurance claims — too time-consuming, too complex, no guarantee of payout

### Scenario 1: Heavy Monsoon Rain, Bangalore

It's July. IMD's rainfall API records 11mm/hr sustained for 35 minutes across Ramesh's delivery zone (Koramangala). ShieldRide's trigger oracle detects this. Ramesh's GPS shows he is stationary at home. The fraud engine confirms the trigger is valid. ₹360 (Standard tier payout) lands in his UPI account within 90 minutes. **He filed no claim.**

### Scenario 2: Heat Wave, Nagpur

The IMD issues a heat warning: 44°C forecast, feels-like 48°C for 6+ hours. ShieldRide's heat trigger fires for the Nagpur zone. All enrolled Pro-tier partners in that zone receive ₹650 automatically. **No action needed from the partner.**

### Scenario 3: Zone Closure, Mumbai

A local political rally leads to a civic authority suspending delivery operations in Dharavi zone for 3 hours (verified via an MCGM API and cross-referenced with Swiggy's public zone status). All enrolled partners in that zone receive the Starter payout of ₹180. **Trigger fired. Payment sent. Done.**

---

## Application Workflow

```
ENROLLMENT (one-time, ~90 seconds)
Partner clicks WhatsApp link → Conversational onboarding bot (Hindi/Telugu/Tamil)
→ Selects plan tier → Provides UPI ID → Confirms weekly AutoPay
→ Profile created → GPS zone mapped

WEEKLY CYCLE
Every Sunday night: AI premium engine re-prices based on next week's
zone weather risk score → AutoPay deducted Monday morning

TRIGGER MONITORING (continuous, 24x7)
IMD API + OpenMeteo API + Windy radar polled every 15 minutes per zone
→ Majority-vote ensemble decides if trigger threshold crossed
→ Trigger oracle creates an event log with timestamp + zone ID

PAYOUT EXECUTION (within 2 hours of trigger)
Fraud engine cross-checks partner GPS vs zone boundary
+ Activity check (active deliveries = exclude from payout)
→ Eligible partners flagged → Razorpay UPI bulk payout initiated
→ Partner notified via WhatsApp with payout confirmation

MAX 2 PAYOUTS PER WEEK PER PARTNER (per plan)
```

---

## Weekly Premium Model

Premiums are weekly to match the income rhythm of gig workers who think in weekly earnings, not monthly. AutoPay deduction every Monday eliminates the need for partners to "remember" to renew.

| Tier | Weekly Premium | Max Payout / Trigger | Max Payouts/Week | Annual Cost |
|------|---------------|----------------------|------------------|-------------|
| Starter | ₹29 | ₹180 (up to 3 hrs) | 2 | ~₹1,500 |
| Standard | ₹49 | ₹360 (up to 6 hrs) | 2 | ~₹2,550 |
| Pro | ₹79 | ₹650 (full day) | 2 | ~₹4,100 |

**Premium is not fixed.** The AI engine adjusts the base rate weekly based on:
- 5-day rainfall probability for the partner's delivery zone
- Historical claim frequency for that pin-code cluster
- Current season risk factor (monsoon season = higher baseline)

A partner in a high-rain zone during peak monsoon may pay ₹55 for Standard instead of ₹49. A partner in a dry zone in December pays the floor rate.

---

## Parametric Triggers — Definitions

All triggers are **zone-specific** (pin-code cluster level) and require **independent third-party data verification**. No partner input is required.

### Trigger 1: Rainfall Intensity
- **Threshold:** Rainfall ≥ 8 mm/hr sustained for ≥ 30 consecutive minutes
- **Data source:** IMD Real-Time Observation API + OpenMeteo hourly
- **Validation:** Both sources must agree (majority vote of 3 APIs)
- **Zone:** Trigger applies only to the specific pin-code clusters where threshold is crossed

### Trigger 2: Heat Wave
- **Threshold:** IMD-forecasted temperature ≥ 43°C AND feels-like index ≥ 47°C for ≥ 4 continuous hours
- **Data source:** IMD Heat Warning API + OpenMeteo feels-like temperature
- **Rationale:** Delivery activity drops to near-zero above this threshold per historical Swiggy data patterns

### Trigger 3: Zone Closure / Civic Suspension
- **Threshold:** Official delivery zone suspension ≥ 2 hours
- **Data source:** Civic authority open data (e.g., MCGM, GHMC) + manual monitoring with webhooks
- **Validation:** Cross-referenced with platform zone status (Swiggy/Zomato public status pages)

### Trigger 4: Cyclone / Severe Storm
- **Threshold:** IMD Red Alert issued for the district OR sustained wind speed ≥ 45 km/h
- **Data source:** IMD cyclone advisory feed
- **Auto-escalation:** Pro tier automatically upgraded to 2x payout during active cyclone alerts

---

## AI / ML Integration

### 1. Dynamic Premium Calculation Engine
- **Model:** XGBoost regressor
- **Features:** 7-day rainfall forecast probability, zone historical claim rate, season index, active partner count in zone, day-of-week risk multiplier
- **Training data:** IMD historical rainfall records (2015–2024) + synthetic claim simulation
- **Run schedule:** Every Sunday at 11 PM for the coming week
- **Output:** Zone-level risk score (0–1) → mapped to premium multiplier (0.8×–1.4× base)

### 2. Fraud Detection System
- **Primary check:** Partner's GPS location must be inside (or adjacent to) the triggered zone at time of trigger
- **Activity check:** If partner's app shows ≥ 3 delivery completions in the 2 hours following the trigger, they are excluded (they worked through it)
- **Anomaly detection:** Isolation Forest model on claim patterns — flags partners with unusually high trigger coincidence rates for manual review
- **SIM swap / account takeover:** UPI ID change requires 48-hour cooling-off period before payout eligibility

### 3. Trigger Oracle (Ensemble Verification)
- Three independent weather API sources polled every 15 minutes
- Majority vote (2 of 3) required to confirm a trigger
- Confidence score recorded for audit trail
- All trigger events logged immutably for regulatory compliance

### 4. Conversational Onboarding (WhatsApp Bot)
- Built on Twilio WhatsApp API with a simple state machine
- Multilingual: Hindi, Telugu, Tamil, Kannada, Marathi
- Collects: name, Swiggy/Zomato partner ID, UPI ID, delivery zones, preferred tier
- Onboarding completion time target: under 90 seconds

---

## Platform Justification: Progressive Web App (PWA)

**We chose a PWA over a native Android app** for the following reasons:

1. **No Play Store dependency** — delivery partners on low-end phones often disable auto-updates or have storage limitations. A PWA installs via a browser link with one tap.
2. **WhatsApp-first onboarding** — the primary touchpoint is a WhatsApp link. Partners don't need to "find" an app; they click a link and they're enrolled.
3. **Works on ₹4,000–7,000 Android phones** — the predominant device class among Swiggy/Zomato partners. Our PWA targets a 3G-capable, offline-graceful experience.
4. **Faster iteration** — one codebase for both web and mobile. Critical for a hackathon timeline and for post-competition iteration.

A native app once the product-market fit is validated.

---

## Tech Stack

### Frontend
- React 18 + Vite (PWA with service workers)
- TailwindCSS for utility-first styling
- Workbox for offline caching

### Backend
- Node.js + Express (REST API)
- PostgreSQL with TimescaleDB extension (time-series weather + trigger data)
- Redis for trigger event queuing

### AI / ML Services
- Python FastAPI microservice
- XGBoost + Scikit-learn (premium engine)
- Scikit-learn Isolation Forest (fraud detection)

### Integrations
- **IMD API** — rainfall and heat wave data
- **OpenMeteo API** — backup weather source + forecast
- **Razorpay UPI AutoPay** — weekly premium collection + bulk payouts
- **Twilio WhatsApp Business API** — onboarding + notifications

### Infrastructure
- Docker containers
- Railway.app (deployment, Phase 1)
- GitHub Actions (CI/CD)

---

## Development Roadmap

### Sprint 1 : Ideation & Foundation 
- Problem definition and persona research
- Parametric trigger design
- Premium model structure
- GitHub repository setup
- Prototype: enrollment screen + trigger dashboard (mock data)
- Mock premium calculator UI
- IMD API integration proof of concept
- 2-minute strategy + prototype video

### Sprint 2: Core Engine
- Weather API ensemble integration (live)
- Premium calculation engine (trained model)
- UPI AutoPay integration (Razorpay sandbox)
- WhatsApp onboarding bot (Twilio)
- Database schema + partner management

### Sprint 3: Fraud & Compliance
- GPS-based fraud detection
- Isolation Forest anomaly model
- Regulatory documentation (IRDAI sandbox considerations)
- Audit logging

### Sprint 4: Pilot
- 50-partner closed beta in one city zone
- Real trigger monitoring
- Post-trigger payout simulation
- Partner feedback loops

---

## Why This Works

| Traditional Insurance | ShieldRide |
|----------------------|------------|
| Monthly premium (unaffordable) | ₹29–79/week (aligned to income cycle) |
| File a claim, wait weeks | No claim — automatic payout in 2 hours |
| Requires documentation | Zero paperwork |
| No awareness among gig workers | WhatsApp-first, Hindi/regional language |
| Covers health or vehicle | Income only (pure, focused scope) |

The parametric model eliminates **moral hazard** (partners can't fake a weather event) and **claims friction** (the biggest reason gig workers never use insurance).

---

Real-Time Fraud Detection System Architecture with MLOps Pipeline

<img width="3929" height="3414" alt="diagram" src="https://github.com/user-attachments/assets/b5f5da6b-3f98-4d78-ae7f-4c7e1a10bedf" />


Simple Fraud Detection and Payment Flow

<img width="2657" height="328" alt="mermaid-diagram" src="https://github.com/user-attachments/assets/4c15d39d-a784-4229-8c3a-52367106fd02" />

## Team
Guruvi Reddy Yasaswini
Rachapudi Sai Sree
Ramisetti Purna Chandrika
Maddineni Pravallika
Ega Lakshmi Pravalika - Team Lead
---

## Repository Structure (Phase 1)
```
shieldride/
├── README.md              ← This document
├── prototype/
│   ├── frontend/          ← React PWA (enrollment + dashboard)
│   └── api/               ← Express API skeleton
├── ml/
│   └── premium_model/     ← XGBoost notebook (mock data)
├── docs/
│   ├── trigger_spec.md    ← Full trigger definitions
│   └── api_schema.md      ← API contract
└── video_link.txt         ← 2-minute strategy video URL
```

---

*ShieldRide — Because every delivery partner deserves a backup plan.*

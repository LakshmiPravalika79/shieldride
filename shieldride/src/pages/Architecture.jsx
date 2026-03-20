import { useNavigate } from 'react-router-dom'

const abox = (title, body, tech, variant = 'default') => ({ title, body, tech, variant })

export default function Architecture() {
  const navigate = useNavigate()

  const layers = [
    {
      label: 'External data sources',
      cols: 4,
      boxes: [
        abox('IMD Weather API', 'Rainfall + heat warnings. Primary trigger source.', 'Gov data · free tier'),
        abox('OpenMeteo API', 'Forecast + feels-like. Backup + validation.', 'Open source API'),
        abox('Civic / Zone API', 'MCGM, GHMC shutdown data for zone closure trigger.', 'Open government data'),
        abox('Razorpay UPI', 'AutoPay collection + bulk payout to partners.', 'Payment rails'),
      ]
    },
    {
      label: 'API gateway — Node.js + Express + Redis  ·  Why: fast I/O, handles 10,000 simultaneous payouts without blocking',
      cols: 3,
      variant: 'blue',
      boxes: [
        abox('Auth middleware', 'Partner identity + session management via JWT tokens.', 'Node.js'),
        abox('Rate limiting', 'Prevents API abuse. Redis-backed per partner ID.', 'Redis'),
        abox('Job queue', 'Batches payouts in groups of 100. Survives crashes — resumes from last position.', 'Redis Bull'),
      ]
    },
    {
      label: 'Core microservices — each independently deployable',
      cols: 3,
      boxes: [
        abox('Trigger engine', 'Polls 3 weather APIs every 15 min. Runs 2-of-3 ensemble vote. Logs trigger events with zone + timestamp.', 'Python FastAPI', 'purple'),
        abox('Anti-spoof engine ★ NEW', 'Scores every partner 0–100 using mock location flag, sensor fusion, cell tower mismatch, claim velocity, and device fingerprints before payout fires.', 'Python + Isolation Forest', 'red'),
        abox('ML service', 'XGBoost re-prices weekly premium per zone every Sunday 11pm. Isolation Forest detects anomalous claim patterns.', 'Python + XGBoost', 'amber'),
      ]
    },
    {
      label: 'Database layer',
      cols: 2,
      boxes: [
        abox('PostgreSQL + TimescaleDB', 'Partners, policies, payouts, weather events, device fingerprints. TimescaleDB makes time-series trigger queries instant. Why not MongoDB: data is relational and structured, easier to audit for insurance compliance.', 'Relational + time-series', 'teal'),
        abox('Redis cache', 'Session data, job queue state, rate limit counters. Payout queues split into: payout.immediate (0–30) · payout.review (31–60) · payout.blocked (61–100).', 'In-memory store'),
      ]
    },
    {
      label: 'Partner interface — why PWA not native Android app',
      cols: 2,
      boxes: [
        abox('React PWA', 'Installs via WhatsApp link. No Play Store, no storage on ₹5,000 phones. Works offline. One codebase. Why not native: Play Store approval takes days, storage limited on cheap phones, 60–70% of enrollments lost to download friction.', 'React + Vite + Service Workers', 'teal'),
        abox('WhatsApp bot (Twilio)', 'Primary touchpoint — partners already live on WhatsApp. Multilingual: Hindi, Telugu, Tamil, Kannada. Used for onboarding, alerts, and payout confirmations.', 'Twilio WhatsApp Business API'),
      ]
    },
    {
      label: 'Infrastructure',
      cols: 3,
      boxes: [
        abox('Docker containers', 'Each service packaged identically. Runs the same everywhere.', 'Docker'),
        abox('Railway.app', 'Push code → auto-deploy. No DevOps team needed for Phase 1.', 'Railway'),
        abox('GitHub Actions', 'Tests run on every push. Auto-deploy on merge to main.', 'CI/CD'),
      ]
    },
  ]

  const variantStyles = {
    default: { background: 'var(--card)', border: '1px solid var(--border)' },
    blue: { background: 'rgba(24,95,165,.1)', border: '1px solid rgba(24,95,165,.3)' },
    purple: { background: 'rgba(83,74,183,.1)', border: '1px solid rgba(83,74,183,.3)' },
    red: { background: 'rgba(226,75,74,.1)', border: '1px solid rgba(226,75,74,.4)' },
    amber: { background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)' },
    teal: { background: 'rgba(29,158,117,.1)', border: '1px solid rgba(29,158,117,.3)' },
  }

  const flowSteps = [
    { time: 'T+0', color: '#85b7eb', border: 'rgba(24,95,165,.5)', bg: 'rgba(24,95,165,.2)', label: 'Weather event detected', detail: 'IMD API reports threshold breach. OpenMeteo + Windy polled. 2-of-3 APIs agree. Trigger logged in TimescaleDB with zone ID + timestamp.', tags: ['IMD API', 'OpenMeteo', 'Windy', '2-of-3 vote'] },
    { time: 'T+5', color: 'var(--teal)', border: 'rgba(29,158,117,.5)', bg: 'rgba(29,158,117,.2)', label: 'Active partners matched to zone', detail: 'PostgreSQL finds all partners with active policies in triggered zone. 90-day delivery heatmap cross-referenced for historical zone validation.', tags: ['Zone ID lookup', 'Policy check', 'History match'] },
    { time: 'T+10', color: 'var(--amber)', border: 'rgba(245,158,11,.4)', bg: 'rgba(245,158,11,.2)', label: 'Anti-spoof engine scores each partner', detail: 'Mock location flag, accelerometer analysis, cell tower cross-check, claim velocity, device fingerprint. Composite score 0–100 computed in <200ms per partner.', tags: ['Mock location API', 'Sensor fusion', 'Cell tower', 'Velocity check', 'Device fingerprint'] },
    { time: 'T+15', color: 'var(--red)', border: 'rgba(226,75,74,.4)', bg: 'rgba(226,75,74,.2)', label: 'Partners routed to three queues', detail: 'Score 0–30 → payout.immediate. Score 31–60 → payout.review (4hr silent re-verify). Score 61–100 → payout.blocked. Partners never know which queue.', tags: ['payout.immediate', 'payout.review', 'payout.blocked'] },
    { time: 'T+20', color: 'var(--teal)', border: 'rgba(29,158,117,.5)', bg: 'rgba(29,158,117,.2)', label: 'Razorpay bulk UPI payout initiated', detail: 'Redis job queue feeds immediate batch to Razorpay Bulk Payout API in groups of 100. Transaction logged in PostgreSQL with full audit trail.', tags: ['Razorpay Bulk API', 'Batches of 100', 'Audit log'] },
    { time: 'T+90', color: 'var(--teal)', border: 'rgba(29,158,117,.5)', bg: 'rgba(29,158,117,.2)', label: 'Partner receives payout + WhatsApp notification', detail: 'UPI settlement completes. Twilio sends WhatsApp: "₹360 sent to your UPI." Zero partner action required. Total time: under 2 hours.', tags: ['UPI settlement', 'WhatsApp notification', 'Zero partner action'] },
  ]

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <div className="inner">

        <div className="tag">System Architecture</div>
        <h1 className="section-title">How ShieldRide is built — and why.</h1>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>Every component chosen for a specific reason. Lightweight enough to build fast. Robust enough to scale to 5 million partners.</p>

        {/* Architecture layers */}
        {layers.map((layer, li) => (
          <div key={li} style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '.62rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: '.55rem', fontWeight: 600 }}>
              {layer.label}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${layer.cols}, 1fr)`, gap: '1rem' }}>
              {layer.boxes.map((b, bi) => {
                const vs = variantStyles[b.variant] || variantStyles.default
                return (
                  <div key={bi} style={{ ...vs, borderRadius: 10, padding: '.9rem 1rem' }}>
                    <h4 style={{ fontSize: '.85rem', fontWeight: 700, marginBottom: '.28rem' }}>{b.title}</h4>
                    <p style={{ fontSize: '.72rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '.35rem' }}>{b.body}</p>
                    <div style={{ fontSize: '.62rem', color: 'var(--muted)', opacity: .65 }}>{b.tech}</div>
                  </div>
                )
              })}
            </div>
            {li < layers.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--muted)', fontSize: '.82rem', padding: '.4rem 0' }}>↓</div>
            )}
          </div>
        ))}

        {/* Data flow */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <div className="tag">Data flow</div>
          <h2 className="section-title">From weather event to bank account.</h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>Complete automation. Zero human intervention on the honest worker path. Under 2 hours start to finish.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 27, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg,transparent,var(--teal),var(--teal),transparent)' }} />
            {flowSteps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.5rem', position: 'relative' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne', fontSize: '.75rem', fontWeight: 800, flexShrink: 0, position: 'relative', zIndex: 1, background: s.bg, border: `2px solid ${s.border}`, color: s.color }}>
                  {s.time}
                </div>
                <div style={{ flex: 1, paddingTop: '.3rem' }}>
                  <h4 style={{ fontSize: '.92rem', fontWeight: 700, marginBottom: '.28rem' }}>{s.label}</h4>
                  <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '.55rem' }}>{s.detail}</p>
                  <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap' }}>
                    {s.tags.map((t, ti) => (
                      <span key={ti} style={{ padding: '.18rem .6rem', borderRadius: 5, fontSize: '.68rem', fontWeight: 500, background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/defense')}>See Anti-Spoofing Defense</button>
          <button className="btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
        </div>

      </div>
    </div>
  )
}

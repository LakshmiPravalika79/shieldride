import { Link } from 'react-router-dom'

const stats = [
  { num: '5M+', label: 'Delivery partners in India' },
  { num: '₹0', label: 'Income insurance available today' },
  { num: '<2hrs', label: 'Time from trigger to UPI payout' },
  { num: '₹49', label: 'Standard plan per week' },
]

const steps = [
  { n: '1', color: 'var(--orange)', border: 'rgba(232,93,36,.4)', title: 'Enroll via WhatsApp', body: 'Click a link. Enter mobile, UPI ID, delivery zone. 90 seconds. No app store. AutoPay deducts every Monday.' },
  { n: '2', color: 'var(--teal)', border: 'rgba(29,158,117,.4)', title: 'Zone monitored 24x7', body: 'IMD API + OpenMeteo + Windy polled every 15 minutes for your specific pin-code cluster.' },
  { n: '3', color: 'var(--orange)', border: 'rgba(232,93,36,.4)', title: 'Trigger confirmed', body: 'Rain, heat, or zone closure crosses threshold. 2-of-3 APIs must agree before trigger fires.' },
  { n: '4', color: 'var(--teal)', border: 'rgba(29,158,117,.4)', title: 'Money arrives', body: 'AI verifies GPS + activity. Razorpay sends payout to UPI. WhatsApp notification sent.' },
]

const triggers = [
  { icon: '🌧', title: 'Heavy Rain', threshold: 'IMD ≥ 8mm/hr · sustained 30 min', body: 'Verified across 3 independent weather APIs. 2-of-3 majority vote required. Zone-specific payouts.', tealBorder: true },
  { icon: '🌡', title: 'Heat Wave', threshold: '≥ 43°C + feels-like ≥ 47°C · 4hrs', body: 'IMD heat warning cross-checked with OpenMeteo. Delivery activity drops to near-zero above this threshold.', tealBorder: false },
  { icon: '🚫', title: 'Zone Closure', threshold: 'Civic API confirms ≥ 2hr shutdown', body: 'Official suspension verified via MCGM, GHMC open data and cross-referenced with platform status.', tealBorder: false },
]

const plans = [
  { name: 'Starter', price: '₹29', payout: '₹180', desc: 'Up to 3 hrs', features: ['All 3 triggers', 'Max 2 payouts/week', 'WhatsApp alerts'], featured: false },
  { name: 'Standard', price: '₹49', payout: '₹360', desc: 'Up to 6 hrs', features: ['All 3 triggers', 'Max 2 payouts/week', 'WhatsApp alerts', 'AI weekly re-pricing'], featured: true },
  { name: 'Pro', price: '₹79', payout: '₹650', desc: 'Full day', features: ['All triggers + cyclone', 'Max 2 payouts/week', 'Priority support', 'AI weekly re-pricing'], featured: false },
]

export default function Landing() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '5rem 2rem 4rem', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(29,158,117,.1) 0%, transparent 70%)',
        }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.35rem 1rem', borderRadius: '99px', marginBottom: '1.5rem',
          background: 'rgba(29,158,117,.1)', border: '1px solid rgba(29,158,117,.3)',
          fontSize: '.75rem', color: 'var(--teal)', fontWeight: 500,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
          DEVTrails 2026 · Phase 1 · Team LogicLoop
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.2rem', maxWidth: 780 }}>
          When rain stops you,{' '}
          <em style={{ color: 'var(--orange)', fontStyle: 'normal' }}>we pay you.</em>
          {' '}Automatically.
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7, marginBottom: '2rem' }}>
          Parametric income insurance for Swiggy &amp; Zomato delivery partners. No claims. No paperwork. Money in your UPI in under 2 hours when a trigger fires.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/enroll" className="btn-primary">Enroll in 90 seconds</Link>
          <Link to="/dashboard" className="btn-secondary">View Partner Dashboard</Link>
        </div>
      </section>

      {/* STATS */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)', flexWrap: 'wrap',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '1.5rem 2.5rem', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            flex: 1, minWidth: 150,
          }}>
            <div style={{ fontFamily: 'Syne', fontSize: '1.8rem', fontWeight: 800, color: 'var(--teal)' }}>{s.num}</div>
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: '.2rem', letterSpacing: '.04em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg2)' }}>
        <div className="inner">
          <div className="tag">How it works</div>
          <h2 className="section-title">Four steps. Zero effort from you.</h2>
          <p className="section-sub">The system runs entirely in the background. Ramesh never files a claim. The money finds him.</p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
            gap: '1rem', marginTop: '3rem', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 35, left: '10%', right: '10%',
              height: 1, background: 'linear-gradient(90deg,transparent,var(--teal),transparent)', opacity: .25,
            }} />
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 1rem' }}>
                <div style={{
                  width: 70, height: 70, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 800,
                  marginBottom: '1rem', position: 'relative', zIndex: 1,
                  background: `${s.color}26`, border: `2px solid ${s.border}`, color: s.color,
                }}>{s.n}</div>
                <h3 style={{ fontSize: '.92rem', fontWeight: 700, marginBottom: '.35rem' }}>{s.title}</h3>
                <p style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIGGERS */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="inner">
          <div className="tag">Parametric triggers</div>
          <h2 className="section-title">Three events that pay you automatically.</h2>
          <p className="section-sub">Every trigger verified by government and civic data — not what you report. You cannot fake an IMD rainfall reading.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.2rem', marginTop: '2.5rem' }}>
            {triggers.map((t, i) => (
              <div key={i} className="card" style={{ transition: 'border-color .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(29,158,117,.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.4rem' }}>{t.title}</h3>
                <div style={{
                  display: 'inline-block', padding: '.2rem .6rem', borderRadius: 5,
                  background: 'rgba(29,158,117,.1)', border: '1px solid rgba(29,158,117,.2)',
                  color: 'var(--teal)', fontSize: '.68rem', fontWeight: 500, marginBottom: '.7rem',
                  fontFamily: 'monospace',
                }}>{t.threshold}</div>
                <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '.85rem' }}>{t.body}</p>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                  {['₹180','₹360','₹650'].map((p, j) => (
                    <span key={j} style={{ padding: '.2rem .55rem', borderRadius: 6, fontSize: '.68rem', fontWeight: 600, background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{['Starter','Standard','Pro'][j]}: {p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg2)' }}>
        <div className="inner">
          <div className="tag">Weekly plans</div>
          <h2 className="section-title">Less than one missed delivery.</h2>
          <p className="section-sub">Weekly because gig workers earn weekly. AutoPay on Monday — one decision made once. AI re-prices every Sunday night.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.2rem', marginTop: '2.5rem' }}>
            {plans.map((p, i) => (
              <div key={i} className="card" style={{
                position: 'relative',
                borderColor: p.featured ? 'rgba(29,158,117,.5)' : 'var(--border)',
                background: p.featured ? 'linear-gradient(160deg,rgba(29,158,117,.08),var(--card))' : 'var(--card)',
              }}>
                {p.featured && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--teal)', color: '#fff', padding: '.18rem .85rem',
                    borderRadius: '0 0 8px 8px', fontSize: '.65rem', fontWeight: 700,
                    letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: 'Syne',
                  }}>Most Popular</div>
                )}
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '.4rem' }}>{p.name}</div>
                <div style={{ fontFamily: 'Syne', fontSize: '2.4rem', fontWeight: 800, lineHeight: 1 }}>
                  {p.price}<span style={{ fontSize: '.85rem', fontWeight: 400, color: 'var(--muted)' }}>/week</span>
                </div>
                <div style={{ margin: '1rem 0', padding: '.7rem', borderRadius: 8, background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '.65rem', color: 'var(--muted)', marginBottom: '.2rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>Max payout per trigger</div>
                  <div style={{ fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 700, color: 'var(--teal)' }}>{p.payout} <span style={{ fontSize: '.75rem', color: 'var(--muted)', fontFamily: 'DM Sans' }}>· {p.desc}</span></div>
                </div>
                <ul style={{ listStyle: 'none', marginTop: '.8rem' }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '.8rem', color: 'var(--muted)', padding: '.28rem 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/enroll" style={{
                  display: 'block', width: '100%', marginTop: '1.2rem', padding: '.7rem',
                  borderRadius: 10, fontFamily: 'Syne', fontWeight: 700, fontSize: '.85rem',
                  cursor: 'pointer', transition: 'all .2s', textAlign: 'center',
                  background: p.featured ? 'var(--teal)' : 'transparent',
                  color: '#fff',
                  border: p.featured ? 'none' : '1px solid var(--border)',
                }}>
                  Choose {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="inner">
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, marginBottom: '.75rem' }}>
            Ready to protect your income?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Join thousands of delivery partners who never worry about a bad weather day again.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/enroll" className="btn-primary">Enroll in 90 seconds</Link>
            <Link to="/architecture" className="btn-secondary">See how we built it</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

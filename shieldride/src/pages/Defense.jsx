import { useNavigate } from 'react-router-dom'

export default function Defense() {
  const navigate = useNavigate()

  const signals = [
    { num: '01', color: 'var(--orange)', title: 'Mock location API flag', body: "Android's Location.isFromMockProvider() returns TRUE at OS level when any GPS spoofing app is active. Hard binary signal. Cannot be bypassed without rooting the phone. Overwhelming majority of delivery partner devices are unrooted stock Android.", points: '+60 pts' },
    { num: '02', color: 'var(--teal)', title: 'Sensor fusion — IMU check', body: 'Real outdoor movement produces micro-vibrations in the accelerometer and gyroscope. A person sitting at home shows flat, near-zero readings sustained over 10+ minutes. Spoofing apps move the GPS pin in software — they cannot move the phone\'s Inertial Measurement Unit sensors.', points: '+40 pts' },
    { num: '03', color: 'var(--teal)', title: 'Cell tower vs GPS mismatch', body: "The phone's SIM communicates with a physical cell tower. That tower ID is cross-checked against the claimed GPS location. GPS says Koramangala. Cell tower says Whitefield. You can fake a GPS pin. You cannot fake which physical tower your SIM is registered to.", points: '+35 pts' },
    { num: '04', color: 'var(--amber)', title: 'Claim velocity surge', body: 'Genuine triggers: claims arrive organically over 15–30 minutes. Telegram-coordinated ring: 400–500 claims in 60 seconds because everyone received the same message simultaneously. Rule: >50 claims from one zone in any 60-second window → entire batch held. Statistically impossible in genuine scenarios.', points: '+30 pts' },
    { num: '05', color: 'var(--amber)', title: 'Historical zone mismatch', body: "Every partner has a 90-day delivery heatmap from completed orders. A partner whose entire history shows Banjara Hills claiming a trigger in Kukatpally — a zone they've never worked in — is flagged. People don't travel to unfamiliar zones during active weather events.", points: '+20 pts' },
  ]

  const tiers = [
    { range: '0 – 30', label: 'Auto-approve', desc: 'Clean signals across all layers. UPI payout fires within 2 hours as normal.', bg: 'rgba(29,158,117,.12)', border: 'rgba(29,158,117,.35)', color: 'var(--teal)' },
    { range: '31 – 60', label: 'Soft hold', desc: 'Silent 4-hour re-verification. Partner sees: "Payout arriving within 4 hours." No accusation. No form.', bg: 'rgba(245,158,11,.10)', border: 'rgba(245,158,11,.30)', color: 'var(--amber)' },
    { range: '61 – 100', label: 'Block + review', desc: 'Evidence packet auto-generated. Human review within 24hrs. False positives get manual payout + ₹50 credit.', bg: 'rgba(226,75,74,.10)', border: 'rgba(226,75,74,.30)', color: 'var(--red)' },
  ]

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <div className="inner">

        {/* Header */}
        <div className="tag red">Market Crash Response</div>
        <h1 className="section-title">Adversarial Defense &amp; Anti-Spoofing Strategy</h1>
        <p className="section-sub" style={{ marginBottom: '2.5rem' }}>A 500-partner syndicate drained a competitor's liquidity pool using GPS spoofing. Simple location checks are dead. Here is how ShieldRide fights back.</p>

        {/* Attack banner */}
        <div style={{ background: 'linear-gradient(135deg,rgba(226,75,74,.12),rgba(226,75,74,.06))', border: '1px solid rgba(226,75,74,.3)', borderRadius: 14, padding: '1.4rem 1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ fontSize: '1.7rem', flexShrink: 0 }}>🚨</div>
          <div>
            <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--red)', marginBottom: '.25rem' }}>The attack</h3>
            <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>500 partners coordinated via Telegram, installed GPS spoofing apps, pinned locations inside an active rain-triggered zone while sitting at home, and claimed simultaneously. 500 × ₹360 = <strong style={{ color: 'var(--white)' }}>₹1,80,000 drained</strong> in one trigger event. The exploit: the platform only checked GPS coordinates, which are trivially fakeable at the app layer.</p>
          </div>
        </div>

        {/* Why score not block */}
        <div style={{ background: 'rgba(29,158,117,.07)', border: '1px solid rgba(29,158,117,.2)', borderRadius: 12, padding: '1.2rem 1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '.5rem' }}>Why a composite score — not a binary block</h3>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Heavy rain causes GPS drift of ±300m. A binary block would lock out the honest worker sheltering in a storm — the exact person we exist to protect. The score means GPS drift alone adds 15 points and changes nothing. A fraudster must defeat signals from five completely different data sources simultaneously — OS level, phone hardware, network infrastructure, historical database, and timing patterns. That coordination costs more than a ₹360 payout. <strong style={{ color: 'var(--white)' }}>We don't make fraud impossible. We make it economically irrational.</strong>
          </p>
        </div>

        {/* Five signals */}
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Five independent signals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {signals.map((s, i) => (
            <div key={i} className="card" style={{ transition: 'border-color .2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(29,158,117,.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.5rem' }}>
                <div style={{ fontFamily: 'Syne', fontSize: '.68rem', fontWeight: 700, letterSpacing: '.08em', color: s.color }}>SIGNAL {s.num}</div>
                <span style={{ padding: '.15rem .55rem', borderRadius: 6, fontSize: '.65rem', fontWeight: 700, background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', color: 'var(--muted)' }}>{s.points}</span>
              </div>
              <h4 style={{ fontSize: '.88rem', fontWeight: 700, marginBottom: '.35rem' }}>{s.title}</h4>
              <p style={{ fontSize: '.76rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Score tiers */}
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Composite risk score — 0 to 100</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {tiers.map((t, i) => (
            <div key={i} style={{ borderRadius: 12, padding: '1.2rem', background: t.bg, border: `1px solid ${t.border}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: '.5rem' }}>
                <span style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 800, color: t.color }}>{t.range}</span>
                <span style={{ fontFamily: 'Syne', fontSize: '.82rem', fontWeight: 700 }}>{t.label}</span>
              </div>
              <p style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Honest worker box */}
        <div style={{ background: 'rgba(29,158,117,.07)', border: '1px solid rgba(29,158,117,.2)', borderRadius: 12, padding: '1.2rem 1.5rem', marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '.4rem' }}>Honest worker guarantee</h4>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>
            A genuinely stranded delivery partner scores <strong style={{ color: 'var(--white)' }}>0–15</strong>. Mock location OFF, accelerometer showing outdoor motion, cell tower matching the zone, organic claim timing, and location inside their historical work zone. Auto-approved within 2 hours every time. GPS drift from heavy rain handled with a ±200m zone boundary buffer — never penalised for the weather that triggered their payout.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => navigate('/architecture')}>See Full Architecture</button>
          <button className="btn-secondary" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>

      </div>
    </div>
  )
}

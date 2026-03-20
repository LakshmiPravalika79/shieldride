import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const steps = [
  { label: 'IMD API: rainfall confirmed', detail: '11.2mm/hr · Koramangala zone', time: 0 },
  { label: 'OpenMeteo: threshold crossed', detail: '10.8mm/hr · cross-verified', time: 800 },
  { label: 'Windy radar: confirmed', detail: '2-of-3 APIs agree · trigger logged', time: 1600 },
  { label: 'Active partners matched', detail: '847 partners in affected zone', time: 2400 },
  { label: 'Anti-spoof engine running', detail: 'Scoring 847 partners · 0–100 risk score', time: 3200 },
  { label: 'Risk scores computed', detail: '831 auto-approve · 12 soft hold · 4 blocked', time: 4000 },
  { label: 'Razorpay payout initiated', detail: 'Bulk UPI transfer to 831 partners', time: 4800 },
]

export default function TriggerAlert() {
  const [completed, setCompleted] = useState([])
  const [done, setDone] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    steps.forEach((s, i) => {
      setTimeout(() => {
        setCompleted(prev => [...prev, i])
        if (i === steps.length - 1) {
          setTimeout(() => setDone(true), 800)
        }
      }, s.time + 500)
    })
  }, [])

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: 620, margin: '0 auto' }}>

        {/* Alert banner */}
        <div style={{
          background: 'linear-gradient(135deg,rgba(232,93,36,.18),rgba(232,93,36,.08))',
          border: '1px solid rgba(232,93,36,.4)', borderRadius: 14,
          padding: '1.5rem', marginBottom: '2rem',
          display: 'flex', alignItems: 'flex-start', gap: '1rem',
        }}>
          <div style={{ fontSize: '2rem', flexShrink: 0 }}>🌧</div>
          <div>
            <div style={{ fontFamily: 'Syne', fontSize: '1.1rem', fontWeight: 800, color: 'var(--orange)', marginBottom: '.3rem' }}>
              Rain Trigger Fired — Koramangala Zone
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--muted)' }}>
              IMD reports 11.2mm/hr rainfall · Verified by 3 APIs · Payout processing initiated
            </div>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.3rem' }}>
              Wednesday, 19 March 2026 · 2:14 PM
            </div>
          </div>
        </div>

        {/* Live processing steps */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Live Processing Log
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 11, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />
            {steps.map((s, i) => {
              const done = completed.includes(i)
              return (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', position: 'relative' }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.65rem', fontWeight: 700, zIndex: 1,
                    background: done ? 'var(--teal)' : 'var(--bg2)',
                    border: `2px solid ${done ? 'var(--teal)' : 'var(--border)'}`,
                    color: done ? '#fff' : 'var(--muted)',
                    transition: 'all .3s',
                  }}>
                    {done ? '✓' : i + 1}
                  </div>
                  <div style={{ paddingTop: '.1rem' }}>
                    <div style={{ fontSize: '.85rem', fontWeight: done ? 600 : 400, color: done ? 'var(--white)' : 'var(--muted)', transition: 'color .3s' }}>{s.label}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '.15rem' }}>{s.detail}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Score breakdown */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Anti-Spoof Score Distribution</h3>
          <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>847 partners scored in real time before any payout fires.</p>
          {[
            { range: '0–30', label: 'Auto-approve', count: 831, pct: 98, color: 'var(--teal)', bg: 'rgba(29,158,117,.15)' },
            { range: '31–60', label: 'Soft hold (4hr re-verify)', count: 12, pct: 1.4, color: 'var(--amber)', bg: 'rgba(245,158,11,.15)' },
            { range: '61–100', label: 'Blocked + human review', count: 4, pct: 0.5, color: 'var(--red)', bg: 'rgba(226,75,74,.15)' },
          ].map((tier, i) => (
            <div key={i} style={{ marginBottom: '.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
                <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Syne', fontSize: '.8rem', fontWeight: 700, color: tier.color }}>{tier.range}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--muted)' }}>{tier.label}</span>
                </div>
                <span style={{ fontSize: '.78rem', fontWeight: 600 }}>{tier.count} partners</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--bg2)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${tier.pct}%`, background: tier.color, borderRadius: 4, transition: 'width 1s ease' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {done && (
          <div style={{
            background: 'rgba(29,158,117,.1)', border: '1px solid rgba(29,158,117,.3)',
            borderRadius: 14, padding: '1.25rem', textAlign: 'center',
            animation: 'fadeUp .5s ease',
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>✅</div>
            <div style={{ fontFamily: 'Syne', fontSize: '1rem', fontWeight: 700, marginBottom: '.3rem' }}>
              831 partners paid — ₹2,99,160 disbursed
            </div>
            <div style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '1rem' }}>
              Total time from trigger to payout initiation: 23 minutes
            </div>
            <button className="btn-primary" onClick={() => navigate('/payout')}>
              See Ramesh's payout →
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

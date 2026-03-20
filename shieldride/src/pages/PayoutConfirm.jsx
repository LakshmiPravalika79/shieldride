import { useNavigate } from 'react-router-dom'

export default function PayoutConfirm() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        <div className="tag">Payout Confirmation</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '.5rem' }}>Money sent. Zero action from Ramesh.</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>This is the complete end-to-end journey — from trigger to bank account.</p>

        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* Phone mockup */}
          <div style={{ width: 300, flexShrink: 0, background: '#0a0a0a', borderRadius: 38, padding: 10, border: '1.5px solid rgba(255,255,255,.1)', boxShadow: '0 30px 80px rgba(0,0,0,.6)' }}>
            <div style={{ background: '#111', borderRadius: 30, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.5rem 1rem', fontSize: '.62rem', color: 'rgba(255,255,255,.3)' }}>
                <span>9:41</span><span>●●●</span>
              </div>
              <div style={{ background: '#075e54', padding: '.75rem .85rem', display: 'flex', alignItems: 'center', gap: '.65rem' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.72rem', color: '#fff', flexShrink: 0 }}>SR</div>
                <div>
                  <div style={{ fontSize: '.82rem', fontWeight: 600, color: '#fff' }}>ShieldRide</div>
                  <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.5)' }}>Official partner · Verified</div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '.8rem', display: 'flex', flexDirection: 'column', gap: '.62rem', background: '#0b1014' }}>
                <div style={{ maxWidth: '85%', padding: '.58rem .82rem', borderRadius: '0 12px 12px 12px', background: '#1f2c34', color: 'rgba(255,255,255,.85)', fontSize: '.73rem', lineHeight: 1.5 }}>
                  Welcome! Standard plan active. ₹49 deducted every Monday. Covered 24x7.
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.28)', marginTop: '.18rem', textAlign: 'right' }}>Mon 8:02 AM</div>
                </div>
                <div style={{ maxWidth: '85%', alignSelf: 'flex-end', padding: '.58rem .82rem', borderRadius: '12px 12px 0 12px', background: '#005c4b', color: 'rgba(255,255,255,.9)', fontSize: '.73rem', lineHeight: 1.5 }}>
                  Ok thanks
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.28)', marginTop: '.18rem', textAlign: 'right' }}>Mon 8:05 AM</div>
                </div>
                <div style={{ maxWidth: '92%', padding: '.75rem .82rem', borderRadius: 12, background: 'linear-gradient(135deg,rgba(232,93,36,.2),rgba(232,93,36,.1))', border: '1px solid rgba(232,93,36,.3)', color: '#fff', fontSize: '.73rem', lineHeight: 1.5 }}>
                  <div style={{ color: 'var(--orange)', fontWeight: 700, marginBottom: '.18rem', fontSize: '.75rem' }}>🌧 Rain Alert — Koramangala</div>
                  IMD reports 11.2mm/hr in your zone. Confirmed by 3 APIs. Processing your payout...
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.28)', marginTop: '.18rem', textAlign: 'right' }}>Wed 2:14 PM</div>
                </div>
                <div style={{ maxWidth: '92%', padding: '.75rem .82rem', borderRadius: 12, background: 'linear-gradient(135deg,rgba(29,158,117,.2),rgba(29,158,117,.1))', border: '1px solid rgba(29,158,117,.3)', color: '#fff', fontSize: '.73rem', lineHeight: 1.5 }}>
                  <div style={{ color: 'var(--teal)', fontWeight: 700, marginBottom: '.18rem', fontSize: '.75rem' }}>✅ Payout Sent</div>
                  <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 800, color: 'var(--teal)' }}>₹360</div>
                  Sent to ramesh@paytm
                  <br /><small style={{ color: 'rgba(255,255,255,.4)' }}>You did nothing. We found you.</small>
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.28)', marginTop: '.18rem', textAlign: 'right' }}>Wed 3:48 PM</div>
                </div>
                <div style={{ maxWidth: '85%', padding: '.58rem .82rem', borderRadius: '0 12px 12px 12px', background: '#1f2c34', color: 'rgba(255,255,255,.85)', fontSize: '.73rem', lineHeight: 1.5 }}>
                  Net gain this week: <strong style={{ color: 'var(--teal)' }}>+₹311</strong> 🎉
                  <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.28)', marginTop: '.18rem', textAlign: 'right' }}>Wed 3:48 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '.75rem' }}>The week in numbers</h3>

            {[
              { label: 'Monday — Premium deducted', amount: '-₹49', color: 'var(--muted)' },
              { label: 'Wednesday — Rain trigger fired', amount: '₹0', color: 'var(--muted)', note: 'Processing...' },
              { label: 'Wednesday — Payout sent', amount: '+₹360', color: 'var(--teal)' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.7rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '.85rem', color: 'var(--muted)' }}>{r.label}</span>
                <span style={{ fontFamily: 'Syne', fontWeight: 700, color: r.color }}>{r.amount}</span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.9rem 0', borderBottom: '2px solid var(--teal)' }}>
              <span style={{ fontFamily: 'Syne', fontWeight: 700 }}>Net gain this week</span>
              <span style={{ fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 800, color: 'var(--teal)' }}>+₹311</span>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: 10, background: 'rgba(29,158,117,.07)', border: '1px solid rgba(29,158,117,.2)' }}>
              <div style={{ fontSize: '.75rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '.3rem' }}>Anti-spoof result</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ramesh scored <strong style={{ color: 'var(--white)' }}>8 / 100</strong> — all signals clean. Auto-approved in 23 minutes. No human review needed.</div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {[
                { icon: '✓', text: 'Mock location: OFF' },
                { icon: '✓', text: 'Sensor fusion: outdoor motion detected' },
                { icon: '✓', text: 'Cell tower: matches Koramangala zone' },
                { icon: '✓', text: 'Claim timing: organic (not a surge)' },
                { icon: '✓', text: 'Zone history: works here daily' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '.6rem', alignItems: 'center', fontSize: '.82rem' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ color: 'var(--muted)' }}>{c.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
              <button className="btn-secondary" onClick={() => navigate('/defense')}>See Anti-Spoof Defense</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

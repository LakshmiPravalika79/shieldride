import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,.04)',
  border: '1px solid var(--border)', borderRadius: 8,
  padding: '.65rem .9rem', color: 'var(--white)',
  fontFamily: 'DM Sans', fontSize: '.9rem', outline: 'none',
}

const labelStyle = {
  display: 'block', fontSize: '.75rem', fontWeight: 500,
  color: 'var(--muted)', marginBottom: '.4rem',
}

export default function Enroll() {
  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState('Standard')
  const navigate = useNavigate()

  const plans = [
    { name: 'Starter', price: '₹29', payout: '₹180', desc: 'Up to 3 hrs' },
    { name: 'Standard', price: '₹49', payout: '₹360', desc: 'Up to 6 hrs', popular: true },
    { name: 'Pro', price: '₹79', payout: '₹650', desc: 'Full day' },
  ]

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="tag">Enrollment</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '.5rem' }}>Get Protected</h1>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>90 seconds. AutoPay every Monday. Cancel anytime.</p>
        </div>

        {/* Step tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '2rem' }}>
          {['Details', 'Zone', 'Plan'].map((t, i) => (
            <div key={i} style={{
              flex: 1, padding: '.7rem .4rem', textAlign: 'center',
              fontSize: '.75rem', fontWeight: 600, cursor: 'pointer',
              color: step === i + 1 ? 'var(--teal)' : 'var(--muted)',
              borderBottom: step === i + 1 ? '2px solid var(--teal)' : '2px solid transparent',
              fontFamily: 'Syne', transition: 'all .2s',
            }} onClick={() => step > i + 1 && setStep(i + 1)}>
              {i + 1}. {t}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="fade-up">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input style={inputStyle} placeholder="Ramesh Kumar" />
              </div>
              <div>
                <label style={labelStyle}>Mobile number</label>
                <input style={inputStyle} placeholder="+91 98765 43210" />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Swiggy / Zomato partner ID</label>
              <input style={inputStyle} placeholder="SWY-HYD-290341" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>UPI ID</label>
              <input style={inputStyle} placeholder="ramesh@paytm" />
            </div>
            <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => setStep(2)}>
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="fade-up">
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>City</label>
              <select style={{ ...inputStyle, background: 'var(--bg2)', cursor: 'pointer' }}>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Chennai</option>
                <option>Pune</option>
                <option>Delhi NCR</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Primary delivery zone</label>
              <input style={inputStyle} placeholder="e.g. Koramangala, Banjara Hills" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Working hours</label>
              <select style={{ ...inputStyle, background: 'var(--bg2)', cursor: 'pointer' }}>
                <option>Morning (6am – 12pm)</option>
                <option>Afternoon (12pm – 6pm)</option>
                <option>Full day (11am – 10pm)</option>
                <option>Evening / Night (6pm – 2am)</option>
              </select>
            </div>
            <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => setStep(3)}>
              Continue →
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="fade-up">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.5rem' }}>
              {plans.map(p => (
                <div key={p.name}
                  onClick={() => setPlan(p.name)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '.85rem 1rem', borderRadius: 10, cursor: 'pointer', transition: 'all .2s',
                    background: plan === p.name ? 'rgba(29,158,117,.08)' : 'rgba(255,255,255,.03)',
                    border: plan === p.name ? '2px solid rgba(29,158,117,.5)' : '1px solid var(--border)',
                  }}>
                  <div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '.9rem' }}>
                      {p.name}
                      {p.popular && <span style={{ background: 'var(--teal)', color: '#fff', fontSize: '.6rem', padding: '1px 6px', borderRadius: 4, marginLeft: 6, fontWeight: 700 }}>Popular</span>}
                    </div>
                    <div style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{p.payout} payout · {p.desc}</div>
                  </div>
                  <div style={{ fontFamily: 'Syne', fontSize: '1rem', fontWeight: 800 }}>
                    {p.price}<span style={{ fontSize: '.68rem', fontWeight: 400, color: 'var(--muted)' }}>/wk</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }}
              onClick={() => navigate('/dashboard')}>
              Activate Protection →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const [simulating, setSimulating] = useState(false)

  const simulate = () => {
    setSimulating(true)
    setTimeout(() => navigate('/trigger'), 1500)
  }

  const statCards = [
    { label: 'Current plan', value: 'Standard', sub: '₹49/week · Active' },
    { label: 'Zone', value: 'Koramangala', sub: 'Hyderabad · Monitored' },
    { label: 'This week', value: '₹49', sub: 'Deducted Monday' },
    { label: 'Total payouts', value: '₹720', sub: '2 payouts received' },
  ]

  const recentActivity = [
    { date: 'Wed 12 Mar', event: 'Rain trigger fired — Koramangala', amount: '+₹360', status: 'paid', color: 'var(--teal)' },
    { date: 'Mon 10 Mar', event: 'Weekly premium deducted', amount: '-₹49', status: 'deducted', color: 'var(--muted)' },
    { date: 'Fri 7 Mar', event: 'Heat wave trigger fired — Koramangala', amount: '+₹360', status: 'paid', color: 'var(--teal)' },
    { date: 'Mon 3 Mar', event: 'Weekly premium deducted', amount: '-₹49', status: 'deducted', color: 'var(--muted)' },
  ]

  return (
    <div style={{ padding: '3rem 2rem', minHeight: '80vh' }}>
      <div className="inner">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="tag">Partner Dashboard</div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Welcome, Ramesh 👋</h1>
            <p style={{ color: 'var(--muted)', marginTop: '.25rem' }}>Your income is protected 24x7. We're watching your zone.</p>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '.6rem',
            padding: '.6rem 1.1rem', borderRadius: 10,
            background: 'rgba(29,158,117,.1)', border: '1px solid rgba(29,158,117,.3)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            <span style={{ fontSize: '.82rem', color: 'var(--teal)', fontWeight: 600 }}>Coverage Active</span>
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {statCards.map((s, i) => (
            <div key={i} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.2rem' }}>
              <div style={{ fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>{s.label}</div>
              <div style={{ fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 800, marginBottom: '.2rem' }}>{s.value}</div>
              <div style={{ fontSize: '.72rem', color: 'var(--teal)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Zone status */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Zone Weather Status</h3>
            {[
              { label: 'Current rainfall', value: '2.1 mm/hr', status: 'safe', threshold: 'Trigger at 8mm/hr' },
              { label: 'Temperature', value: '38°C', status: 'safe', threshold: 'Trigger at 43°C' },
              { label: 'Zone status', value: 'Open', status: 'safe', threshold: 'Trigger at 2hr closure' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.6rem 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                <div>
                  <div style={{ fontSize: '.82rem', fontWeight: 500 }}>{item.label}</div>
                  <div style={{ fontSize: '.7rem', color: 'var(--muted)' }}>{item.threshold}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Syne', fontSize: '.9rem', fontWeight: 700, color: 'var(--teal)' }}>{item.value}</div>
                  <div style={{ fontSize: '.65rem', color: 'var(--teal)' }}>✓ Safe</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Your Plan</h3>
            <div style={{ background: 'rgba(29,158,117,.08)', border: '1px solid rgba(29,158,117,.3)', borderRadius: 10, padding: '1rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'Syne', fontSize: '1.5rem', fontWeight: 800 }}>Standard</div>
              <div style={{ color: 'var(--muted)', fontSize: '.82rem', marginTop: '.2rem' }}>₹49/week · Auto-renews Monday</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.4rem 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Max payout per trigger</span>
              <span style={{ fontFamily: 'Syne', fontWeight: 700, color: 'var(--teal)' }}>₹360</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.4rem 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Max payouts per week</span>
              <span style={{ fontFamily: 'Syne', fontWeight: 700 }}>2</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.4rem 0' }}>
              <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Triggers covered</span>
              <span style={{ fontFamily: 'Syne', fontWeight: 700 }}>Rain · Heat · Zone</span>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Recent Activity</h3>
          {recentActivity.map((a, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.7rem 0', borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ fontSize: '.85rem', fontWeight: 500 }}>{a.event}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '.15rem' }}>{a.date}</div>
              </div>
              <div style={{ fontFamily: 'Syne', fontSize: '.95rem', fontWeight: 700, color: a.color }}>{a.amount}</div>
            </div>
          ))}
        </div>

        {/* Simulate trigger */}
        <div style={{ background: 'rgba(232,93,36,.08)', border: '1px solid rgba(232,93,36,.25)', borderRadius: 14, padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>Simulate a Trigger Event</h3>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '1.25rem' }}>See the full trigger → verification → payout flow in action.</p>
          <button
            className="btn-primary"
            onClick={simulate}
            disabled={simulating}
            style={{ opacity: simulating ? .7 : 1 }}>
            {simulating ? 'Simulating rain event...' : '🌧 Simulate Heavy Rain Trigger'}
          </button>
        </div>

      </div>
    </div>
  )
}

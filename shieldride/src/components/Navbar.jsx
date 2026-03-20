import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/trigger', label: 'Trigger Alert' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/defense', label: 'Anti-Spoofing' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 2.5rem',
      background: 'rgba(8,15,26,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <Link to="/" style={{ fontFamily: 'Syne', fontSize: '1.4rem', fontWeight: 800 }}>
        <span style={{ color: 'var(--teal)' }}>Shield</span>
        <span style={{ color: 'var(--orange)' }}>Ride</span>
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{
            color: pathname === l.to ? 'var(--white)' : 'var(--muted)',
            fontSize: '.85rem',
            fontWeight: pathname === l.to ? 600 : 400,
            transition: 'color .2s',
          }}>
            {l.label}
          </Link>
        ))}
        <Link to="/enroll" style={{
          background: 'var(--teal)', color: '#fff', border: 'none',
          padding: '.5rem 1.2rem', borderRadius: '8px',
          fontFamily: 'Syne', fontWeight: 600, fontSize: '.85rem',
          cursor: 'pointer',
        }}>
          Enroll Now
        </Link>
      </div>
    </nav>
  )
}

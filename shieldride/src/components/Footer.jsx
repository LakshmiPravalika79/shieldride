export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      background: 'var(--bg)',
    }}>
      <div style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 800 }}>
        <span style={{ color: 'var(--teal)' }}>Shield</span>
        <span style={{ color: 'var(--orange)' }}>Ride</span>
      </div>
      <p style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
        DEVTrails 2026 · Phase 1 · Team LogicLoop · KL University
      </p>
      <p style={{ fontSize: '.75rem', color: 'var(--muted)' }}>
        Income loss protection only · No health, life, or vehicle cover
      </p>
    </footer>
  )
}

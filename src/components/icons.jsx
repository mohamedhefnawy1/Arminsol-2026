// Small inline SVG icons used in the nav and footer.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Sun({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}
export function Moon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}
export function Globe({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
    </svg>
  )
}
export function YouTube({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
    </svg>
  )
}
export function Twitter({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.8 4.6a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.1a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1z" />
    </svg>
  )
}
export function Instagram({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
// ---- "why choose Arminsol" benefit icons ----
export function PriceTag({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-6.4-6.4a2 2 0 0 1-.6-1.4V4.8A1.8 1.8 0 0 1 5 3h7a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z" />
      <circle cx="8.2" cy="8.2" r="1.4" />
    </svg>
  )
}
export function Truck({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M1.5 5.5h12v10h-12z" />
      <path d="M13.5 8.5h3.6L21 12v3.5h-7.5z" />
      <circle cx="5.5" cy="17.5" r="1.9" />
      <circle cx="17" cy="17.5" r="1.9" />
    </svg>
  )
}
export function Headset({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a3 3 0 0 1-3 3h-3" />
    </svg>
  )
}
export function Heart({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 20.5C5 16 3.5 11.6 3.5 8.8A3.8 3.8 0 0 1 12 7.2a3.8 3.8 0 0 1 8.5 1.6c0 2.8-1.5 7.2-8.5 11.7z" />
    </svg>
  )
}

export function LinkedIn({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

// Small diagonal arrow used on buttons and list rows.
export default function Arrow({ size = 15 }) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12L12 4" />
      <path d="M5.5 4H12V10.5" />
    </svg>
  )
}

// Faint vertical column grid drawn behind all content — matches the live
// site's 8-column background grid (9 lines, faded top/bottom).
export default function GridLines() {
  return (
    <div className="gridlines" aria-hidden="true">
      <div className="gridlines__inner">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  )
}

import '../styles/GridBackground.css'

export function GridBackground() {
  return (
    <div className="grid-bg">
      <div className="grid-bg__blob grid-bg__blob--tl" />
      <div className="grid-bg__blob grid-bg__blob--br" />
      <div className="grid-bg__lines" />
      <div className="grid-bg__blob grid-bg__blob--center" />
      <div className="grid-bg__vignette" />
    </div>
  )
}
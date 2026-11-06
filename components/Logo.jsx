// To use your real logo: put the file in /public (for example /public/logo.png)
// and set LOGO_SRC = "/logo.png" below. Nothing else needs to change.
const LOGO_SRC = null;

export default function Logo({ onDark = false }) {
  if (LOGO_SRC) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={LOGO_SRC} alt="SCPL स्वेच्छा केंद्र" className="logo-img" />;
  }
  return (
    <div className={"logo" + (onDark ? " logo-dark" : "")}>
      <span className="logo-mark">S</span>
      <span className="logo-text">
        <strong>SCPL</strong>
        <small>स्वेच्छा केंद्र</small>
      </span>
    </div>
  );
}

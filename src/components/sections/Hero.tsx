export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src="/hero3.jpg" alt="Mosque" className="hero-bg" aria-hidden="true" />
      <div className="container hero-content">
        <h1>
          <span className="arabic">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</span>
          <div className="headline" style={{ textShadow: 'none' }}>Welcome to <span className="site-name">Sultanpur Al‑Falah Islamic Center</span></div>
          <div className="sub" style={{ fontWeight: 'normal' }}>A mosque and community hub offering regular prayers, Quran classes, youth programs, and family support — serving Sultanpur and the Rangpur region with faith and service.</div>
        </h1>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-light" href="#about">Learn More</a>
          <a className="btn btn-donate" href="#donation">Donate</a>
        </div>
      </div>
    </section>
  );
}

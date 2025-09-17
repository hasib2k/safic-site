import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Image src="/hero3.jpg" alt="Mosque" className="hero-bg" aria-hidden="true" width={1920} height={1080} priority />
      <div className="container hero-content">
        <h1>
          <span className="arabic">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</span>
          <div className="headline" style={{ textShadow: 'none' }}>Welcome to <span className="site-name">Sultanpur Al‑Falah Islamic Center</span></div>
          <div className="sub" style={{ fontWeight: 'normal' }}>A mosque and community hub offering regular prayers, Quran classes, youth programs, and family support — serving Sultanpur and the Rangpur region with faith and service.</div>
        </h1>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-light" href="#about" style={{ height: 36, padding: '0 16px', borderRadius: 8, fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Learn More</a>
          <a className="btn btn-donate" href="#donation">Donate</a>
        </div>
      </div>
    </section>
  );
}

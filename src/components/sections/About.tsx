import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="welcome" style={{ paddingTop: 20, paddingBottom: 12, background: '#f8fafc' }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <h3 style={{ margin: 0 }}>About</h3>
        </div>
        <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
        <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '1.00rem' }}>
          Learn about our mission, programs, and community services at Sultanpur Al-Falah Islamic Center.
        </p>
      </div>
      <div className="container about-grid">
        {/* Left: Photo with highlighted stats */}
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: 'none', border: 'none', background: 'transparent' }}>
            <img src="/about2.png" alt="Interior" className="cover" style={{ display: 'block', width: '100%', height: 360, objectFit: 'cover', border: 'none', filter: 'none', transform: 'none' }} />
          </div>
        </div>

        {/* Right: Mission / Vision and CTAs */}
        <div>
          <h3 style={{ color: '#b5842d', marginBottom: 8 }}>Who We Are</h3>
          <p style={{ color: '#374151', fontSize: 16 }}>
            Sultanpur Al-Falah Islamic Center (SAFIC) is a community mosque and learning hub serving Sultanpur and the wider Rangpur area. We provide regular congregational prayers, Islamic education for children and adults, social support for families, and outreach programs that strengthen neighborhood ties while preserving traditional scholarship and compassionate service.
          </p>

          <div className="mission-vision-grid">
            <div style={{ background: '#f8fafc', padding: 10, borderRadius: 8 }}>
              <strong>Our Mission</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13, color: '#6b7280' }}>To nurture sincere faith, transmit authentic Islamic knowledge, and provide compassionate social services that uplift families and strengthen community resilience.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: 10, borderRadius: 8 }}>
              <strong>Our Vision</strong>
              <p style={{ margin: '6px 0 0', fontSize: 13, color: '#6b7280' }}>A safe, educated, and caring community grounded in worship, learning, and mutual support—where children grow in knowledge and adults find spiritual and practical help.</p>
            </div>
          </div>

          <h4 style={{ marginTop: 14, marginBottom: 8 }}>Programs at SAFIC</h4>
          <div style={{ display: 'grid', gap: 8, fontSize: 14, color: '#374151' }}>
            <div>• Quran & Tajweed classes (children & adults)</div>
            <div>• Weekly Jumu&apos;ah with short lecture (Khutbah) and Tafsir study circles</div>
            <div>• Youth mentoring, leadership training, and community volunteer days</div>
            <div>• Women&apos;s study groups, family counseling and social support services</div>
          </div>

          <div className="leadership-office-grid">
            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Leadership</h4>
              <div style={{ fontSize: 14, color: '#374151' }}>
                <div style={{ fontWeight: 700 }}>Imam: Atik Rahman</div>
                <div style={{ marginTop: 6 }}>Imam Atik leads daily prayers, teaches Quran classes, and delivers the weekly khutbah.</div>
                <div style={{ marginTop: 8 }}><strong>Chairman:</strong> Md. Najmul Huda</div>
                <div style={{ marginTop: 6 }}>Chairman Najmul Huda coordinates community outreach, fundraising, and project planning for the center.</div>
              </div>
            </div>

            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Office & Visit</h4>
              <div style={{ fontSize: 14, color: '#374151' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><FaMapMarkerAlt style={{ color: '#c19233' }} /> Sultanpur, Mithapukur, Rangpur</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}><FaClock style={{ color: '#c19233' }} /> Office Hours: Mon–Sat • 9:00 AM – 6:00 PM</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}><FaPhoneAlt style={{ color: '#c19233' }} /> +8801706776711</div>
                <div style={{ marginTop: 6, color: '#6b7280' }}>To arrange visits, classes, or counselling, please call or email <a href="mailto:info.safic@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>info.safic@gmail.com</a>.</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
            <a className="btn btn-dark" href="#events" style={{ padding: '8px 14px' }}>Explore Programs</a>
            <a className="btn btn-outline" href="#donation" style={{ padding: '8px 12px', border: '1px solid rgba(193,146,51,0.18)', color: '#c19233' }}>Support Us</a>
          </div>

          <p style={{ marginTop: 10, fontSize: 13, color: '#6b7280' }}>
            For detailed program schedules or to arrange a visit, please contact our office or follow the Events & Programs section for updates.
          </p>
        </div>
      </div>
    </section>
  );
}

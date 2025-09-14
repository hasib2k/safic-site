import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="footer" style={{ borderTop: '2px solid #1a2a3a', background: 'linear-gradient(90deg, #0f1d2a 60%, #1a2a3a 100%)', padding: '4px 0 0 0', fontSize: '13px', lineHeight: 1.6 }}>
      <div className="container footer-grid" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14 }}>
        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '16px', lineHeight: 1.3, color: '#fff' }}>
            Sultanpur Al-Falah Islamic Center
          </h4>
          <p style={{ color: '#b6c2d1', marginTop: 8, borderLeft: '3px solid #c19233', paddingLeft: 10 }}>
            A place of worship, community, and spiritual growth serving the Muslim community in Rangpur, Bangladesh.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#ffd700', letterSpacing: 1, fontSize: '15px', lineHeight: 1.3 }}>Quick Menu</h4>
          <ul className="links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#prayer">Prayer Times</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#ffd700', letterSpacing: 1, fontSize: '15px', lineHeight: 1.3 }}>Contact</h4>
          <ul className="contact">
            <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaMapMarkerAlt style={{ color: '#c19233', opacity: 0.8 }} />Sultanpur, Mithapukur, Rangpur</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <a href="tel:+8801706776711" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <FaPhoneAlt style={{ color: '#c19233', opacity: 0.8 }} />+8801706776711
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <a href="mailto:info.safic@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <FaEnvelope style={{ color: '#c19233', opacity: 0.8 }} />info.safic@gmail.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <a href="https://www.safic.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <FaGlobe style={{ color: '#c19233', opacity: 0.8 }} />www.safic.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#ffd700', letterSpacing: 1, fontSize: '15px', lineHeight: 1.3 }}>Social</h4>
          <ul className="links">
            <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaFacebookF style={{ color: '#c19233', opacity: 0.8 }} />Facebook</a></li>
            <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaInstagram style={{ color: '#c19233', opacity: 0.8 }} />Instagram</a></li>
            <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaLinkedinIn style={{ color: '#c19233', opacity: 0.8 }} />LinkedIn</a></li>
            <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaWhatsapp style={{ color: '#c19233', opacity: 0.8 }} />WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright" style={{ background: 'rgba(0,0,0,0.08)', color: '#b6c2d1', borderTop: '1px solid #1a2a3a', marginTop: 0, padding: '8px 0' }}>
        Copyright 2025 © Sultanpur Al-Falah Islamic Center.
      </div>
    </footer>
  );
}

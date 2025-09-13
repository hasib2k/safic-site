"use client";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaClock, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

function ExpandableNewsCard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="card" key="latest-news">
      <div className="media"><img src="/news-1.jpg" alt="Roof Casting Work Begins" className="cover" /></div>
      <div className="card-body">
        <h4>Roof Casting Work Begins at Sultanpur Al-Falah Islamic Center</h4>
        <p>September 11, 2025 (Wednesday)</p>
        {expanded ? (
          <>
            <p>
              With the boundless mercy of Almighty Allah and through the dedicated efforts of local residents, relatives, and well-wishers, the roof casting work of Sultanpur Al-Falah Islamic Center officially commenced today.
            </p>
            <p>
              The project is progressing smoothly with the united cooperation and tireless contributions of the community, ensuring that the mosque construction continues in an organized and graceful manner.
            </p>
            <p>
              The mosque committee has requested everyone to keep the project in their prayers, so that, with Allah’s guidance, a beautiful and inspiring house of worship can be completed.
            </p>
            <p><strong>Alhamdulillahi Rabbil Alamin.</strong></p>
            <button onClick={() => setExpanded(false)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Collapse</button>
          </>
        ) : (
          <button onClick={() => setExpanded(true)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Read More</button>
        )}
      </div>
    </article>
  );
}

function ExpandableNewsCard2() {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="card" key="construction-progress">
      <div className="media"><img src="/news-2.jpg" alt="Construction Work Progresses" className="cover" /></div>
      <div className="card-body">
        <h4>Construction Work Progresses at Sultanpur Al-Falah Islamic Center</h4>
        <p>September 01, 2025</p>
        {expanded ? (
          <>
            <p><strong>Sultanpur:</strong></p>
            <p>
              With the boundless mercy of Almighty Allah and the collective efforts of the community, the construction of the Sultanpur Al-Falah Islamic Center is steadily moving forward. If granted the opportunity by Allah, the roof casting work is expected to begin very soon, Insha’Allah.
            </p>
            <p>
              The late Abdul Qayyum Talukdar Ranga, who made tireless efforts for the development of this Islamic Center, is being remembered with deep respect. Though he is no longer with us, the community prays that Allah grants him eternal peace and a place in Jannah.
            </p>
            <p>
              The committee and residents have requested everyone’s continued prayers and support so that the construction of the Al-Falah Islamic Center can be completed smoothly and beautifully.
            </p>
            <p><strong>Alhamdulillahi Rabbil Alamin.</strong></p>
            <button onClick={() => setExpanded(false)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Collapse</button>
          </>
        ) : (
          <button onClick={() => setExpanded(true)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Read More</button>
        )}
      </div>
    </article>
  );
}

function ExpandableNewsCard4() {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="card" key="structural-progress">
      <div className="media"><img src="/news-3.jpg" alt="Structural Progress at Sultanpur" className="cover" /></div>
      <div className="card-body">
        <h4>Structural Progress Visible at Sultanpur Al-Falah Site</h4>
        <p>August 15, 2025</p>
        {expanded ? (
          <>
            <p>
              Recent photographs show clear structural progress at the Sultanpur Al-Falah Islamic Center construction site — vertical columns and temporary formwork are now in place, marking the project’s steady advance toward the next phase.
            </p>
            <p>
              The visible scaffolding and timber formwork indicate preparatory work for further slab and roof casting operations. This steady pace is the result of coordinated efforts by local residents, volunteers, and supporters who have contributed time and resources.
            </p>
            <p>
              The mosque committee expresses deep gratitude to everyone who has supported the project so far and asks for continued prayers and practical support. Donations toward finishing works and construction materials remain welcome to help complete the center promptly and safely.
            </p>
            <p><strong>Alhamdulillahi Rabbil Alamin.</strong></p>
            <button onClick={() => setExpanded(false)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Collapse</button>
          </>
        ) : (
          <button onClick={() => setExpanded(true)} style={{ marginTop: 8, fontSize: 13, color: '#c19233', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Read More</button>
        )}
      </div>
    </article>
  );
}

function CopyPayment({ icon, label, number, type }: { icon: string, label: string, number: string, type: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="donation-method" style={{ minWidth: 220, background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 16, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src={icon} alt={label} style={{ height: 32, marginRight: 8 }} />
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span><strong>{label}</strong> {number} <small style={{ color: '#888' }}>({type})</small></span>
        <button onClick={handleCopy} style={{ marginTop: 2, fontSize: 12, background: '#f7efe0', border: '1px solid #e1c286', borderRadius: 4, padding: '2px 8px', cursor: 'pointer', color: '#b5842d' }}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function CopyBankPayment({ icon, bank, account, name, branch }: { icon: string, bank: string, account: string, name: string, branch: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="donation-method" style={{ minWidth: 280, background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: 16, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src={icon} alt="Bank" style={{ height: 32, marginRight: 8 }} />
      <div style={{ textAlign: 'left', fontSize: '0.98rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span><strong>Bank:</strong> {bank}</span>
        <span><strong>A/C:</strong> {account}</span>
        <span><strong>Name:</strong> {name}</span>
        <span><strong>Branch:</strong> {branch}</span>
        <button onClick={handleCopy} style={{ marginTop: 2, fontSize: 12, background: '#f7efe0', border: '1px solid #e1c286', borderRadius: 4, padding: '2px 8px', cursor: 'pointer', color: '#b5842d', alignSelf: 'flex-start' }}>
          {copied ? 'Copied!' : 'Copy A/C'}
        </button>
      </div>
    </div>
  );
}

function NextKhutbah() {
  const [now, setNow] = useState<Date>(new Date());


  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  // compute next Friday at 12:20 Dhaka time (UTC+6). We assume Dhaka uses a fixed +6 offset (no DST).
  const target = (() => {
    const MS = 1000;
    const MIN = 60 * MS;
    const HOUR = 60 * MIN;
    const OFFSET = 6 * HOUR; // Dhaka is UTC+6

    // get now in UTC milliseconds
    const nowUtc = now.getTime();
    // compute Dhaka local time by adding offset
    const dhakaNow = new Date(nowUtc + OFFSET);
    const day = dhakaNow.getUTCDay(); // 0=Sun, 5=Fri

    // compute next Friday (in Dhaka local date)
    const daysUntilFriday = (5 - day + 7) % 7 || 7;

    // candidate date in Dhaka local (as UTC ms)
    const candidateDhakaDate = new Date(Date.UTC(dhakaNow.getUTCFullYear(), dhakaNow.getUTCMonth(), dhakaNow.getUTCDate() + daysUntilFriday, 12, 20, 0));
    // candidateDhakaDate currently represents 12:20 UTC; convert to UTC timestamp that corresponds to 12:20 Dhaka by subtracting OFFSET
    const candidateUtcForDhaka = candidateDhakaDate.getTime() - OFFSET;
    // If today is Friday and current Dhaka time is before 12:20, use today
    if (day === 5) {
      const todayDhakaTarget = new Date(Date.UTC(dhakaNow.getUTCFullYear(), dhakaNow.getUTCMonth(), dhakaNow.getUTCDate(), 12, 20, 0)).getTime() - OFFSET;
      if (nowUtc < todayDhakaTarget) return new Date(todayDhakaTarget);
    }

    return new Date(candidateUtcForDhaka);
  })();

  const diff = target.getTime() - now.getTime();
  const absDiff = Math.abs(diff);

  const fmt = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 60000)); // minutes
    const days = Math.floor(total / 1440);
    const hours = Math.floor((total % 1440) / 60);
    const minutes = total % 60;
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `less than 1m`;
  };

  let statusText = '';
  if (diff > 0) {
    statusText = `in ${fmt(diff)}`;
  } else if (diff <= 0 && absDiff < 60 * 60 * 1000) {
    // within 1 hour after start -> live
    statusText = 'Khutbah happening now';
  } else {
    statusText = `started ${fmt(absDiff)} ago`;
  }

  const dfDate = new Intl.DateTimeFormat(undefined, { timeZone: 'Asia/Dhaka', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const dfTime = new Intl.DateTimeFormat(undefined, { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', hour12: true });
  const dateStr = dfDate.format(target);
  const timeStr = dfTime.format(target);

  return (
    <div>
      <div style={{ color: '#6b7280' }}>{dateStr} • {timeStr}</div>
      <div style={{ marginTop: 8, background: '#fff7eb', padding: 8, borderRadius: 6, color: '#b5842d', display: 'inline-block' }}>
        <strong>Khutbah begins at {timeStr}</strong>
      </div>
      <div style={{ marginTop: 8, color: '#6b7280', fontSize: 13 }} aria-live="polite">
        {statusText}
      </div>
    </div>
  );
}

function NextPrayer() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  // prayer times (uses the times shown on the page)
  const schedule = [
    { name: 'Fajr', time: '05:40' },
    { name: 'Sunrise', time: '06:20' },
    { name: 'Dhuhr', time: '13:05' },
    { name: 'Asr', time: '16:54' },
    { name: 'Maghrib', time: '19:59' },
    { name: 'Isha', time: '21:22' },
  ];

  // build Date for given HH:mm in Dhaka (UTC+6). We'll compute the UTC timestamp that corresponds to that wall-clock time.
  const toDate = (timeStr: string, base: Date) => {
    const [h, m] = timeStr.split(':').map(Number);
    // Dhaka offset in ms
    const OFFSET = 6 * 3600 * 1000;
    // Use base's Dhaka date components
    const baseUtc = base.getTime();
    const dhakaDate = new Date(baseUtc + OFFSET);
    const y = dhakaDate.getUTCFullYear();
    const mo = dhakaDate.getUTCMonth();
    const da = dhakaDate.getUTCDate();
    // create UTC timestamp for Dhaka wall-clock y-mo-da h:m by subtracting offset
    const utcForDhaka = Date.UTC(y, mo, da, h, m, 0) - OFFSET;
    return new Date(utcForDhaka);
  };

  const today = new Date(now);
  // find next prayer today
  let next = null as null | { name: string; date: Date };
  for (const p of schedule) {
    const dt = toDate(p.time, today);
    if (dt.getTime() > now.getTime()) {
      next = { name: p.name, date: dt };
      break;
    }
  }
  if (!next) {
    // next is tomorrow's first prayer
    const dt = toDate(schedule[0].time, new Date(now.getTime() + 24 * 3600 * 1000));
    next = { name: schedule[0].name, date: dt };
  }

  const diff = next.date.getTime() - now.getTime();

  const fmt = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 60000)); // minutes
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `less than 1m`;
  };

  const dfTime = new Intl.DateTimeFormat(undefined, { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', hour12: true });
  const timeStr = dfTime.format(next.date);

  return (
    <div>
      <small style={{ color: '#6b7280' }}>Next Prayer</small>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#c19233' }}>{next.name} — {timeStr}</div>
      <small style={{ color: '#6b7280' }}>{diff > 0 ? `in ${fmt(diff)}` : 'now'}</small>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = [
    "/hero.jpg",
    "/hero1.jpg", 
    "/hero.jpg",
    "/hero3.jpg",
    "/hero3.jpg",
    "/hero3.jpg",
  ];

  return (
    <div>
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <img
              className="brand-img"
              src="/logo.png"
              alt="SAFIC logo"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/logo/64/64'; }}
            />
            <div className="brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <div className="brand-name">Sultanpur Al-Falah Islamic Center</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#prayer">Prayer Times</a>
            <a href="#events">Events</a>
            <a href="#news">News</a>
            <a href="#committee">Committee</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-donate" href="#donation">Donate Now</a>
          </nav>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#prayer" onClick={() => setMobileMenuOpen(false)}>Prayer Times</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)}>News</a>
            <a href="#committee" onClick={() => setMobileMenuOpen(false)}>Committee</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a className="btn btn-donate" href="#donation" onClick={() => setMobileMenuOpen(false)}>Donate Now</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src="/hero3.jpg" alt="Mosque" className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <h1>
            <span className="arabic">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</span>
            <div className="headline">Welcome to <span className="site-name">Sultanpur Al‑Falah Islamic Center</span></div>
            <div className="sub" style={{ fontWeight: 'normal' }}>A mosque and community hub offering regular prayers, Quran classes, youth programs, and family support — serving Sultanpur and the Rangpur region with faith and service.</div>
          </h1>
          <div style={{ marginTop: 18, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-light" href="#about">Learn More</a>
            <a className="btn btn-donate" href="#donation">Donate</a>
          </div>
        </div>
      </section>

      {/* About */}
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
              <div>• Women’s study groups, family counseling and social support services</div>
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

      {/* Prayer times + Khutbah card */}
      <section id="prayer" className="prayer" style={{ paddingTop: 8, paddingBottom: 20, background: '#f8fafc' }}>
  {/* <div className="container"> */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <h3 style={{ margin: 0, letterSpacing: 0.5 }}>Prayer Times</h3>
            </div>
            <div style={{ height: 2, width: 90, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '8px auto 12px' }} />
            <p style={{ margin: '8px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Daily prayer schedules and Jumu&apos;ah khutbah information for Sultanpur Al-Falah Islamic Center.
            </p>
          </div>

        <style>{`
          .prayer-grid {
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
            align-items: stretch;
            display: flex;
            gap: 40px;
          }
          .prayer-card, .khutbah-card {
            max-width: 520px;
            width: 100%;
            margin: 0 auto;
            min-height: 520px;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 900px) {
            .prayer-grid {
              max-width: 98vw;
              gap: 18px !important;
            }
            .prayer-card, .khutbah-card {
              max-width: 98vw;
            }
          }
          @media (max-width: 700px) {
            .prayer-grid {
              flex-direction: column !important;
              gap: 20px !important;
              max-width: 98vw;
            }
            .prayer-card, .khutbah-card {
              min-width: 0 !important;
              width: 100% !important;
              margin-top: 0 !important;
              max-width: 98vw;
              height: auto !important;
            }
          }
        `}</style>
  <div className="prayer-grid" style={{ marginTop: 10 }}>
          {/* Left: Prayer times with highlighted next prayer */}
          <div className="prayer-card" style={{
            background: '#fff',
            color: '#142235',
            borderRadius: 12,
            padding: '38px 32px',
            boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
            border: '1px solid rgba(16,24,40,0.04)',
            minWidth: 0,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
            height: '100%',
            alignSelf: 'stretch',
            alignItems: 'center',
            minHeight: 520
          }}>
            <h4 style={{ margin: '0 0 14px 0', color: '#142235', fontSize: 18, letterSpacing: 0.2 }}>Prayer Times</h4>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: '#6b7280', fontSize: 13, marginBottom: 10 }}>
              <FaClock style={{ color: '#c19233' }} /> <small>GMT+6</small>
            </div>
            <div style={{ width: '100%', marginBottom: 10 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ textAlign: 'left', color: '#6b7280', fontSize: 13 }}>
                    <th style={{ paddingBottom: 8 }}>Prayer</th>
                    <th style={{ paddingBottom: 8 }}>Begins</th>
                    <th style={{ paddingBottom: 8 }}>Iqaamah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '6px 0' }}>Fajr</td><td style={{ padding: '6px 0' }}>5:40 AM</td><td style={{ padding: '6px 0' }}>6:07 AM</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Sunrise</td><td style={{ padding: '6px 0' }}>6:20 AM</td><td style={{ padding: '6px 0' }}>—</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Dhuhr</td><td style={{ padding: '6px 0' }}>1:05 PM</td><td style={{ padding: '6px 0' }}>1:35 PM</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Asr</td><td style={{ padding: '6px 0' }}>4:54 PM</td><td style={{ padding: '6px 0' }}>5:24 PM</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Maghrib</td><td style={{ padding: '6px 0' }}>Sunset</td><td style={{ padding: '6px 0' }}>7:59 PM</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Isha</td><td style={{ padding: '6px 0' }}>9:22 PM</td><td style={{ padding: '6px 0' }}>9:33 PM</td></tr>
                </tbody>
              </table>
            </div>
            <div style={{ background: 'linear-gradient(90deg,#fff7eb,#f7efe0)', borderRadius: 8, padding: 18, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)', marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <NextPrayer />
                <div style={{ width: 48, height: 48, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(16,24,40,0.06)' }}>
                  <FaClock style={{ color: '#c19233' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Khutbah / Announcement card */}
          <aside className="khutbah-card" style={{ background: '#fff', color: '#142235', borderRadius: 12, padding: '38px 32px', boxShadow: '0 8px 24px rgba(16,24,40,0.08)', border: '1px solid rgba(16,24,40,0.04)', minWidth: 0, marginTop: 0, flex: 1, display: 'flex', flexDirection: 'column', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between', gap: 24, minHeight: 520, width: '100%', height: '100%' }}>
            <h4 style={{ margin: '0 0 14px 0', color: '#142235', fontSize: 18, letterSpacing: 0.2 }}>Khutib of the Next Jumu&apos;ah</h4>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8 }}>
              <div style={{ width: 76, height: 76, borderRadius: 8, overflow: 'hidden', marginRight: 8 }}>
                <img src="/imam.jpg" alt="Speaker" className="cover" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#0f1724', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Shaykh Atik Rahman</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 8, lineHeight: 1.7 }}>
                  Shaykh Atik is a community scholar and teacher specializing in Quranic studies, tajweed, and practical spiritual guidance. He leads regular study circles and delivers the Friday khutbah with an emphasis on community service and ethical conduct.
                </div>
                <div style={{ marginTop: 10 }}>
                  <NextKhutbah />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18, borderTop: '1px dashed rgba(16,24,40,0.06)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: 13 }}>
                <span>Question Session</span>
                <span>02:00 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: 13 }}>
                <span>Masalah Clinic</span>
                <span>05:00 PM</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Events & Programs */}
  <section id="events" className="events" style={{ marginTop: -32, background: '#f8fafc', padding: '24px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0, color: '#142235' }}>Events & Programs</h3>
            </div>
            <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
            <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
              Join our regular programs and special events — from weekly Jumu&apos;ah prayers and lectures to community service and learning workshops. Everyone is welcome.
            </p>
          </div>

          <div className="events-grid">
            <article style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 24px rgba(16,24,40,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 160, overflow: 'hidden' }}><img src="https://picsum.photos/seed/mosque/800/520" alt="Jumu'ah" className="cover" /></div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h4 style={{ margin: 0 }}>Weekly Jumu&apos;ah &amp; Special Lecture</h4>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#6b7280', fontSize: 13 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaClock style={{ color: '#c19233' }} /> Fri, Aug 18, 2025 — 12:20 PM</span>
                </div>
                <p style={{ margin: 0, color: '#374151' }}>Join our congregational Jumu&apos;ah prayer followed by a short lecture on community service and spiritual development.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 13 }}><FaMapMarkerAlt style={{ color: '#c19233' }} /> Sultanpur Al-Falah Islamic Center</span>
                  <a className="btn btn-gold" href="#" style={{ padding: '6px 10px' }}>Details</a>
                </div>
              </div>
            </article>

            <article style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 24px rgba(16,24,40,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 160, overflow: 'hidden' }}><img src="https://picsum.photos/seed/community/800/520" alt="Volunteer Day" className="cover" /></div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h4 style={{ margin: 0 }}>Community Volunteer & Clean-up Day</h4>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#6b7280', fontSize: 13 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaClock style={{ color: '#c19233' }} /> Sat, Sep 05, 2025 — 09:00 AM</span>
                </div>
                <p style={{ margin: 0, color: '#374151' }}>Volunteers gather to tidy the mosque grounds, assist with minor repairs, and prepare the center for upcoming events. All ages welcome.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 13 }}><FaMapMarkerAlt style={{ color: '#c19233' }} /> Sultanpur Al-Falah Islamic Center</span>
                  <a className="btn btn-gold" href="#" style={{ padding: '6px 10px' }}>Sign up</a>
                </div>
              </div>
            </article>

            <article style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 24px rgba(16,24,40,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 160, overflow: 'hidden' }}><img src="https://picsum.photos/seed/quran/800/520" alt="Quran Workshop" className="cover" /></div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h4 style={{ margin: 0 }}>Quran Learning Workshop (Beginners)</h4>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#6b7280', fontSize: 13 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaClock style={{ color: '#c19233' }} /> Sun, Sep 20, 2025 — 10:00 AM</span>
                </div>
                <p style={{ margin: 0, color: '#374151' }}>A short workshop for new learners covering basic tajweed rules and recitation techniques. Free to attend — registration recommended.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 13 }}><FaMapMarkerAlt style={{ color: '#c19233' }} /> Sultanpur Al-Falah Islamic Center</span>
                  <a className="btn btn-gold" href="#" style={{ padding: '6px 10px' }}>Register</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Latest News grid */}
      <section id="news" className="news" style={{ background: '#f8fafc', padding: '24px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0, color: '#142235' }}>Latest News & Announcements</h3>
            </div>
            <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
            <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
              Important updates from Sultanpur Al-Falah Islamic Center — construction progress, events, and community notices.
            </p>
          </div>

          <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'start', justifyItems: 'center' }}>
            {/* Keep the existing expandable card components for behavior; their markup provides image and body */}
            <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 28px rgba(16,24,40,0.08)', background: '#fff', width: '100%', maxWidth: 380 }}>
              <ExpandableNewsCard />
            </div>

            <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 28px rgba(16,24,40,0.08)', background: '#fff', width: '100%', maxWidth: 380 }}>
              <ExpandableNewsCard2 />
            </div>

            <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 28px rgba(16,24,40,0.08)', background: '#fff', width: '100%', maxWidth: 380 }}>
              <ExpandableNewsCard4 />
            </div>

            {/* placeholder for future cards */}
          </div>

          <div className="center" style={{ marginTop: 20, textAlign: 'center' }}>
            <a className="btn btn-gold" href="#">View all</a>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section id="donation" className="donation" style={{ paddingBottom: '16px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0, color: '#142235' }}>Sadaqah & Donations</h3>
            </div>
            <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
            <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
              Support our mosque and community through sadaqah and donations. Your generosity helps maintain our facilities and support religious education.
            </p>
          </div>
          <div className="donation-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
            {/* Group into Mobile Banking and Bank Transfer for clarity */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#c19233' }}>Send via Mobile Wallets (bKash · Nagad · Rocket)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <CopyPayment
                    icon="/bkash.png"
                    label="bKash"
                    number="+880 1716-939119"
                    type="Personal"
                  />
                  <CopyPayment
                    icon="/nagad.png"
                    label="Nagad"
                    number="+880 1716-939119"
                    type="Personal"
                  />
                  <CopyPayment
                    icon="/rocket.png"
                    label="Rocket"
                    number="+880 1716-939119"
                    type="Personal"
                  />
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#c19233' }}>Bank Transfer — Meghna Bank (Account Details)</h4>
                <div>
                  <CopyBankPayment
                    icon="/bank.png"
                    bank="Meghna Bank PLC"
                    account="710111100001247"
                    name="Sultanpur Dokkhinpara Jame Moshjid"
                    branch="Shathibari"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery" style={{ background: '#f8fafc', padding: '16px 0 40px 0' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>Photo Gallery</h3>
            </div>
            <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
            <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
              Explore our community moments, construction progress, and special events
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 20,
            justifyItems: 'center'
          }}>
            {images.map((image, index) => (
              <div 
                key={index}
                style={{ 
                  borderRadius: 12, 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = '/hero.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masjid Committee */}
      <section id="committee" className="committee" style={{ background: '#f8fafc', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <h3 style={{ margin: 0, color: '#142235' }}>Masjid Committee</h3>
            </div>
            <div style={{ height: 2, width: 90, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '8px auto 12px' }} />
            <p style={{ margin: '8px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '1.02rem', lineHeight: 1.7 }}>
              Meet our dedicated committee members who work tirelessly to serve our community and maintain our Islamic center.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 30,
            justifyItems: 'center'
          }}>
            {/* Chairman */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/hero3.jpg" 
                  alt="Chairman" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/chairman/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Chairman
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Md. Najmul Huda</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Leading our community with wisdom and dedication, coordinating outreach programs and development initiatives.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776711" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776711
                  </a>
                  <a 
                    href="mailto:chairman@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> chairman@safic.org
                  </a>
                </div>
              </div>
            </div>

            {/* Imam */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/imam.jpg" 
                  alt="Imam" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/imam/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Imam
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Shaykh Atik Rahman</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Our spiritual leader and scholar, guiding the community in worship, education, and Islamic teachings.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776712" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776712
                  </a>
                  <a 
                    href="mailto:imam@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> imam@safic.org
                  </a>
                </div>
              </div>
            </div>

            {/* Secretary */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/secretary.jpg" 
                  alt="Secretary" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/secretary/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Secretary
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Md. Rafiqul Islam</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Managing administrative affairs and maintaining records of all committee activities and community programs.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776713" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776713
                  </a>
                  <a 
                    href="mailto:secretary@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> secretary@safic.org
                  </a>
                </div>
              </div>
            </div>

            {/* Treasurer */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/treasurer.jpg" 
                  alt="Treasurer" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/treasurer/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Treasurer
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Md. Karim Uddin</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Overseeing financial matters, donations, and ensuring transparent management of community funds.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776714" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776714
                  </a>
                  <a 
                    href="mailto:treasurer@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> treasurer@safic.org
                  </a>
                </div>
              </div>
            </div>

            {/* Education Coordinator */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/education.jpg" 
                  alt="Education Coordinator" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/education/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Education Coordinator
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Ustaz Abdul Rahman</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Coordinating educational programs, Quran classes, and youth development initiatives for our community.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776715" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776715
                  </a>
                  <a 
                    href="mailto:education@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> education@safic.org
                  </a>
                </div>
              </div>
            </div>

            {/* Community Outreach */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
              border: '1px solid rgba(16,24,40,0.04)',
              maxWidth: 320,
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ height: 200, overflow: 'hidden', background: '#f8fafc' }}>
                <img 
                  src="/outreach.jpg" 
                  alt="Community Outreach" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/outreach/320/200';
                  }}
                />
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ 
                  background: '#fff7eb', 
                  color: '#b5842d', 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  display: 'inline-block',
                  marginBottom: 12
                }}>
                  Community Outreach
                </div>
                <h4 style={{ margin: '0 0 8px 0', color: '#142235', fontSize: 18 }}>Sister Fatima Khatun</h4>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  Leading community service initiatives, family support programs, and women&apos;s activities within our center.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a 
                    href="tel:+8801706776716" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaPhoneAlt style={{ fontSize: 12 }} /> +880 1706-776716
                  </a>
                  <a 
                    href="mailto:outreach@safic.org" 
                    style={{ 
                      color: '#c19233', 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: '#fff7eb',
                      borderRadius: 6,
                      transition: 'background 0.2s'
                    }}
                  >
                    <FaEnvelope style={{ fontSize: 12 }} /> outreach@safic.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: '#6b7280', fontSize: 14, maxWidth: 600, margin: '0 auto' }}>
              Our committee members are dedicated volunteers who serve with sincerity and commitment. For any inquiries or to get involved in community activities, please feel free to contact any of our committee members.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}



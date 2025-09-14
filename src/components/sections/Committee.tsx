import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Committee() {
  return (
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
  );
}

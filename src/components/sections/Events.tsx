import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Events() {
  return (
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
  );
}

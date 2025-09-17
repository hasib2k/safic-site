import { ExpandableNewsCard, ExpandableNewsCard2, ExpandableNewsCard4 } from "./NewsCards";

export default function News() {
  return (
    <section id="news" className="news" style={{ background: '#ffffff', padding: '24px 0' }}>
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
        </div>
      </div>
    </section>
  );
}

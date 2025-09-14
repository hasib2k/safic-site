import { FaClock } from "react-icons/fa";
import { NextPrayer, NextKhutbah } from "./PrayerUtilities";

export default function PrayerTimes() {
  return (
    <section id="prayer" className="prayer" style={{ paddingTop: 8, paddingBottom: 20, background: '#f8fafc' }}>
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
  );
}

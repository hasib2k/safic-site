import { FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NextKhutbah } from "./PrayerUtilities";
import Image from 'next/image';

function getPrayerTimes() {
  // Static for now, could be dynamic or fetched
  return [
    { name: 'Fajr', time: '5:40 AM' },
    { name: 'Dhuhr', time: '1:05 PM' },
    { name: 'Asr', time: '4:54 PM' },
    { name: 'Maghrib', time: '7:59 PM' },
    { name: 'Isha', time: '9:22 PM' },
  ];
}

function getNextPrayer(now: Date) {
  const prayers = getPrayerTimes();
  // Convert times to today
  const today = new Date(now);
  const prayerTimes = prayers.map(p => {
    const match = p.time.match(/(\d+):(\d+) (AM|PM)/i);
    if (!match) return { ...p, date: new Date(NaN) };
    const [h, m, ap] = match.slice(1);
    let hour = parseInt(h, 10);
    if (ap === 'PM' && hour !== 12) hour += 12;
    if (ap === 'AM' && hour === 12) hour = 0;
    const dt = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, parseInt(m, 10), 0, 0);
    return { ...p, date: dt };
  });
  // Find next prayer
  for (let i = 0; i < prayerTimes.length; ++i) {
    if (now < prayerTimes[i].date) {
      return { ...prayerTimes[i], diff: prayerTimes[i].date.getTime() - now.getTime() };
    }
  }
  // If all passed, next is tomorrow's Fajr
  const fajr = prayerTimes[0];
  const nextFajr = new Date(fajr.date.getTime() + 24 * 60 * 60 * 1000);
  return { ...fajr, date: nextFajr, diff: nextFajr.getTime() - now.getTime() };
}

// Format time as 'h:mm AM/PM' (always uppercase, SSR-safe)
function formatTime(date: Date) {
  let h = date.getHours();
  const m = date.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
}

export default function PrayerTimes() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  if (!now) return null;
  const next = getNextPrayer(now);
  const minutes = Math.max(0, Math.floor(next.diff / 60000));
  let countdown = '';
  if (minutes > 0) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h > 0) {
      countdown = `in ${h}h ${m}m`;
    } else {
      countdown = `in ${m}m`;
    }
  } else countdown = 'now';
  return (
    <section id="prayer" className="prayer" style={{ paddingTop: 8, paddingBottom: 20, background: '#ffffff' }}>
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
            max-width: 400px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            height: auto !important;
            padding: 12px 4vw !important;
            border-radius: 10px !important;
          }
          .prayer-card h4, .khutbah-card h4 {
            font-size: 15px !important;
            margin-bottom: 4px !important;
          }
          .prayer-card table {
            font-size: 11px !important;
          }
          .prayer-card div[style*='font-size: 14px'],
          .khutbah-card div[style*='font-size: 14px'] {
            font-size: 12px !important;
          }
          .prayer-card td, .prayer-card th {
            padding: 2px 0 !important;
          }
          .khutbah-card div[style*='font-size: 12px'] {
            font-size: 11px !important;
          }
        }
      `}</style>
      
      <div className="prayer-grid" style={{ marginTop: 10 }}>
        {/* Left: Prayer times with highlighted next prayer */}
        <div className="prayer-card" style={{
          background: '#fff',
          color: '#142235',
          borderRadius: 16,
          padding: '24px 18px',
          boxShadow: '0 8px 32px 0 rgba(16,24,40,0.10)',
          border: '1.5px solid #e5e7eb',
          minWidth: 0,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 10,
          height: '100%',
          alignSelf: 'stretch',
          alignItems: 'flex-start',
          minHeight: 340,
          maxHeight: 340,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <h4 style={{ margin: '0 0 6px 0', color: '#b5842d', fontSize: 18, letterSpacing: 0.2, fontWeight: 700, alignSelf: 'flex-start' }}>Prayer Times</h4>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: '#b5842d', fontSize: 12, marginBottom: 0, alignSelf: 'flex-start' }}>
            <FaClock style={{ color: '#c19233', fontSize: 14 }} /> <small>GMT+6</small>
          </div>
          {/* Dynamic Next Prayer Section */}
          <div style={{ marginTop: 12, marginBottom: 0, fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>
            <div>Next Prayer</div>
            <div>{next.name} — {formatTime(next.date)}</div>
            <div>{countdown}</div>
          </div>
          <div style={{ width: '100%', margin: '6px 0 0 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, borderRadius: 8, overflow: 'hidden' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#b5842d', fontSize: 12 }}>
                  <th style={{ paddingBottom: 4 }}>Prayer</th>
                  <th style={{ paddingBottom: 4 }}>Begins</th>
                  <th style={{ paddingBottom: 4 }}>Iqaamah</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>Fajr</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>5:40 AM</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>6:07 AM</td></tr>
                <tr><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>Dhuhr</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>1:05 PM</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>1:35 PM</td></tr>
                <tr><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>Asr</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>4:54 PM</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>5:24 PM</td></tr>
                <tr><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>Maghrib</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>Sunset</td><td style={{ padding: '4px 0', borderBottom: '1px solid #e5e7eb' }}>7:59 PM</td></tr>
                <tr><td style={{ padding: '4px 0' }}>Isha</td><td style={{ padding: '4px 0' }}>9:22 PM</td><td style={{ padding: '4px 0' }}>9:33 PM</td></tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Right: Khutbah / Announcement card */}
        <aside className="khutbah-card" style={{ background: '#fff', color: '#142235', borderRadius: 16, padding: '24px 18px', boxShadow: '0 8px 32px 0 rgba(16,24,40,0.10)', border: '1.5px solid #e5e7eb', minWidth: 0, marginTop: 0, flex: 1, display: 'flex', flexDirection: 'column', alignSelf: 'stretch', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10, minHeight: 340, maxHeight: 340, width: '100%', height: '100%', boxSizing: 'border-box' }}>
          <h4 style={{ margin: '0 0 6px 0', color: '#b5842d', fontSize: 18, letterSpacing: 0.2, fontWeight: 700, alignSelf: 'flex-start' }}>Khutib of the Next Jumu&apos;ah</h4>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 0, alignSelf: 'flex-start' }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, overflow: 'hidden', marginRight: 8, boxShadow: '0 2px 8px rgba(193,146,51,0.08)', border: '2px solid #e5e7eb' }}>
              <Image src="/imam.jpg" alt="Speaker" width={56} height={56} className="cover" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#000000', fontWeight: 700, fontSize: 15, marginBottom: 2 }}>Shaykh Atik Rahman</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6, lineHeight: 1.5 }}>
                Shaykh Atik is a community scholar and teacher specializing in Quranic studies, tajweed, and practical spiritual guidance. He leads regular study circles and delivers the Friday khutbah with an emphasis on community service and ethical conduct.
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: '#6b7280' }}>
                <NextKhutbah />
              </div>
            </div>
          </div>

          <div style={{ marginTop: 8, borderTop: '1px dashed #e5e7eb', paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 6, alignSelf: 'flex-start', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b5842d', fontSize: 12, alignItems: 'center', background: '#f8fafc', borderRadius: 5, padding: '4px 10px', marginBottom: 2 }}>
              <span>Question Session</span>
              <span>02:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b5842d', fontSize: 12, alignItems: 'center', background: '#f8fafc', borderRadius: 5, padding: '4px 10px', marginBottom: 2 }}>
              <span>Masalah Clinic</span>
              <span>05:00 PM</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 600px) {
          .prayer-card, .khutbah-card {
            min-height: 220px !important;
            max-height: none !important;
            padding: 14px 6px !important;
            border-radius: 10px !important;
          }
          .next-prayer-highlight {
            flex-direction: column !important;
            align-items: flex-start !important;
            height: auto !important;
            padding: 10px 8px !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
          }
          .next-prayer-highlight > div:last-child {
            margin-left: 0 !important;
            margin-top: 6px !important;
            width: 36px !important;
            height: 36px !important;
          }
          table {
            font-size: 11px !important;
          }
          h4 {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}

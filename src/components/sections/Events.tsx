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
          {/* Event 1 */}
          <EventCard
            image="/khutbah.jpg"
            alt="Construction Work Progresses"
            date="Aug 18, 2025"
            day="Friday"
            time="12:20 PM"
            title="Weekly Jumu'ah & Special Lecture"
            summary="Join our congregational Jumu'ah prayer followed by a short lecture on community service and spiritual development."
            location="Sultanpur Al-Falah Islamic Center"
            linkText="Details"
            linkHref="#"
          />
          {/* Event 2 */}
          <EventCard
            image="/cleaning.jpg"
            alt="Volunteer Day"
            date="Sep 05, 2025"
            day="Saturday"
            time="09:00 AM"
            title="Community Volunteer & Clean-up"
            summary="Volunteers gather to tidy the mosque grounds, assist with minor repairs, and prepare the center for upcoming events. All ages welcome. "
            location="Sultanpur Al-Falah Islamic Center"
            linkText="Sign up"
            linkHref="#"
          />
          {/* Event 3 */}
          <EventCard
            image="/quran_learning.png"
            alt="Quran Workshop"
            date="Sep 20, 2025"
            day="Saturday"
            time="10:00 AM"
            title="Quran Learning Workshop"
            summary="A short workshop for new learners covering basic tajweed rules and recitation techniques. Free to attend — registration recommended."
            location="Sultanpur Al-Falah Islamic Center"
            linkText="Register"
            linkHref="#"
          />
        </div>
      </div>
    </section>
  );
}

type EventCardProps = {
  image: string;
  alt: string;
  date: string;
  day: string;
  time: string;
  title: string;
  summary: string;
  location: string;
  linkText: string;
  linkHref: string;
};
function EventCard({ image, alt, date, day, time, title, summary, location, linkText, linkHref }: EventCardProps) {
  return (
    <article
      className="card informative-news-card"
      style={{
        border: '1.5px solid #f3e7c7',
        borderRadius: 14,
        boxShadow: '0 8px 32px 0 rgba(193,146,51,0.08)',
        background: '#fff',
        transition: 'background 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        minHeight: 340,
        display: 'flex',
        flexDirection: 'column',
        height: 420,
        maxHeight: 420,
        cursor: 'pointer',
      }}
    >
      {/* Banner/Label */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'linear-gradient(90deg, #c19233 60%, #fffbe9 100%)',
        color: '#fff',
        fontWeight: 700,
        fontSize: 12,
        padding: '4px 18px 4px 12px',
        borderBottomRightRadius: 12,
        letterSpacing: 1,
        zIndex: 2,
        boxShadow: '0 2px 8px rgba(193,146,51,0.08)'
      }}>
        EVENT
      </div>
      {/* Image */}
      <div className="media" style={{ width: '100%', height: 150, overflow: 'hidden', borderTopLeftRadius: 14, borderTopRightRadius: 14, position: 'relative' }}>
        <img src={image} alt={alt} className="cover" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.92)' }} />
        {/* Date badge */}
        <div style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          background: '#fff',
          color: '#c19233',
          fontWeight: 700,
          fontSize: 13,
          borderRadius: 8,
          padding: '2px 10px',
          boxShadow: '0 2px 8px rgba(193,146,51,0.08)',
          border: '1px solid #f3e7c7',
          zIndex: 2
        }}>
          {date}
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: '20px 20px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 10 }}>
        <h4 style={{ margin: 0, color: '#b5842d', fontWeight: 800, fontSize: 20, letterSpacing: 0.2, lineHeight: 1.25, marginBottom: 6 }}>{title}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <svg width="18" height="18" fill="#c19233" viewBox="0 0 24 24" style={{ marginRight: 4 }}><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"></path></svg>
          <span style={{ color: '#c19233', fontWeight: 600, fontSize: 14 }}>{day}</span>
          <span style={{ color: '#6b7280', fontSize: 14, marginLeft: 6 }}>• {time}</span>
        </div>
        <div style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, marginBottom: 10, marginTop: 2 }}>
          <p style={{ margin: 0 }}>{summary}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', gap: 8 }}>
          <FaMapMarkerAlt style={{ color: '#c19233', fontSize: 16 }} />
          <span style={{ color: '#6b7280', fontSize: 14, fontWeight: 500 }}>{location}</span>
        </div>
      </div>
    </article>
  );
}

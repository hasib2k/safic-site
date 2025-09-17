import Link from "next/link";

const events = [
	{
		slug: "jumuah-lecture",
		title: "Weekly Jumu'ah & Special Lecture",
		date: "Aug 18, 2025",
		day: "Friday",
		time: "12:20 PM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary: "Join our congregational Jumu'ah prayer followed by a short lecture on community service and spiritual development.",
		image: "/khutbah.jpg"
	},
	{
		slug: "volunteer-cleanup",
		title: "Community Volunteer & Clean-up",
		date: "Sep 05, 2025",
		day: "Saturday",
		time: "09:00 AM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary: "Volunteers gather to tidy the mosque grounds, assist with minor repairs, and prepare the center for upcoming events. All ages welcome.",
		image: "/cleaning.jpg"
	},
	{
		slug: "quran-workshop",
		title: "Quran Learning Workshop",
		date: "Sep 20, 2025",
		day: "Saturday",
		time: "10:00 AM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary: "A short workshop for new learners covering basic tajweed rules and recitation techniques. Free to attend — registration recommended.",
		image: "/quran_learning.png"
	}
];

export default function EventsList() {
	return (
		<section style={{ background: '#ffffff', minHeight: '100vh', padding: '0 0 60px 0' }}>
			<div style={{ background: 'linear-gradient(90deg, #fffbe6 0%, #f8fafc 100%)', padding: '48px 0 32px 0', marginBottom: 36 }}>
				<div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
					<h1 style={{ color: '#b5842d', fontWeight: 900, fontSize: 36, marginBottom: 10, letterSpacing: 0.5 }}>Events & Programs</h1>
					<p style={{ color: '#6b7280', fontSize: 18, marginBottom: 0 }}>Stay up to date with our latest community gatherings, lectures, and workshops.</p>
				</div>
			</div>
			<div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
				<div style={{ textAlign: 'right', marginBottom: 24 }}>
					<a href="/" className="btn btn-light" style={{ fontWeight: 600, fontSize: 15, padding: '8px 24px', borderRadius: 8, border: '1px solid #c19233', color: '#b5842d', background: '#fff', textDecoration: 'none', boxShadow: '0 2px 8px rgba(193,146,51,0.08)', transition: 'background 0.2s, color 0.2s' }}>
						← Back to Home
					</a>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
					{events.map(event => (
						<div key={event.slug} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px 0 rgba(193,146,51,0.10)', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'box-shadow 0.2s, transform 0.2s', border: '1px solid #f3e7c2', overflow: 'hidden' }}>
							<img src={event.image} alt={event.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: '16px 16px 0 0', marginBottom: 0 }} />
							<div style={{ padding: '22px 22px 18px 22px', width: '100%' }}>
								<h3 style={{ color: '#b5842d', fontWeight: 800, fontSize: 22, marginBottom: 8 }}>{event.title}</h3>
								<div style={{ color: '#c19233', fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{event.date} • {event.day} • {event.time}</div>
								<div style={{ color: '#374151', fontSize: 15, marginBottom: 16, minHeight: 44 }}>{event.summary}</div>
								<Link href={`/events/${event.slug}`} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', background: '#c19233', padding: '10px 24px', borderRadius: 8, boxShadow: '0 2px 8px rgba(193,146,51,0.08)', transition: 'background 0.2s', display: 'inline-block' }}>
									View Details →
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

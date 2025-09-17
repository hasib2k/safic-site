import { notFound } from "next/navigation";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const events = [
	{
		slug: "jumuah-lecture",
		title: "Weekly Jumu'ah & Special Lecture",
		date: "Aug 18, 2025",
		day: "Friday",
		time: "12:20 PM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary:
			"Join our congregational Jumu'ah prayer followed by a short lecture on community service and spiritual development.",
		image: "/khutbah.jpg",
	},
	{
		slug: "volunteer-cleanup",
		title: "Community Volunteer & Clean-up",
		date: "Sep 05, 2025",
		day: "Saturday",
		time: "09:00 AM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary:
			"Volunteers gather to tidy the mosque grounds, assist with minor repairs, and prepare the center for upcoming events. All ages welcome.",
		image: "/cleaning.jpg",
	},
	{
		slug: "quran-workshop",
		title: "Quran Learning Workshop",
		date: "Sep 20, 2025",
		day: "Saturday",
		time: "10:00 AM",
		location: "Sultanpur Al-Falah Islamic Center",
		summary:
			"A short workshop for new learners covering basic tajweed rules and recitation techniques. Free to attend — registration recommended.",
		image: "/quran_learning.png",
	},
];

export default function EventDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const event = events.find((e) => e.slug === params.slug);
	if (!event) return notFound();
	return (
		<section
			style={{
				background: "#ffffff",
				minHeight: "100vh",
				padding: "40px 0",
			}}
		>
			<div
				className="container"
				style={{
					maxWidth: 800,
					margin: "0 auto",
					background: "#fff",
					borderRadius: 16,
					boxShadow:
						"0 8px 32px 0 rgba(193,146,51,0.08)",
					padding: 32,
				}}
			>
				<div style={{ textAlign: 'right', marginBottom: 18 }}>
					   <Link
						   href="/"
						   className="btn btn-light"
						   style={{
							   fontWeight: 600,
							   fontSize: 15,
							   padding: '8px 24px',
							   borderRadius: 8,
							   border: '1px solid #c19233',
							   color: '#b5842d',
							   background: '#fff',
							   textDecoration: 'none',
							   boxShadow: '0 2px 8px rgba(193,146,51,0.08)',
							   transition: 'background 0.2s, color 0.2s',
						   }}
					   >
						   ← Back to Home
					   </Link>
				</div>
				<Image
					src={event.image}
					alt={event.title}
					width={800}
					height={260}
					style={{
						width: "100%",
						height: 260,
						objectFit: "cover",
						borderRadius: 12,
						marginBottom: 24,
						boxShadow: '0 4px 24px 0 rgba(193,146,51,0.10)'
					}}
				/>
				<h2
					style={{
						color: "#b5842d",
						fontWeight: 800,
						fontSize: 30,
						marginBottom: 12,
						letterSpacing: 0.2,
					}}
				>
					{event.title}
				</h2>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 16,
						marginBottom: 18,
					}}
				>
					<span
						style={{
							color: "#c19233",
							fontWeight: 600,
							fontSize: 15,
							background: '#f8fafc',
							padding: '2px 10px',
							borderRadius: 6,
						}}
					>
						{event.day}
					</span>
					<span
						style={{
							color: "#6b7280",
							fontSize: 15,
						}}
					>
						• {event.date}
					</span>
					<span
						style={{
							color: "#6b7280",
							fontSize: 15,
							display: 'flex', alignItems: 'center',
						}}
					>
						<FaClock style={{ marginRight: 4, color: '#c19233', fontSize: 15 }} /> {event.time}
					</span>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginBottom: 18,
					}}
				>
					<FaMapMarkerAlt
						style={{
							color: "#c19233",
							fontSize: 18,
						}}
					/>
					<span
						style={{
							color: "#6b7280",
							fontSize: 15,
							fontWeight: 500,
						}}
					>
						{event.location}
					</span>
				</div>
				<div
					style={{
						color: "#374151",
						fontSize: 17,
						lineHeight: 1.7,
						marginBottom: 24,
						background: '#f8fafc',
						padding: '18px 20px',
						borderRadius: 8,
					}}
				>
					<p style={{ margin: 0 }}>{event.summary}</p>
				</div>
				   <Link
					   href="/events"
					   style={{
						   color: "#fff",
						   fontWeight: 600,
						   textDecoration: "none",
						   background: '#c19233',
						   padding: '10px 28px',
						   borderRadius: 8,
						   boxShadow: '0 2px 8px rgba(193,146,51,0.08)',
						   transition: 'background 0.2s',
						   display: 'inline-block',
					   }}
				   >
					   ← Back to Events
				   </Link>
			</div>
		</section>
	);
}

"use client";
import { useState } from "react";

export function ExpandableNewsCard() {
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
              The mosque committee has requested everyone to keep the project in their prayers, so that, with Allah&apos;s guidance, a beautiful and inspiring house of worship can be completed.
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

export function ExpandableNewsCard2() {
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
              With the boundless mercy of Almighty Allah and the collective efforts of the community, the construction of the Sultanpur Al-Falah Islamic Center is steadily moving forward. If granted the opportunity by Allah, the roof casting work is expected to begin very soon, Insha&apos;Allah.
            </p>
            <p>
              The late Abdul Qayyum Talukdar Ranga, who made tireless efforts for the development of this Islamic Center, is being remembered with deep respect. Though he is no longer with us, the community prays that Allah grants him eternal peace and a place in Jannah.
            </p>
            <p>
              The committee and residents have requested everyone&apos;s continued prayers and support so that the construction of the Al-Falah Islamic Center can be completed smoothly and beautifully.
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

export function ExpandableNewsCard4() {
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
              Recent photographs show clear structural progress at the Sultanpur Al-Falah Islamic Center construction site — vertical columns and temporary formwork are now in place, marking the project&apos;s steady advance toward the next phase.
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

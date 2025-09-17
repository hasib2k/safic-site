"use client";
import { useEffect, useRef, useState } from "react";

type CardWrapperProps = {
  children: (expanded: boolean, setExpanded: (v: boolean) => void) => React.ReactNode;
};
function CardWrapper({ children }: CardWrapperProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [expanded]);

  return (
    <div
      ref={ref}
      style={{ cursor: "pointer", width: "100%", height: "100%" }}
      onClick={e => {
        // Only toggle if the click is not on a button or link
        if ((e.target as HTMLElement).tagName !== 'BUTTON' && (e.target as HTMLElement).tagName !== 'A') {
          setExpanded(exp => !exp);
        }
      }}
    >
      {children(expanded, setExpanded)}
    </div>
  );
}

export function ExpandableNewsCard() {
  return (
    <CardWrapper>
      {(expanded: boolean, setExpanded: (v: boolean) => void) => (
        <article
          className="card informative-news-card"
          key="latest-news"
          style={{
            // border: '1.5px solid #f3e7c7',
            borderRadius: 14,
            boxShadow: '0 8px 32px 0 rgba(193,146,51,0.08)',
            background: expanded
              ? 'linear-gradient(90deg, #fffbe9 60%, #f7efe0 100%)'
              : '#fff',
            transition: 'background 0.3s, box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
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
            NEWS
          </div>
          {/* Image */}
          <div className="media" style={{ width: '100%', height: 120, overflow: 'hidden', borderTopLeftRadius: 14, borderTopRightRadius: 14, position: 'relative' }}>
            <img src="/news-1.jpg" alt="Roof Casting Work Begins" className="cover" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: expanded ? 'brightness(0.95)' : 'brightness(0.85)' }} />
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
              // border: '1px solid #f3e7c7',
              zIndex: 2
            }}>
              Sep 11, 2025
            </div>
          </div>
          {/* Body */}
          <div className="card-body" style={{ padding: '16px 16px 12px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 6 }}>
            <h4 style={{ margin: 0, color: '#b5842d', fontWeight: 800, fontSize: 18, letterSpacing: 0.2, lineHeight: 1.2 }}>Roof Casting Work Begins at Sultanpur Al-Falah Islamic Center</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0 2px 0' }}>
              <svg width="16" height="16" fill="#c19233" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"></path></svg>
              <span style={{ color: '#c19233', fontWeight: 600, fontSize: 13 }}>Wednesday</span>
              <span style={{ color: '#6b7280', fontSize: 13 }}>• 10:00 AM</span>
            </div>
            {expanded ? (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7 }}>
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
              </div>
            ) : (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
                <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                  With the boundless mercy of Almighty Allah and through the dedicated efforts of local residents, relatives, and well-wishers, the roof casting work of Sultanpur Al-Falah Islamic Center officially commenced today.
                </p>
              </div>
            )}
            <div style={{ marginTop: 8, color: '#b5842d', fontSize: 13, fontWeight: 600, textAlign: 'right', opacity: 0.85 }}>
              Click to view
            </div>
          </div>
        </article>
      )}
    </CardWrapper>
  );
}

export function ExpandableNewsCard2() {
  return (
    <CardWrapper>
      {(expanded: boolean, setExpanded: (v: boolean) => void) => (
        <article
          className="card informative-news-card"
          key="construction-progress"
          style={{
            // border: '1.5px solid #f3e7c7',
            borderRadius: 14,
            boxShadow: '0 8px 32px 0 rgba(193,146,51,0.08)',
            background: expanded
              ? 'linear-gradient(90deg, #fffbe9 60%, #f7efe0 100%)'
              : '#fff',
            transition: 'background 0.3s, box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
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
            NEWS
          </div>
          {/* Image */}
          <div className="media" style={{ width: '100%', height: 120, overflow: 'hidden', borderTopLeftRadius: 14, borderTopRightRadius: 14, position: 'relative' }}>
            <img src="/news-2.jpg" alt="Construction Work Progresses" className="cover" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: expanded ? 'brightness(0.95)' : 'brightness(0.85)' }} />
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
              // border: '1px solid #f3e7c7',
              zIndex: 2
            }}>
              Sep 01, 2025
            </div>
          </div>
          {/* Body */}
          <div className="card-body" style={{ padding: '16px 16px 12px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 6 }}>
            <h4 style={{ margin: 0, color: '#b5842d', fontWeight: 800, fontSize: 18, letterSpacing: 0.2, lineHeight: 1.2 }}>Construction Work Progresses at Sultanpur Al-Falah Islamic Center</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0 2px 0' }}>
              <svg width="16" height="16" fill="#c19233" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"></path></svg>
              <span style={{ color: '#c19233', fontWeight: 600, fontSize: 13 }}>Monday</span>
              <span style={{ color: '#6b7280', fontSize: 13 }}>• 09:00 AM</span>
            </div>
            {expanded ? (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7 }}>
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
              </div>
            ) : (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
                <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                  With the boundless mercy of Almighty Allah and the collective efforts of the community, the construction of the Sultanpur Al-Falah Islamic Center is steadily moving forward. If granted the opportunity by Allah, the roof casting work is expected to begin very soon, Insha&apos;Allah.
                </p>
              </div>
            )}
            <div style={{ marginTop: 8, color: '#b5842d', fontSize: 13, fontWeight: 600, textAlign: 'right', opacity: 0.85 }}>
              Click to view
            </div>
          </div>
        </article>
      )}
    </CardWrapper>
  );
}

export function ExpandableNewsCard4() {
  return (
    <CardWrapper>
      {(expanded: boolean, setExpanded: (v: boolean) => void) => (
        <article
          className="card informative-news-card"
          key="structural-progress"
          style={{
            // border: '1.5px solid #f3e7c7',
            borderRadius: 14,
            boxShadow: '0 8px 32px 0 rgba(193,146,51,0.08)',
            background: expanded
              ? 'linear-gradient(90deg, #fffbe9 60%, #f7efe0 100%)'
              : '#fff',
            transition: 'background 0.3s, box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden',
            padding: 0,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
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
            NEWS
          </div>
          {/* Image */}
          <div className="media" style={{ width: '100%', height: 120, overflow: 'hidden', borderTopLeftRadius: 14, borderTopRightRadius: 14, position: 'relative' }}>
            <img src="/news-3.jpg" alt="Structural Progress at Sultanpur" className="cover" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: expanded ? 'brightness(0.95)' : 'brightness(0.85)' }} />
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
              // border: '1px solid #f3e7c7',
              zIndex: 2
            }}>
              Aug 15, 2025
            </div>
          </div>
          {/* Body */}
          <div className="card-body" style={{ padding: '16px 16px 12px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 6 }}>
            <h4 style={{ margin: 0, color: '#b5842d', fontWeight: 800, fontSize: 18, letterSpacing: 0.2, lineHeight: 1.2 }}>Structural Progress Visible at Sultanpur Al-Falah Site</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0 2px 0' }}>
              <svg width="16" height="16" fill="#c19233" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"></path></svg>
              <span style={{ color: '#c19233', fontWeight: 600, fontSize: 13 }}>Friday</span>
              <span style={{ color: '#6b7280', fontSize: 13 }}>• 08:00 AM</span>
            </div>
            {expanded ? (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7 }}>
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
              </div>
            ) : (
              <div style={{ marginTop: 6, color: '#374151', fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
                <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                  Recent photographs show clear structural progress at the Sultanpur Al-Falah Islamic Center construction site — vertical columns and temporary formwork are now in place, marking the project&apos;s steady advance toward the next phase.
                </p>
              </div>
            )}
            <div style={{ marginTop: 8, color: '#b5842d', fontSize: 13, fontWeight: 600, textAlign: 'right', opacity: 0.85 }}>
              Click to view
            </div>
          </div>
        </article>
      )}
    </CardWrapper>
  );
}

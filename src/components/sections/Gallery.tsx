import Image from 'next/image';

export default function Gallery() {
  const images = [
    "/hero.jpg",
    "/hero1.jpg", 
    "/hero.jpg",
    "/hero3.jpg",
    "/hero3.jpg",
    "/hero3.jpg",
  ];

  return (
    <section id="gallery" className="gallery" style={{ background: '#ffffff', padding: '16px 0 40px 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <h3 style={{ margin: 0 }}>Photo Gallery</h3>
          </div>
          <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
          <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
            Explore our community moments, construction progress, and special events
          </p>
        </div>

        <div style={{ 
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}>
          <div
            className="gallery-marquee"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: 12,
              alignItems: 'center',
              minHeight: 0,
              animation: 'gallery-scroll 30s linear infinite',
              width: 'max-content',
            }}
          >
            {images.concat(images).map((image, index) => (
              <div 
                key={index}
                style={{ 
                  borderRadius: 8,
                  overflow: 'hidden', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  minWidth: 110,
                  width: 110,
                  height: 80,
                  flex: '0 0 auto',
                  margin: 0
                }}
              >
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  width={110}
                  height={80}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = '/hero.jpg';
                  }}
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes gallery-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .gallery-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

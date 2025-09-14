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
    <section id="gallery" className="gallery" style={{ background: '#f8fafc', padding: '16px 0 40px 0' }}>
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
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 20,
          justifyItems: 'center'
        }}>
          {images.map((image, index) => (
            <div 
              key={index}
              style={{ 
                borderRadius: 12, 
                overflow: 'hidden', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '250px', 
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
      </div>
    </section>
  );
}

"use client";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <img
              className="brand-img"
              src="/logo.png"
              alt="SAFIC logo"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/logo/64/64'; }}
            />
            <div className="brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <div className="brand-name">Sultanpur Al-Falah Islamic Center</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#prayer">Prayer Times</a>
            <a href="#events">Events</a>
            <a href="#news">News</a>
            <a href="#committee">Committee</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-donate" href="#donation">Donate Now</a>
          </nav>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#prayer" onClick={() => setMobileMenuOpen(false)}>Prayer Times</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)}>News</a>
            <a href="#committee" onClick={() => setMobileMenuOpen(false)}>Committee</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a className="btn btn-donate" href="#donation" onClick={() => setMobileMenuOpen(false)}>Donate Now</a>
          </div>
        )}
      </header>
    </>
  );
}

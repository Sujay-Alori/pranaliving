import { useEffect, useState } from 'react';
import { hero } from '../../data/residences';
import logo from '../../assets/images/logo/PRANA_LIVING LOGO (2).png';
import sanskrutiLogo from '../../assets/images/logo/Sanskruti Design Studio.png';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  function handleExplore(e) {
    e.preventDefault();
    if (onNavigate) onNavigate('category', '01');
  }

  return (
    <section className={`hero${loaded ? ' hero--loaded' : ''}`} id="hero" aria-label="Hero">
      <div className="hero__media">
        <img
          src={hero.image}
          alt={hero.alt}
          className="hero__image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <img src={logo} alt="PRANA Residences" className="hero__logo" />
        <a href="#category/01" className="hero__cta" onClick={handleExplore}>
          EXPLORE THE RESIDENCES
        </a>
        <div className="hero__credit">
          <p className="hero__credit-label">Designed by</p>
          <p className="hero__credit-name">Ar.Sandeep Kumar P</p>
          <img src={sanskrutiLogo} alt="SANSKRUTI DESIGN STUDIO" className="hero__credit-logo" />
        </div>
      </div>
    </section>
  );
}

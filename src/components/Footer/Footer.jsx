export default function Footer() {
  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer__brand">
          <span className="footer__logo">PRANA RESIDENCES</span>
          <p className="footer__tagline">Homes That Breathe With Nature</p>
        </div>
        <button
          className="footer__back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}

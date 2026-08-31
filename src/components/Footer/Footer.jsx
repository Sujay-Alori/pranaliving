import heroImg from '../../assets/images/Hero.png';

const footerNav = [
  { label: 'Home', href: '#home', route: 'home' },
  { label: 'Flats', href: '#flats', route: 'flats' },
  {
    label: 'Map',
    href: 'https://maps.app.goo.gl/ozwghKTXLcznH4x19?g_st=iw',
    external: true,
  },
  { label: 'Contact', href: '#enquire', route: 'home', anchor: 'enquire' },
];

export default function Footer({ onNavigate }) {
  function handleNav(e, link) {
    e.preventDefault();

    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else if (link.route === 'homes') {
      onNavigate('homes');
    } else if (link.route === 'flats') {
      onNavigate('flats');
    } else if (link.route === 'category') {
      onNavigate('category', link.id);
    } else {
      onNavigate('home');

      if (link.anchor) {
        setTimeout(() => {
          const el = document.getElementById(link.anchor);

          if (el) {
            el.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }, 120);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer__top-divider" />

        <div className="footer__main">

          {/* Footer Image */}
          <div className="footer__image-col">
            <div className="footer__image-wrap">
              <img
                src={heroImg}
                alt="PRANA Residences architectural detail"
                className="footer__image"
                decoding="async"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav-col">
            <span className="footer__label">(NAVIGATION)</span>

            <nav aria-label="Footer navigation">
              <ul className="footer__nav-list">
                {footerNav.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <a
                      href={link.href}
                      className="footer__nav-link"
                      onClick={(e) => handleNav(e, link)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="footer__info-col">
            <div className="footer__info-block">
              <span className="footer__label">(CALL US)</span>

              <address className="footer__address">
                <a
                  href="tel:+917892675392"
                  className="footer__address-line"
                >
                  P: +91 78926 75392
                </a>

                <a
                  href="tel:+919686367940"
                  className="footer__address-line"
                >
                  P: +91 96863 67940
                </a>
              </address>
            </div>
          </div>

        </div>

        <div className="footer__bottom-divider" />

        <div className="footer__bottom">

          {/* Copyright */}
          <p className="footer__copyright">
            &copy; 2026 Sanskruti design studio
          </p>

          {/* Legal */}
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Terms &amp; Conditions
            </a>

            <span className="footer__legal-sep">|</span>

            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
          </div>

          {/* Social Media */}
          <div className="footer__social">
            <a
              href="#"
              className="footer__social-link"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="#"
              className="footer__social-link"
              aria-label="Twitter"
            >
              Twitter
            </a>

            <a
              href="#"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
import { useState, useEffect } from 'react';
import heroImg from '../../assets/images/Hero.png';

const footerNav = [
  { label: 'Home', href: '#' },
  { label: 'Works', href: '#projects' },
  { label: 'Studio', href: '#concept' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Contact Us', href: '#enquire' },
];

function getStudioTime() {
  try {
    const now = new Date();
    const opts = { timeZone: 'Australia/Brisbane', hour: 'numeric', minute: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-AU', opts);
    const day = now.getDay();
    const isOpen = day >= 1 && day <= 5;
    return `${time} QLD, WE ARE ${isOpen ? 'OPEN' : 'CLOSED'}`;
  } catch {
    return 'WE ARE OPEN';
  }
}

export default function Footer() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(getStudioTime());
    const interval = setInterval(() => setStatus(getStudioTime()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer__top-divider" />

        <div className="footer__main">
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

          <div className="footer__nav-col">
            <span className="footer__label">(NAVIGATION)</span>
            <nav aria-label="Footer navigation">
              <ul className="footer__nav-list">
                {footerNav.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <a href={link.href} className="footer__nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__info-col">
            <div className="footer__info-block">
              <span className="footer__label">(ACKNOWLEDGEMENT)</span>
              <p className="footer__info-text">
                We respectfully acknowledge the Turrbal people, the Traditional
                Owners and Custodians of the Country on which we work. We pay our
                respects to Elders past and present, and acknowledge their
                continuing connection to land, sea and community.
              </p>
            </div>

            <div className="footer__info-block">
              <span className="footer__label">(INFO)</span>
              <address className="footer__address">
                <span className="footer__address-line">A: 101 Days Rd, Grange QLD 4051</span>
                <span className="footer__address-line">E: info@yourstudio.com.au</span>
                <span className="footer__address-line">P: 07 3110 1031</span>
                <span className="footer__address-line">H: Monday to Friday, 8:30am &ndash; 5:00pm</span>
              </address>
            </div>
          </div>
        </div>

        <div className="footer__bottom-divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2025 YOUR STUDIO{status ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{status}</> : null}
          </p>

          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Terms &amp; Conditions</a>
            <span className="footer__legal-sep">|</span>
            <a href="#" className="footer__legal-link">Privacy Policy</a>
          </div>

          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">Instagram</a>
            <a href="#" className="footer__social-link" aria-label="Twitter">Twitter</a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

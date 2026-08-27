import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/residences';
import { transition, opacity, height, background, blur, translate } from './anim';

export default function Header({ onNavigate }) {
  const [isActive, setIsActive] = useState(false);

  const closeMenu = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isActive]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && isActive) closeMenu();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isActive, closeMenu]);

  return (
    <div className="site-header">
      <div className="header-bar">
        <a
          href="#"
          className="header-logo"
          aria-label="PRANA Residences home"
          onClick={(e) => { e.preventDefault(); closeMenu(); onNavigate('home'); }}
        >
          <span className="header-logo__name">PRANA</span>
          <span className="header-logo__tagline">Residences</span>
        </a>

        <div
          className="header-burger"
          onClick={() => setIsActive((prev) => !prev)}
          role="button"
          aria-expanded={isActive}
          aria-label={isActive ? 'Close menu' : 'Open menu'}
        >
          <div className={`header-burger__lines${isActive ? ' header-burger__lines--active' : ''}`} />
          <div className="header-burger__label">
            <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>Menu</motion.p>
            <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>Close</motion.p>
          </div>
        </div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className="header-background"
      />

      <AnimatePresence mode="wait">
        {isActive && (
          <Nav onNavigate={onNavigate} closeMenu={closeMenu} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Nav({ onNavigate, closeMenu }) {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="header-nav"
    >
      <div className="header-nav__wrapper">
        <div className="header-nav__container">
          <Body
            links={navLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            onNavigate={onNavigate}
            closeMenu={closeMenu}
          />
          <Footer />
        </div>
        <Preview src={navLinks[selectedLink.index]?.src} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  );
}

function Body({ links, selectedLink, setSelectedLink, onNavigate, closeMenu }) {
  const getChars = (word) =>
    word.split('').map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {char}
      </motion.span>
    ));

  function handleNavigate(e, link) {
    e.preventDefault();
    closeMenu();
    if (link.href === '#projects') {
      onNavigate('projects');
    } else if (link.href === '#home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }

  return (
    <div className="header-body">
      {links.map((link, index) => (
        <a
          key={`n_${index}`}
          href={link.href}
          onClick={(e) => handleNavigate(e, link)}
          onMouseOver={() => setSelectedLink({ isActive: true, index })}
          onMouseLeave={() => setSelectedLink({ isActive: false, index })}
        >
          <motion.p
            variants={blur}
            animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
          >
            {getChars(link.label)}
          </motion.p>
        </a>
      ))}
    </div>
  );
}

function Preview({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? 'open' : 'closed'}
      className="header-preview"
    >
      {src && <img src={src} alt="Menu preview" />}
    </motion.div>
  );
}

function Footer() {
  return (
    <div className="header-nav-footer">
      <ul>
        <motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
          <span>Made by:</span> OBEY STUDIO
        </motion.li>
      </ul>
      <ul>
        <motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
          <span>Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
          <span>Location:</span> Brisbane, QLD
        </motion.li>
      </ul>
      <ul>
        <motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
          Privacy Policy
        </motion.li>
        <motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
          Terms &amp; Conditions
        </motion.li>
      </ul>
    </div>
  );
}

export { transition };

import Link from 'next/link';
import { useEffect, useState } from 'react';
import data from '../../lib/data';

export default function Navigation() {
  const { navigation } = data;

  const [wasOpend, setWasOpend] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleScroll();
      document.body.style.overflow = 'auto';
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleNavbarToggle = () => {
    if (!wasOpend && !isOpen) {
      setWasOpend(true);
    }

    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar ${isSticky || isOpen ? 'sticky' : ''} ${
            wasOpend ? (isOpen ? 'open' : 'closed') : ''
          }`}
          id='mainnavigationBar'
        >
          <div className={`navbar-shadow`}></div>
          <div className='navbar-content'>
            <div className='navbar-row'>
              <img src={navigation.logo} alt='Die vier Beiden Logo' />
              <button
                className={`burger-btn`}
                type='button'
                onClick={handleNavbarToggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className='navbar-open-content'>
              <div className='navbar-nav-items'>
                <div className='navbar-nav-item'>
                  <a>Die vier Beiden</a>
                </div>
                <div className='navbar-nav-item'>
                  <a>Über uns</a>
                </div>
                <div className='navbar-nav-item'>
                  <a>Termine</a>
                </div>
                <div className='navbar-nav-item'>
                  <a>Böhmisch</a>
                </div>
                <div className='navbar-nav-item'>
                  <a>Kontakt</a>
                </div>
              </div>
              <div className='navbar-nav-footer'>
                <a href={`mailto:${data.footer.email}`}>
                  <i className='fa-solid fa-envelope'></i>
                </a>
                <a href={`tel:${data.footer.phone}`}>
                  <i className='fa-solid fa-phone'></i>
                </a>
                <a
                  href={`https://instagram.com/${data.footer.instagram}`}
                  target='_blank'
                >
                  <i className='fa-brands fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

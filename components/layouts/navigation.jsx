import Link from 'next/link';
import { useEffect, useState } from 'react';
import data from '../../lib/data';

export default function Navigation() {
  const { navigation } = data;

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.innerWidth > 992) {
      closeNavbarIfOpen();
    }
    setSticky(window.scrollY >= 70);
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

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg ${isSticky ? ' sticky-nav' : ''}`}
          id='mainnavigationBar'
        >
          <div className='container-xl'>
            <div className='d-block navbar-info'>
              <div className='d-none d-lg-block nav-item'>
                <Link
                  href={`${navigation.button.link}`}
                  className='btn btn-sm btn-links btn-img'
                >
                  <div className='btn-img-img'>
                    <img src={navigation.logo} alt='Nav-Logo-White'></img>
                  </div>
                  <span className='btn-img-text'>{navigation.button.text}</span>
                </Link>
              </div>
            </div>
            <Link className='navbar-brand' href={'/'}>
              <img src={navigation.logo} alt='Nav-Logo' />
            </Link>
            <div className='d-block navbar-info'>
              <ul className='navbar-nav'>
                {navigation.shop.active && (
                  <div
                    className='d-none d-lg-block navbar-nav-link'
                    id='nav-item-shop'
                  >
                    <Link href={navigation.shop.link}>
                      {navigation.shop.text}
                    </Link>
                    {navigation.shop.resale_area.active && (
                      <div className='navbar-resale-container'>
                        <Link href={navigation.shop.resale_area.link}>
                          {navigation.shop.resale_area.text}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {navigation.phone.active && (
                  <div className='d-none d-lg-flex navbar-nav-link'>
                    <Link href={`tel:${navigation.phone.value}`}>
                      <i className='ph-phone-light' aria-hidden='true'>
                        <span className='visually-hidden'>Phone</span>
                      </i>
                    </Link>
                  </div>
                )}
                {navigation.events.active && (
                  <div className='d-none d-lg-flex navbar-nav-link'>
                    <Link href={navigation.events.link}>
                      {navigation.events.text}
                    </Link>
                  </div>
                )}
                {navigation.imageItem.active && (
                  <div className='d-none d-lg-block navbar-nav-link'>
                    <Link href={navigation.imageItem.link}>
                      <img
                        src={navigation.imageItem.image}
                        alt={navigation.alt}
                      />
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <div
            className={`container-xl d-flex subbar ${isSticky ? ' hide' : ''}`}
          >
            <img src={navigation.header} alt='Nav-Header' />{' '}
          </div>
        </nav>
      </header>
    </>
  );
}

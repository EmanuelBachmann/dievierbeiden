import Link from 'next/link';
import facebookIcon from '../../public/images/icons/facebook.svg';
import instagramIcon from '../../public/images/icons/instagram.svg';
import linkedinIcon from '../../public/images/icons/linkedin.svg';
import data from '../../lib/data';

export default function Footer({}) {
  const { footer } = data;
  return (
    <>
      <footer className='footer' id='footer'>
        <div className='background pt-7 pb-7'>
          <img className='background-logo' src={footer.logo} alt='logo' />
          <Link href={footer.badge_link}>
            <img
              className='footer-badge'
              src={footer.badge}
              alt={footer.badge_alt}
            ></img>
          </Link>
          <div className='container-lg'>
            <div className='footer-wrapper'>
              <div>
                <div className='footer-widget'>
                  <div className='h3'>{footer.address.address_header}</div>
                  <ul className='list-unstyled'>
                    <li>{footer.address.company_name}</li>
                    <li>{footer.address.street}</li>
                    <li>{footer.address.city}</li>
                  </ul>
                  <ul className='list-unstyled contact-list'>
                    <li>
                      <Link href={`mailto:${footer.contact.email}`}>
                        {footer.contact.email}
                      </Link>
                    </li>
                    <li>
                      <Link href={`tel:${footer.contact.phone}`}>
                        T {footer.contact.phone}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='footer-widget'>
                  <div className='h3'>{footer.opening_hours.header}</div>
                  {footer.opening_hours.entries.map((entry, i) => (
                    <ul key={i} className='list-unstyled'>
                      <li>{entry.days}</li>
                      <li>{entry.hours}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                <div className='footer-widget'>
                  <ul className='list-unstyled'>
                    {footer.links.map((link, i) => (
                      <li key={i}>
                        <Link href={`${link.link}`}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='social-icon'>
                  <ul className='list-unstyled'>
                    {footer.social.map((link, i) => (
                      <li key={i}>
                        <Link href={`${link.link}`} target='_blank'>
                          <img
                            src={
                              link.type === 'facebook'
                                ? facebookIcon.src
                                : link.type == 'instagram'
                                ? instagramIcon.src
                                : link.type == 'linkedin'
                                ? linkedinIcon.src
                                : ''
                            }
                            alt={`${link.type} icon`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='container-xl'>© {footer.copyright}</div>
        </div>
      </footer>
    </>
  );
}

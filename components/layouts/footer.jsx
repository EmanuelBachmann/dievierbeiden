import data from '../../lib/data';

export default function Footer({}) {
  const { footer } = data;
  return (
    <footer className='footer' id='footer'>
      <div className='container-xl footer-container'>
        <img className='footer-logo' src={footer.logo} />
        <div className='footer-contact-container'>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <a href={`tel:${data.footer.phone}`}>{footer.phone}</a>
        </div>
        <div className='footer-socialmedia-container'>
          <a href={footer.instagram_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-instagram'></i>
          </a>
          <a href={footer.facebook_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-facebook'></i>
          </a>
        </div>
        <div className='footer-legal-container'>
          {footer.legal.map((item, key) => (
            <a href={item.link} key={key}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

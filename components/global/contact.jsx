import React from 'react';
import data from '../../lib/data';

export default function Introduction({ block, dataBinding }) {
  return (
    <section
      className='contact container'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <div className='contact-content'>
        <h2>{block.title}</h2>
        <p className='contact-text'>{block.text}</p>
        <div className='contact-button-row'>
          <a href={`mailto:${data.footer.email}`}>
            <i aria-hidden className='fa-solid fa-envelope'></i>
          </a>
          <a href={`tel:${data.footer.phone}`}>
            <i aria-hidden className='fa-solid fa-phone'></i>
          </a>
        </div>

        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' id='email' name='email' />
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Telefonnummer</label>
            <input type='tel' id='phone' name='phone' />
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Nachricht</label>
            <textarea id='message' name='message' rows='5'></textarea>
          </div>

          <button type='submit' className='contact-submit'>
            Senden
          </button>
        </form>
      </div>
    </section>
  );
}

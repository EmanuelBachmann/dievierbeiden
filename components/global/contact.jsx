import React, { useEffect, useRef, useState } from 'react';
import data from '../../lib/data';
import MarkdownIt from 'markdown-it';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
const md = new MarkdownIt({ html: true });

export default function Introduction({ block, dataBinding }) {
  const router = useRouter();
  const submittedQuery = router.query.submitted;
  const [submitted, setSubmitted] = useState(false);
  const [tokenCreated, setTokenCreated] = useState(false);
  const formEl = useRef(null);

  useEffect(() => {
    if (!submittedQuery) {
      const script = document.createElement('script');
      script.src =
        'https://www.google.com/recaptcha/api.js?render=' +
        process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
      script.addEventListener('load', setupForm);
      document.body.appendChild(script);

      return () => {
        script.removeEventListener('load', setupForm);
        document.body.removeChild(script);
      };
    } else {
      toast.success(block.success_message);
    }
  }, []);

  const setupForm = () => {
    formEl.current.addEventListener('submit', function (event) {
      if (!tokenCreated) {
        event.preventDefault();
        if (!submitted) {
          setSubmitted(true);
          if (process.env.NODE_ENV !== 'development') {
            grecaptcha.ready(function () {
              grecaptcha
                .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, {
                  action: 'create_comment',
                })
                .then(function (token) {
                  const input = document.createElement('input');
                  input.type = 'hidden';
                  input.name = 'g-recaptcha-response';
                  input.value = token;
                  formEl.current.appendChild(input);
                  setTokenCreated(true);
                  formEl.current.submit();
                });
            });
          } else {
            formEl.current.submit();
          }
        }
      }
    });
  };
  return (
    <section className='contact' data-cms-bind={dataBinding} id={block.anchor}>
      <div className='contact-content'>
        <div className='container'>
          <h2>{block.title}</h2>
          <div
            className='contact-text'
            dangerouslySetInnerHTML={{
              __html: md.render(block.text),
            }}
          ></div>
          <div className='contact-button-row'>
            <a href={`mailto:${data.footer.email}`}>
              <i aria-hidden className='fa-solid fa-envelope'></i>
            </a>
            <a href={`tel:${data.footer.phone}`}>
              <i aria-hidden className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>

        <form
          method='post'
          className='contact-form container-md'
          action='?submitted=true'
          id='contact-form'
          ref={formEl}
        >
          <div className='form-group'>
            <label htmlFor='name'>Vorname</label>
            <input type='text' id='name' name='name' required />
          </div>

          <div className='form-group'>
            <label htmlFor='name'>Nachname</label>
            <input type='text' id='name' name='name' required />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Telefonnummer</label>
            <input type='tel' id='phone' name='phone' required />
          </div>

          <div className='form-group col-span'>
            <label htmlFor='message'>Nachricht</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>

          <input type='hidden' name='inbox_key' value={block.contact_id} />

          <button type='submit' className='contact-submit col-span'>
            Senden
          </button>
        </form>
      </div>
    </section>
  );
}

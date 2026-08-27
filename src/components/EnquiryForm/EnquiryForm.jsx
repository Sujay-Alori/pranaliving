import { useState, useCallback } from 'react';
import { useReveal } from '../../hooks/useReveal';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = true;
  const phoneClean = values.phone.replace(/[\s\-()]/g, '');
  if (phoneClean.length < 8 || !/^\+?[\d]+$/.test(phoneClean)) errors.phone = true;
  if (!EMAIL_RE.test(values.email.trim())) errors.email = true;
  return errors;
}

export default function EnquiryForm() {
  const ref = useReveal();
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      const message = `Name: ${values.name}%0AEmail: ${values.email}%0APhone: ${values.phone}%0AMessage: ${values.message}`;
      window.open(`https://wa.me/917892675392?text=${message}`, '_blank');
      setSubmitted(true);
    },
    [values]
  );

  if (submitted) {
    return (
      <section className="enquiry" id="enquire">
        <div className="enquiry__inner">
          <span className="enquiry__eyebrow">Contact</span>
          <h2 className="enquiry__title">
            Let nature lead<br /> the way.
          </h2>
          <div className="enquiry-form__success" role="alert" aria-live="polite">
            <p>Thank you. Your enquiry has been noted.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="enquiry" id="enquire">
      <div className="enquiry__inner reveal" ref={ref}>
        <span className="enquiry__eyebrow">Contact</span>
        <h2 className="enquiry__title">
          Let nature lead<br /> the way.
        </h2>
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="enquiry-form__group">
            <label htmlFor="formName" className="enquiry-form__label">Name</label>
            <input
              type="text"
              id="formName"
              name="name"
              className={`enquiry-form__input${errors.name ? ' error' : ''}`}
              required
              autoComplete="name"
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="enquiry-form__row">
            <div className="enquiry-form__group">
              <label htmlFor="formEmail" className="enquiry-form__label">Email</label>
              <input
                type="email"
                id="formEmail"
                name="email"
                className={`enquiry-form__input${errors.email ? ' error' : ''}`}
                required
                autoComplete="email"
                placeholder="your@email.com"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="enquiry-form__group">
              <label htmlFor="formPhone" className="enquiry-form__label">Phone</label>
              <input
                type="tel"
                id="formPhone"
                name="phone"
                className={`enquiry-form__input${errors.phone ? ' error' : ''}`}
                required
                autoComplete="tel"
                placeholder="+91 000 000 0000"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="enquiry-form__group">
            <label htmlFor="formMessage" className="enquiry-form__label">Message</label>
            <textarea
              id="formMessage"
              name="message"
              className="enquiry-form__input enquiry-form__textarea"
              rows="5"
              placeholder="Tell us about your ideal home..."
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="enquiry-form__submit">
            SEND ENQUIRY
          </button>
        </form>
      </div>
    </section>
  );
}

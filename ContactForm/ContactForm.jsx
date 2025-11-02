import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbobekz"); // <-- твій Formspree ID
  if (state.succeeded) {
    return <p className="success">✅ Дякую! Повідомлення відправлено.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Зв’язатися зі мною</h2>

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Повідомлення:</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Надіслати
      </button>
    </form>
  );
}

export default ContactForm;
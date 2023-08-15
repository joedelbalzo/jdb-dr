import React from "react";
import { FadeComponent } from "./FadeComponent";

import { useForm, ValidationError } from "@formspree/react";

//notes - create a thanks for your submission page for redirecting. set timeout there for 4 seconds to redirect home

function Contact() {
  const [state, handleSubmit] = useForm("mgejadwz");
  if (state.succeeded) {
    return <p>Thank you! I'll be in touch shortly.</p>;
  }
  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="subject">Subject:</label>
      <input id="subject" type="subject" name="subject" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact;

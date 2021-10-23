import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../components/Menu";
import CardImage from "../components/CardImage";
import { ContactContainer, ContactContent } from "../styles/Contact";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: null,
      email: null,
      message: null,
    },
  });

  const [reCaptcha, setReCaptcha] = useState(false);

  useEffect(() => {
    if (state.name === "") {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, name: "Required!" },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, name: null },
      }));
    }
    if (state.email === "") {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, email: "Required!" },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, email: null },
      }));
    }
    if (state.message === "") {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, message: "Required!" },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, message: null },
      }));
    }
  }, [state.name, state.email, state.message]);

  const onInputChange = (e) => {
    return setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChange = (value) => {
    setReCaptcha(value);
  };

  const onSendMessageSubmit = async (e) => {
    e.preventDefault();
    if (!state.errors.name && !state.errors.email && !state.errors.message) {
      const payload = { ...state };
      delete payload.errors;
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
    } else {
      console.log("error");
    }
  };

  return (
    <ContactContainer>
      <ContactContent>
        <h1 className="title text-primary">Contact</h1>
        <div className="wrapper-paragraph--space vision">
          <h5 className="text-primary">Location</h5>
          <p>
            Sona Topas Tower,
            <br />
            Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
            <br />
            Jakarta Selatan, 12920.
          </p>
        </div>

        <div className="wrapper-paragraph--space vision">
          <h5 className="text-primary">Email</h5>
          <p>info@62trade.com</p>
        </div>

        <form onSubmit={onSendMessageSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Full name"
            onChange={(e) => onInputChange(e)}
            full
            mb={state.errors.name ? 0 : 10}
          />
          {state.errors.name && <p>{state.errors.name}</p>}
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={(e) => onInputChange(e)}
            full
            mb={state.errors.name ? 0 : 10}
          />
          {state.errors.email && <p>{state.errors.email}</p>}
          <Input
            name="message"
            as="textarea"
            placeholder="Your message here"
            onChange={(e) => onInputChange(e)}
            full
            mb={state.errors.name ? 0 : 10}
          />
          {state.errors.message && <p>{state.errors.message}</p>}
          <ReCAPTCHA
            sitekey="6Le8QOwcAAAAADB1cwJq9BfpLlH7hLJTrh2DtjsH"
            onChange={onChange}
          />
          <Button mt={8} type="submit" disabled={!reCaptcha}>
            Send Message
          </Button>
        </form>
      </ContactContent>
      <CardImage
        copyrightText="Copyright 2021 62Trade.com PT. Enam Dua Niaga"
        src="/images/contact.png"
        alt="about image"
      />
      <Menu />
    </ContactContainer>
  );
}

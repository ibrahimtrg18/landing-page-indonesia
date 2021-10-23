import Menu from "../components/Menu";
import CardImage from "../components/CardImage";
import { ContactContainer, ContactContent } from "../styles/Contact";
import Input from "../components/Input";

export default function Contact() {
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

        <Input type="text" placeholder="Full name" full mb={10} />
        <Input type="text" placeholder="Email address" full mb={10} />
        <Input as="textarea" placeholder="Your message here" full mb={10} />
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

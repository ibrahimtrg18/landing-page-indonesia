import Menu from "../components/Menu";
import CardImage from "../components/CardImage";
import { ContactContainer } from "../styles/Contact";

export default function Contact() {
  return (
    <>
      <ContactContainer>
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
        <CardImage
          copyrightText="Copyright 2021 62Trade.com PT. Enam Dua Niaga"
          src="/images/contact.png"
          alt="about image"
        />
      </ContactContainer>
      <Menu />
    </>
  );
}

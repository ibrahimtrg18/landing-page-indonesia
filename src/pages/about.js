import Menu from "../components/Menu";
import CardImage from "../components/CardImage";
import { AboutContainer } from "../styles/About";

export default function About() {
  return (
    <>
      <AboutContainer>
        <h1 className="title text-primary">About Us</h1>
        <p>
          Spanning from East to West. With 54,000 km Coastline and 17,500
          Islands.
        </p>
        <h5 className="catalog text-lightPrimary">
          INDONESIA, a resourceful land. Rich of flavors, natural beauties, and
          biodiversity.
        </h5>
        <div className="wrapper-paragraph">
          <p>
            62trade.com ready to take important role to empower international
            trades between Indonesia and the rest of the world.
          </p>
          <p>
            Ready to be a digital gateway for everyone, at any level of
            business.
          </p>
          <p>Let us walk together, hand in hand for a better future.</p>
        </div>
        <CardImage
          copyrightText="Copyright 2021 62Trade.com PT. Enam Dua Niaga"
          src="/images/about.png"
          alt="about image"
        />
      </AboutContainer>
      <Menu />
    </>
  );
}

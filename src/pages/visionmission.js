import Image from "next/image";
import Menu from "../components/Menu";
import CardImage from "../components/CardImage";
import {
  VisionMissionContainer,
  VisionMissionContent,
} from "../styles/VisionMission";

export default function VisionMission() {
  return (
    <VisionMissionContainer>
      <VisionMissionContent>
        <h1 className="title text-primary">Vision Mission</h1>
        <div className="wrapper-paragraph--space vision">
          <h5 className="text-primary">Our Vision</h5>
          <p>
            Becoming number one preferred digital platform of international
            trades for Indonesia and the world.
          </p>
        </div>
        <div className="wrapper-paragraph--space mission">
          <h5 className="text-primary">Our Mission</h5>
          <p>
            Empowering Indonesia’s MSME nationwide to go international,
            collaboration with all supporting function such as financial, supply
            chain and logistic, and expanding international network by building
            partnership with overseas well known digital platform.
          </p>
        </div>
        <div className="wrapper-paragraph--space values">
          <h5 className="text-primary">Values</h5>
          <ul>
            <li>1. Simple</li>
            <li>2. Trustworthy</li>
            <li>3. Problem Solver</li>
          </ul>
        </div>
        <div className="map-indonesia">
          <Image
            src="/images/indonesia.png"
            alt="indonesia map"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </VisionMissionContent>
      <CardImage
        copyrightText="Copyright 2021 62Trade.com PT. Enam Dua Niaga"
        src="/images/visionmission.png"
        alt="about image"
      />
      <Menu />
    </VisionMissionContainer>
  );
}

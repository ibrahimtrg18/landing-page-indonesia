import React from "react";
import { CardImageContainer, ImageContainer, Image, CopyRight } from "./styles";

const CardImage = (props) => {
  const { src, alt, copyrightText } = props;

  return (
    <CardImageContainer>
      <ImageContainer>
        <Image src={src} alt={alt} />
      </ImageContainer>
      <CopyRight>{copyrightText}</CopyRight>
    </CardImageContainer>
  );
};

export default CardImage;

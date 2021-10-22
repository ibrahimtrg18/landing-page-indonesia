import React from "react";
import { ImageContainer, Image, CopyRight } from "./styles";

const CardImage = (props) => {
  const { src, alt, copyrightText } = props;

  return (
    <>
      <ImageContainer>
        <Image src={src} alt={alt} />
      </ImageContainer>
      <CopyRight>{copyrightText}</CopyRight>
    </>
  );
};

export default CardImage;

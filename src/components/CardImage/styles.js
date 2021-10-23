import styled from "styled-components";

export const CardImageContainer = styled.div`
  padding: 15px;
`;

export const ImageContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 38px;
  border-radius: 25px;
  &::before {
    content: "";
    width: calc(100% - 40px);
    height: 100%;
    position: absolute;
    border-radius: 25px;
    box-shadow: 0 28px 30px 0 rgb(204 209 211 / 80%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #ffffff;
    padding: 30px 0;
  }
  & > img {
    z-index: 1;
  }
`;

export const Image = styled.img``;

export const CopyRight = styled.p`
  font-size: 12px;
  text-align: center;
`;

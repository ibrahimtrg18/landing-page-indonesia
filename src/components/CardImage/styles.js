import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 38px;
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: calc(100% - 40px);
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 28px 30px 0 rgb(204 209 211 / 80%);
  }
`;

export const Image = styled.img``;

export const CopyRight = styled.p`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
`;

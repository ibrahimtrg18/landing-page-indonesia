"use strict";
import styled from "styled-components";
import { MenuList } from "../components/Menu/styles";
import {
  CardImageContainer,
  ImageContainer,
  CopyRight,
} from "../components/CardImage/styles";

export const ContactContainer = styled.div`
  padding-bottom: 124px;

  @media screen and (min-width: 481px) {
    padding-bottom: unset;
    display: grid;
    grid-template-columns: minmax(50px, 200px) 1fr max-content;
    margin-left: 40px;

    & > ${CardImageContainer} {
      grid-column-start: 1;
      grid-row-start: 1;
      padding: 0;

      & ${ImageContainer} {
        margin-top: 40px;
      }

      & ${CopyRight} {
        display: none;
      }
    }
  }

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: minmax(50px, 350px) 1fr max-content;

    & > ${CardImageContainer} {
      grid-column-start: 1;
      grid-row-start: 1;

      & ${CopyRight} {
        display: none;
      }
    }
  }
`;

export const ContactContent = styled.div`
  padding: 15px;

  & > .title {
    margin-bottom: 32px;
  }

  & p {
    font-size: 0.8em;
  }

  @media screen and (min-width: 481px) {
    padding: 20px;

    & > .title {
      margin-bottom: 32px;
      font-size: 50px;

      & + p {
        margin-bottom: 30px;
      }
    }

    & .catalog {
      margin-bottom: 30px;
    }
  }
`;

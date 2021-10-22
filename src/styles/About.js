import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 15px;

  & > .title {
    margin-bottom: 32px;

    & + p {
      margin-bottom: 20px;
    }
  }

  & .catalog {
    margin-bottom: 20px;
  }
`;

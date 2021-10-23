import styled from "styled-components";

export const AppBar = styled.nav`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 20px 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;

  ${({ transparent, theme }) =>
    !transparent &&
    `
      background-color: ${theme.colors.white};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      position: fixed;
      top: 0;
    `};

  & .nav__logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & .nav__logo-text {
    font-size: 1.2em;
  }
`;

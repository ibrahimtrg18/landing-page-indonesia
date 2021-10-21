import styled from "styled-components";

export const AppBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  & .nav__logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & .nav__logo-text {
    font-size: 1.2em;
  }
`;

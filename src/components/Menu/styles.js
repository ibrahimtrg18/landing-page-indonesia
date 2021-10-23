import styled from "styled-components";

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: max-content;
  padding: 20px;
  background: linear-gradient(
      180deg,
      rgba(119, 111, 196, 0.1) 19.89%,
      rgba(119, 111, 196, 0) 99.15%
    ),
    #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 60px;

  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;

  @media screen and (min-width: 481px) {
  }
`;

export const MenuItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 12px;
  border: transparent;
  border-radius: 16px;
  font-size: 8px;
  font-weight: bold;
  min-width: 80px;
  min-height: 80px;
  box-shadow: 0px 9.48px 11.85px rgba(62, 46, 131, 0.2);
  border-radius: 15.8px;
  cursor: pointer;

  &:hover {
    ${({ isActive, theme }) =>
      !isActive &&
      `
      background: ${theme.colors.lightPrimary};
      color: ${theme.colors.white};
      & > svg {
        & * {
          stroke: ${theme.colors.white};
        }
      }
      `};
  }

  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        & > svg {
          & * {
              stroke: ${theme.colors.white};
            }
        }`;
    } else {
      return `
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        & > svg {
          & * {
              stroke: ${theme.colors.primary};
            }
        }`;
    }
  }}
`;

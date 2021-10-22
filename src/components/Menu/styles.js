import styled from "styled-components";

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  background: linear-gradient(
      180deg,
      rgba(119, 111, 196, 0.1) 19.89%,
      rgba(119, 111, 196, 0) 99.15%
    ),
    #ffffff;
  border-radius: 20px;
  margin-top: 60px;
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

  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        & > svg {
          & > path {
              stroke: ${theme.colors.white};
            }
        }`;
    } else {
      return `
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        & > svg {
          & > path {
              stroke: ${theme.colors.primary};
            }
        }`;
    }
  }}
`;

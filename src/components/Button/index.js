import styled from "styled-components";

const Button = styled.button`
  border-radius: 30px;
  border: transparent;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875em;
  font-weight: bold;
  padding: 8px 24px;
  margin-top: ${({ mt }) => mt}px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Button;

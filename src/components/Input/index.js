import styled from "styled-components";

const Input = styled.input`
  width: ${({ full }) => full && "100%"};
  min-height: ${({ as }) => as === "textarea" && "100px"};
  margin-bottom: ${({ mb }) => mb}px;
  padding: 10px 16px;
  font-size: 13px;
  font-family: "Helvetica";
  line-height: 125%;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: 5px;
`;

export default Input;

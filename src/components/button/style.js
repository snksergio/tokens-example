import styled from "styled-components";
import { ColorsPrimary80 } from "../../tokens/js/colors";

const ButtonStyled = styled.div`
  width: 250px;
  height: 50px;
  margin: 20px;
  background: ${ColorsPrimary80};
  border: solid 13px ${({ theme }) => theme.colors.neutral['80']}
`;

export { ButtonStyled };
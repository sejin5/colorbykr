import styled from "styled-components";
import { colors } from "../../constants/color";

const StyledList = styled.ul`
  list-style: none;
  padding: 0 2rem;
  margin: 0;
  display: flex;
`;

const StyledItem = styled.li`
  color: black;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    font-weight: bold;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <>
    <StyledDiv>
      <StyledList>
        {colors.map(({ label }) => (
          <StyledItem key={label}>{label}</StyledItem>
        ))}
      </StyledList>
      <p>icons</p>
    </StyledDiv>
  </>
);

export default Header;

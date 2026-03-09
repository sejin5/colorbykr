import styled from "styled-components";
import "../../Temp.css";
import Row from "./row";
import { colorArr } from "../../mock";
import { chunkArray } from "../../utils/chunkArray";

const StyledDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Cards = () => {
  const rows = chunkArray(colorArr, 3);

  return (
    <StyledDiv className="scroll-container">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} id={rowIndex} colors={row} />
      ))}
    </StyledDiv>
  );
};

export default Cards;

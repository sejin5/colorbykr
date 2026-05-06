import styled from "styled-components";
import "../../Temp.css";
import Row from "./row";
import { chunkArray } from "../../utils/chunkArray";
import type { Colors } from "../../constants/color";

const StyledDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;

interface Props {
  colors: Colors[];
}

const Cards = ({ colors }: Props) => {
  const rows = chunkArray(colors, 3);

  return (
    <StyledDiv className="scroll-container">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} id={rowIndex} colors={row} />
      ))}
    </StyledDiv>
  );
};

export default Cards;

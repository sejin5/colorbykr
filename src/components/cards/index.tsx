import "../../Temp.css";
import Row from "./row";
import { colorArr } from "../../mock";
import { chunkArray } from "../../utils/chunkArray";

const Cards = () => {
  const rows = chunkArray(colorArr, 3);

  return (
    <div className="scroll-container">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} id={rowIndex} colors={row} />
      ))}
    </div>
  );
};

export default Cards;

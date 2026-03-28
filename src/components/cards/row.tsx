import styled from "styled-components";
import { useBgColor } from "../../context/bgColorContext";
import { useModal } from "../../context/modalContext";

interface Color {
  id: number;
  name: string;
  hex: string;
}

interface Colors {
  id: number;
  colors: Color[];
}

const Row = ({ id, colors }: Colors) => {
  const { setBgColor, resetBgColor } = useBgColor();
  const { isOpen, openModal } = useModal();

  const handleColorClick = (color: Color) => {
    openModal(color);
    setBgColor(color.hex);
  };

  return (
    <StyledDiv id={String(id)}>
      {[...colors, ...colors, ...colors].map((color, i) => (
        <StyledSpan
          key={`${color.id}-${i}`}
          onMouseEnter={() => setBgColor(color.hex)}
          onMouseLeave={() => {
            if (!isOpen) resetBgColor();
          }}
          onClick={() => handleColorClick(color)}
        >
          {color.name}
        </StyledSpan>
      ))}
    </StyledDiv>
  );
};

export default Row;

const StyledDiv = styled.div`
  display: flex;
  white-space: nowrap;
  line-height: 18rem;

  &:nth-child(odd) {
    animation: scrollRight 120s linear infinite;
  }
  &:nth-child(even) {
    animation: scrollLeft 120s linear infinite;
  }
`;

const StyledSpan = styled.span`
  font-size: 13rem;
  font-weight: bold;
  padding: 0 3rem;
`;

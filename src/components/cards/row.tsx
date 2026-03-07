import styled from "styled-components";

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
  return (
    <StyledDiv id={String(id)}>
      {[...colors, ...colors, ...colors].map((color, i) => (
        <StyledSpan key={`${color.id}-${i}`}>{color.name}</StyledSpan>
      ))}
    </StyledDiv>
  );
};

export default Row;

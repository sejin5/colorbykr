import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  size?: number;
  onClick?: () => void;
}

const IconButton = ({ src, alt, size = 24, onClick }: Props) => (
  <Button onClick={onClick}>
    <img src={src} width={size} height={size} alt={alt} />
  </Button>
);

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

export default IconButton;

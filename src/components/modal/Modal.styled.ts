import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

export const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  animation: ${({ $isOpen }) =>
    css`
      ${$isOpen ? fadeIn : fadeOut} 0.25s ease forwards
    `};
`;

export const Card = styled.div<{ $isOpen: boolean; $accent: string }>`
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 0;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.18);
  overflow: hidden;
`;

export const ColorSwatch = styled.div<{ $hex: string }>`
  width: 100%;
  height: 180px;
  background: ${({ $hex }) => $hex};
  position: relative;

  &::after {
    position: absolute;
    inset: 0;
  }
`;

export const Body = styled.div`
  padding: 1.5rem 1.75rem 1.75rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin: 0 0 0.2rem;
`;

export const ColorName = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111;
  line-height: 1.2;
`;

export const HexInline = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.06em;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: #555;
`;

export const ColorValueBox = styled.dl`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const ColorItem = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 0.6rem 0.75rem;
`;

export const ColorLabel = styled.dt`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #aaa;
  margin-bottom: 4px;
`;

export const ColorData = styled.dd`
  margin: 0;
  font-family: "DM Mono", "Fira Mono", "Consolas", monospace;
  font-size: 0.8rem;
  color: #222;
  word-break: break-all;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: fit-content;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  &:hover {
    border: none;
  }
`;

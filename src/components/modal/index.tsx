import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Backdrop,
  Body,
  ColorSwatch,
  Row,
  HexInline,
  CloseButton,
  Description,
  Card,
  ColorValueBox,
  ColorData,
  ColorItem,
  ColorLabel,
  ColorName,
} from "./Modal.styled";
import { useModal } from "../../context/modalContext";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export default function Modal() {
  const { isOpen, selectedColor, closeModal } = useModal();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isOpen]);

  if (!selectedColor && !isOpen) return null;

  const color = selectedColor!;
  const rgb = color.rgb ?? hexToRgb(color.hex);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) closeModal();
  };

  return createPortal(
    <Backdrop
      ref={backdropRef}
      $isOpen={isOpen}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <Card $isOpen={isOpen} $accent={color.hex}>
        <ColorSwatch $hex={color.hex}>
          <CloseButton onClick={closeModal} aria-label="닫기">
            ✕
          </CloseButton>
        </ColorSwatch>

        <Body>
          <Row>
            <ColorName>{color.name}</ColorName>
            <HexInline>{color.hex.toUpperCase()}</HexInline>
          </Row>

          {color.description && <Description>{color.description}</Description>}

          <ColorValueBox>
            <ColorItem>
              <ColorLabel>HEX</ColorLabel>
              <ColorData>{color.hex.toUpperCase()}</ColorData>
            </ColorItem>
            <ColorItem>
              <ColorLabel>RGB</ColorLabel>
              <ColorData>
                {rgb.r}, {rgb.g}, {rgb.b}
              </ColorData>
            </ColorItem>
          </ColorValueBox>
        </Body>
      </Card>
    </Backdrop>,
    document.body
  );
}

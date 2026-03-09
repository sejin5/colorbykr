import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

interface BgColorContextType {
  bgColor: string;
  setBgColor: (hex: string) => void;
  resetBgColor: () => void;
}

const GlobalBackground = createGlobalStyle<{ $bgColor: string }>`
  body {
    background-color: ${({ $bgColor }) => $bgColor};
    transition: background-color 0.3s ease;
  }
`;

export const BgColorContext = createContext<BgColorContextType>({
  bgColor: "#f0eeea",
  setBgColor: () => {},
  resetBgColor: () => {},
});

export const BgColorProvider = ({ children }: { children: ReactNode }) => {
  const [bgColor, setBgColor] = useState("#f0eeea");

  return (
    <BgColorContext.Provider
      value={{
        bgColor,
        setBgColor,
        resetBgColor: () => setBgColor("#f0eeea"),
      }}
    >
      <GlobalBackground $bgColor={bgColor} />
      {children}
    </BgColorContext.Provider>
  );
};

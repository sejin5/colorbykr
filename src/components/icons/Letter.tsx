import * as React from "react";
import type { SVGProps } from "react";
const SvgLetter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    viewBox="0 0 2000 2000"
    {...props}
  >
    <path
      d="M1328 82h305l7 669 228-1 4 254-234-3 2 884-311 6z"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 50,
      }}
    />
    <path
      d="m206 264 954-6s104.323 833.357-816 1341l-173-241s613.531-280.951 661-836H218z"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: "54.17px",
      }}
      transform="translate(-4 -5)"
    />
  </svg>
);
export default SvgLetter;

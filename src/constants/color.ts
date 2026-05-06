export const COLOR_LIST = [
  { label: "흑백", code: 1 },
  { label: "적색", code: 2 },
  { label: "청색", code: 3 },
  { label: "녹색", code: 4 },
  { label: "황색", code: 5 },
  { label: "자색", code: 6 },
];

export interface ColorChip {
  id: number;
  name: string;
  desc?: string;
  hex: string;
  label?: [];
}

export interface Colors {
  id: number;
  hex: string;
  name: string;
  code: string;
  labels: {
    id: number;
    locale: string;
    name: string;
    describe: string;
  };
}

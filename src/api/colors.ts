import type { Colors } from "../constants/color";

export const getColors = async (): Promise<Colors[]> => {
  const res = await fetch(`/api/colors`);
  return res.json();
};

export const getColorsByCode = async (code: number): Promise<Colors[]> => {
  const res = await fetch(`/api/colors/${code}`);

  return res.json();
};

export const truncateDigits = (num: number): string => {
  return num >= 1000
    ? `${String(Math.round(num / 100) / 10)}k`
    : num.toString();
};

export const truncateDecimals = (numStr: string): string => {
  return numStr.split('.')[0];
};

export const fillDecimals = (num: number): string => {
  const numStr = num.toString();
  if (numStr.includes('.')) {
    if (numStr.split('.')[1].length === 1) {
      return `${numStr}0`;
    }
    return numStr;
  }
  return `${numStr}.00`;
};

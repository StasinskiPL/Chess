export const cellColor = (id: number): string => {
  if ((id % 20 > 10 && id % 2 === 1) || (id % 20 < 10 && id % 2 === 0)) {
    return "whiteCell";
  } else {
    return "blackCell";
  }
};

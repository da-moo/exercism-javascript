export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length');
  }
  return Array.from(strand1).filter((value, index) => value !== strand2[index])
    .length;
};

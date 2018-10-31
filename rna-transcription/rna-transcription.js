const RNA_DICT = new Map([['C', 'G'], ['G', 'C'], ['A', 'U'], ['T', 'A']]);

export const toRna = sequence => {
  if (sequence.match(/^[GCTA]*$/g)) {
    return Array.from(sequence)
      .map(element => RNA_DICT.get(element))
      .join('');
  } else {
    throw new Error('Invalid input DNA.');
  }
};

export default toRna;

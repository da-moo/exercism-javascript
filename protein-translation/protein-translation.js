const TRANSLATION_MAP = new Map([
  ["AUG", "Methionine"],
  ["UUU", "Phenylalanine"],
  ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"],
  ["UUG", "Leucine"],
  ["UCU", "Serine"],
  ["UCC", "Serine"],
  ["UCA", "Serine"],
  ["UCG", "Serine"],
  ["UAU", "Tyrosine"],
  ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"],
  ["UGC", "Cysteine"],
  ["UGG", "Tryptophan"],
  ["UAA", "STOP"],
  ["UAG", "STOP"],
  ["UGA", "STOP"]
]);

export const translate = (sequence = "") => {
  if (sequence.match(/[^GUAC]/)) {
    throw new Error("Invalid codon");
  }
  const proteins = [];
  for (const codon of sequence.match(/.{3}/g) || []) {
    const protein = TRANSLATION_MAP.get(codon) || "";
    if (protein === "STOP") {
      break;
    } else if (TRANSLATION_MAP.has(codon)) {
      proteins.push(protein);
    }
  }
  return proteins;
};

export default translate;

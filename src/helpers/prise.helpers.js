export const getSumFloatNumber = (firstValue, secondValue, numberAfterComma = 2) => {
  const result = Math.round(firstValue * 10 ** numberAfterComma) + Math.round(secondValue * 10 ** numberAfterComma);
  return result / 10 ** numberAfterComma;
};

export const getSubtractFloatNumber = (firstValue, secondValue, numberAfterComma = 2) => {
  const result = Math.round(firstValue * 10 ** numberAfterComma) - Math.round(secondValue * 10 ** numberAfterComma);
  return result / 10 ** numberAfterComma;
};

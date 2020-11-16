import Units from 'ethereumjs-units';

export const getSumFloatNumber = (firstValue, secondValue, numberAfterComma = 2) => {
  const result = Math.round(firstValue * 10 ** numberAfterComma) + Math.round(secondValue * 10 ** numberAfterComma);
  return result / 10 ** numberAfterComma;
};

export const getSubtractFloatNumber = (firstValue, secondValue, numberAfterComma = 2) => {
  const result = Math.round(firstValue * 10 ** numberAfterComma) - Math.round(secondValue * 10 ** numberAfterComma);
  return result / 10 ** numberAfterComma;
};

export const convertToEth = (value) => {

  if (!value) {
    return '0';
  }

  return Units.convert(value, 'wei', 'eth');
};


export const convertToWei = (value) => {

  if (!value) {
    return '0';
  }

  return Units.convert(value, 'eth', 'wei');
};

export const shortenString = (str: string, amount = 4) => {
  return `${str.substring(0, amount)}...${str.substring(str.length - amount)}`;
};

export const shortenBytes32 = (bytes32: string) => {
  return (
    bytes32?.substring(0, 6) +
    `...` +
    bytes32?.substring(bytes32.length - 8, bytes32.length)
  );
};

export const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

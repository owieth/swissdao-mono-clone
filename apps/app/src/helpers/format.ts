export const shortenString = (str: string, amount = 4) => {
  return `${str.substring(0, amount)}...${str.substring(str.length - amount)}`;
};

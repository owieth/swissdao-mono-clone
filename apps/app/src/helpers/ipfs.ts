export const convertIpfsToHttps = (link: string) =>
  `https://ipfs.io/${link.replace('ipfs://', 'ipfs/')}`;

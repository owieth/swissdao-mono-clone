import MembercardPreview from '@/components/membercard/preview';
import { TokenStruct } from '@/contracts/contracts';
import { ETHERS_CONTRACT } from '@/helpers/contracts';

export default async function PreviewPage({
  params: { tokenId },
}: {
  params: { tokenId: number };
}) {
  const tokenStruct = (await ETHERS_CONTRACT.getTokenStructById(
    tokenId
  )) as TokenStruct;

  return <MembercardPreview tokenStruct={tokenStruct as TokenStruct} />;
}

import MembercardPreview from '@/components/membercard/preview';
import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { MembershipType } from '@/types/types';

export default async function PreviewPage({
  params: { tokenId }
}: {
  params: { tokenId: number };
}) {
  const tokenStruct = (await ETHERS_CONTRACT.getMemberStructByTokenId(
    tokenId
  )) as MembershipType;

  return <MembercardPreview tokenStruct={tokenStruct} />;
}

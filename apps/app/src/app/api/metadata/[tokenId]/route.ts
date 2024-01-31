import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: string } }
) {
  const { nickname, holder, joinedAt, mintedAt } =
    (await ETHERS_CONTRACT.getMemberStructByTokenId(tokenId)) as any;

  return NextResponse.json({
    name: `Membership #${tokenId} of ${nickname}`,
    description: `Membership of ${nickname} (${holder})`,
    image: `https://owieth-website-app.vercel.app/api/preview/${tokenId}`,
    animation_url: `https://owieth-website-app.vercel.app/preview/${tokenId}`,
    attributes: [
      {
        trait_type: 'Holder',
        value: holder
      },
      { trait_type: 'Minted', value: Number(mintedAt) },
      { trait_type: 'Joined', value: Number(joinedAt) }
      // { trait_type: 'Experience Points', value: Number(experiencePoints) },
      // { trait_type: 'Activity Points', value: Number(activityPoints) },
      // { trait_type: 'State', value: Number(state) },
    ]
  });
}

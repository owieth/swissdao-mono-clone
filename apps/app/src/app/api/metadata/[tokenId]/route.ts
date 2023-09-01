import { TokenStruct } from '@/contracts/contracts';
import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: number } }
) {
  await ETHERS_CONTRACT.ownerOf(tokenId);

  const {
    mintedAt,
    joinedAt,
    experiencePoints,
    activityPoints,
    holder,
    state,
  } = (await ETHERS_CONTRACT.getTokenStructById(tokenId)) as TokenStruct;

  const data = {
    name: `Membership #${tokenId}`,
    description: `Membership of ${holder}`,
    image: `https://owieth-website-app.vercel.app/api/preview/${holder}`,
    animation_url: `https://owieth-website-app.vercel.app/preview/${holder}`,
    attributes: [
      {
        trait_type: 'Holder',
        value: holder,
      },
      { trait_type: 'Minted', value: Number(mintedAt) },
      { trait_type: 'Joined', value: Number(joinedAt) },
      { trait_type: 'Experience Points', value: Number(experiencePoints) },
      { trait_type: 'Activity Points', value: Number(activityPoints) },
      { trait_type: 'State', value: Number(state) },
    ],
  };

  return NextResponse.json(data);
}

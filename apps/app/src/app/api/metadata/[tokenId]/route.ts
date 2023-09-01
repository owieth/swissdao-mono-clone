import {
  ALCHEMY_KEY,
  CONTRACT_ADDRESS_SEPOLIA,
  TokenStruct,
} from '@/contracts/contracts';
import { ethers } from 'ethers';
import { NextResponse } from 'next/server';
import ABI from '../../../../contracts/ABI.json';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: number } }
) {
  const provider = new ethers.AlchemyProvider('sepolia', ALCHEMY_KEY);
  const contract = new ethers.Contract(CONTRACT_ADDRESS_SEPOLIA, ABI, provider);

  await contract.ownerOf(tokenId);

  const {
    mintedAt,
    joinedAt,
    experiencePoints,
    activityPoints,
    holder,
    state,
  } = (await contract.getTokenStructById(tokenId)) as TokenStruct;

  const data = {
    name: `Membership #${tokenId}`,
    description: `Membership of ${holder}`,
    image: `https://owieth-website-app.vercel.app/api/preview?holder=${holder}`,
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

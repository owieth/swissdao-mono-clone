import { TokenStruct } from '@/contracts/contracts';
import {
  ACTIVITY_POINT_TOKEN_ID,
  EVENTS_TOKEN_ID,
  EXPERIENCE_POINT_TOKEN_ID,
} from '@/helpers/const';
import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { NextResponse } from 'next/server';

function generateExperience() {
  return {
    name: 'XP',
    description: 'Experience Point - swissDAO',
    image: `https://owieth-website-app.vercel.app/api/preview/${EXPERIENCE_POINT_TOKEN_ID}`,
    attributes: [],
  };
}

function generateActivity() {
  return {
    name: 'AP',
    description: 'Activity Point - swissDAO',
    image: `https://owieth-website-app.vercel.app/api/preview/${ACTIVITY_POINT_TOKEN_ID}`,
    attributes: [],
  };
}

function generateEvent() {
  return {
    name: 'EP',
    description: 'Events - swissDAO',
    image: `https://owieth-website-app.vercel.app/api/preview/${EVENTS_TOKEN_ID}`,
    attributes: [],
  };
}

async function generateMembership(tokenId: string) {
  await ETHERS_CONTRACT.ownerOf(tokenId);

  const {
    mintedAt,
    joinedAt,
    experiencePoints,
    activityPoints,
    holder,
    state,
  } = (await ETHERS_CONTRACT.getTokenStructById(tokenId)) as TokenStruct;

  return {
    name: `Membership #${tokenId}`,
    description: `Membership of ${holder}`,
    image: `https://owieth-website-app.vercel.app/api/preview/${tokenId}`,
    animation_url: `https://owieth-website-app.vercel.app/preview/${tokenId}`,
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
}

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: string } }
) {
  let data;

  switch (tokenId) {
    case String(EXPERIENCE_POINT_TOKEN_ID):
      data = generateExperience();
      break;

    case String(ACTIVITY_POINT_TOKEN_ID):
      data = generateActivity();
      break;

    case String(EVENTS_TOKEN_ID):
      data = generateEvent();
      break;

    default:
      data = generateMembership(tokenId);
      break;
  }

  return NextResponse.json(data);
}

import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    name: 'Membership #1',
    description: 'Membership of 0x94b2cea71f9ba7a6e55c40be320033d1151145b6',
    image:
      'https://owieth-website-app.vercel.app/api/preview?holder=0x94b2cea71f9ba7a6e55c40be320033d1151145b6',
    animation_url:
      'https://owieth-website-app.vercel.app/preview/0x94b2cea71f9ba7a6e55c40be320033d1151145b6',
    attributes: [
      {
        trait_type: 'Holder',
        value: '0x94b2cea71f9ba7a6e55c40be320033d1151145b6',
      },
      { trait_type: 'Minted', value: '0x64ef1194' },
      { trait_type: 'Joined', value: '0x00' },
      { trait_type: 'Experience Points', value: '0x00' },
      { trait_type: 'Activity Points', value: '0x00' },
      { trait_type: 'State', value: 'ONBOARDING' },
    ],
  };

  return NextResponse.json(data);
}

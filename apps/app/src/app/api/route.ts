// import type { NextApiRequest } from 'next'

// type ResponseData = {
//   message: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: any
// ) {
//   const image = `
//     <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//       <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
//     </svg>
//   `
//   var url = "data:image/svg+xml;base64," + Buffer.from(image, "utf-8").toString("base64")

//   //res.setHeader('Content-Type', 'image/svg+xml');
//   //res.setHeader('Content-Disposition', 'attachment');
//   res.send(url);
// }

import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    name: 'Membership #1',
    description: 'Membership of 0x94b2cea71f9ba7a6e55c40be320033d1151145b6',
    // image: 'https://membership-preview.vercel.app/api/membercard',
    image: 'https://picsum.photos/500',
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

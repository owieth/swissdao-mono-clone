import MembercardFront from '@/components/membercard/front';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const holder = searchParams.get('holder');

  if (!holder) {
    return new ImageResponse(<>Please provide a Holder address!</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'black',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MembercardFront holder={holder} />
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}

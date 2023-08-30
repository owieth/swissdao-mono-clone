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
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MembercardFront holder={holder} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

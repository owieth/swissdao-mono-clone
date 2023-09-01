import { ImageResponse } from 'next/server';

export const runtime = 'edge';

const renderTextElement = (
  x: number,
  y: number,
  fontSize: number,
  value: string
) => (
  <foreignObject x={x} y={y} style={{ width: '100%', height: '100%' }}>
    <p style={{ color: 'white', fontSize }}>{value}</p>
  </foreignObject>
);

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
        <div
          style={{
            display: 'flex',
            position: 'relative',
            background: 'black',
            height: 213,
            width: 349,
            border: '1px solid #868686',
            borderRadius: 16,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/500"
            alt=""
            height={100}
            width={100}
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              borderRadius: 50,
            }}
          />

          <p
            style={{
              position: 'absolute',
              top: 120,
              left: 20,
              color: 'white',
              fontSize: 24,
            }}
          >
            {'John Doe'}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 160,
              left: 260,
              color: 'white',
              fontSize: 16,
            }}
          >
            {'01/01/23'}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 160,
              left: 20,
              color: 'white',
              fontSize: 16,
            }}
          >
            {holder}
          </p>
          <p
            style={{
              position: 'absolute',
              top: 110,
              left: 60,
              color: 'white',
              fontSize: 8,
            }}
          >
            {'150'}
          </p>
        </div>
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}

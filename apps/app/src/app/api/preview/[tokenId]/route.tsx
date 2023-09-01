import {
  ALCHEMY_KEY,
  CONTRACT_ADDRESS_SEPOLIA,
  TokenStruct,
} from '@/contracts/contracts';
import { ethers } from 'ethers';
import { ImageResponse } from 'next/server';
import ABI from '../../../../contracts/ABI.json';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: number } }
) {
  const provider = new ethers.AlchemyProvider('sepolia', ALCHEMY_KEY);
  const contract = new ethers.Contract(CONTRACT_ADDRESS_SEPOLIA, ABI, provider);

  await contract.ownerOf(tokenId);

  const { profileImageUri, holder } = (await contract.getTokenStructById(
    tokenId
  )) as TokenStruct;
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
            src={profileImageUri || "https://picsum.photos/500"}
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

import { TokenStruct } from '@/contracts/contracts';
import {
  ACTIVITY_POINT_TOKEN_ID,
  EVENTS_TOKEN_ID,
  EXPERIENCE_POINT_TOKEN_ID,
} from '@/helpers/const';
import { ETHERS_CONTRACT } from '@/helpers/contracts';
import { shortenString } from '@/helpers/format';
import { ImageResponse } from 'next/server';

function generateExperience() {
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
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h1000v1000H0V0Z" fill="#012" />
          <path
            d="m0 838 143-122 143-85 143 134 142-39 143 19 143 15 143-108v349H0V838Z"
            fill="#C62368"
          />
          <path
            d="m265.341 220.364 93.75 151.278h2.841l93.75-151.278h51.846L393.182 402.182 507.528 584h-51.846l-93.75-148.438h-2.841L265.341 584h-51.847l117.188-181.818-117.188-181.818h51.847ZM564.835 584V220.364h122.869c28.528 0 51.847 5.149 69.958 15.447 18.229 10.18 31.723 23.97 40.483 41.371 8.759 17.4 13.139 36.813 13.139 58.238 0 21.426-4.38 40.898-13.139 58.417-8.642 17.519-22.017 31.486-40.128 41.903-18.111 10.298-41.312 15.448-69.603 15.448h-88.068v-39.063h86.648c19.531 0 35.215-3.374 47.053-10.121 11.837-6.747 20.419-15.861 25.745-27.343 5.445-11.601 8.168-24.681 8.168-39.241 0-14.559-2.723-27.58-8.168-39.062-5.326-11.482-13.968-20.478-25.923-26.989-11.956-6.628-27.817-9.943-47.585-9.943h-77.415V584h-44.034Z"
            fill="#fff"
          />
        </svg>
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}

function generateActivity() {
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
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path d="M1000 0H0v1000h1000V0Z" fill="#012" />
            <path
              d="m0 838 143-122 143-85 143 134 142-39 143 19 143 15 143-108v349H0V838Z"
              fill="#C62368"
            />
            <path
              d="m199.268 561 137.451-357.91h51.025L534.229 561h-53.956l-41.748-108.398H288.867L249.561 561h-50.293Zm103.271-146.973h121.338l-37.354-99.121c-11.393-30.11-19.856-54.85-25.39-74.218-4.557 22.949-10.987 45.735-19.287 68.359l-39.307 104.98ZM572.07 561V203.09h135.01c23.763 0 41.911 1.139 54.443 3.418 17.579 2.93 32.308 8.545 44.19 16.846 11.881 8.138 21.403 19.612 28.564 34.423 7.325 14.812 10.987 31.088 10.987 48.828 0 30.437-9.685 56.234-29.053 77.393-19.369 20.996-54.362 31.494-104.981 31.494h-91.796V561H572.07Zm47.364-187.744h92.529c30.599 0 52.327-5.697 65.185-17.09 12.859-11.393 19.288-27.425 19.288-48.096 0-14.974-3.825-27.75-11.475-38.33-7.487-10.742-17.415-17.822-29.785-21.24-7.975-2.116-22.705-3.174-44.19-3.174h-91.552v127.93Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h1000v1000H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}

function generateEvent() {
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
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path d="M1000 0H0v1000h1000V0Z" fill="#012" />
            <path
              d="m0 838 143-122 143-85 143 134 142-39 143 19 143 15 143-108v349H0V838Z"
              fill="#C62368"
            />
            <path
              d="M212.656 487V372.469h82.813v13.515h-67.657v35.078h63.36V434.5h-63.36v38.984h70.313V487h-85.469Zm139.141 0-44.375-114.531h16.406l29.766 83.203c2.396 6.667 4.401 12.917 6.015 18.75 1.771-6.25 3.829-12.5 6.172-18.75l30.938-83.203h15.469L367.344 487h-15.547Zm74.297 0V372.469h82.812v13.515H441.25v35.078h63.359V434.5H441.25v38.984h70.312V487h-85.468Zm106.25 0V372.469h15.547l60.156 89.922v-89.922h14.531V487h-15.547l-60.156-90v90h-14.531Zm144.922 0V385.984h-37.735v-13.515h90.781v13.515h-37.89V487h-15.156Zm63.515-36.797 14.297-1.25c.677 5.729 2.24 10.443 4.688 14.141 2.5 3.646 6.354 6.614 11.562 8.906 5.208 2.24 11.068 3.359 17.578 3.359 5.782 0 10.886-.859 15.313-2.578 4.427-1.719 7.708-4.062 9.843-7.031 2.188-3.021 3.282-6.302 3.282-9.844 0-3.594-1.042-6.718-3.125-9.375-2.084-2.708-5.521-4.974-10.313-6.797-3.073-1.198-9.87-3.046-20.39-5.546-10.521-2.553-17.891-4.948-22.11-7.188-5.468-2.865-9.557-6.406-12.265-10.625-2.657-4.271-3.985-9.036-3.985-14.297 0-5.781 1.641-11.172 4.922-16.172 3.281-5.052 8.073-8.88 14.375-11.484 6.302-2.604 13.307-3.906 21.016-3.906 8.489 0 15.963 1.38 22.422 4.14 6.51 2.709 11.51 6.719 15 12.032 3.489 5.312 5.364 11.328 5.625 18.046l-14.532 1.094c-.781-7.239-3.437-12.708-7.968-16.406-4.48-3.698-11.12-5.547-19.922-5.547-9.167 0-15.86 1.693-20.078 5.078-4.167 3.333-6.25 7.37-6.25 12.109 0 4.115 1.484 7.5 4.453 10.157 2.916 2.656 10.521 5.39 22.812 8.203 12.344 2.76 20.808 5.182 25.391 7.266 6.667 3.072 11.588 6.979 14.766 11.718 3.177 4.688 4.765 10.104 4.765 16.25 0 6.094-1.745 11.849-5.234 17.266-3.49 5.364-8.516 9.557-15.078 12.578-6.511 2.969-13.855 4.453-22.032 4.453-10.364 0-19.062-1.51-26.093-4.531-6.98-3.021-12.474-7.552-16.485-13.594-3.958-6.094-6.041-12.969-6.25-20.625Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h1000v1000H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  );
}

async function generateMembership(tokenId: string) {
  await ETHERS_CONTRACT.ownerOf(tokenId);

  const { profileImageUri, holder } = (await ETHERS_CONTRACT.getTokenStructById(
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
            src={profileImageUri || 'https://picsum.photos/500'}
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
            {shortenString(holder, 8)}
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

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: string } }
) {
  switch (tokenId) {
    case String(EXPERIENCE_POINT_TOKEN_ID):
      return generateExperience();

    case String(ACTIVITY_POINT_TOKEN_ID):
      return generateActivity();

    case String(EVENTS_TOKEN_ID):
      return generateEvent();

    default:
      return generateMembership(tokenId);
  }
}

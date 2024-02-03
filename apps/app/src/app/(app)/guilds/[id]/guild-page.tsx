'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GuildType } from '@/types/types';
import Image from 'next/image';

/*
function CSSstring(string: string) {
  const css_json = `{"${string
    .replace(/; /g, '", "')
    .replace(/: /g, '": "')
    .replace(';', '')}"}`;

  const obj = JSON.parse(css_json);

  const keyValues = Object.keys(obj).map(key => {
    var camelCased = key.replace(/-[a-z]/g, g => g[1].toUpperCase());
    return { [camelCased]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}
*/

export default function GuildPage({ guild }: { guild: GuildType }) {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="relative my-20 flex h-80 justify-center md:block">
          {/* <span style={CSSstring(
            'box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'
          )}>
            <img alt="Developer DAO" sizes="100vw" src="https://daocentral.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&w=1920&q=75" />
          </span> */}

          {/* <Image alt="" src="" /> */}

          <div className="absolute -bottom-20 mx-10 h-32 w-32 overflow-hidden rounded-full border-8 border-white sm:h-48 sm:w-48">
            <Avatar className="h-full w-full">
              <AvatarImage src={guild.imageUri} alt={guild.name} />
              <AvatarFallback>{guild.name}</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute -bottom-20 right-10 mx-10 hidden items-center justify-center space-x-5 md:flex">
            <button className="font-cal ease h-12 w-36 whitespace-nowrap rounded-full border-2 border-black bg-black text-lg tracking-wide text-white transition-all duration-150 hover:bg-white hover:text-black">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-24 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center space-x-3 md:justify-start">
            <h1 className="font-cal text-3xl tracking-wide sm:text-5xl">
              {guild.name}
            </h1>
          </div>
          <p className="mt-5 text-base sm:text-lg">{guild.description}</p>
          <div className="my-3 flex justify-center space-x-2 md:justify-start">
            <a
              className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white"
              href="/explore/service"
            >
              Service
            </a>
            <a
              className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white"
              href="/explore/social"
            >
              Social
            </a>
            <a
              className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white"
              href="/explore/education"
            >
              Education
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center border-t border-gray-300 pt-8 md:hidden">
          <button className="font-cal ease h-12 w-36 whitespace-nowrap rounded-full border-2 border-black bg-black text-lg tracking-wide text-white transition-all duration-150 hover:bg-white hover:text-black">
            Join
          </button>
        </div>
      </div>
    </>
  );
}

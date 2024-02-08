'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { getGradient } from '@/helpers/gradient';
import { GuildType } from '@/types/types';
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract
} from '@wagmi/core';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function GuildPage({ guild }: { guild: GuildType }) {
  const [isLoading, setIsLoading] = useState(false);

  const { membership } = useContext(MembershipContext);

  const isGuildMember = guild.holders
    .map(({ holder }) => holder)
    .includes(membership?.holder!);

  const joinGuild = async () => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'joinGuild',
      args: [membership?.holder, guild.id]
    });

    const { hash } = await writeContract(config);

    setIsLoading(true);

    await waitForTransaction({
      hash
    });

    setIsLoading(false);
  };

  const leaveGuild = async () => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'leaveGuild',
      args: [membership?.holder, guild.id]
    });

    const { hash } = await writeContract(config);

    setIsLoading(true);

    await waitForTransaction({
      hash
    });

    setIsLoading(false);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="relative flex h-80 justify-center md:block">
          <Image
            src="https://daocentral.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&w=1920&q=75"
            alt=""
            className="object-cover"
            fill
          />

          <div className="absolute -bottom-20 mx-10 h-32 w-32 overflow-hidden rounded-full border-8 border-white sm:h-48 sm:w-48">
            <Avatar className="h-full w-full">
              <AvatarImage src={guild.imageUri} alt={guild.name} />
              <AvatarFallback>{guild.name}</AvatarFallback>
            </Avatar>
          </div>

          <div className="absolute -bottom-24 rounded-full border border-gray-100 bg-white py-2 pl-4 pr-5 text-center shadow-md md:-bottom-20 md:left-36">
            # {guild.id}
          </div>

          <div className="absolute -bottom-20 right-10 hidden items-center justify-center space-x-5 md:flex">
            {isGuildMember ? (
              <Button size="lg" onClick={leaveGuild} disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Leave
              </Button>
            ) : (
              <Button size="lg" onClick={joinGuild} disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Join
              </Button>
            )}
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
            <span className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white">
              Service
            </span>
            <span className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white">
              Social
            </span>
            <span className="rounded-full border border-gray-500 px-3 py-1 text-base text-gray-500 transition-all hover:border-black hover:bg-black hover:text-white">
              Education
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center border-t border-gray-300 pt-8 md:hidden">
          <button className="font-cal ease h-12 w-36 whitespace-nowrap rounded-full border-2 border-black bg-black text-lg tracking-wide text-white transition-all duration-150 hover:bg-white hover:text-black">
            Join
          </button>
        </div>
      </div>

      <div className="m-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {guild.holders.map((holder, i) => (
          <Link href={`/members/${holder.tokenID}`} key={i}>
            <div className="group relative flex flex-col items-center rounded-lg border border-gray-200 pb-8 transition-all hover:shadow-xl">
              <div
                className={`-mb-12 h-24 w-full rounded-t-lg ${getGradient(
                  holder.nickname
                )}`}
              />

              <div className="h-20 w-20">
                <Avatar className="h-full w-full">
                  <AvatarImage
                    src={holder.profileImageUri}
                    alt={holder.nickname}
                  />
                </Avatar>
              </div>

              <div className="mx-auto mt-6">
                <p className="text-2xl">{holder.nickname}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

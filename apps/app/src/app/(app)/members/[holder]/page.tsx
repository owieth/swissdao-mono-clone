'use client';

import IconUpload from '@/components/icons/upload';
import { MemberStats } from '@/components/member-stats/member-stats';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CheckIcon, Cross1Icon, Pencil1Icon } from '@radix-ui/react-icons';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Address, getAddress } from 'viem';
import { useAccount } from 'wagmi';

const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

const userBio =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac dolor vitae erat consectetur luctus.Aenean nec lorem ut velit dapibus elementum.Proin ac lorem maximus, consequat ante ac, aliquet eros. Donec consectetur consequat velit ut vestibulum.In hac habitasse platea dictumst.Sed sit amet diam nec ex pulvinar rutrum.Duis imperdiet, nulla sit amet cursus interdum, ligula justo blandit nisi, ac ullamcorper sem dui quis leo.Quisque dictum semper fringilla. Donec sit amet nulla diam.';

export default function Member() {
  const [edit, setEdit] = useState(false);

  const { holder } = useParams();

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const isProfileOwner =
    getAddress(address as Address) == getAddress(holder as Address);

  useEffect(() => {
    if (!address) {
      openConnectModal?.();
    }
  }, [address, openConnectModal]);

  return isProfileOwner ? (
    <div className="relative min-h-screen pb-20">
      <div className="absolute right-4 top-4 flex gap-2 sm:right-6 lg:right-8">
        <Button size="icon" onClick={() => setEdit(!edit)}>
          {edit ? (
            <Cross1Icon className="h-4 w-4" />
          ) : (
            <Pencil1Icon className="h-4 w-4" />
          )}
        </Button>

        {edit && (
          <Button size="icon">
            <CheckIcon className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="h-48 w-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 lg:h-64" />

      <div
        className={`${profileWidth} -mt-12 items-center sm:-mt-16 sm:flex sm:space-x-5`}
      >
        <div className="group relative h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
          {edit && (
            <button
              className="absolute z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 transition-all hover:bg-opacity-70"
              onClick={() =>
                alert('Image upload has been disabled for demo purposes.')
              }
            >
              <IconUpload className="h-6 w-6" />
            </button>
          )}

          <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
            <AvatarImage src="https://avatar.vercel.sh/leerob" alt="@shadcn" />
          </Avatar>
        </div>

        <div className="mt-16">
          <h1 className="truncate text-2xl font-semibold text-black">
            {'nickname'}
          </h1>
        </div>
      </div>

      {/* <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">About me</h2>
        {edit ? <Textarea>{userBio}</Textarea> : <span>{userBio}</span>}
      </div> */}

      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">My Membership</h2>
        <MemberStats />
      </div>
    </div>
  ) : null;
}

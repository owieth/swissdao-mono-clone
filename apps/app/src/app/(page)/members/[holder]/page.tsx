'use client';

import IconCheck from '@/components/icons/check';
import IconGithub from '@/components/icons/github';
import IconUpload from '@/components/icons/upload';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

const user = {
  name: 'Steven Jobs',
  username: '@sjobs',
  image: '',
  verified: false,
};

const tabs = [
  { name: 'Profile' },
  { name: 'Work History' },
  { name: 'Contact' },
];

export default function Member({ params }: { params: { holder: string } }) {
  const [edit, setEdit] = useState(false);

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    if (!address) {
      openConnectModal?.();
    }
  }, [address, openConnectModal]);

  return address ? (
    <div className="min-h-screen pb-20">
      <div>
        <div className="h-48 w-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 lg:h-64" />
        <div
          className={`${profileWidth} -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
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
              <AvatarImage
                src="https://avatar.vercel.sh/leerob"
                alt="@shadcn"
              />
            </Avatar>
          </div>
        </div>
      </div>

      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">About me</h2>
      </div>

      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">My Membership</h2>
      </div>
    </div>
  ) : null;
}

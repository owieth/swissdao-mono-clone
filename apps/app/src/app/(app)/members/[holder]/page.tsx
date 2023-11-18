'use client';

import { MemberStats } from '@/components/member-stats/member-stats';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CONTRACT } from '@/contracts/contracts';
import { getGradient } from '@/helpers/gradient';
import { MemberType } from '@/types/types';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Address, getAddress } from 'viem';
import { useAccount, useContractRead } from 'wagmi';

const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

export default function Member() {
  // const [edit, setEdit] = useState(false);

  const { holder } = useParams();

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const isProfileOwner =
    address && holder
      ? getAddress(address as Address) == getAddress(holder as Address)
      : false;

  const { data: member } = useContractRead({
    ...CONTRACT,
    functionName: 'getMember',
    args: [address],
  });

  useEffect(() => {
    if (!address) {
      openConnectModal?.();
    }
  }, [address, openConnectModal]);

  return member ? (
    <>
      {/* <Dialog open={edit} onOpenChange={setEdit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Membership</DialogTitle>
          </DialogHeader>

          <UpdateMembershipForm />
        </DialogContent>
      </Dialog> */}

      <div className="relative min-h-screen pb-20">
        {/* {isProfileOwner && (
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
        )} */}

        <div
          className={`h-48 w-full lg:h-64 
          ${getGradient((member as any).membership.nickname)}`}
        />

        <div
          className={`${profileWidth} -mt-12 items-center sm:-mt-16 sm:flex sm:space-x-5`}
        >
          <div className="group relative h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
            {/* {edit && (
              <button
                className="absolute z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 transition-all hover:bg-opacity-70"
                onClick={() =>
                  alert('Image upload has been disabled for demo purposes.')
                }
              >
                <IconUpload className="h-6 w-6" />
              </button>
            )} */}

            <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
              <AvatarImage
                src={
                  (member as MemberType).membership.profileImageUri ||
                  'https://avatar.vercel.sh/leerob'
                }
                alt="@shadcn"
              />
            </Avatar>
          </div>

          <div className="mt-16">
            <h1 className="truncate text-2xl font-semibold text-black">
              {(member as MemberType).membership.nickname}
            </h1>
          </div>
        </div>

        {/* <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">About me</h2>
        {edit ? <Textarea>{userBio}</Textarea> : <span>{userBio}</span>}
      </div> */}

        <div className={`${profileWidth} mt-16`}>
          <h2 className="font-mono text-2xl font-semibold">My Membership</h2>
          <MemberStats member={member as MemberType} />
        </div>
      </div>
    </>
  ) : null;
}

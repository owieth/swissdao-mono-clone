'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { getGradient } from '@/helpers/gradient';
import { MembershipType } from '@/types/types';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { AreaChart, CategoryBar } from '@tremor/react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Address, getAddress } from 'viem';
import { useAccount } from 'wagmi';

const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

export default function MemberPage({
  membership
}: {
  membership: MembershipType;
}) {
  // const [edit, setEdit] = useState(false);

  const { holder } = useParams();

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const isProfileOwner =
    address && holder
      ? getAddress(address as Address) == getAddress(holder as Address)
      : false;

  const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      'The Pragmatic Engineer': 2338
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      'The Pragmatic Engineer': 2103
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      'The Pragmatic Engineer': 2194
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      'The Pragmatic Engineer': 2108
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      'The Pragmatic Engineer': 1812
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      'The Pragmatic Engineer': 1726
    }
  ];

  const valueFormatter = function (number: number) {
    return '$ ' + new Intl.NumberFormat('us').format(number).toString();
  };

  useEffect(() => {
    if (!address) {
      openConnectModal?.();
    }
  }, [address, openConnectModal]);

  return (
    <>
      {/* <Dialog open={edit} onOpenChange={setEdit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Membership</DialogTitle>
          </DialogHeader>

          <UpdateMembershipForm />
        </DialogContent>
      </Dialog> */}

      <div className="relative flex min-h-screen flex-col gap-10 pb-20">
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

        <div className="relative mx-auto my-20 flex h-48 w-full max-w-screen-2xl origin-bottom justify-center md:px-20">
          <div
            className={`h-full w-full md:rounded-3xl ${getGradient(
              membership.nickname
            )}`}
          />

          <div className="absolute -bottom-20 h-32 w-32 overflow-hidden rounded-full border-8 border-white sm:h-48 sm:w-48">
            <Avatar className="h-full w-full">
              <AvatarImage
                src={
                  membership.profileImageUri ||
                  'https://avatar.vercel.sh/leerob'
                }
                alt="@shadcn"
              />
            </Avatar>
          </div>
        </div>

        <div className="relative flex w-full px-10 md:px-20">
          <div className="w-full rounded-xl border border-b border-t border-gray-200 bg-white shadow-xl">
            <div className="rounded-t-xl bg-gradient-to-r from-black via-gray-800 to-black py-3 text-center">
              <p className="text-2xl tracking-widest text-white">
                Membership #{membership.tokenID}
              </p>
            </div>
            <div className="min-w-0 px-6 pb-10">
              <h1 className="truncate text-2xl font-semibold text-black">
                Nickname: {membership.nickname}
              </h1>
              <h1 className="truncate text-2xl font-semibold text-black">
                Guilds: {membership.guilds.length}
              </h1>

              <h1 className="truncate text-2xl font-semibold text-black">
                Activity Points:{' '}
                {membership.activityPoints.balances[0]?.balance || 0}
              </h1>

              <h1 className="truncate text-2xl font-semibold text-black">
                Experience Points:{' '}
                {membership.experiencePoints.balances[0]?.balance || 0}
              </h1>

              <h1 className="truncate text-2xl font-semibold text-black">
                Attended Events:{' '}
                {membership.attendedEvents.balances[0]?.balance || 0}
              </h1>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-10 px-10 md:px-20">
          <Card className="w-full p-5">
            Newsletter revenue over time (USD)
            <AreaChart
              className="mt-4 h-72"
              data={chartdata}
              index="date"
              yAxisWidth={65}
              categories={['SemiAnalysis', 'The Pragmatic Engineer']}
              colors={['indigo', 'cyan']}
              valueFormatter={valueFormatter}
            />
          </Card>

          <Card className="w-full p-5">
            <div className="flex justify-between">
              <span>Activity Points</span>
              <span>{membership.activityPoints.balances[0]?.balance || 0}</span>
            </div>
            <CategoryBar
              values={[40, 30, 20, 10]}
              colors={['rose', 'orange', 'yellow', 'emerald']}
              markerValue={membership.activityPoints.balances[0]?.balance}
              className="mt-3"
            />
          </Card>
        </div>

        {/* <div className="grid w-full grid-cols-1 gap-8 px-10 sm:grid-cols-2 md:px-20 xl:grid-cols-3">
          <a href="/dao/developer">
            <div className="ease hidden rounded-2xl border-2 border-gray-100 bg-white shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:block">
              <div className="overflow-hidden rounded-t-2xl">
                <span
                  style={CSSstring(
                    'box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;'
                  )}
                >
                  <span
                    style={CSSstring(
                      'box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 80% 0px 0px;'
                    )}
                  ></span>
                  <img
                    alt="Developer DAO"
                    sizes="100vw"
                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&amp;w=3840&amp;q=75"
                    decoding="async"
                    data-nimg="responsive"
                    className="scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                    style={CSSstring(
                      'position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;'
                    )}
                  />
                </span>
              </div>

              <div className="h-36 px-5 py-6">
                <h3 className="font-cal my-0 truncate text-2xl font-bold tracking-wide">
                  Developer DAO
                </h3>
                <p className="mt-3 line-clamp-2 text-base font-normal italic leading-snug text-gray-800">
                  Build web3 with frens 🤝
                </p>
              </div>
            </div>
          </a>
        </div> */}
      </div>
    </>
  );
}

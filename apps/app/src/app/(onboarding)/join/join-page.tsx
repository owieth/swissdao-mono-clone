'use client';

import { Connect } from '@/components/flows/join/connect';
import { Mint } from '@/components/flows/join/mint';
import Swiper from '@/components/swiper/swiper';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useAccount } from 'wagmi';

export default function JoinPage() {
  const { address } = useAccount();

  return (
    <div className="relative grid h-screen grid-cols-3 flex-col items-center">
      <div className="col-span-1 h-full">
        <video
          className="h-full object-cover"
          src="/videos/teaser.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="col-span-2 lg:p-8">
        <div className="mx-auto flex h-[500px] w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Swiper>
            <Card className="p-4">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Join our awesome community!
                </h1>
                <p className="text-muted-foreground text-sm">
                  Connect your wallet
                </p>
              </div>

              <Connect />
            </Card>

            <Card className="p-4">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="p-4 text-2xl font-semibold tracking-tight">
                  Mint your Membership!
                </h1>
              </div>

              <Mint />
            </Card>

            <Card className="p-4">
              {/* <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Mint your Membership now!
                </h1>
              </div> */}

              <Link href={`/members/${address}`}>Visit your Profile!</Link>
            </Card>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

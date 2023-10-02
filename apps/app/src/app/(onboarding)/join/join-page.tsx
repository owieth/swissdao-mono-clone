'use client';

import { JoinForm } from '@/components/join-form/join-form';
import Swiper from '@/components/swiper/swiper';

export default function JoinPage() {
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
          <Swiper interactive>
            <div>
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Join our awesome community!
                </h1>
                <p className="text-muted-foreground text-sm">
                  Connect your wallet
                </p>
              </div>
              <JoinForm />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';

import { OnboardingForm } from '@/components/onboarding-form/onboarding-form';

export const metadata: Metadata = {
  title: 'swissDAO - Onboarding',
  description: 'swissDAO - Onboarding',
};

export default function AuthenticationPage() {
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
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your email below to create your account
            </p>
          </div>
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
}

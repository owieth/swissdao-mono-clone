'use client';

import Announcement from '@/components/Landing/Announcement';
import Committment from '@/components/Landing/Commitment';
import Features from '@/components/Landing/Feature';
import Hero from '@/components/Landing/Hero';
import Mission from '@/components/Landing/Mission';
import Subscribe from '@/components/Landing/Subscribe';
import Logocloud from '@/components/bootcamp/logocloud';
import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Home: NextPage = () => {
  const targetRef = useRef<HTMLDivElement>(null); // Specify the correct type for the ref

  // const logos = [
  //   '/images/partners_eth_zuri.png',
  //   '/images/partners_trust_square.png',
  //   '/images/partners_eth_zuri.png',
  //   '/images/partners_trust_square.png'
  // ];

  const logos = [
    '/images/bootcamp/solana.svg',
    '/images/bootcamp/thegraph.svg',
    '/images/bootcamp/superteam.svg',
    '/images/bootcamp/gelato.svg'
  ];

  const scrollToComponent = () => {
    console.log();
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Hero scrollToComponent={scrollToComponent}></Hero>
      <Announcement></Announcement>
      <Mission ref={targetRef}></Mission>
      
      <Logocloud
          className='mb-36'
          text="swissDAO is a well connected builder community giving you the best exposure to the industry."
          logos={logos}
        />
      <Features></Features>
      {/* <Event></Event> */}
      <Committment></Committment>
      {/* <Testimonials></Testimonials> */}
      {/* <Partners></Partners> */}
      {/* <Logocloud
        text="Partners"
        logos={logos}
        className='w-full h-28'
        textClassName="text-background mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      ></Logocloud> */}
      <Subscribe></Subscribe>
      {/* <LearnSection></LearnSection>
          <ConnectSection></ConnectSection>
          <BuildSection></BuildSection> */}
    </div>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// };

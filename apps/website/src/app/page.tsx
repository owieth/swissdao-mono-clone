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
      <Announcement />
      <Mission ref={targetRef}></Mission>

      <Logocloud
        className="mb-20"
        text="swissDAO is a well connected builder community giving you the best exposure to the industry."
        logos={logos}
      />
      <Features />
      <Committment />
      <Subscribe />
    </div>
  );
};

export default Home;

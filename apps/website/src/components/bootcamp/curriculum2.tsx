'use client';

import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const chapters = [
  {
    title: 'Foundations',
    subtitle: 'Code your first Smart Contracts',
    abstract:
      'We start with a solid Foundation into the Bootcamp - Programming and Solidity Basics ',
    builds: [
      'Learn Types',
      'Understand Keywords',
      'Build Intuition around Modifiers',
      'Compiler, Imports'
    ]
  },
  {
    title: 'First Project, Tokens, Staking',
    subtitle: 'Deploy Tokens and make them interact with other Smart Contracts',
    abstract:
      'We dive deeper into the Solidity Ecosystem by creating own Tokens and utilizing them on Protocols',
    builds: ['Token Standards', 'How Staking works', 'Open Source Libraries']
  },
  {
    title: 'Randomness, Oracles',
    subtitle:
      'Increase Complexity of your Smart Contracts and Reference the Real World',
    abstract:
      'How do we get real Data into our Smart Contract? In this section, we make our contracts smarter with real-world data.',
    builds: [
      'Oracle Networks',
      'Oracle Integration',
      'Scale your Contract thanks to Oracles'
    ]
  },
  {
    title: 'DeFi Primitives',
    subtitle: 'Develop your own Decentralised Exchange',
    abstract:
      'Decentralised Exchanges are the backbone of the crypto landscape, in this section you will create and deploy your own!',
    builds: [
      'Deepdive into DEXs',
      'Understand the Risks',
      'Code a DEX like Uniswap'
    ]
  },
  {
    title: 'Wallets',
    subtitle:
      'Level up your understanding of the EVM by developing your own Multisig',
    abstract:
      'Multisig wallets are the safest wallet and it is crucial to understand how they work. Best is to develop it by yourself.',
    builds: [
      'Generate your own Wallet',
      'Hands on the Gnosis Wallet',
      'Multisig Wallet Standard'
    ]
  },
  {
    title: 'Testing & Hacking',
    subtitle: 'Exploit Smart Contracts like Hackers',
    abstract:
      'We explore the worst hacks in Smart Contract history and try to hack our own contracts.',
    builds: [
      'Get to know all resources',
      'How to write secure Contracts',
      'Learn what to do in an Emergency'
    ]
  },
  {
    title: 'Project Weeks',
    subtitle: 'Build your own Project solidifying your gained knowledge',
    abstract:
      'This is the pinnacle of the bootcamp, a full week long project you start on your own and demonstrate it at the end, showcasing all of your learnings!',
    builds: [
      'Test all your knowledge to build an anwesome Project',
      'Demonstrate it at the end to the participants'
    ]
  }
];

export default function Curriculum2() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-gray-800 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="pb-4 text-base font-semibold leading-7 text-gray-300">
            Curriculum
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What you&apos;ll learn in this Solidity development bootcamp
          </p>
          <p className="pt-4 text-gray-100">
            Master the technical skills needed to successfully contribute to the
            Web3 movement, learning how to develop great products in Web3 using
            the most up to date workflows.
          </p>
        </div>
        <div className="mx-8 mt-8 h-px flex-auto bg-gray-100" />
      </div>
      <div className="mx-8 mx-auto mt-16 flex max-w-7xl">
        <div className="w-1/3 p-4">
          <ul>
            {chapters.map((chapter, i) => {
              if (i === index) {
                return (
                  <li
                    key={chapter.title}
                    className="flex gap-x-3 bg-gray-700 p-2 "
                  >
                    <p
                      onClick={() => {
                        setIndex(i);
                      }}
                      className="text-md h-full w-full cursor-pointer font-semibold leading-6 text-gray-100"
                    >
                      {i}. {chapter.title} <span aria-hidden="true">→</span>
                    </p>
                  </li>
                );
              }
              return (
                <li key={chapter.title} className="flex gap-x-3 p-2">
                  <p
                    onClick={() => {
                      setIndex(i);
                    }}
                    className="text-md h-full w-full cursor-pointer font-semibold leading-6 text-gray-100"
                  >
                    {i}. {chapter.title} <span aria-hidden="true">→</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-100">
            {chapters[index].subtitle}
          </h2>
          <p className="mb-4 text-gray-100">{chapters[index].abstract}</p>
          <p className="rounded-3xl p-8 ring-1 ring-gray-200">
            <p className="text-md mb-4 font-semibold text-gray-100">
              What you will learn in practice
            </p>
            {
              <ul>
                {chapters[index].builds.map((build, i) => (
                  <div key={i} className="my-1 flex flex-row gap-x-2">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-gray-100"
                      aria-hidden="true"
                    />
                    <p className="text-gray-300">{build}</p>
                  </div>
                ))}
              </ul>
            }
          </p>
        </div>
      </div>
    </section>
  );
}

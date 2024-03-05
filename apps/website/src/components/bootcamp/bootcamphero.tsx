import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export function BootcampHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-12">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-12 sm:mt-32 lg:mt-12">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    New released programme
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    {/* <span>Curriculum</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  </span>
                </a>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Become a <br></br> Solidity Developer <br></br> in 12 Weeks
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                swissDAO Solidity Developer Bootcamp is a 12 week cohort program
                that teaches the fundamentals to become a solidity developer.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Apply
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Check the programme <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-300 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
            aria-hidden="true"
          />
          <div className="">
            <div className="[clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="" aria-hidden="true" />
              {/* img here */}
              {/* <Image src={'/images/bootcamp_1.jpg'} alt={''} width={}></Image> */}
              <img
                src="/images/bootcamp_2.jpg"
                alt=""
                className=" mt-16 aspect-[7/5] w-[37rem] max-w-none rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}

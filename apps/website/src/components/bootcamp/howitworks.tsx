import BootcampStats from './bootcampstats';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function HowitWorks() {
  return (
    <div className="bg-gray-800 py-20">
      <h2 className="pb-4 text-center text-base font-semibold leading-7 text-gray-300">
        How it works
      </h2>
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        The Bootcamp that works part-time
      </h2>
      <div className="sm-px-0 space-between mx-auto grid max-w-5xl grid-cols-1 gap-8 overflow-hidden rounded-2xl px-8 text-center sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-gray-50 p-4 shadow">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="pb-2 text-2xl font-semibold leading-6 text-gray-900">
              Learn the fundamentals of smart contract writing
            </h3>
            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
          </div>
          <div className="mb-4 px-4">
            <p className="py-2">12 live sessions in person or remote</p>
            <p className="py-2">
              You&apos;ll have bonus access to all examples, templates and
              cheatsheets for you to download and use (that will save you hours
              of headache)
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-gray-50 p-4 shadow">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="pb-2 text-2xl font-semibold leading-6 text-gray-900">
              Put learnings into practice by following the 12 weeks program
            </h3>

            {/* Content goes here */}
            {/* We use less vertical padding on card headers on desktop than on body sections */}
          </div>
          <div className="mb-4 px-4">
            <p className="py-2">
              You’ll do 2 assignments per week that will be checked by your TA.
            </p>
            <p className="py-2">
              You’ll have 1 session with your TA to check your progress and
              reflect open questions
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-8">
                <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                + get a course certification that testifies your solidity skills
                </h2>
            </div> */}
      <BootcampStats />
    </div>
  );
}

import { type RefObject, forwardRef } from 'react';

interface IMission {
  ref: RefObject<HTMLDivElement>;
}

const Mission = forwardRef<HTMLDivElement, IMission>((props, ref) => {
  return (
    <div ref={ref} className="w-full overflow-hidden bg-white py-32">
      <div className="px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 lg:pl-24 lg:pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              swissDAO accelerates the web3 journey for builders, entrepreneurs
              and creatives by growing a community to learn, connect and build
              together in weekly sessions, workshops or hackathons.
            </p>

            {/* <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our events <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="flex flex-col flex-wrap items-start justify-end justify-center gap-6 sm:gap-8 md:flex-row lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/images/mission_4.jpg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/images/about_8.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/images/mission_2.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/images/about_6.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Mission;

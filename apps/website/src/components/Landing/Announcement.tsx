import Link from "next/link";
import Image from "next/image";

export default function Announcement() {
  return (
    <div className="w-full bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-300 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Link href="https://ethereumzuri.ch/" target="_blank">
                <Image
                  src="/images/partners_eth_zuri.png"
                  alt=""
                  height={500}
                  width={500}
                />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-28">
            <figure className="relative isolate">
              <h2 className="text-background mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Partnership Announcement
              </h2>
              <blockquote className="leading-8 text-gray-700 sm:text-2xl sm:leading-9">
                <p className="mt-6 text-xl text-gray-700">
                  We are proud to announce that we agreed to a partnership with <Link href="https://ethereumzuri.ch/" target="_blank" className="text-blue-400 ">Ethereum Zurich Conference</Link> taking place 5th to 7th of April 2024.
                </p>
                <p className="mt-6 text-xl text-gray-700">
                  During the weeks prior to the conference we are hosting <Link href="https://lu.ma/swissdao" target="_blank" className="text-blue-400 ">Road to Ethereum Zurich</Link> a workshop series to make you ready for the conference.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

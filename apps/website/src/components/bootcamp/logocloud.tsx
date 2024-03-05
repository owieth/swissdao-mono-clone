import Image from "next/image"

export default function Logocloud() {
    return (
      <div className="bg-white pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            swissDAO is a well connected builder community giving you the best exposure to the industry.
          </h2>
          <div className="mx-auto mt-10 h-28 lg:h-8 grid max-w-lg grid-cols-2 lg:grid-cols-4 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            {/* <img
              className="col-span-2 w-full founded-full object-contain lg:col-span-1"
              src="/images/bootcamp/solanafoundation.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full rounded-full object-contain lg:col-span-1"
              src="/images/bootcamp/the-graph-big.jpg"
              alt="Reform"
            />
            <img
              className="col-span-2 w-full rounded-full object-contain lg:col-span-1"
              src="/images/bootcamp/superteam.png"
              alt="Tuple"
            /> */}
            <div className="relative w-full h-full object-contain">
              <Image src="/images/bootcamp/solana.svg" alt="" fill />
            </div>
            <div className="relative w-full h-full object-contain">
              <Image src="/images/bootcamp/thegraph.svg" alt="" fill />
            </div>
            <div className="relative w-full h-full object-contain">
              <Image src="/images/bootcamp/superteam.svg" alt="" fill />
            </div>
            <div className="relative w-full h-full object-contain">
              <Image src="/images/bootcamp/gelato.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    )
  }
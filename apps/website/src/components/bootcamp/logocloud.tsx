import Image from 'next/image';

type Props = {
  text: string;
  logos: string[];
};

export default function Logocloud({ text, logos }: Props) {
  return (
    <div className="bg-white pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          {text}
        </h2>
        <div className="mx-auto mt-10 grid h-28 max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:h-8 lg:max-w-none lg:grid-cols-4">
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
          {logos.map((logo, i) => (
            <div className="relative h-full w-full object-contain" key={i}>
              <Image src={logo} alt="" fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

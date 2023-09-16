export default function Partners() {
  return (
    <div className="w-full bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Well known
        </h2>
        <p className="mb-16 mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our Partners
        </p>
        {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p> */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-white/5 p-8 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

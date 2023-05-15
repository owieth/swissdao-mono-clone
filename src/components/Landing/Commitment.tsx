export default function Committment() {
  return (
    <div className="w-full bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Commitment
              </h2>
              <blockquote className="leading-8 text-white sm:text-2xl sm:leading-9">
                <p className="mt-6 text-xl text-gray-300">
                  Join us today and become a part of a vibrant and supportive
                  community that is dedicated to pushing the boundaries of
                  what's possible with decentralized technologies. Together, we
                  can create a future that is more open, transparent, and
                  decentralized than ever before.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
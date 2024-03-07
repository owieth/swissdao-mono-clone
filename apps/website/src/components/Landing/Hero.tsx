import Link from 'next/link';
import BackgroundGrid from '../background-grid/background-grid';

interface IHero {
  scrollToComponent: () => void;
}

export default function Hero(props: IHero) {
  const { scrollToComponent } = props;

  return (
    <>
      <BackgroundGrid />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="bg-gradient-radial from-foreground mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next major event.{' '}
              <a
                href="https://lu.ma/r9kxh1s0"
                target="_blank"
                className="text-accent font-semibold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-background text-4xl font-bold tracking-tight sm:text-6xl">
              Accelerate your web3 journey with swissDAO
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our community of builders, entrepreneurs and creatives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="bg-background rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Discover
              </Link>
              <button
                onClick={scrollToComponent}
                className="text-background text-sm font-semibold leading-6"
              >
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

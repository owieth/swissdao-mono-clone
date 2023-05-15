import {
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Learn',
    description:
      'We host workshops in different areas. We invite experts from different Web3 protocols to teach our community in full afternoon sessions the latest tech and trends.',
    href: '#',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Connect',
    description:
      'Connecting at a networking event is chill but with many you just talk and never execute. Come to us, we are a group of do-ers.',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Build',
    description:
      'We build together in weekly sessions on projects we enjoy and like pursueing. We build to learn and learn to build.',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Features() {
  return (
    <div className="w-full bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Achieve faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Setup yourself up for success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Learning and building together is superior to working alone. Find
            your co-founder, new best friends or inspiring mentors.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map(feature => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

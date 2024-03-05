import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [

  {
    name: 'Not having the right templates, tools and strategies',
    description:
      'Each time you create a project you start at square one. You lack oversight what you need to do, to start and conclude a smart contract project successfully.',
    icon: LockClosedIcon,
  },
  {
    name: 'Being unaware of vulnerabilities and fundamentals',
    description:
      'When writing smart contracts you are not aware of pitfalls, your smart contracts could be easily hacked since malicious actors scan the blockchain for vulnerable smart contracts 24/7.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Being isolated',
    description:
      'Without the right peers you will be stuck in tutorial hell and never apply your learnings together in a group.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tutorial Hell',
    description:
      'You are not becoming a Solidity Developer by looking at Youtube Videos. You need to apply what you see. Modify and break it.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Analysis Paralysis',
    description:
      'You are not becoming a Solidity Developer by looking at Youtube Videos. You need to apply what you see. Modify and break it.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Random Tactics',
    description:
      'You are not becoming a Solidity Developer by looking at Youtube Videos. You need to apply what you see. Modify and break it.',
    icon: FingerPrintIcon,
  },
]

export default function Problems() {
  return (
    <div className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Start Building</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            There are 6 show stoppers of <br/> of you becoming a Solidity Developer
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

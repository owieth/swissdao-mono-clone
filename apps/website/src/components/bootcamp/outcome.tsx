const items = [
  {
    id: 1,
    outcome: 'Develop smart contracts with a proper framework and strategy'
  },
  {
    id: 2,
    outcome:
      'Optimise your smart contracts for gas usage and check for vulnerabilities'
  },
  { id: 3, outcome: 'Build your own Web3 Project with our industry partners' }
  // More items...
];
import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'Most up-to-date curriculum',
  'Build solid foundations in smart contract development',
  '1-on-1 Mentorship',
  'Member Resources',
  'Receive Checklist & Cheatsheet',
  'Develop a Portfolio Project'
];

const people = [
  {
    name: 'Solidity',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/solidity.png'
  },
  {
    name: 'Foundry',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/foundry.png'
  },
  {
    name: 'Chainlink',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/chainlink.png'
  },
  {
    name: 'Gelato',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/gelato.png'
  },
  {
    name: 'The Graph',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/thegraph.png'
  },
  {
    name: 'Hardhat',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'images/bootcamp/hardhat.jpg'
  },
  {
    name: 'Javascript',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/bootcamp/javascript.png'
  }
  // More people...
];

export default function Outcome() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col justify-between md:flex-row">
        <div className="flex flex-col">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            In a nutshell
          </h2>
          <h2 className="mb-2 text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:mb-8">
            Become a <br /> Solidity Developer in weeks
          </h2>
          <ul role="list" className="text-sm leading-6 text-gray-600 sm:gap-6">
            {includedFeatures.map(feature => (
              <li key={feature} className="my-2 flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* Unlock productivity and quality <br/> when writing smart contracts in Solidity */}
        <div className="flex flex-col">
          <p className="mt-2 max-w-md text-left leading-8 text-gray-600">
            Learn to build smart contracts, understand technical fundamentals of
            blockchains, obtain the ability to create your own Web3 projects,
            follow more advanced courses and understand Web3 trends.
          </p>
          <p className="mt-8 text-gray-600">
            You will use these technologies and languages
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {people.map(person => (
              <div
                key={person.email}
                className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-around mx-auto max-w-6xl">
                <div>

                    
                </div>
                
                

            </div> */}
      {/* <ul role="list" className="">
                {items.map((item) => (
                <li key={item.id} className="">
                    <p className="text-center mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {item.outcome} ✅
                </p>
                </li>
                ))}
            </ul> */}
    </div>
  );
}

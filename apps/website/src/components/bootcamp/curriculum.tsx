const people = [
  { name: 'Week 1', title: 'Basic Concepts' },
  { name: 'Week 2', title: 'First Project, Tokens, Staking' },
  { name: 'Week 3', title: 'Randomness, Oracles' },
  { name: 'Week 4', title: 'DeFi primitives' },
  { name: 'Week 5', title: 'DeFi primitives' },
  { name: 'Week 6', title: 'Wallets' },
  { name: 'Week 7', title: 'Wallets' },
  { name: 'Week 8', title: 'Testing & Hacking' },
  { name: 'Week 9', title: 'Testing & Hacking' },
  { name: 'Week 10', title: 'Capstone Project' },
  { name: 'Week 11', title: 'Capstone Project' },
  { name: 'Week 12', title: 'Capstone Project' }
  // More people...
];

export default function Curriculum() {
  return (
    <div className="bg-indigo-400 py-16">
      <div className="mx-auto max-w-7xl md:w-3/4">
        <div className="rounded-3xl bg-gray-50 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="pb-2 text-2xl font-semibold leading-6 text-gray-900">
                  Curriculum - Programme of the 12 Weeks Bootcamp
                </h1>
                <p className="mt-2 text-sm text-gray-800">
                  swissDAO’s 12 week curriculum will teach you how Solidity on
                  Ethereum works from the ground up. Our bootcamp is very
                  development heavy & focuses on your portfolio to gain as much
                  experience as possible.
                </p>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Week
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Topic
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {people.map(person => (
                        <tr key={person.name}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                            {person.title}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

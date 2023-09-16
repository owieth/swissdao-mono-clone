// const statuses: { [key: string]: string } = {
//   Completed: 'text-green-400 bg-green-400/10',
//   Error: 'text-rose-400 bg-rose-400/10',
// };

const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-23T11:00'),
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-23T09:00'),
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Error',
    duration: '3-5 hours',
    date: new Date('2023-01-23T00:00'),
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-21T13:00'),
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-18T12:34'),
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-16T15:54'),
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-16T11:31'),
  },
  {
    user: {
      name: 'Whitney Francis',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: 'Trust Square',
    branch: 'Poststrasse 5',
    status: 'Completed',
    duration: '3-5 hours',
    date: new Date('2023-01-09T08:45'),
  },
];

export default function Event() {
  return (
    <div className="w-full bg-white py-10">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-accent">
          Join now
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Our next Events
        </p>
      </div>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-black/10 text-sm leading-6 text-black">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Title
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Location
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Duration
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
            >
              Date of Event
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {activityItems.map(item => (
            <tr key={item.commit}>
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <img
                    src={item.user.imageUrl}
                    alt=""
                    className="h-8 w-8 rounded-full bg-gray-800"
                  />
                  <div className="truncate text-sm font-medium leading-6 text-black">
                    {item.user.name}
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="text-sm leading-6 text-gray-900">
                    {item.commit}
                  </div>
                  <div className="rounded-md bg-gray-300/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-black/10">
                    {item.branch}
                  </div>
                </div>
              </td>
              <td className="text-black-400 hidden py-4 pl-0 pr-8 text-sm leading-6 md:table-cell lg:pr-20">
                {item.duration}
              </td>
              <td className="text-black-400 hidden py-4 pl-0 pr-4 text-right text-sm leading-6 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={item.date.toDateString()}>
                  {item.date.toDateString()}
                </time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

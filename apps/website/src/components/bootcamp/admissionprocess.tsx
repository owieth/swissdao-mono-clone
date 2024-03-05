import {
  CheckIcon,
  DocumentCheckIcon,
  PhoneIcon,
  UserIcon
} from '@heroicons/react/20/solid';

const timeline = [
  {
    id: 1,
    content: 'Submit your application',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400'
  },
  {
    id: 2,
    content: 'Your application is getting reviewed',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: DocumentCheckIcon,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 3,
    content: 'Interview',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: PhoneIcon,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 4,
    content: 'Admission if suitable for the program',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckIcon,
    iconBackground: 'bg-green-500'
  }
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AdmissionProcess() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Admission Process
          </h2>
          <div className="flex justify-center">
            <ul role="list" className="-mb-8 mt-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white'
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

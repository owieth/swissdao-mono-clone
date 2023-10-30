'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';
import { UserNav } from '../dashboard/user-nav';
import Logo from '../ui/logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ user }: { user?: any }) {
  const pathname = usePathname();
  const { address } = useAccount();

  let navigation = [
    { name: 'Members', href: '/members' },
    { name: 'Badges', href: '/badges' },
    { name: 'Guilds', href: '/guilds' },
  ];

  if (address) {
    navigation.push({ name: 'Your Profile', href: `/members/${address}` });
    navigation.push({ name: 'Contributor Quest', href: `/contributor-quest` });
  }

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href={'/'} className="flex flex-shrink-0 items-center">
                  <Logo height={32} width={32} className="text-[#e31d1c]" />
                </Link>
                {navigation.map(item => (
                  <div
                    key={item?.name}
                    className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
                  >
                    <a
                      href={item?.href}
                      className={classNames(
                        pathname === item?.href
                          ? 'border-slate-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                      aria-current={
                        pathname === item?.href ? 'page' : undefined
                      }
                    >
                      {item?.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <UserNav />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item?.name}
                  as="a"
                  href={item?.href}
                  className={classNames(
                    pathname === item?.href
                      ? 'border-slate-500 bg-slate-50 text-slate-700'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                  )}
                  aria-current={pathname === item?.href ? 'page' : undefined}
                >
                  {item?.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {user ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user.image}
                        height={32}
                        width={32}
                        alt={`${user.name} avatar`}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      // onClick={() => signOut()}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="mt-3 space-y-1">
                  <button
                    // onClick={() => signIn('github')}
                    className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

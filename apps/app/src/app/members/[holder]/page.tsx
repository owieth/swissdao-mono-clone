'use client';

import IconCheck from '@/components/icons/check';
import IconGithub from '@/components/icons/github';
import IconUpload from '@/components/icons/upload';
import MembercardPreview from '@/components/membercard/preview';
import Image from 'next/image';

const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

const user = {
  name: 'Steven Jobs',
  username: '@sjobs',
  image: '',
  verified: false,
};

const tabs = [
  { name: 'Profile' },
  { name: 'Work History' },
  { name: 'Contact' },
];

export default function Member({ params }: { params: { holder: string } }) {
  // const { address } = useAccount();
  // const { openConnectModal } = useConnectModal();

  // useEffect(() => {
  //   if (!address) {
  //     openConnectModal?.();
  //   }
  // }, [address, openConnectModal]);

  return (
    <div className="min-h-screen pb-20">
      <div>
        <div
          className={`h-48 w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 lg:h-64`}
        />
        <div
          className={`${profileWidth} -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
        >
          <div className="group relative h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
            <button
              className="absolute z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 transition-all hover:bg-opacity-70"
              onClick={() =>
                alert('Image upload has been disabled for demo purposes.')
              }
            >
              <IconUpload className="h-6 w-6 " />
            </button>

            <Image src={user.image} alt={user.name} width={300} height={300} />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="flex min-w-0 flex-1 items-center space-x-2">
              <h1 className="truncate text-2xl  font-semibold">{user.name}</h1>
              {user.verified && (
                <IconCheck className="h-6 w-6 text-[#0070F3]" />
              )}
            </div>
            {user.verified ? (
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  href={`https://github.com/${user.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-md border border-gray-800 bg-black px-4 py-2 font-mono text-sm font-medium  shadow-sm transition-all hover:border-white focus:outline-none focus:ring-0"
                >
                  <IconGithub className="mr-3 h-5 w-5 " />
                  <span>View GitHub Profile</span>
                </a>
              </div>
            ) : (
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  href="https://github.com/vercel/mongodb-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-md border border-gray-800 bg-black px-4 py-2 font-mono text-sm font-medium text-white  shadow-sm transition-all hover:border-white focus:outline-none focus:ring-0"
                >
                  <IconGithub className="mr-3 h-5 w-5" />
                  <span>Demo Account</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-800">
          <div className={`${profileWidth} mt-10`}>
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map(tab => (
                <button
                  key={tab.name}
                  disabled={tab.name !== 'Profile'}
                  className={`${
                    tab.name === 'Profile'
                      ? 'border-white '
                      : 'cursor-not-allowed border-transparent text-gray-400'
                  }
                    whitespace-nowrap border-b-2 px-1 py-3 font-mono text-sm font-medium`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold ">Bio</h2>
      </div>

      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-mono text-2xl font-semibold">Preview</h2>
        <div className="relative">
          <MembercardPreview holder="" />
        </div>
      </div>
    </div>
  );
}

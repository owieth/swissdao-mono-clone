// 'use client';

// import Listitem from '@/components/listitem/listitem';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { CONTRACT } from '@/contracts/contracts';
// import { BADGE_INITIAL_COUNTER, GUILD_INITIAL_COUNTER } from '@/helpers/const';
// import { TokenType } from '@/types/types';
// import { Text, Title } from '@tremor/react';
// import { useContractRead } from 'wagmi';

// export default function BadgesPage() {
//   const {
//     data: guilds,
//     isError,
//     isLoading,
//   } = useContractRead({ ...CONTRACT, functionName: 'getAllBadges' });

//   const BadgeTriggerItem = ({ badge }: { badge: TokenType }) => (
//     <div className="flex w-full items-center justify-between">
//       <Avatar className="h-8 w-8">
//         <AvatarImage src={''} alt="@shadcn" />
//         <AvatarFallback></AvatarFallback>
//       </Avatar>

//       <span>{badge.name}</span>

//       <span>Holders</span>
//     </div>
//   );

//   return (
//     <main className="mx-auto max-w-7xl p-4 md:p-10">
//       <Title>Guilds</Title>
//       <Text>A list of all swissDAO Guilds</Text>
//       {(guilds as TokenType[])
//         ?.filter(
//           ({ tokenId }) =>
//             tokenId >= GUILD_INITIAL_COUNTER && tokenId < BADGE_INITIAL_COUNTER
//         )
//         .map((badge, i) => (
//           <Listitem key={i} trigger={<BadgeTriggerItem badge={badge} />}>
//             <div>
//               <h2>About this Badge</h2>
//               <span>Lorem Ipsum</span>

//               <h2>About this Badge</h2>
//               <span>Lorem Ipsum</span>
//             </div>
//           </Listitem>
//         ))}
//     </main>
//   );
// }

'use client';

import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { GuildType } from '@/types/types';
import { Text, Title } from '@tremor/react';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import Link from 'next/link';
import { useContext } from 'react';

function CSSstring(string: string) {
  const css_json = `{"${string
    .replace(/; /g, '", "')
    .replace(/: /g, '": "')
    .replace(';', '')}"}`;

  const obj = JSON.parse(css_json);

  const keyValues = Object.keys(obj).map(key => {
    var camelCased = key.replace(/-[a-z]/g, g => g[1].toUpperCase());
    return { [camelCased]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

export default function GuildsPage({ guilds }: { guilds: GuildType[] }) {
  const { membership } = useContext(MembershipContext);

  // const {
  //   data: guilds,
  //   isError,
  //   isLoading
  // } = useContractRead({ ...CONTRACT, functionName: 'getAllBadges' });

  // const contracts = (guilds as GuildType[])
  //   ?.flatMap(guild => guild.holders)
  //   .filter(member => member !== '0x0000000000000000000000000000000000000000')
  //   .map(member => {
  //     return {
  //       ...CONTRACT,
  //       functionName: 'getMember',
  //       args: [member]
  //     };
  //   }) as any;

  // const { data: result } = useContractReads({ contracts });

  // const members = result?.flatMap(
  //   ({ result }) => (result as MemberType).membership
  // );

  const onJoinGuild = async (guildId: number) => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'joinGuild',
      args: [membership?.tokenID, guildId]
    });

    const { hash } = await writeContract(config);
  };

  console.log(guilds);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Guilds</Title>
      <Text>All swissDAO Guilds</Text>

      <div className="mt-10 grid w-full grid-cols-1 gap-8 px-10 sm:grid-cols-2 md:px-20 lg:mt-20 xl:grid-cols-3">
        {guilds.map((guild, i) => (
          <Link href={`/guilds/${guild.id}`} key={i}>
            <div className="ease rounded-2xl border-2 border-gray-100 bg-white shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden rounded-t-2xl">
                <span
                  style={CSSstring(
                    'box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;'
                  )}
                >
                  <span
                    style={CSSstring(
                      'box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 80% 0px 0px;'
                    )}
                  ></span>
                  <img
                    alt="Developer DAO"
                    sizes="100vw"
                    src="https://daocentral.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&w=1920&q=75"
                    decoding="async"
                    data-nimg="responsive"
                    className="scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                    style={CSSstring(
                      'position: absolute; inset: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;'
                    )}
                  />
                </span>
              </div>

              <div className="h-36 px-5 py-6">
                <h3 className="font-cal my-0 truncate text-2xl font-bold tracking-wide">
                  {guild.name}
                </h3>
                {/* <p className="mt-3 line-clamp-2 text-base font-normal italic leading-snug text-gray-800">
                    Build web3 with frens 🤝
                  </p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* </Card> */}
    </main>
  );
}

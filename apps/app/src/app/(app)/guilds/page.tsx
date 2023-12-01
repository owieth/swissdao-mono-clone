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

import { GuildsTable } from '@/components/tables/guilds-table';
import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { BADGE_INITIAL_COUNTER, GUILD_INITIAL_COUNTER } from '@/helpers/const';
import { GuildType, MemberType, MembershipType } from '@/types/types';
import { Card, Text, Title } from '@tremor/react';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import { useContext } from 'react';
import { useContractRead, useContractReads } from 'wagmi';

export default function BadgesPage() {
  const { membership } = useContext(MembershipContext);

  const {
    data: guilds,
    isError,
    isLoading
  } = useContractRead({ ...CONTRACT, functionName: 'getAllBadges' });

  const contracts = (guilds as GuildType[])
    ?.flatMap(guild => guild.holders)
    .map(member => {
      return {
        ...CONTRACT,
        functionName: 'getMember',
        args: [member]
      };
    }) as any;

  const { data: result } = useContractReads({ contracts });

  const members = result?.flatMap(
    ({ result }) => (result as MemberType).membership
  );

  const onJoinGuild = async (guildId: number) => {
    const config = await prepareWriteContract({
      ...CONTRACT,
      functionName: 'joinGuild',
      args: [membership?.membership.tokenId, guildId]
    });

    const { hash } = await writeContract(config);
  };

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Users</Title>
      <Text>A list of all registered Members</Text>
      <Card className="mt-6">
        <GuildsTable
          guilds={(guilds as GuildType[])
            ?.filter(
              ({ badge }) =>
                badge.tokenId >= GUILD_INITIAL_COUNTER &&
                badge.tokenId < BADGE_INITIAL_COUNTER
            )
            .map(guild => {
              return {
                ...guild,
                members:
                  members?.filter(member =>
                    guild.holders.includes(member.holder)
                  ) || []
              };
            })}
          onJoinGuild={onJoinGuild}
        />
      </Card>
    </main>
  );
}

import { fetchSubgraph } from '@/api/subgraph';
import { MembershipType } from '@/types/types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { tokenId } }: { params: { tokenId: string } }
) {
  const { membership } = (await fetchSubgraph(`
    query {
      membership(id:${tokenId}) {
        id
        tokenID
        profileImageUri
        nickname
        holder
        joinedAt
        experiencePoints {
          balances {
            holder
            balance
          }
        }
        activityPoints {
          balances {
            holder
            balance
          }
        }
        attendedEvents {
          balances {
            holder
            balance
          }
        }
        guilds {
          id
          name
          imageUri
        }
      }
    }
  `)) as { membership: MembershipType };

  const experiencePoints =
    membership.experiencePoints.balances.find(
      ({ holder }) => holder === membership.holder
    )?.balance || 0;

  const activityPoints =
    membership.activityPoints.balances.find(
      ({ holder }) => holder === membership.holder
    )?.balance || 0;

  const attendedEvents =
    membership.attendedEvents.balances.find(
      ({ holder }) => holder === membership.holder
    )?.balance || 0;

  return NextResponse.json({
    name: `Membership #${tokenId} of ${membership.nickname}`,
    description: `Membership of ${membership.nickname} (${membership.holder})`,
    image: `https://app.swissdao.space/api/preview/${tokenId}`,
    animation_url: `https://app.swissdao.space/preview/${tokenId}`,
    attributes: [
      {
        trait_type: 'Holder',
        value: membership.holder
      },
      { trait_type: 'Joined', value: Number(membership.joinedAt) },
      { trait_type: 'Experience Points', value: Number(experiencePoints) },
      { trait_type: 'Activity Points', value: Number(activityPoints) },
      { trait_type: 'Attended Events', value: Number(attendedEvents) }
    ]
  });
}

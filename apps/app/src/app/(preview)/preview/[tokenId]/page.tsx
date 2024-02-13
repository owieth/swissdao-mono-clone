import { fetchSubgraph } from '@/api/subgraph';
import MembercardPreview from '@/components/membercard/preview';
import { MembershipType } from '@/types/types';

export default async function PreviewPage({
  params: { tokenId }
}: {
  params: { tokenId: number };
}) {
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

  return <MembercardPreview membership={membership} />;
}

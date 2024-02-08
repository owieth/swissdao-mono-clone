import { Metadata } from 'next';
import MembersPage from './members-page';
import { fetchSubgraph } from '@/api/subgraph';

export const metadata: Metadata = {
  title: 'Members'
};

async function getData() {
  const members = await fetchSubgraph(`
    query {
      memberships {
        id
        tokenID
        profileImageUri
        nickname
        holder
        joinedAt
        experiencePoints {
          imageUri
          totalAmount
        }
        activityPoints {
          imageUri
          totalAmount
        }
        attendedEvents {
          imageUri
          totalAmount
        }
        guilds {
          id
          name
          imageUri
        }
      }
    }
  `);

  return members;
}

export default async function Page() {
  const { memberships } = await getData();

  return <MembersPage members={memberships} />;
}

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
        joined_At
        minted_At
        experiencePoints
        activityPoints
        attendedEvents
        guilds {
          id
        }
      }
    }
  `);

  return members;
}

export default async function Page() {
  const members = await getData();

  return <MembersPage members={members} />;
}

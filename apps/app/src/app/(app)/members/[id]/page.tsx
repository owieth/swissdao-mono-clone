import { fetchSubgraph } from '@/api/subgraph';
import { Metadata } from 'next';
import MemberPage from './holder-page';

export const metadata: Metadata = {
  title: 'Member'
};

async function getData(id: string) {
  const members = await fetchSubgraph(`
    query {
      membership(id:${id}) {
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
          name
          imageUri
        }
      }
    }
  `);

  return members;
}

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  const { membership } = await getData(id);

  return <MemberPage membership={membership} />;
}

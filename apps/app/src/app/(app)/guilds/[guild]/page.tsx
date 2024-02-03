import { fetchSubgraph } from '@/api/subgraph';
import { Metadata } from 'next';
import GuildPage from './guild-page';

export const metadata: Metadata = {
  title: 'Member'
};

async function getData(id: string) {
  const members = await fetchSubgraph(`
    query {
      guild(id:${id}) {
        id
        name
        imageUri
        holder {
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
  const { guild } = await getData(id);

  return <GuildPage guild={guild} />;
}

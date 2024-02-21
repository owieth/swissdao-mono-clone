import { fetchSubgraph } from '@/api/subgraph';
import { Metadata } from 'next';
import GuildPage from './guild-page';

export const metadata: Metadata = {
  title: 'Guild'
};

async function getData(id: string) {
  const guild = await fetchSubgraph(`
    query {
      guild(id:${id}) {
        id
        name
        imageUri
        holders {
          id
          tokenID
          profileImageUri
          nickname
          holder
          joinedAt
          experiencePoints {
            totalAmount
          }
          activityPoints {
            totalAmount
          }
          attendedEvents {
            totalAmount
          }
        }
      }
    }
  `);

  return guild;
}

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  const { guild } = await getData(id);

  return <GuildPage guild={guild} />;
}

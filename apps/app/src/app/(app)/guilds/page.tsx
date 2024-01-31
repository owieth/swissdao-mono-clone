import { fetchSubgraph } from '@/api/subgraph';
import { Metadata } from 'next';
import GuildsPage from './guilds-page';

export const metadata: Metadata = {
  title: 'Guilds'
};

async function getData() {
  const guilds = await fetchSubgraph(`
    query {
      guilds {
        id
        name
        description
        imageUri
        holders {
          id
          tokenID
          nickname
          profileImageUri
        }
      }
    }
  `);

  return guilds;
}

export default async function Page() {
  const { guilds } = await getData();

  return <GuildsPage guilds={guilds} />;
}

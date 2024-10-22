import { fetchSubgraph } from '@/api/subgraph';
import { Metadata } from 'next';
import MemberPage from './holder-page';

export const metadata: Metadata = {
  title: 'Member'
};

async function getData(id: string) {
  const {
    membership: { holder }
  } = await fetchSubgraph(`
    query {
      membership(id:${id}) {
        holder
      }
    }
  `);

  const member = await fetchSubgraph(`
    query {
      membership(id:${id}) {
        id
        tokenID
        profileImageUri
        nickname
        holder
        joinedAt
        experiencePoints {
          balances(where: { holder:"${holder}"}) {
            balance
          }
        }
        activityPoints {
          totalAmount
          balances(where: { holder:"${holder}"}) {
            balance
          }
        }
        attendedEvents {
          balances(where: { holder:"${holder}"}) {
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
  `);

  return member;
}

export default async function Page({
  params: { id }
}: {
  params: { id: string };
}) {
  const { membership } = await getData(id);

  return <MemberPage membership={membership} />;
}

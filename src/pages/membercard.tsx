import { useRouter } from 'next/router';
import { type ReactElement } from 'react';
import MembercardBack from '~/components/membercard/back';
import MembercardFront from '~/components/membercard/front';
import RawLayout from '~/layouts/rawLayout';

export default function Membercard() {
  const router = useRouter();
  const { id } = router.query;

  const styles = {};

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.front}>
          <MembercardFront holder={String(id)} />
        </div>
        <div className={styles.back}>
          <MembercardBack holder={''} />
        </div>
      </div>
    </div>
  );
}

Membercard.getLayout = function getLayout(page: ReactElement) {
  return <RawLayout>{page}</RawLayout>;
};

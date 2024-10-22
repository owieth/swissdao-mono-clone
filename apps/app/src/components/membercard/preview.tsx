import MembercardBack from '@/components/membercard/back';
import MembercardFront from '@/components/membercard/front';
import { MembershipType } from '@/types/types';

const MembercardPreview = ({ membership }: { membership: MembershipType }) => {
  const styles = {
    card: [
      'absolute',
      'group',
      'inset-x-1/2',
      'inset-y-1/2',
      'transform',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'w-[350px]',
      'h-[220px]',
      '[perspective:1000px]',
      'bg-transparent'
    ].join(' '),
    cardInner: [
      'group-hover:[transform:rotateY(180deg)]',
      'relative',
      'w-full',
      'h-full',
      'transition-all',
      'duration-500',
      '[transform-style:preserve-3d]'
    ].join(' '),
    front: [
      'absolute',
      'w-full',
      'h-full',
      'rounded-xl',
      '[-webkit-backface-visibility:hidden]',
      '[backface-visibility:hidden]'
    ].join(' '),
    back: ['[transform:rotateY(180deg)]'].join(' ')
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.front}>
          <MembercardFront membership={membership} />
        </div>
        <div className={`${styles.front} ${styles.back}`}>
          <MembercardBack membership={membership} />
        </div>
      </div>
    </div>
  );
};

export default MembercardPreview;

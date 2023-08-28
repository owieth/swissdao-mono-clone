import { classNames } from '@/helpers/tailwind';
import Link from 'next/link';

type Props = {
  variant?: 'default' | 'inverted';
  href?: string;
  target?: string;
  children: React.ReactNode;
};

const Button = ({ variant = 'default', href, target, children }: Props) => {
  const className = classNames(
    'flex items-center justify-center transition-all px-4 py-2 rounded-md hover:bg-grey-700 focus:outline-none',
    variant === 'default'
      ? 'bg-black text-white'
      : 'border border-black text-black'
  );

  return href ? (
    <Link href={href} target={target || '_self'}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};

export default Button;

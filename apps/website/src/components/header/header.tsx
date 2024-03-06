'use client';

import { clamp } from '@/helpers/calculate';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useRef, type ReactNode } from 'react';
import { Container } from '../container/container';
import Logo from '../logo/logo';

const navigation = [
  { name: 'Home', href: '/' },
  // TODO
  // { name: 'Bootcamp', href: '/bootcamp' },
  { name: 'About', href: '/about' },
  {
    name: 'Events',
    href: 'https://lu.ma/u/swissdao',
    target: '_blank'
  },
  {
    name: 'Courses',
    href: 'https://swissdao.notion.site/Courses-30f51f7b26814cf8804b1471afa34465',
    target: '_blank'
  },
  {
    name: 'For Protocols',
    href: 'https://swissdao.notion.site/Share-your-Web3-Tech-in-the-Swiss-Community-with-a-half-day-Workshop-7ce6340408fd4c70bc436ed7aece37c0',
    target: '_blank'
  }
  // { name: 'Blog', href: '/#' },
  // { name: 'Podcast', href: '#' },
];

type Props = {
  className?: string;
};

function CloseIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props: Props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="z-10 block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props: Props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                {navigation.map((item, i) => (
                  <MobileNavItem key={i} href={item.href}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({
  href,
  target,
  children
}: {
  href: string;
  target: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        target={target}
        className={`relative block px-3 py-2 transition 
        ${isActive ? 'text-accent' : 'hover:text-accent'}`}
      >
        {children}
        {isActive && (
          <span className="from-accent/0 via-accent/40 to-accent/0 absolute inset-x-1 -bottom-px h-px bg-gradient-to-r" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: Props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        {navigation.slice(1).map((item, i) => (
          <NavItem key={i} href={item.href} target={item.target || '_self'}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const headerRef = useRef<HTMLDivElement>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = 0;
    const upDelay = 64;

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      const { top, height } = headerRef.current?.getBoundingClientRect() ?? {
        top: 0,
        height: 0
      };
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty('--header-position', 'sticky');
      }

      setProperty('--content-offset', `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`);
        setProperty('--header-mb', `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty('--header-height', `${offset}px`);
        setProperty('--header-mb', `${height - offset}px`);
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`);
        setProperty('--header-mb', `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed');
        removeProperty('--header-top');
        removeProperty('--avatar-top');
      } else {
        removeProperty('--header-inner-position');
        setProperty('--header-top', '0px');
        setProperty('--avatar-top', '0px');
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + x) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty('--avatar-border-transform', borderTransform);
      setProperty('--avatar-border-opacity', String(scale === toScale ? 1 : 0));
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header className="relative z-10 flex h-24 flex-col">
        <Link
          href="/"
          className="absolute left-6 top-0 z-20 flex h-24 flex-1 items-center justify-center"
        >
          <Logo className={''} width={128} height={128} />
        </Link>

        <div
          ref={headerRef}
          className="absolute left-2/4 top-0 z-10 flex h-24 flex-1 items-center justify-end p-6 lg:justify-center"
          style={{ position: 'var(--header-position)' } as never}
        >
          <Container className="">
            <div className="relative flex gap-4">
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  );
}

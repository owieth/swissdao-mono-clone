import { type JSX, type SVGProps } from 'react';

const footerNavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '#' },
    { name: 'Blog', href: '/#' }
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/swissDAOspace',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+8kAfO-simRkxY2Jh',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12.0166C24 18.644 18.6274 24.0166 12 24.0166C5.37258 24.0166 0 18.644 0 12.0166C0 5.38918 5.37258 0.0166016 12 0.0166016C18.6274 0.0166016 24 5.38918 24 12.0166ZM12.43 8.87553C11.2628 9.361 8.93014 10.3658 5.43189 11.8899C4.86383 12.1158 4.56626 12.3368 4.53917 12.5529C4.49339 12.9181 4.95071 13.0619 5.57347 13.2577C5.65818 13.2844 5.74595 13.312 5.83594 13.3412C6.44864 13.5404 7.27283 13.7734 7.70129 13.7826C8.08994 13.791 8.52373 13.6308 9.00264 13.3019C12.2712 11.0956 13.9584 9.98041 14.0643 9.95637C14.139 9.93941 14.2426 9.91808 14.3128 9.98045C14.3829 10.0428 14.376 10.1609 14.3686 10.1926C14.3233 10.3857 12.5281 12.0547 11.5991 12.9184C11.3095 13.1876 11.1041 13.3786 11.0621 13.4222C10.968 13.5199 10.8721 13.6124 10.78 13.7012C10.2108 14.2499 9.78391 14.6614 10.8036 15.3334C11.2936 15.6563 11.6858 15.9233 12.077 16.1897C12.5042 16.4807 12.9303 16.7709 13.4816 17.1323C13.6221 17.2243 13.7562 17.32 13.8869 17.4131C14.3841 17.7676 14.8307 18.086 15.3826 18.0352C15.7032 18.0057 16.0345 17.7042 16.2027 16.805C16.6002 14.6797 17.3816 10.0751 17.5622 8.17758C17.578 8.01133 17.5581 7.79857 17.5422 7.70518C17.5262 7.61178 17.4928 7.47871 17.3714 7.3802C17.2276 7.26354 17.0056 7.23894 16.9064 7.24069C16.455 7.24864 15.7626 7.48942 12.43 8.87553Z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/swissDAO',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/swissdaospace/',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M22.2234 0.0166016H1.77187C0.792187 0.0166016 0 0.790039 0 1.74629V22.2822C0 23.2385 0.792187 24.0166 1.77187 24.0166H22.2234C23.2031 24.0166 24 23.2385 24 22.2869V1.74629C24 0.790039 23.2031 0.0166016 22.2234 0.0166016ZM7.12031 20.4682H3.55781V9.01191H7.12031V20.4682ZM5.33906 7.45098C4.19531 7.45098 3.27188 6.52754 3.27188 5.38848C3.27188 4.24941 4.19531 3.32598 5.33906 3.32598C6.47813 3.32598 7.40156 4.24941 7.40156 5.38848C7.40156 6.52285 6.47813 7.45098 5.33906 7.45098ZM20.4516 20.4682H16.8937V14.8994C16.8937 13.5729 16.8703 11.8619 15.0422 11.8619C13.1906 11.8619 12.9094 13.3104 12.9094 14.8057V20.4682H9.35625V9.01191H12.7687V10.5775H12.8156C13.2891 9.67754 14.4516 8.72598 16.1813 8.72598C19.7859 8.72598 20.4516 11.0979 20.4516 14.1822V20.4682Z"
            fill="currentColor"
          />
        </svg>
      )
    }
  ]
};

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-7xl overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
      <nav
        className="-mb-6 flex columns-2 justify-evenly sm:space-x-12 md:justify-center"
        aria-label="Footer"
      >
        {footerNavigation.main.map(item => (
          <div key={item.name} className="pb-6">
            <a
              href={item.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {footerNavigation.social.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; {new Date().getFullYear()} swissDAO All rights reserved.
      </p>
    </footer>
  );
}

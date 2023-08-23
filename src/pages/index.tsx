import { type NextPage } from 'next';
import { useRef } from 'react';

import Committment from '~/components/Landing/Commitment';
import Features from '~/components/Landing/Feature';
import Hero from '~/components/Landing/Hero';
import Mission from '~/components/Landing/Mission';
import Subscribe from '~/components/Landing/Subscribe';

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  const targetRef = useRef<HTMLDivElement>(null); // Specify the correct type for the ref

  const scrollToComponent = () => {
    console.log();
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Hero scrollToComponent={scrollToComponent}></Hero>
      <Mission ref={targetRef}></Mission>
      <Features></Features>
      {/* <Event></Event> */}
      <Committment></Committment>
      {/* <Testimonials></Testimonials> */}
      {/* <Partners></Partners> */}
      <Subscribe></Subscribe>
      {/* <LearnSection></LearnSection>
          <ConnectSection></ConnectSection>
          <BuildSection></BuildSection> */}
    </div>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// };

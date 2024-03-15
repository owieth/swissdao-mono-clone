import BackgroundGrid from '@/components/background-grid/background-grid';
import AdmissionProcess from '@/components/bootcamp/admissionprocess';
import Advantage from '@/components/bootcamp/advantage';
import { BootcampHero } from '@/components/bootcamp/bootcamphero';
import { BootcampHero2 } from '@/components/bootcamp/bootcamphero_2';
import BootcampStats from '@/components/bootcamp/bootcampstats';
import Cohorts from '@/components/bootcamp/cohorts';
import Curriculum from '@/components/bootcamp/curriculum';
import Curriculum2 from '@/components/bootcamp/curriculum2';
import FAQ from '@/components/bootcamp/faq';
import HowitWorks from '@/components/bootcamp/howitworks';
import Logocloud from '@/components/bootcamp/logocloud';
import Outcome from '@/components/bootcamp/outcome';
import Problems from '@/components/bootcamp/problems';
import Target from '@/components/bootcamp/target';

export default function Bootcamp() {
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logos = [
    '/images/bootcamp/solana.svg',
    '/images/bootcamp/thegraph.svg',
    '/images/bootcamp/superteam.svg',
    '/images/bootcamp/gelato.svg'
  ];

  return (
    <div className="bg-white">
      <main className="isolate">
        <BootcampHero />
        {/* where is the live session */}
        <Logocloud
          text="swissDAO is a well connected builder community giving you the best exposure to the industry."
          logos={logos}
        />
        <Outcome />
        <HowitWorks />

        <Target />
        <Curriculum2 />
        <Problems />
        <Curriculum />
        <Advantage />
        <Cohorts />
        {/* more visible when the bootcamp takes place */}
        {/* more visible about the course certification */}
        <AdmissionProcess />
        {/* add a face to who to talk to */}
        <FAQ />
      </main>
    </div>
  );
}

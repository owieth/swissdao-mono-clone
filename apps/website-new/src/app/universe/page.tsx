import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import education from '@/images/education.jpg'
import buildspace from '@/images/buildspace.jpg'
import daotraining from '@/images/dao-training.jpg'
import community from '@/images/community.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Education() {
  return (
    <Section title="Education" image={{ src: education }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We educate dropouts, graduates and professionals on Web3 and
          Blockchain topics. The blockchain and web3 space is irrespective of
          the infancy wide and deeply complex. If a simple youtube video, a
          coding tutorial or your master thesis made you curious to learn more,{' '}
          <strong className="font-semibold text-neutral-950">
            you are at the right spot.
          </strong>
        </p>
        <p>
          Our 20+ contributors have wide backgrounds and are keen to pass their
          knowledge to curious open minds that join the community. But even
          still, our contributors enjoy spending time together, to always stay
          ahead of the latest trends.
        </p>
        <p>
          Are you curious to learn more about Web3, join one of our courses, our
          bootcamp or come by at our next meetup.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        This pillar focuses on
      </h3>
      <TagList className="mt-4">
        <TagListItem>Workshops</TagListItem>
        <TagListItem>Tutorials</TagListItem>
        <TagListItem>Bootcamps</TagListItem>
        <TagListItem>Courses</TagListItem>
      </TagList>
    </Section>
  )
}

function Buildspace() {
  return (
    <Section title="Buildpace" image={{ src: buildspace, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We want to give our community members, contributors and web3
          enthusiasts the opportunity to leverage our network in the blockchain
          industry and the DAO collective intelligence to launch ventures.
        </p>
        <p>
          Raiding together hackathons, collaborating in explorative tinkering
          sessions supported by the DAO and venture building assistance are
          planned for this.
        </p>
        <p>
          This pillar is currently being developped. Contact us if you are
          interested to collaborate on this mission.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        This pillar focuses on
      </h3>
      <TagList className="mt-4">
        <TagListItem>Venture Building</TagListItem>
        <TagListItem>Startups</TagListItem>
        <TagListItem>Funding</TagListItem>
        <TagListItem>Cutting Edge Tech</TagListItem>
        <TagListItem>Hackathon Raiding</TagListItem>
        <TagListItem>Tinkering</TagListItem>
      </TagList>
    </Section>
  )
}

function DAOTraining() {
  return (
    <Section title="DAO Training" image={{ src: daotraining, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We believe that DAOs as internet native organisations, with multifacet
          variety of governance types are going to disrupt organisation
          politics, structure, tech and philosophy.
        </p>
        <p>
          Sourcing liquidity has never been easier, faster and more global than
          with DAOs. Smart Contract and blockchain technology allow to have
          trustless accountability across borders.
        </p>
        <p>
          We are truly passionate about DAOs and believe they could allow us to
          build truly meritocratic organisastions. We strive to be a
          meritocratic organisation and thus we decided to form a DAO.
        </p>
        <p>
          To adopt DAOs and make them work, we need more experiments and people
          being practically educated to contribute and work inside of a DAO.
          This is why we decided to launch a DAO training program.
        </p>
        <p>
          Our vision is to be the main practical educator in Switzerland, that
          teaches trainees in participating in governance structures, assessing
          blockchain aspects of the DAO and to further innovate DAOs in the next
          decade.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        This pillar focuses on
      </h3>
      <TagList className="mt-4">
        <TagListItem>DAOs</TagListItem>
        <TagListItem>Governance</TagListItem>
        <TagListItem>On-Chain Liquidity Provisioning</TagListItem>
        <TagListItem>DAO Operations</TagListItem>
        <TagListItem>Self Managing Teams</TagListItem>
      </TagList>
    </Section>
  )
}

function Community() {
  return (
    <Section title="Community" image={{ src: community, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          DAOs stand for community owned assets, community powered venture
          building and community governed decisions.
        </p>
        <p>
          We put in a lot of effort to meet in person on a regular basis, to
          strengthen the community bond.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        This pillar focuses on
      </h3>
      <TagList className="mt-4">
        <TagListItem>Events</TagListItem>
        <TagListItem>Networking</TagListItem>
        <TagListItem>Community Building</TagListItem>
        <TagListItem>Creativity</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="growing a thriving ecosystem of builders in Switzerland"
      >
        <p>Talk to us if you share our vision.</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Innovation">
            We are committed to driving innovation and pushing the boundaries of
            what is possible with decentralized technologies.
          </GridListItem>
          <GridListItem title="Community">
            We believe that a strong sense of community is essential to building
            a thriving web3 ecosystem, and work to foster connections and
            relationships among our members.
          </GridListItem>
          <GridListItem title="Collaboration">
            We foster a collaborative environment where diverse perspectives and
            ideas can come together to create something truly remarkable.
          </GridListItem>
          <GridListItem title="Continuous Learning">
            We are committed to continuous learning and self-improvement, and
            believe that curiosity and a willingness to learn are essential to
            success in the fast-changing world of web3.
          </GridListItem>
          <GridListItem title="Empowerment">
            We empower builders, entrepreneurs, and creatives to harness the
            full potential of decentralized technologies and build a more
            equitable and sustainable future for all.
          </GridListItem>
          <GridListItem title="Transparency">
            We believe in transparency and openness, and are committed to
            creating a trustworthy and reliable platform for our community to
            engage with.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Universe',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Universe() {
  return (
    <>
      <PageIntro eyebrow="Our Universe" title="What we do">
        <p>
          We aim to be the entry portal for new web3 techies and the go-to
          community for Web3 venture builders in Switzerland. The goal is to
          onboard, educate and connect new enthusiast to help them thrive.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Education />
        <Buildspace />
        <DAOTraining />
        <Community />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}

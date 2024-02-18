import * as React from "react"
import type { NextPage } from "next"
import Image from "next/image"
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react"
import { SEO } from "components/seo/seo"

import { FallInPlace } from "components/motion/fall-in-place"
import { Hero } from "components/hero"
import { Link, Br } from "@saas-ui/react"
import { Em } from "components/typography"
import { NextjsLogo, ChakraLogo } from "components/logos"
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiDatabase,
  FiFile,
  FiSearch,
  FiSliders,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
} from "react-icons/fi"
import { Features } from "components/features"
import { BackgroundGradient } from "components/gradients/background-gradient"
import { Faq } from "components/faq"
import { Pricing } from "components/pricing/pricing"

import { ButtonLink } from "components/button-link/button-link"
import { Testimonial, Testimonials } from "components/testimonials"

import faq from "data/faq"
import testimonials from "data/testimonials"
import pricing from "data/pricing"

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights"

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Self-Hosted, Open-Source Click Tracker | tracc.click"
        description="Self-hosted, open-source click tracking software."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="10">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Open-Source,
                <Br />
                Self-Hosted
                <Br />
                Click Tracker
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Take back control of your <Em>Traffic & Analytics</Em><Br />
                with a fully cutomizable & versatile tracking solution.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="4" spacing="12" />
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/get-started">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/demo"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/hero-3.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/* <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accessible",
            icon: FiSmile,
            description: "All components strictly follow WAI-ARIA standards.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Themable",
            icon: FiSliders,
            description:
              "Fully customize all components to your brand with theme support and style props.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Composable",
            icon: FiGrid,
            description:
              "Compose components to fit your needs and mix them together to create new ones.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Productive",
            icon: FiThumbsUp,
            description:
              "Designed to reduce boilerplate and fully typed, build your product at speed.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      /> */}
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react")

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Analytics for every possible outcome"
      >
        <Text color="muted" fontSize="lg">
          Track the most relevant information on your campaigns, making it easier for you to optimize.
        </Text>
        <Wrap mt="8">
          {[
            "Affiliate Networks",
            "Campaigns",
            "Flows",
            "Landing Pages",
            "Offers",
            "Traffic Sources",
            "Countries",
            "Cities",
            "Regions",
            "Languages",
            "ISP",
            "Mobile Cariers",
            "Connection Types",
            "Device Types",
            "Device Models",
            "Screen Resolutions",
            "OS",
            "OS Versions",
            "Browsers",
            "Browser Versions"
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations" bg="linear-gradient(to right, #8952e0, #301C56)" color="rgb(220, 220, 220)">
        <Text color="rgb(220, 220, 220)" fontSize="lg">
          We don&apos;t like to re-invent the wheel, and neither should you. Our platform
          combines industry-standard features & functionality with a simple UI for
          maximum benefit.
        </Text>
      </HighlightsItem>
      <HighlightsItem title="Save time and money" bg="linear-gradient(to right, #301C56, #8952e0)" color="rgb(220, 220, 220)">
        <Text color="rgb(220, 220, 220)" fontSize="lg">
          Tracking your traffic is essential in any internet-based business.
          Knowing where your leads and sales come from are things that every business owner should know and optimize for.
        </Text>
      </HighlightsItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Limitless scale potential">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with unlimited campaigns, traffic sources, landing pages, offers, flows, and affiliate networks.
          </Text>
        </VStack>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> click tracker.
        </Heading>
      }
      description={
        <>
          Everything you need to build highly profitable campaigns.
          <Br />
          Whether you&apos;re a seasoned marketer, or just learing the ropes as a beginner...
          <Br />
          <Br />
          <Box fontSize="24px">
            This is the tool that will <span style={{ textDecoration: "underline", fontWeight: "bold" }}>skyrocket</span> your success.
          </Box>
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Organization.",
          icon: FiBox,
          description: "Track everything in one place. Decide exactly how and where your data is stored.",
          variant: "inline",
        },
        {
          title: "Reports.",
          icon: FiFile,
          description: "More than 20+ report metrics and advanced data options available.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "Extensively documented, including video walkthroughs, best practices, use-cases and examples.",
          variant: "inline",
        },
        {
          title: "Paths & Rules.",
          icon: FiSliders,
          description: "Set up paths and rules to distribute your traffic when certain contidions are met.",
          variant: "inline",
        },
        {
          title: "Unlimted Everything.",
          icon: FiDatabase,
          description: "There are no limits on the amount of campaigns, affiliate networks, flows, landing pages, traffic sources and offers you can create.",
          variant: "inline",
        },
        {
          title: "Fast Redirects.",
          icon: FiTrendingUp,
          description: "Designed from the ground up for speed, you will experience lightning fast redirects.",
          variant: "inline",
        },
        {
          title: "First Class UI.",
          icon: FiToggleLeft,
          description:
            "Includes multiple themes with customizable settings, darkmode/lightmode, etc.",
          variant: "inline",
        },
        {
          title: "Fully Self Hosted.",
          icon: FiTerminal,
          description: "Forget about hidden costs and server monitoring. You are in charge of your own instance.",
          variant: "inline",
        },
        {
          title: "Fully Open Source.",
          icon: FiCode,
          description: "All code is open-source, and freely available to view/modify. ",
          variant: "inline",
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []]
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing} />
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      // announcement: {
      //   title: "AD TITLE",
      //   href: "/",
      // }
    }
  }
}

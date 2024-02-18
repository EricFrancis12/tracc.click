import { Button } from "@chakra-ui/react"
import { Link } from "@saas-ui/react"
import { NextSeoProps } from "next-seo"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import { Logo } from "./logo"

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Self-Hosted, Open-Source Click Tracker | tracc.click",
    description: "Self-hosted, open-source click tracking software.",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Get Started",
        href: "/get-started",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: "",
    links: [
      {
        href: "mailto:contact@tracc.click",
        label: "Contact"
      },
      {
        href: "https://twitter.com",
        label: <FaTwitter size="14" />
      },
      {
        href: "https://github.com",
        label: <FaGithub size="14" />
      }
    ]
  },
  signup: {
    title: "",
    features: [
      {
        icon: FiCheck,
        title: "Title",
        description: "Description"
      }
    ]
  }
}

export default siteConfig

import { HStack, Text } from "@chakra-ui/react"

export default {
  title: "Pricing",
  description:
    "",
  plans: [
    {
      id: "Advanced",
      title: "Advanced",
      description: "Upgraded features, enhanced functionality, and priority support",
      price: "Coming Soon",
      features: [
        // {
        //   title: "Benefit 1",
        // }
      ],
      action: {
        href: "#"
      },
    },
    {
      id: "Self-Hosted",
      title: "Self-Hosted",
      description: "The complete self-hosted tracking solution for large & small teams.",
      price: "Free",
      isRecommended: true,
      features: [
        // {
        //   title: "Benefit 1"
        // }
      ],
      action: {
        href: "/get-started",
        label: "Get Started"
      },
    },
    {
      id: "Custom",
      title: "Custom",
      description: "Contact us for a custom solution for you business.",
      price: "",
      features: [],
      action: {
        href: "mailto:contact@tracc.click",
        label: "Contact Us"
      },
    },
  ],
}

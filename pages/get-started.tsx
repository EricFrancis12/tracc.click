import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { SEO } from "components/seo";
import { BackgroundGradient } from "components/gradients/background-gradient";

export default function GetStarted() {
    return (
        <Box>
            <SEO
                title="Get Started"
                description="Get started and set up in minutes."
            />
            <Box>
                <Box position="relative" overflow="hidden">
                    <BackgroundGradient height="100%" />
                    <Container
                        display="flex"
                        flexDir="column"
                        justifyContent="start"
                        alignItems="center"
                        maxW="container.xl"
                        pt={{ base: 40 }}
                        pb="40"
                    >
                        <Heading mb="20px" fontSize="40px" textAlign="center">
                            Coming Soon
                        </Heading>
                        <Link
                            href="https://github.com/EricFrancis12/click-tracker"
                            target="_blank"
                            style={{
                                textDecoration: "underline",
                                marginBottom: "20px"
                            }}
                        >
                            <Center>
                                View source code
                                <FaExternalLinkSquareAlt style={{ marginLeft: "6px" }} />
                            </Center>
                        </Link>
                    </Container>
                </Box>
            </Box>
        </Box >
    )
}

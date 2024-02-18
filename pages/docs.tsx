import { Box, Container, Heading } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { SEO } from "components/seo";

export default function Docs() {
    return (
        <Box>
            <SEO
                title="Get Started"
                description="Get started and set up in minutes."
            />
            <Box>
                <Box position="relative" overflow="hidden">
                    <BackgroundGradient height="100%" />
                    <Container display="flex" flexDir="column" justifyContent="start" alignItems="center" maxW="container.xl" pt={{ base: 40 }} pb="40">
                        <Heading mb="20px">
                            Docs Coming Soon!
                        </Heading>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

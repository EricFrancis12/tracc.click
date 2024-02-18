import Link from "next/link";
import { useState } from "react";
import { FaDownload, FaExternalLinkSquareAlt } from "react-icons/fa";
import { Box, Button, Center, Container, Flex, Heading, List, ListItem, useColorMode } from "@chakra-ui/react";
import { SEO } from "components/seo";
import { BackgroundGradient } from "components/gradients/background-gradient";

type TTab = {
    name: "Zip Download" | "Git"
};

type TFromattedDate = `${number}/${number}/${number}`;

type TVersion = {
    name: string,
    releaseDate: TFromattedDate,
    url: string
};

export default function GetStarted() {
    const { colorMode } = useColorMode();

    const [activeTab, setActiveTab] = useState<TTab>({ name: "Zip Download" });

    function handleTabClick(newTab: TTab) {
        if (newTab.name === activeTab.name) {
            return;
        }
        setActiveTab(newTab);
    }

    const versionsList: TVersion[] = [
        {
            name: "Beta Version 1",
            releaseDate: "02/18/2024",
            url: "/static/files/beta-version-1.zip"
        }
    ];

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
                            Download Options
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
                        <Flex
                            flexDir="column"
                            alignItems="center"
                            minW="250px"
                            bg={colorMode === "dark" ? "#37393b" : "grey"}
                            color={colorMode === "dark" ? undefined : "black"}
                            border={colorMode === "dark" ? "solid white 1px" : "solid black 1px"}
                            borderRadius="md"
                            overflow="hidden"
                        >
                            <Flex width="100%">
                                <Tab
                                    text="Zip Download"
                                    activeTab={activeTab}
                                    onClick={() => handleTabClick({ name: "Zip Download" })}
                                />
                                <Tab
                                    text="Git"
                                    activeTab={activeTab}
                                    onClick={() => handleTabClick({ name: "Git" })}
                                />
                            </Flex>
                            <Flex
                                flexDir="column"
                                alignItems="center"
                                gap="16px"
                                p="14px"
                            >
                                {activeTab.name === "Zip Download" &&
                                    <>
                                        <Flex flexDir="column" alignItems="center" gap="10px" >
                                            Download latest version:
                                            <Link href={versionsList[versionsList.length - 1].url} type="download">
                                                <Button mx="20px" px="50px" py="50px" bg="green">
                                                    <Flex flexDir="column" alignItems="center" gap="10px" pb="10px" fontSize="20px">
                                                        {versionsList[versionsList.length - 1].name}
                                                        <FaDownload />
                                                    </Flex>
                                                </Button>
                                            </Link>
                                        </Flex>
                                        <Box textDecor="underline">
                                            OR
                                        </Box>
                                        <Flex flexDir="column" alignItems="center" gap="10px" >
                                            Choose from all versions:
                                            <List>
                                                {versionsList.reverse().map((version, index) => (
                                                    <ListItem key={index} textDecor="underline">
                                                        <Link href={version.url} type="download">
                                                            {version.releaseDate} - {version.name}
                                                        </Link>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Flex>
                                    </>
                                }
                                {activeTab.name === "Git" &&
                                    <Flex flexDir="column" gap="16px" mt="10px" p="14px">
                                        <p>
                                            Step 1: If you do not have Git installed, download it <Link style={{ textDecoration: "underline" }} href="https://git-scm.com/downloads" target="_blank">Here</Link>.
                                        </p>
                                        <p>
                                            Step 2: Create an empty folder to download the project in.
                                        </p>
                                        <p>
                                            Step 3: Open your terminal in the empty folder, and run the following command:
                                        </p>
                                        <Box px="16px" py="10px" bg="black" color="white" borderRadius="lg">
                                            <pre>
                                                <code>
                                                    {`
> git clone https://github.com/EricFrancis12/click-tracker.git
                                                        `}
                                                </code>
                                            </pre>
                                        </Box>
                                    </Flex>
                                }
                            </Flex>
                        </Flex>
                        <Heading mt="100px" fontSize="40px" textAlign="center">
                            Installation
                        </Heading>
                        <Box maxW="500px" mt="30px" textAlign="center">
                            <p>
                                After you have completed one of the download options above, please watch this video. It explains how to get the software up and running:
                            </p>
                            <video
                                controls
                                src="/static/videos/test.mp4"
                                style={{
                                    margin: "auto",
                                    marginTop: "40px"
                                }} />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box >
    )
}

const Tab = ({ text, activeTab, onClick }: {
    text: string,
    activeTab: TTab,
    onClick: React.MouseEventHandler<HTMLElement>
}) => {
    const { colorMode } = useColorMode();
    const active = activeTab.name === text;
    const bg = active ? colorMode === "dark" ? "#37393b" : "grey" : "white";
    return (
        <Center
            width="50%"
            p="8px"
            bg={bg}
            textColor={active ? "white" : "black"}
            cursor="pointer"
            onClick={onClick}
        >
            {text}
        </Center>
    )
};

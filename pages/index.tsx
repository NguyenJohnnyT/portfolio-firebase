import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../Modules/Header";
import { AboutMe } from "../Modules/AboutMe";
import { Section } from "../components/Section";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { projects } from "../data";
import ProjectCard from "../Modules/ProjectCard/ProjectCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Johnny Nguyen Portfolio</title>
        <meta name="description" content="Johnny Nguyen Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <AboutMe />
        <Section backgroundColor="whiteAlpha.100">
          <Center bg={"gray.300"}>
            <Text fontSize="xl">Projects</Text>
          </Center>
          <Box padding="1rem">
            <Text color="red.500">
              <strong>Disclaimer: </strong>
              Many of these projects were hosted on the free version of Heroku
              which had discontinued their free services in late 2022. The
              GitHub repositories are linked, but it is likely that applications
              are offline. Apologies!
            </Text>
          </Box>
          <SimpleGrid columns={3} spacing={10} minChildWidth="300px">
            {projects &&
              projects.map((project, index) => {
                return (
                  <ProjectCard key={index} project={project}></ProjectCard>
                );
              })}
          </SimpleGrid>
        </Section>
      </main>
    </>
  );
}

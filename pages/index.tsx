import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../Modules/Header";
import { AboutMe } from "../Modules/AboutMe";
import { Section } from "../components/Section";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { projects } from "../data";
interface ProjectType {
  name: string;
  description: string;
  github?: string;
  deploy?: string;
  pictures?: string[];
}
import NextLink from "next/link";

interface ProjectCollection extends ProjectType {
  id: string;
}

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <Card height="auto" alignItems="center">
      <CardHeader bg="gray.200" marginTop={"1rem"} width="100%">
        <Center>
          <Text>{project.name}</Text>
        </Center>
      </CardHeader>
      <CardBody>
        {project.pictures?.length && (
          <Image
            src={project.pictures[0]}
            alt={project.name}
            maxWidth={"100%"}
          />
        )}
      </CardBody>
      <CardFooter>
        {project.github && (
          <Link as={NextLink} href={project.github} target="_blank">
            <Icon viewBox="0 0 64 64" width="2rem" height="2rem">
              <path
                strokeWidth="0"
                fill="currentColor"
                d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
              />
            </Icon>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johnny Nguyen Portfolio</title>
        <meta name="description" content="Johnny Nguyen Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <AboutMe />
        <Section>
          <Center bg={"gray.300"}>
            <Text fontSize="xl">Projects</Text>
          </Center>
          <SimpleGrid columns={3} spacing={10}>
            {projects &&
              projects.map((project, index) => {
                return <Project key={index} project={project}></Project>;
              })}
          </SimpleGrid>
        </Section>
      </main>
    </div>
  );
}

import React from "react";
import { Section } from "../../components/Section";
import { Center, HStack } from "@chakra-ui/react";
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  ResumeIcon,
} from "../../components/Section/Icons";

export const Header: React.FC = () => {
  return (
    <Section bg="gray.500">
      <Center color="white" fontSize="3rem" fontWeight="thin">
        Johnny Nguyen
      </Center>
      <Center>
        <HStack>
          <GitHubIcon />
          <LinkedInIcon />
          <MediumIcon />
          <ResumeIcon />
        </HStack>
      </Center>
    </Section>
  );
};

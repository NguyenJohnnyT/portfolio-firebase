import React from "react";
import { CardHeader, Center, Text } from "@chakra-ui/react";
import { ProjectType } from "../../types";

export const ProjectCardHeader: React.FC<{ project: ProjectType }> = ({
  project,
}) => (
  <CardHeader bg="gray.200" marginTop={"1rem"} width="100%">
    <Center>
      <Text fontWeight="bold">{project.name}</Text>
    </Center>
  </CardHeader>
);

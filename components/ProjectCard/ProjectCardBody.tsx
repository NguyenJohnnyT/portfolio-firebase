import React from "react";
import {
  CardBody,
  Image as ChakraImage,
  Box,
  Text,
  Img,
} from "@chakra-ui/react";
import { ProjectType } from "../../types";
import Placeholder from "../../assets/projectPlaceholder350x350.png";
import Image from "next/image";
export const ProjectCardBody: React.FC<{ project: ProjectType }> = ({
  project,
}) => (
  <CardBody>
    {project.pictures?.length ? (
      <ChakraImage
        src={project.pictures[0]}
        alt={project.name}
        maxWidth={"100%"}
        maxHeight={"400px"}
      />
    ) : (
      <Image
        src={Placeholder}
        alt="placeholder"
        style={{ maxHeight: "400px", maxWidth: "100%" }}
      />
    )}
    <Box bg="gray.200" margin="1rem 0" padding="1rem">
      <Text>{project.description}</Text>
    </Box>
  </CardBody>
);

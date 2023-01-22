import React from "react";
import { ProjectType } from "../../types";
import {
  ProjectCardBody,
  ProjectCardFooter,
  ProjectCardHeader,
} from "../../components/ProjectCard";
import { Card } from "@chakra-ui/react";

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <Card height="auto" alignItems="center">
      <ProjectCardHeader project={project} />
      <ProjectCardBody project={project} />
      <ProjectCardFooter project={project} />
    </Card>
  );
};

export default ProjectCard;

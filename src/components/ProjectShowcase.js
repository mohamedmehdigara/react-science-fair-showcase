import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const NoProjectsMessage = styled.p`
  text-align: center;
`;

const ProjectShowcase = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <NoProjectsMessage>No projects available.</NoProjectsMessage>;
  }

  return (
    <ShowcaseContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ShowcaseContainer>
  );
}

export default ProjectShowcase;

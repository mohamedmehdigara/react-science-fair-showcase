import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={image} alt={title} />
      <Link href={link} target="_blank" rel="noopener noreferrer">View Project</Link>
    </CardContainer>
  );
}

export default ProjectCard;

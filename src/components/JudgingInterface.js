import React, { useState } from 'react';
import styled from 'styled-components';

const JudgingInterfaceContainer = styled.div`
  padding: 20px;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
`;

const ScoreInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const JudgingInterface = () => {
  const [scores, setScores] = useState({});

  const handleScoreChange = (projectId, score) => {
    setScores({ ...scores, [projectId]: score });
  };

  const handleSubmitScores = () => {
    // Implement logic to submit scores to backend
    console.log('Submitted scores:', scores);
  };

  return (
    <JudgingInterfaceContainer>
      <h1>Judge Projects</h1>
      <ProjectCard>
        <ProjectTitle>Project Title 1</ProjectTitle>
        <ProjectDescription>Description of Project 1...</ProjectDescription>
        <div>
          <label>Score:</label>
          <ScoreInput
            type="number"
            min="0"
            max="10"
            onChange={(e) => handleScoreChange(1, e.target.value)}
          />
        </div>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project Title 2</ProjectTitle>
        <ProjectDescription>Description of Project 2...</ProjectDescription>
        <div>
          <label>Score:</label>
          <ScoreInput
            type="number"
            min="0"
            max="10"
            onChange={(e) => handleScoreChange(2, e.target.value)}
          />
        </div>
      </ProjectCard>
      {/* Add more project cards as needed */}
      <SubmitButton onClick={handleSubmitScores}>Submit Scores</SubmitButton>
    </JudgingInterfaceContainer>
  );
}

export default JudgingInterface;

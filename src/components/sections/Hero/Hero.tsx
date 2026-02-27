import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: ${theme.spacing[24]};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.md}) {
    min-height: auto;
    padding-top: ${theme.spacing[20]};
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
  margin-left: 0;
  margin-right: auto;
  z-index: 2;

  /* on extra-large screens, push the container in from the left a bit */
  @media (min-width: ${theme.breakpoints['2xl']}) {
    margin-left: 10%;
    max-width: calc(${theme.breakpoints['2xl']} - 10%);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing[20]};
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <HeroContainer>
        <ContentWrapper>
          <HeroContent />
        </ContentWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

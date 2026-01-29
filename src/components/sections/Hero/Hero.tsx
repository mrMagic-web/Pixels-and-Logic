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
  z-index: 2;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[20]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
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

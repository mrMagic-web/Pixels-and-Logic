import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroBackground } from './HeroBackground';

const HeroSection = styled(Section)`
  position: relative;
  width: 100%;
  min-height: auto;
  overflow: hidden;
  background-color: ${theme.colors.surfaceCanvas};

  /* 80px fixed header + 4rem breathing room (design: py-16 / lg:py-24) */
  padding-top: calc(${theme.spacing[20]} + ${theme.spacing[16]});
  padding-bottom: ${theme.spacing[16]};

  @media (min-width: ${theme.breakpoints.lg}) {
    padding-top: calc(${theme.spacing[20]} + ${theme.spacing[24]});
    padding-bottom: ${theme.spacing[24]};
  }
`;

/*
 * Uses the SAME <Container> as the Header, with no margin/max-width
 * overrides, so the hero's left edge lines up with the logo and its
 * right edge lines up with the CTA button.
 */
const HeroContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: ${theme.spacing[12]};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 7fr 5fr;
    gap: ${theme.spacing[8]};
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <HeroContainer>
        <Grid>
          <HeroContent />
          <HeroVisual />
        </Grid>
      </HeroContainer>
    </HeroSection>
  );
};
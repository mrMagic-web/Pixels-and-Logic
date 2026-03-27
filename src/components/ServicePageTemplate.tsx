import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { mixins } from '../styles/mixins';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.backgroundDark} 0%, ${theme.colors.backgroundDark} 100%);
  padding: ${theme.spacing[24]} 0;
  color: ${theme.colors.white};
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]} 0;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.accent};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const HeroDescription = styled.p`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  ${mixins.section};
  background-color: #C7FFED;
`;

const TypesSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[6]};
`;

const TypeCard = styled.div`
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const WhatIsSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[6]};
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};

  &::before {
    content: '✓';
    color: ${theme.colors.accent};
    font-weight: bold;
    font-size: ${theme.fontSizes.lg};
    flex-shrink: 0;
  }
`;

const PlatformsSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[6]};
`;

const PlatformCard = styled.div`
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const FeaturesSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
`;

const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${theme.colors.mustard};
`;

const ProcessSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[6]};
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto ${theme.spacing[4]};
`;

const PackagesSection = styled.div`
  margin-bottom: ${theme.spacing[16]};
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[6]};
`;

const PackageCard = styled.div`
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  border: 2px solid ${theme.colors.background};
  transition: ${theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.accent};
  }
`;

const PackageBadge = styled.div`
  display: inline-block;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing[3]};
`;

const PackageName = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[2]};
`;

const PackageDescription = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[4]};
`;

const PackagePrice = styled.div`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[1]};
`;

const PackagePriceNote = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[4]};
`;

const PackageDetails = styled.div`
  margin-bottom: ${theme.spacing[4]};
`;

const PackageDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[2]};
  font-size: ${theme.fontSizes.sm};

  &::before {
    content: '✓';
    color: ${theme.colors.accent};
    font-weight: bold;
  }
`;

const PackageCta = styled.button`
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.accentDark};
  }
`;

const CtaSection = styled.section`
  background-color: ${theme.colors.backgroundDark};
  padding: ${theme.spacing[16]} 0;
  text-align: center;
  color: ${theme.colors.white};
`;

const CtaTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.accent};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const CtaDescription = styled.p`
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

// Export all styled components for reuse
export {
  HeroSection,
  HeroTitle,
  HeroDescription,
  ContentSection,
  TypesSection,
  TypesGrid,
  TypeCard,
  WhatIsSection,
  BenefitsList,
  BenefitItem,
  PlatformsSection,
  PlatformsGrid,
  PlatformCard,
  FeaturesSection,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  ProcessSection,
  ProcessGrid,
  ProcessStep,
  StepNumber,
  PackagesSection,
  PackagesGrid,
  PackageCard,
  PackageBadge,
  PackageName,
  PackageDescription,
  PackagePrice,
  PackagePriceNote,
  PackageDetails,
  PackageDetail,
  PackageCta,
  CtaSection,
  CtaTitle,
  CtaDescription
};
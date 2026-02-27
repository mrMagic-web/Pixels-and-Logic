import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Button } from '../../ui/Button';

const Content = styled.div`
  flex: 1;
  z-index: 2;
`;

const Headline = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.4;
  max-width: 500px;
  
  span {
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[1]} ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.md};
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes['5xl']};
    max-width: 400px;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
    max-width: 350px;
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  
  span {
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[1]} ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.sm};
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  flex-wrap: wrap;
`;

export const HeroContent: React.FC = () => {
  const { t } = useTranslation('hero');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Content>
      <Headline><span>{t('headline')}</span></Headline>
      <Subtitle><span>{t('subtitle')}</span></Subtitle>
      <ButtonGroup>
        <Button size="lg" onClick={scrollToContact}>
          {t('cta.primary')}
        </Button>
        {/* use "secondary" variant for better visibility on hero section */}
        <Button size="lg" variant="secondary" onClick={scrollToPackages}>
          {t('cta.secondary')}
        </Button>
      </ButtonGroup>
    </Content>
  );
};

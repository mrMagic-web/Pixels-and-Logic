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
  font-size: ${theme.fontSizes['7xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.1;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes['5xl']};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  
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

    return (
        <Content>
            <Headline>{t('headline')}</Headline>
            <Subtitle>{t('subtitle')}</Subtitle>
            <ButtonGroup>
                <Button size="lg" onClick={scrollToContact}>
                    {t('cta.primary')}
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToServices}>
                    {t('cta.secondary')}
                </Button>
            </ButtonGroup>
        </Content>
    );
};

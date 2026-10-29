import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const ContactSection = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.surfaceCanvas};
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: ${theme.spacing[12]};

  /* 5 / 7 split on desktop, like the design's 12-column grid */
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 5fr 7fr;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
`;

const Eyebrow = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  line-height: 1.2;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.onSurface};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Intro = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  color: ${theme.colors.onSurfaceVariant};
`;

export const Contact: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <ContactSection id="contact">
      <Container>
        <ContactGrid>
          <InfoColumn>
            <HeaderText>
              <Eyebrow>{t('eyebrow', 'Ready to Build?')}</Eyebrow>
              <Title>{t('title', 'Get in Touch')}</Title>
              <Intro>
                {t(
                  'intro',
                  'Skip the sales bureaucracy. Talk directly with a technical founder to scope your timeline, architecture, and exact MVP requirements.'
                )}
              </Intro>
            </HeaderText>
            <ContactInfo />
          </InfoColumn>
          <ContactForm />
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};
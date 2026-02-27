import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[12]};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

export const Contact: React.FC = () => {
    const { t } = useTranslation('contact');

    return (
        <Section id="contact" backgroundColor="#C7FFED">
            <Container>
                <SectionHeading
                    title={t('title')}
                />
                <ContactGrid>
                    <InfoColumn>
                        <ContactInfo />
                    </InfoColumn>
                    <ContactForm />
                </ContactGrid>
            </Container>
        </Section>
    );
};

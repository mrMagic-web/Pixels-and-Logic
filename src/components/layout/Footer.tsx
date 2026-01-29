import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../styles/theme';
import { Container } from '../ui/Container';

const FooterWrapper = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing[12]} 0 ${theme.spacing[6]};
`;

const FooterContent = styled.div`
  text-align: center;
`;

const Tagline = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.backgroundAlt};
`;

const Copyright = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.navy};
`;

export const Footer: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <FooterWrapper>
            <Container>
                <FooterContent>
                    <Tagline>{t('footer.tagline')}</Tagline>
                    <Copyright>{t('footer.copyright')}</Copyright>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
};

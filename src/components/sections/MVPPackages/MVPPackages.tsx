import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { PackageCard } from './PackageCard';

const Subtitle = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing[12]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[12]};
  }
`;

export const MVPPackages: React.FC = () => {
    const { t } = useTranslation('mvp');

    const packages = t('packages', { returnObjects: true }) as Array<{
        badge: string;
        name: string;
        description: string;
        price: string;
        priceNote?: string;
        duration: string;
        pages: string;
        cta: string;
        features: string[];
    }>;

    const handleSelectPackage = (packageName: string) => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section id="mvp-packages" backgroundColor="#C7FFED">
            <Container>
                <SectionHeading title={t('title')} />
                <Subtitle>{t('subtitle')}</Subtitle>

                <PackagesGrid>
                    {packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            badge={pkg.badge}
                            name={pkg.name}
                            description={pkg.description}
                            price={pkg.price}
                            priceNote={pkg.priceNote}
                            duration={pkg.duration}
                            pages={pkg.pages}
                            features={pkg.features}
                            cta={pkg.cta}
                            includedLabel={t('includedLabel')}
                            isPopular={index === 1}
                            onSelect={() => handleSelectPackage(pkg.name)}
                        />
                    ))}
                </PackagesGrid>
            </Container>
        </Section>
    );
};

import React, { useState } from 'react';
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

// tab navigation
const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[8]};
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  cursor: pointer;
  color: ${({ active }) =>
        active ? theme.colors.primary : theme.colors.textSecondary};
  border-bottom: 2px solid
    ${({ active }) => (active ? theme.colors.primary : 'transparent')};
  transition: ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const MVPPackages: React.FC = () => {
    const { t } = useTranslation('mvp');

    // tabs correspond to translation keys under categories
    const tabKeys: Array<'mvp' | 'websites' | 'saas'> = ['mvp', 'websites', 'saas'];
    const [currentTab, setCurrentTab] = useState<'mvp' | 'websites' | 'saas'>('mvp');

    const categoryData = t(`categories.${currentTab}`, { returnObjects: true }) as any;
    const packages = categoryData?.packages || [];
    const title = categoryData?.title;
    const subtitle = categoryData?.subtitle;

    const handleSelectPackage = (packageName: string) => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section id="packages" backgroundColor="#C7FFED">
            <Container>
                <SectionHeading title={title} />
                {subtitle && <Subtitle>{subtitle}</Subtitle>}

                {/* tabs */}
                <Tabs>
                    {tabKeys.map(key => (
                        <Tab
                            key={key}
                            active={key === currentTab}
                            onClick={() => setCurrentTab(key)}
                        >
                            {t(`tabs.${key}`)}
                        </Tab>
                    ))}
                </Tabs>

                <PackagesGrid>
                    {packages.map((pkg: any, index: number) => (
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
                            includedLabel={categoryData?.includedLabel || t('includedLabel')}
                            isPopular={index === 1}
                            onSelect={() => handleSelectPackage(pkg.name)}
                        />
                    ))}
                </PackagesGrid>
            </Container>
        </Section>
    );
};

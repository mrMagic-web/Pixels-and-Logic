import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { PackageCard } from './PackageCard';

const HEADER_HEIGHT_PX = 80;

const PackagesSection = styled(Section)`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.surface};
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.spacing[6]};
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[2]};
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

const Subtitle = styled.p`
  margin: 0;
  max-width: 32rem;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  color: ${theme.colors.onSurfaceVariant};
`;

const Tabs = styled.div`
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
  padding: ${theme.spacing[1]};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surfaceLowest};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing[2]} 1.25rem;
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  white-space: nowrap;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  background-color: ${({ active }) => (active ? theme.colors.primary : 'transparent')};
  color: ${({ active }) => (active ? theme.colors.onPrimary : theme.colors.onSurfaceVariant)};

  &:hover {
    color: ${({ active }) => (active ? theme.colors.onPrimary : theme.colors.onSurface)};
  }
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  gap: ${theme.spacing[8]};
  padding-top: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type TabKey = 'mvp' | 'websites' | 'saas';
const tabKeys: TabKey[] = ['mvp', 'websites', 'saas'];

export const MVPPackages: React.FC = () => {
  const { t } = useTranslation('mvp');
  const [currentTab, setCurrentTab] = useState<TabKey>('mvp');

  // tabs correspond to translation keys under categories
  const categoryData = t(`categories.${currentTab}`, { returnObjects: true }) as any;
  const packages = categoryData?.packages || [];
  const title = categoryData?.title;
  const subtitle = categoryData?.subtitle;

  const handleSelectPackage = (packageName: string) => {
    window.dispatchEvent(new CustomEvent('packageSelected', { detail: packageName }));
    const element = document.getElementById('contact');
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT_PX;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <PackagesSection id="packages">
      <Container>
        <Inner>
          <HeaderBlock>
            <HeaderText>
              <Eyebrow>{t('eyebrow', 'Predictable Scope • Zero Surprises')}</Eyebrow>
              <Title>{title}</Title>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </HeaderText>

            <Tabs role="tablist">
              {tabKeys.map((key) => (
                <Tab
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={key === currentTab}
                  active={key === currentTab}
                  onClick={() => setCurrentTab(key)}
                >
                  {t(`tabs.${key}`)}
                </Tab>
              ))}
            </Tabs>
          </HeaderBlock>

          <PackagesGrid>
            {packages.map((pkg: any, index: number) => (
              <PackageCard
                key={`${currentTab}-${index}`}
                badge={pkg.badge}
                tier={pkg.tier}
                name={pkg.name}
                description={pkg.description}
                price={pkg.price}
                priceNote={pkg.priceNote}
                duration={pkg.duration}
                pages={pkg.pages}
                features={pkg.features}
                cta={pkg.cta}
                includedLabel={pkg.includedLabel || categoryData?.includedLabel || t('includedLabel')}
                highlightLabel={t('bestValue', 'Best Value')}
                popularLabel={t('popular', 'Popular')}
                isPopular={index === 1}
                onSelect={() => handleSelectPackage(pkg.name)}
              />
            ))}
          </PackagesGrid>
        </Inner>
      </Container>
    </PackagesSection>
  );
};
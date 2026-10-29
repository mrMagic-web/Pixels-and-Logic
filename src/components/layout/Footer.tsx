import React from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { theme } from '../../styles/theme';
import { Container } from '../ui/Container';

const HEADER_HEIGHT_PX = 80;

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: ${theme.spacing[10]};
  padding: ${theme.spacing[10]} 0;
  background-color: ${theme.colors.surfaceLowest};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[10]};
  margin-bottom: ${theme.spacing[10]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-column: span 2;
  }
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  align-self: flex-start;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: -0.025em;
  color: ${theme.colors.onSurface};
`;

const Description = styled.p`
  margin: 0;
  max-width: 24rem;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
`;

const Inquiries = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const InquiriesLabel = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.accentSoft};
`;

const PhoneLink = styled.a`
  align-self: flex-start;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const EmailLink = styled.a`
  align-self: flex-start;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.primarySoft};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const LinkColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const ColumnTitle = styled.span`
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${theme.colors.onSurface};
`;

const linkStyles = `
  align-self: flex-start;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.onSurface};
  }
`;

const FooterLink = styled.a`
  ${linkStyles}
`;

const FooterRouterLink = styled(Link)`
  ${linkStyles}
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[1]};
`;

const Chip = styled.span`
  padding: 2px ${theme.spacing[1]};
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.accentSoft};
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
  padding-top: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const bottomTextStyles = `
  display: inline-flex;
  align-items: center;
  height: 20px;
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
`;

const Copyright = styled.p`
  ${bottomTextStyles}
  color: ${theme.colors.onSurfaceVariant};
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};
`;

const legalLinkStyles = `
  ${bottomTextStyles}
  align-self: center;
  color: ${theme.colors.onSurfaceVariant};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.onSurface};
  }
`;

const LegalLink = styled.a`
  ${legalLinkStyles}
`;

const LegalRouterLink = styled(Link)`
  ${legalLinkStyles}
`;

const TECH_FOCUS = ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Cloud'];

export const Footer: React.FC = () => {
  const { t, language } = useI18next();

  // Smooth scroll on the home page, or navigate home first (e.g. from the blog)
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT_PX;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      navigate(language === 'pl' ? `/pl/#${id}` : `/#${id}`);
    }
  };

  const phone = '+48 511 322 292';
  const email = 'hello@pixelsandlogic.eu';

  return (
    <FooterWrapper>
      {/* Same Container as the header and every section, so edges line up */}
      <Container>
        <Grid>
          <BrandColumn>
            <BrandLink to="/">
              <LogoImage src="/logo/logo-light.png" alt={t('siteName')} />
              <BrandName>Pixels &amp; Logic</BrandName>
            </BrandLink>
            <Description>
              {t(
                'footer.tagline',
                'Engineering high-velocity MVPs, scalable SaaS platforms, and enterprise digital solutions with zero-downtime architecture.'
              )}
            </Description>
            <Inquiries>
              <InquiriesLabel>{t('footer.inquiries', 'Direct Inquiries')}</InquiriesLabel>
              <PhoneLink href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</PhoneLink>
              <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </Inquiries>
          </BrandColumn>

          <LinkColumn aria-label={t('footer.capabilities', 'Capabilities')}>
            <ColumnTitle>{t('footer.capabilities', 'Capabilities')}</ColumnTitle>
            <FooterRouterLink to="/services/mvp-prototypes">
              {t('footer.mvp', 'MVP & Prototypes')}
            </FooterRouterLink>
            <FooterRouterLink to="/services/websites">
              {t('footer.webPlatforms', 'Web Platforms')}
            </FooterRouterLink>
            <FooterRouterLink to="/services/saas-platforms">
              {t('footer.saas', 'SaaS & Cloud Infra')}
            </FooterRouterLink>
            <FooterLink href="#packages" onClick={scrollToSection('packages')}>
              {t('footer.pricing', 'Sprint Pricing Tiers')}
            </FooterLink>
          </LinkColumn>

          <LinkColumn aria-label={t('footer.studio', 'Studio')}>
            <ColumnTitle>{t('footer.studio', 'Studio')}</ColumnTitle>
            <FooterLink href="#selected-projects" onClick={scrollToSection('selected-projects')}>
              {t('footer.work', 'Selected Work')}
            </FooterLink>
            <FooterLink href="#why-us" onClick={scrollToSection('why-us')}>
              {t('footer.whyUs', 'Why Pixels & Logic')}
            </FooterLink>
            <FooterLink href="#technologies" onClick={scrollToSection('technologies')}>
              {t('footer.stack', 'Core Stack & Ops')}
            </FooterLink>
            <FooterRouterLink to="/blog">{t('footer.blog', 'Engineering Journal')}</FooterRouterLink>
          </LinkColumn>

          <div>
            <LinkColumn as="div">
              <ColumnTitle>{t('footer.techFocus', 'Tech Focus')}</ColumnTitle>
              <Chips>
                {TECH_FOCUS.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </Chips>
            </LinkColumn>
          </div>
        </Grid>

        <BottomRow>
          <Copyright>
            {t('footer.copyright', '© 2026 Pixels & Logic. All rights reserved.')}
          </Copyright>
          <LegalLinks>
            <LegalRouterLink to="/privacy-policy">
              {t('footer.privacy', 'Privacy Policy')}
            </LegalRouterLink>
            <LegalRouterLink to="/terms-of-service">
              {t('footer.terms', 'Terms of Service')}
            </LegalRouterLink>
            <LegalLink href="#contact" onClick={scrollToSection('contact')}>
              {t('footer.contact', 'Contact')}
            </LegalLink>
          </LegalLinks>
        </BottomRow>
      </Container>
    </FooterWrapper>
  );
};
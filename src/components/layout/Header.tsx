import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { theme } from '../../styles/theme';
import { Container } from '../ui/Container';
import { LanguageToggle } from '../ui/LanguageToggle';

// Fixed header height (theme.spacing[20] = 5rem = 80px), used for scroll offset
const HEADER_HEIGHT_PX = 80;

/* ------------------------------------------------------------------ */
/* Styled components                                                   */
/* ------------------------------------------------------------------ */
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${theme.zIndex.sticky};
  /* surfaceElevated at 75% opacity (hex alpha "bf") */
  background-color: ${theme.colors.surfaceElevated}bf;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
`;

const Nav = styled.nav`
  height: ${theme.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  text-decoration: none;
  flex-shrink: 0;

  &:hover .brand-name {
    color: ${theme.colors.primarySoft};
  }
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  line-height: 28px;
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: -0.025em;
  color: ${theme.colors.onSurface};
  transition: color ${theme.transitions.base};
`;

const BrandTagline = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.accent};

  @media (max-width: 480px) {
    display: none;
  }
`;

const MainNavLinks = styled.div`
  display: none;
  align-items: center;
  gap: ${theme.spacing[2]};

  @media (min-width: ${theme.breakpoints.xl}) {
    display: flex;
  }
`;

const navItemStyles = `
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 24px;
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.onSurfaceVariant};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.onSurface};
  }
`;

const NavLink = styled.a`
  ${navItemStyles}
`;

const RouterNavLink = styled(Link)`
  ${navItemStyles}
`;

const DropdownWrapper = styled.div`
  position: relative;
  padding: ${theme.spacing[2]} 0;
`;

const DropdownButton = styled.button`
  ${navItemStyles}
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
`;

const DropdownArrow = styled.svg<{ isOpen: boolean }>`
  width: 18px;
  height: 18px;
  transition: transform ${theme.transitions.base};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing[1]};
  border-radius: ${theme.borderRadius.lg};
  /* surfaceContainerHigh at 95% opacity (hex alpha "f2") */
  background-color: ${theme.colors.surfaceContainerHigh}f2;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: ${theme.shadows.glowMenu};
  z-index: ${theme.zIndex.dropdown};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  transition: opacity ${theme.transitions.base}, transform ${theme.transitions.base},
    visibility ${theme.transitions.base};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.onSurfaceVariant};
  text-decoration: none;
  transition: background-color ${theme.transitions.base}, color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceBright};
    color: ${theme.colors.onSurface};
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  flex-shrink: 0;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[1]} ${theme.spacing[4]};
  min-height: 36px;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  white-space: nowrap;
  text-decoration: none;
  color: ${theme.colors.onPrimary};
  background-image: ${theme.gradients.brand};
  box-shadow: ${theme.shadows.glowCta};
  transition: opacity ${theme.transitions.base};

  &:hover {
    opacity: 0.95;
  }
`;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t, language } = useI18next();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll to a section on the home page, or navigate home first
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT_PX;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      const home = language === 'pl' ? `/pl/#${id}` : `/#${id}`;
      navigate(home);
    }
  };

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          {/* Logo + brand */}
          <LogoLink to="/">
            <LogoImage src="/logo/logo-light.png" alt={t('siteName')} />
            <BrandText>
              <BrandName className="brand-name">Pixels &amp; Logic</BrandName>
              <BrandTagline>
                {t('navigation.tagline', 'Digital Product Studio')}
              </BrandTagline>
            </BrandText>
          </LogoLink>

          {/* Main navigation (visible from xl up, like the design) */}
          <MainNavLinks>
            <DropdownWrapper
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <DropdownButton
                type="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                <span>{t('navigation.services', 'Services')}</span>
                <DropdownArrow
                  isOpen={isDropdownOpen}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </DropdownArrow>
              </DropdownButton>
              <DropdownMenu isOpen={isDropdownOpen}>
                <DropdownItem to="/services/mvp-prototypes">
                  {t('navigation.packagesDropdown.mvpPrototypes')}
                </DropdownItem>
                <DropdownItem to="/services/websites">
                  {t('navigation.packagesDropdown.websites')}
                </DropdownItem>
                <DropdownItem to="/services/saas-platforms">
                  {t('navigation.packagesDropdown.saasPlatforms')}
                </DropdownItem>
              </DropdownMenu>
            </DropdownWrapper>

            <NavLink href="#selected-projects" onClick={scrollToSection('selected-projects')}>
              {t('navigation.selectedWork', 'Selected Work')}
            </NavLink>
            <NavLink href="#packages" onClick={scrollToSection('packages')}>
              {t('navigation.packages')}
            </NavLink>
            <NavLink href="#why-us" onClick={scrollToSection('why-us')}>
              {t('navigation.whyUs', 'Why Us')}
            </NavLink>
            <NavLink href="#technologies" onClick={scrollToSection('technologies')}>
              {t('navigation.technologies', 'Technologies')}
            </NavLink>
            <RouterNavLink to="/blog">{t('navigation.blog', 'Blog')}</RouterNavLink>
          </MainNavLinks>

          {/* Right side: language toggle + CTA (no account icon) */}
          <RightActions>
            <LanguageToggle />
            <CtaButton href="#packages" onClick={scrollToSection('packages')}>
              {t('navigation.mvp')}
            </CtaButton>
          </RightActions>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};
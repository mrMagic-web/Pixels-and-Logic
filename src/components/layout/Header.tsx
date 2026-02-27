import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { theme } from '../../styles/theme';
import { Container } from '../ui/Container';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Button } from '../ui/Button';

const HeaderWrapper = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  background-color: ${({ isScrolled }) =>
    isScrolled ? theme.colors.white : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? theme.shadows.md : 'none'};
  transition: ${theme.transitions.base};
  padding: ${theme.spacing[2]} 0;
  border-bottom:${({ isScrolled }) =>
    !isScrolled ? `1px solid ${theme.colors.accentAlt}` : 'none'}; 
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 52px;
  width: auto;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    height: 42px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[4]};
  }
`;

const MainNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[4]};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const NavLink = styled.a<{ isScrolled: boolean }>`
  color: ${({ isScrolled }) =>
    isScrolled ? theme.colors.backgroundDark : theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  transition: ${theme.transitions.base};
  
  &:hover {
    color: ${theme.colors.textSecondary};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <Container>
        <Nav>
          <LogoLink to="/">
            <LogoImage
              src={isScrolled ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
              alt={t('siteName')}
            />
          </LogoLink>
          <NavLinks>
            <MainNavLinks>
              <NavLink isScrolled={isScrolled} href="#services" onClick={scrollToSection('services')}>
                {t('navigation.services')}
              </NavLink>
              <NavLink isScrolled={isScrolled} href="#packages" onClick={scrollToSection('packages')}>
                {t('navigation.packages')}
              </NavLink>
              <NavLink isScrolled={isScrolled} href="#contact" onClick={scrollToSection('contact')}>
                {t('navigation.contact')}
              </NavLink>
            </MainNavLinks>
            <Button as="a" href="#packages" onClick={scrollToSection('packages')} size="sm">
              {t('navigation.mvp')}
            </Button>
            <LanguageToggle />
          </NavLinks>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

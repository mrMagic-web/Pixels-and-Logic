import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
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

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button<{ isScrolled: boolean }>`
  color: ${({ isScrolled }) =>
    isScrolled ? theme.colors.backgroundDark : theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  transition: ${theme.transitions.base};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
  
  &:hover {
    color: ${theme.colors.textSecondary};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const DropdownArrow = styled.span<{ isOpen: boolean }>`
  transition: transform ${theme.transitions.base};
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const DropdownMenu = styled.div<{ isOpen: boolean; isScrolled: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.lg};
  padding: ${theme.spacing[2]} 0;
  min-width: 200px;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all ${theme.transitions.base};
  z-index: ${theme.zIndex.dropdown};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  color: ${theme.colors.backgroundDark};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: ${theme.transitions.base};
  
  &:hover {
    background-color: ${theme.colors.background};
    color: ${theme.colors.accent};
  }
`;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t, language } = useI18next();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -40;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      const home = language === 'pl' ? `/pl/#${id}` : `/#${id}`;
      navigate(home);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
              <NavLink isScrolled={isScrolled} as={Link} to="/">
                {t('navigation.home')}
              </NavLink>
              <DropdownWrapper ref={dropdownRef}>
                <DropdownButton isScrolled={isScrolled} onClick={toggleDropdown}>
                  {t('navigation.packages')}
                  <DropdownArrow isOpen={isDropdownOpen}>▼</DropdownArrow>
                </DropdownButton>
                <DropdownMenu isOpen={isDropdownOpen} isScrolled={isScrolled}>
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
              <NavLink isScrolled={isScrolled} href="#contact" onClick={scrollToSection('contact')}>
                {t('navigation.contact')}
              </NavLink>
              <NavLink isScrolled={isScrolled} as={Link} to="/blog">
                {t('navigation.blog', 'Blog')}
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

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

const NavLink = styled.a`
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.medium};
  transition: ${theme.transitions.base};
  
  &:hover {
    color: ${theme.colors.primary};
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
                        <LogoImage src="/logo/logo-light.png" alt={t('siteName')} />
                    </LogoLink>
                    <NavLinks>
                        <MainNavLinks>
                            <NavLink href="#services" onClick={scrollToSection('services')}>
                                {t('navigation.services')}
                            </NavLink>
                            <NavLink href="#why-us" onClick={scrollToSection('why-us')}>
                                {t('navigation.whyUs')}
                            </NavLink>
                            <NavLink href="#technologies" onClick={scrollToSection('technologies')}>
                                {t('navigation.technologies')}
                            </NavLink>
                            <NavLink href="#contact" onClick={scrollToSection('contact')}>
                                {t('navigation.contact')}
                            </NavLink>
                        </MainNavLinks>
                        <Button as="a" href="#mvp-packages" onClick={scrollToSection('mvp-packages')} size="sm">
                            {t('navigation.mvp')}
                        </Button>
                        <LanguageToggle />
                    </NavLinks>
                </Nav>
            </Container>
        </HeaderWrapper>
    );
};

import React from 'react';
import styled from '@emotion/styled';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { theme } from '../../styles/theme';

const ToggleWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  align-items: center;
`;

const LanguageButton = styled(Link) <{ isActive: boolean }>`
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  transition: ${theme.transitions.base};
  
  ${({ isActive }) => isActive
        ? `
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primary};
    `
        : `
      background-color: transparent;
      color: ${theme.colors.textSecondary};
      
      &:hover {
        background-color: ${theme.colors.backgroundAlt};
        color: ${theme.colors.primary};
      }
    `
    }
`;

export const LanguageToggle: React.FC = () => {
    const { languages, originalPath, language } = useI18next();

    return (
        <ToggleWrapper>
            {languages.map((lng) => (
                <LanguageButton
                    key={lng}
                    to={originalPath}
                    language={lng}
                    isActive={lng === language}
                >
                    {lng}
                </LanguageButton>
            ))}
        </ToggleWrapper>
    );
};

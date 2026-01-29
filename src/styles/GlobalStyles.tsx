import React from 'react';
import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles: React.FC = () => (
    <Global
        styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Lato:wght@300;400;700;900&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.base};
        line-height: 1.6;
        color: ${theme.colors.textSecondary};
        background-color: ${theme.colors.background};
        overflow-x: hidden;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fonts.heading};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.text};
        line-height: 1.2;
        margin-bottom: ${theme.spacing[4]};
      }

      h1 {
        font-size: ${theme.fontSizes['6xl']};
        
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.fontSizes['4xl']};
        }
      }

      h2 {
        font-size: ${theme.fontSizes['5xl']};
        
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.fontSizes['3xl']};
        }
      }

      h3 {
        font-size: ${theme.fontSizes['3xl']};
        
        @media (max-width: ${theme.breakpoints.md}) {
          font-size: ${theme.fontSizes['2xl']};
        }
      }

      h4 {
        font-size: ${theme.fontSizes['2xl']};
      }

      h5 {
        font-size: ${theme.fontSizes.xl};
      }

      h6 {
        font-size: ${theme.fontSizes.lg};
      }

      p {
        margin-bottom: ${theme.spacing[4]};
      }

      a {
        color: ${theme.colors.accent};
        text-decoration: none;
        transition: ${theme.transitions.base};

        &:hover {
          color: ${theme.colors.accentAlt};
        }
      }

      button {
        font-family: ${theme.fonts.body};
        cursor: pointer;
        border: none;
        outline: none;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      ::selection {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primary};
      }
    `}
    />
);

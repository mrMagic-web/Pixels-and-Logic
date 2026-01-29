import React from 'react';
import { GatsbySSR } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';
import { GlobalStyles } from './src/styles/GlobalStyles';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
);

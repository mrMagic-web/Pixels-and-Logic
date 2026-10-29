export const theme = {
  colors: {

    // Surfaces (darkest -> lightest)
    surfaceCanvas: '#090D16',          // page background
    surfaceLowest: '#0a0e17',          // inputs, terminal bars
    surface: '#0f131c',                // alternate section background
    surfaceElevated: '#0F172A',        // header (used at 75% opacity)
    surfaceLow: '#181b25',             // cards
    surfaceContainer: '#1c1f29',       // card hover
    surfaceContainerHigh: '#262a34',   // chips, dropdowns, secondary buttons
    surfaceContainerHighest: '#31353f',
    surfaceHighlight: '#1E293B',       // featured pricing card
    surfaceBright: '#353943',          // hover on dark surfaces

    // Text
    onSurface: '#dfe2ef',              // primary text
    onSurfaceVariant: '#c2c6d8',       // body text
    outline: '#8c90a1',                // muted labels
    outlineVariant: '#424656',         // dividers

    // Brand
    primary: '#0066ff',                // brand blue (primary-container)
    primarySoft: '#b3c5ff',            // light blue for links / hover
    onPrimary: '#f8f7ff',              // text on primary blue
    accent: '#00d2ff',                 // cyan accent (secondary-container)
    accentSoft: '#a5e7ff',             // light cyan
    tertiary: '#7bd0ff',

    // Status
    success: '#10B981',
    error: '#ffb4ab',
    errorContainer: '#93000a',

    /* ------------------------------------------------------------ */
    /* Semantic aliases (kept so existing components keep working)   */
    /* ------------------------------------------------------------ */
    background: '#090D16',             // page background
    backgroundAlt: '#0f131c',          // alternate section background
    backgroundDark: '#090D16',
    text: '#dfe2ef',                   // headings
    textSecondary: '#c2c6d8',          // body text
    accentAlt: '#424656',              // borders / dividers

    /* ------------------------------------------------------------ */
    /* Legacy keys, remapped to the new palette                      */
    /* NOTE: names no longer describe the colors. Migrate usages     */
    /* to the names above when you touch those components.           */
    /* ------------------------------------------------------------ */
    blue: '#0066ff',
    mustard: '#00d2ff',
    navy: '#8c90a1',
    teal: '#a5e7ff',
    white: '#dfe2ef',                  // now a light TEXT color, not a surface
    yellow: '#00d2ff',
  },

  gradients: {
    brand: 'linear-gradient(to right, #0066ff, #00d2ff)',
    brandText: 'linear-gradient(to right, #b3c5ff, #00d2ff)',
  },

  fonts: {
    heading: '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    body: '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    label: '"Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },

  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },

  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px (design "xl")
    xl: '1rem',     // 16px (cards, design "2xl")
    '2xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glowCta: '0 4px 20px rgba(0, 210, 255, 0.35)',
    glowCard: '0 12px 36px -8px rgba(0, 102, 255, 0.3)',
    glowMenu: '0 12px 32px -8px rgba(0, 102, 255, 0.25)',
    none: 'none',
  },

  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
};

export type Theme = typeof theme;
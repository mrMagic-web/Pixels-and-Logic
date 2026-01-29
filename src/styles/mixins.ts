import { theme } from './theme';

export const mixins = {
  // Container with max width
  container: `
    max-width: ${theme.breakpoints['2xl']};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacing[6]};
    padding-right: ${theme.spacing[6]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding-left: ${theme.spacing[4]};
      padding-right: ${theme.spacing[4]};
    }
  `,

  // Flexbox center
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  // Flexbox column
  flexColumn: `
    display: flex;
    flex-direction: column;
  `,

  // Flexbox between
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  // Grid layout
  grid: (columns: number = 3, gap: string = theme.spacing[8]) => `
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    gap: ${gap};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `,

  // Card style
  card: `
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.md};
    transition: ${theme.transitions.base};
    
    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-4px);
    }
  `,

  // Section spacing
  section: `
    padding-top: ${theme.spacing[24]};
    padding-bottom: ${theme.spacing[24]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding-top: ${theme.spacing[16]};
      padding-bottom: ${theme.spacing[16]};
    }
  `,

  // Heading with underline accent
  headingAccent: `
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing[2]};
      left: 0;
      width: 60px;
      height: 4px;
      background-color: ${theme.colors.accent};
      border-radius: ${theme.borderRadius.full};
    }
  `,

  // Button reset
  buttonReset: `
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  `,
};

# Project Rules & Guidelines

## 📐 Component Architecture

### Size Limit: 300 Lines Maximum

**Why?**
- Easier to understand and maintain
- Promotes reusability
- Simplifies testing
- Reduces cognitive load

**How to Keep Components Small:**

1. **Extract Sub-Components**
   ```tsx
   // ❌ Bad: One large component
   const Services = () => (
     <div>
       {/* 400 lines of JSX */}
     </div>
   );
   
   // ✅ Good: Split into smaller components
   const Services = () => (
     <Section>
       <ServicesList />
     </Section>
   );
   
   const ServicesList = () => (
     <Grid>
       {services.map(service => <ServiceCard {...service} />)}
     </Grid>
   );
   ```

2. **Use Custom Hooks**
   ```tsx
   // ❌ Bad: Complex state logic in component
   const ContactForm = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     // ... 50 lines of form logic
   };
   
   // ✅ Good: Extract to custom hook
   const ContactForm = () => {
     const { formState, handleSubmit, handleChange } = useContactForm();
     // ... clean component code
   };
   ```

3. **Separate Styles**
   ```tsx
   // If styled components make file too large
   // Create [ComponentName].styles.ts
   ```

## 🌍 Internationalization (i18n)

### Every Page Must Have Translations

**Required Files:**
- `locales/en/[namespace].json` - English (default)
- `locales/pl/[namespace].json` - Polish

**Component Implementation:**
```tsx
import { useTranslation } from 'gatsby-plugin-react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('namespace');
  
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};
```

**Rules:**
1. ❌ Never hardcode user-facing text
2. ✅ Always use translation keys
3. ✅ Organize by namespace (common, hero, services, etc.)
4. ✅ Use descriptive keys: `cta.primary` instead of `btn1`

## 🎨 Styling with Emotion CSS

### Use Theme Constants

```tsx
import { theme } from '../../styles/theme';
import styled from '@emotion/styled';

// ✅ Good: Use theme values
const Button = styled.button`
  background-color: ${theme.colors.accent};
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.body};
`;

// ❌ Bad: Hardcoded values
const Button = styled.button`
  background-color: #FFB30D;
  padding: 16px;
  border-radius: 8px;
  font-family: Lato;
`;
```

### Use Mixins for Common Patterns

```tsx
import { mixins } from '../../styles/mixins';

const Container = styled.div`
  ${mixins.container}
`;

const Grid = styled.div`
  ${mixins.grid(3)}
`;
```

### Mobile-First Responsive Design

```tsx
const Component = styled.div`
  /* Mobile first */
  font-size: ${theme.fontSizes.base};
  
  /* Then tablet */
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
  
  /* Then desktop */
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes.xl};
  }
`;
```

## 📂 File Organization

### Component Structure

```
ComponentName/
├── ComponentName.tsx      # Main component (< 300 lines)
├── SubComponent1.tsx      # Extracted sub-component
├── SubComponent2.tsx      # Another sub-component
└── index.ts               # Optional: Re-export
```

### Import Order

```tsx
// 1. External dependencies
import React from 'react';
import styled from '@emotion/styled';

// 2. Gatsby/i18n
import { useTranslation } from 'gatsby-plugin-react-i18next';

// 3. Theme/styles
import { theme } from '../../styles/theme';

// 4. Components
import { Button } from '../ui/Button';

// 5. Types/interfaces
import { MyComponentProps } from './types';
```

## 🧪 Best Practices

### TypeScript

```tsx
// ✅ Always define prop types
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  ...props 
}) => {
  // ...
};
```

### Accessibility

```tsx
// ✅ Semantic HTML
<nav>
  <ul>
    <li><a href="#services">Services</a></li>
  </ul>
</nav>

// ✅ Alt text for images
<img src="logo.png" alt="Pixel & Logic Logo" />

// ✅ Form labels
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" />

// ✅ Button vs Link
<button onClick={handleClick}>Submit</button>  // Actions
<a href="/page">Read More</a>                  // Navigation
```

### Performance

```tsx
// ✅ Lazy load images
import { GatsbyImage } from 'gatsby-plugin-image';

// ✅ Memoize expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// ✅ Avoid inline functions in render
// ❌ Bad
<button onClick={() => handleClick(id)}>

// ✅ Good
const onClick = useCallback(() => handleClick(id), [id]);
<button onClick={onClick}>
```

## 🚫 Common Mistakes to Avoid

1. **Hardcoding Text**
   ```tsx
   // ❌ Bad
   <h1>Welcome to Pixel & Logic</h1>
   
   // ✅ Good
   <h1>{t('hero.headline')}</h1>
   ```

2. **Large Components**
   ```tsx
   // ❌ Bad: 500-line component
   
   // ✅ Good: Split into 5x 100-line components
   ```

3. **Magic Numbers**
   ```tsx
   // ❌ Bad
   padding: 24px;
   
   // ✅ Good
   padding: ${theme.spacing[6]};
   ```

4. **Missing Translations**
   ```tsx
   // ❌ Missing Polish translation
   // en/hero.json ✅
   // pl/hero.json ❌
   
   // ✅ Both languages always
   ```

5. **Ignoring Responsiveness**
   ```tsx
   // ❌ Fixed desktop sizes
   font-size: 48px;
   
   // ✅ Responsive with breakpoints
   font-size: ${theme.fontSizes['3xl']};
   @media (min-width: ${theme.breakpoints.lg}) {
     font-size: ${theme.fontSizes['5xl']};
   }
   ```

## ✅ Pre-Commit Checklist

Before committing:

- [ ] All components < 300 lines
- [ ] All text is translated (EN + PL)
- [ ] Using theme constants (no hardcoded values)
- [ ] Mobile responsive
- [ ] TypeScript types defined
- [ ] No console.log statements
- [ ] Accessibility checked (semantic HTML, ARIA)
- [ ] Tested in both languages

## 📚 Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)
- [React i18next](https://react.i18next.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

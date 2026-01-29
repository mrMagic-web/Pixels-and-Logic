# Pixel & Logic Website

Modern, bilingual one-page website for a digital agency built with Gatsby, React, TypeScript, and Emotion CSS.

## 🎨 Design Principles

- **Minimalist & Clean**: Plenty of white space, balanced grid, strong hierarchy
- **Responsive**: Mobile-first approach with breakpoints for all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized images, code splitting, lazy loading

## 🌍 Languages

- **English** (default)
- **Polish**

Language toggle available in the header.

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Blue | `#001542` | Primary brand color, headings |
| Mustard | `#085454` | Dark teal accent |
| Navy (Gray) | `#7A7A7A` | Body text, secondary elements |
| Teal | `#C7FFED` | Light backgrounds, highlights |
| White (Cream) | `#F2E7DC` | Main background |
| Yellow | `#FFB30D` | Primary accent, CTAs |

## 🔤 Typography

- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)

## 📁 Project Structure

```
pixels-and-logic/
├── src/
│   ├── components/
│   │   ├── layout/         # Layout components (Header, Footer, Layout)
│   │   ├── ui/             # Reusable UI components (Button, Card, etc.)
│   │   └── sections/       # Page sections (Hero, Services, etc.)
│   ├── pages/              # Gatsby pages
│   ├── styles/             # Theme, global styles, mixins
│   └── hooks/              # Custom React hooks
├── locales/                # i18n translation files
│   ├── en/                 # English translations
│   └── pl/                 # Polish translations
└── render.yaml             # Render deployment config
```

## 🛠️ Tech Stack

- **Framework**: Gatsby 5.x
- **Language**: TypeScript
- **Styling**: Emotion CSS
- **i18n**: gatsby-plugin-react-i18next
- **Deployment**: Render

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run develop
```

Visit http://localhost:8000 to view the site.

English version: http://localhost:8000/
Polish version: http://localhost:8000/pl/

### Build

```bash
npm run build
```

### Serve Production Build

```bash
npm run serve
```

## 📏 Code Standards

### Component Size Limit

- **Maximum 300 lines per component**
- Extract logic into smaller sub-components
- Use custom hooks for complex state logic
- Separate styled components into `.styles.ts` files if needed

### Translation Guidelines

- Every page/component MUST support i18n
- Use `useTranslation` hook for all user-facing text
- Never hardcode strings in components
- Organize translations by namespace (common, hero, services, etc.)

### Styling Guidelines

- Use Emotion CSS for all styling
- Follow the theme constants defined in `src/styles/theme.ts`
- Use mixins from `src/styles/mixins.ts` for common patterns
- Prefer styled components over inline styles
- Mobile-first responsive design

### File Naming

- Components: PascalCase (e.g., `Button.tsx`, `ServiceCard.tsx`)
- Utilities: camelCase (e.g., `theme.ts`, `mixins.ts`)
- Pages: kebab-case or lowercase (Gatsby convention)

## 🌐 Deployment

Deployed on Render using the configuration in `render.yaml`.

### Manual Deployment

1. Push to main branch
2. Render automatically builds and deploys
3. Visit your production URL

### Build Configuration

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `public`
- **Node Version**: 20

## 📝 Adding New Sections

1. Create component in `src/components/sections/[SectionName]/`
2. Add translations in `locales/en/[sectionname].json` and `locales/pl/[sectionname].json`
3. Import and add to `src/pages/index.tsx`
4. Update navigation in Header component if needed

## 🎯 Features

- ✅ Bilingual (EN/PL)
- ✅ One-page layout with smooth scroll
- ✅ Responsive design
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast performance (Gatsby static site)
- ✅ Deployed on Render

## 📄 License

Private project - All rights reserved.

## 👥 Contact

For questions or support, contact: hello@pixellogic.com

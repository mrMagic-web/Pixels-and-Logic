import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../../../styles/theme';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

interface Testimonial {
  text: string;
  author: string;
  position?: string;
}

interface Props {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: string;
}

const fadeIn = keyframes`
  from { opacity: 0.4; }
  to { opacity: 1; }
`;

const TestimonialsSection = styled(Section)`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${theme.colors.surface};
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[10]};
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Eyebrow = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.accentSoft};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  line-height: 1.2;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.onSurface};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  flex-shrink: 0;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.surfaceContainerHigh};
  color: ${theme.colors.onSurface};
  cursor: pointer;
  transition: background-color ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.surfaceBright};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  animation: ${fadeIn} 300ms ease;

  /* one card on mobile / tablet, two side by side from lg (like the design) */
  & > *:nth-of-type(n + 2) {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);

    & > *:nth-of-type(n + 2) {
      display: flex;
    }
  }
`;

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing[6]};
  margin: 0;
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surfaceLow};
  box-shadow: ${theme.shadows.md};
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
  color: ${theme.colors.accent};
`;

const Quote = styled.blockquote`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.7;
  font-style: italic;
  color: ${theme.colors.onSurface};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const Footer = styled.figcaption`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding-top: ${theme.spacing[4]};
  border-top: 1px solid ${theme.colors.surfaceContainerHigh};
`;

const Avatar = styled.div<{ alt?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${({ alt }) => (alt ? theme.colors.accent : theme.colors.primary)};
  color: ${({ alt }) => (alt ? theme.colors.surfaceCanvas : theme.colors.onPrimary)};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
`;

const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-family: ${theme.fonts.label};
  font-size: ${theme.fontSizes.xs};
  line-height: 16px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.onSurface};
`;

const AuthorRole = styled.span`
  font-family: ${theme.fonts.label};
  font-size: 11px;
  line-height: 14px;
  color: ${theme.colors.onSurfaceVariant};
`;

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
  </svg>
);

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

export const TestimonialsSlider: React.FC<Props> = ({
  testimonials,
  eyebrow = 'Client Testimonials',
  title = 'Trusted by Founders & Operators',
}) => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  if (length === 0) {
    return null;
  }

  const prev = () => setCurrent((c) => (c - 1 + length) % length);
  const next = () => setCurrent((c) => (c + 1) % length);

  // Show the current testimonial and the following one (2 columns on desktop)
  const visible = length === 1 ? [0] : [current, (current + 1) % length];

  return (
    <TestimonialsSection>
      <Container>
        <Inner>
          <HeaderRow>
            <HeaderText>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Title>{title}</Title>
            </HeaderText>
            {length > 1 && (
              <Controls>
                <NavButton type="button" onClick={prev} aria-label="Previous testimonial">
                  <Chevron dir="left" />
                </NavButton>
                <NavButton type="button" onClick={next} aria-label="Next testimonial">
                  <Chevron dir="right" />
                </NavButton>
              </Controls>
            )}
          </HeaderRow>

          {/* key restarts the fade animation whenever the slide changes */}
          <Grid key={current}>
            {visible.map((index) => {
              const item = testimonials[index];
              return (
                <Card key={index}>
                  <Body>
                    <Stars aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <StarIcon key={s} />
                      ))}
                    </Stars>
                    <Quote>“{item.text}”</Quote>
                  </Body>
                  <Footer>
                    <Avatar alt={index % 2 === 1}>{getInitials(item.author)}</Avatar>
                    <AuthorBlock>
                      <AuthorName>{item.author}</AuthorName>
                      {item.position && <AuthorRole>{item.position}</AuthorRole>}
                    </AuthorBlock>
                  </Footer>
                </Card>
              );
            })}
          </Grid>
        </Inner>
      </Container>
    </TestimonialsSection>
  );
};
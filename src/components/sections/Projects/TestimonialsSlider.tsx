import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

interface Testimonial {
    text: string;
    author: string;
    position?: string;
}

interface Props {
    testimonials: Testimonial[];
}

const SliderWrapper = styled.div`
margin-top: ${theme.spacing[4]};
  width: 100vw;
  margin-left: calc(50% - 50vw); /* make it flush with viewport */
  position: relative;
  overflow: hidden;
  background: ${theme.colors.background};
  padding: ${theme.spacing[12]} 0 0;
`;

const Slides = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${({ offset }) => -offset * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 ${theme.spacing[8]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Quote = styled.blockquote`
  font-size: ${theme.fontSizes.lg};
  font-style: italic;
  color: ${theme.colors.text};
  max-width: 800px;
  margin-bottom: ${theme.spacing[6]};
`;

const Author = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

const AuthorName = styled.span`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.primary};
`;

const NavButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? 'left: 16px;' : 'right: 16px;')}
  transform: translateY(-50%);
  background: rgba(255,255,255,0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  transition: background 0.2s;
    font-size: 2rem;
  padding-bottom: 0.5rem;
  &:hover {
    background: rgba(255,255,255,1);
  }
`;

export const TestimonialsSlider: React.FC<Props> = ({ testimonials }) => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    if (length === 0) {
        return null;
    }

    const prev = () => setCurrent((c) => (c - 1 + length) % length);
    const next = () => setCurrent((c) => (c + 1) % length);

    return (
        <SliderWrapper>
            <Slides offset={current}>
                {testimonials.map((t, i) => (
                    <Slide key={i}>
                        <Quote>“{t.text}”</Quote>
                        <Author>
                            <AuthorName>{t.author}</AuthorName>
                            {t.position && `, ${t.position}`}
                        </Author>
                    </Slide>
                ))}
            </Slides>
            {length > 1 && (
                <>
                    <NavButton left onClick={prev} aria-label="Previous testimonial">
                        ‹
                    </NavButton>
                    <NavButton onClick={next} aria-label="Next testimonial">
                        ›
                    </NavButton>
                </>
            )}
        </SliderWrapper>
    );
};

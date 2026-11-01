import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { theme } from '../styles/theme';

export const HEADER_HEIGHT_PX = 80;

/* ---------- Design tokens ---------- */
export const t = {
    canvas: '#090D16',
    lowest: '#0a0e17',
    low: '#181b25',
    container: '#1c1f29',
    high: theme.colors.surfaceContainerHigh,
    highest: '#31353f',
    bright: theme.colors.surfaceBright,
    elevated: theme.colors.surfaceElevated,
    highlight: '#1E293B',
    blue: '#0066ff',
    cyan: theme.colors.accent,
    primary: '#b3c5ff',
    secondary: '#a5e7ff',
    text: theme.colors.onSurface,
    muted: theme.colors.onSurfaceVariant,
    outline: '#8c90a1',
    emerald: '#10B981',
    onBlue: theme.colors.onPrimary,
    gradient: theme.gradients.brand,
    fontBody: theme.fonts.body,
    fontLabel: theme.fonts.label,
    fontHead: theme.fonts.heading,
};

const up = (px: number) => `@media (min-width: ${px}px)`;
const md = up(768);
const lg = up(1024);

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: .45; }
`;

/* ---------- Shared ---------- */
export const Page = styled.div`
    position: relative;
    overflow: hidden;
    overflow: clip; /* clips the glow without breaking position: sticky */
    background: ${t.canvas};
    color: ${t.text};
    font-family: ${t.fontBody};

    h1, h2, h3 { font-family: ${t.fontHead}; }

    &::before {
        content: '';
        position: absolute;
        top: -160px;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        max-width: 100%;
        height: 550px;
        background: linear-gradient(to bottom, rgba(0, 102, 255, 0.2), rgba(0, 210, 255, 0.1), transparent);
        filter: blur(140px);
        pointer-events: none;
    }
`;

export const Section = styled.section`
    position: relative;
    scroll-margin-top: ${HEADER_HEIGHT_PX}px;
    padding: 2.5rem 0;
`;

export const GradientButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    border-radius: ${theme.borderRadius.lg};
    font-family: ${t.fontLabel};
    font-size: 13px;
    font-weight: ${theme.fontWeights.semibold};
    color: ${t.onBlue};
    text-decoration: none;
    background: ${t.gradient};
    box-shadow: ${theme.shadows.glowCta};
    transition: opacity ${theme.transitions.base};
    cursor: pointer;

    &:hover { opacity: 0.92; }
    &:focus-visible { outline: 2px solid ${t.cyan}; outline-offset: 3px; }
`;

export const GhostButton = styled(GradientButton)`
    background: rgba(38, 42, 52, 0.8);
    color: ${t.text};
    box-shadow: none;

    &:hover { background: ${t.bright}; opacity: 1; }
`;

/* ---------- Section heading ---------- */
export const Heading = styled.div<{ $center?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    ${({ $center }) => $center && css`align-items: center; text-align: center;`}
`;

export const Eyebrow = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${t.secondary};

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${t.cyan};
    }
`;

export const H2 = styled.h2`
    margin: 0;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    color: ${t.text};
    ${lg} { font-size: 40px; line-height: 48px; }
`;

export const Lead = styled.p`
    margin: 0;
    max-width: 42rem;
    font-size: 15px;
    line-height: 24px;
    color: ${t.muted};
`;

/* ---------- Hero ---------- */
export const Hero = styled.section`
    position: relative;
    padding: calc(${HEADER_HEIGHT_PX}px + 2.5rem) 0 2.5rem;
`;

export const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
    ${lg} { grid-template-columns: repeat(12, 1fr); }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${lg} { grid-column: span 6; }
`;

export const HeroTitle = styled.h1`
    margin: 0;
    font-size: 36px;
    line-height: 44px;
    font-weight: 800;
    letter-spacing: -0.02em;
    ${lg} { font-size: 56px; line-height: 64px; }

    span {
        background: ${t.gradient};
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
`;

export const HeroDescription = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    color: ${t.muted};
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 0.5rem;
`;

export const MetricGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    padding-top: 1rem;
`;

export const Metric = styled.div`
    padding: 0.75rem;
    border-radius: 0.75rem;
    background: ${t.low};

    strong {
        display: block;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: ${t.cyan};
    }
    span {
        font-family: ${t.fontLabel};
        font-size: 11px;
        color: ${t.muted};
    }
`;

export const Cockpit = styled.div`
    position: relative;
    padding: 1rem;
    border-radius: 1rem;
    background: rgba(15, 23, 42, 0.9);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    ${lg} { grid-column: span 6; }
`;

export const CockpitBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    font-family: ui-monospace, monospace;
    font-size: 11px;
    color: ${t.muted};

    .dots { display: flex; gap: 6px; align-items: center; }
    .dot { width: 12px; height: 12px; border-radius: 50%; }
    .live {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 2px 8px;
        border-radius: 4px;
        background: ${t.container};
        color: ${t.emerald};
        &::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${t.emerald};
            animation: ${pulse} 2s infinite;
        }
    }
`;

export const PipelineGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const PipelineStep = styled.div<{ $active?: boolean }>`
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: ${({ $active }) => ($active ? t.highlight : 'rgba(38,42,52,.9)')};

    small {
        display: block;
        font-family: ui-monospace, monospace;
        font-size: 11px;
        color: ${({ $active }) => ($active ? t.cyan : t.secondary)};
    }
    b {
        display: block;
        font-family: ${t.fontLabel};
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    i {
        display: block;
        height: 4px;
        margin-top: 6px;
        border-radius: 9999px;
        background: ${t.lowest};
        overflow: hidden;
        &::after {
            content: '';
            display: block;
            height: 100%;
            width: ${({ $active }) => ($active ? '80%' : '100%')};
            background: ${({ $active }) => ($active ? t.gradient : t.emerald)};
        }
    }
`;

export const Bars = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 64px;
    padding: 1rem;
    box-sizing: content-box;
    border-radius: 0.75rem;
    background: ${t.lowest};

    span {
        flex: 1;
        border-radius: 4px 4px 0 0;
        background: ${t.bright};
    }
    span.hot { background: ${t.blue}; }
    span.peak { background: ${t.cyan}; box-shadow: 0 0 12px rgba(0, 210, 255, 0.6); }
`;

export const Ribbon = styled.div`
    position: absolute;
    left: -8px;
    bottom: -16px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    background: rgba(30, 41, 59, 0.95);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
    font-family: ${t.fontLabel};
    font-size: 11px;
    color: ${t.text};
    svg { color: ${t.cyan}; }
`;

/* ---------- Generic card grids ---------- */
export const Grid = styled.div<{ $cols?: number }>`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    ${md} { grid-template-columns: repeat(2, 1fr); }
    ${lg} { grid-template-columns: repeat(${({ $cols }) => $cols ?? 4}, 1fr); }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background: ${t.low};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    transition: background 0.2s, transform 0.2s;

    &:hover { background: ${t.container}; transform: translateY(-4px); }
    @media (prefers-reduced-motion: reduce) { &:hover { transform: none; } }

    h3 { margin: 0 0 0.25rem; font-size: 20px; line-height: 28px; font-weight: 600; }
    p { margin: 0; font-size: 13px; line-height: 20px; color: ${t.muted}; }
`;

export const IconBox = styled.span<{ $size?: number }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${({ $size }) => $size ?? 48}px;
    height: ${({ $size }) => $size ?? 48}px;
    border-radius: 0.75rem;
    background: ${t.high};
    color: ${t.cyan};
`;

export const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

export const Tag = styled.span`
    padding: 2px 8px;
    border-radius: 4px;
    background: ${t.high};
    color: ${t.secondary};
    font-family: ${t.fontLabel};
    font-size: 11px;
`;

/* ---------- What is an MVP ---------- */
export const SplitGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
    ${lg} { grid-template-columns: 5fr 7fr; }
`;

export const Narrative = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p { margin: 0; font-size: 15px; line-height: 24px; color: ${t.muted}; }
`;

export const BenefitCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background: rgba(15, 23, 42, 0.7);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    font-size: 13px;
    line-height: 20px;
    color: ${t.muted};
    transition: background 0.2s;
    &:hover { background: ${t.elevated}; }
`;

export const BenefitGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

/* ---------- Included features ---------- */
export const Panel = styled.div`
    position: relative;
    overflow: hidden;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: ${t.lowest};
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    ${lg} { padding: 2.5rem; }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 384px;
        height: 384px;
        border-radius: 50%;
        background: rgba(0, 102, 255, 0.1);
        filter: blur(100px);
        pointer-events: none;
    }
`;

export const FeatureGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    ${md} { grid-template-columns: repeat(2, 1fr); }
    ${lg} { grid-template-columns: repeat(3, 1fr); }
`;

export const FeatureItem = styled.div<{ $wide?: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background: ${({ $wide }) => ($wide ? 'rgba(38,42,52,.8)' : t.low)};
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    ${({ $wide }) => $wide && css`${lg} { grid-column: span 3; }`}
`;

/* ---------- Process ---------- */
export const ProcessCard = styled(Card)`
    .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
    .num {
        font-family: ui-monospace, monospace;
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        color: rgba(0, 210, 255, 0.4);
        transition: color 0.2s;
    }
    &:hover .num { color: ${t.cyan}; }
    .out {
        display: flex;
        align-items: center;
        gap: 4px;
        font-family: ui-monospace, monospace;
        font-size: 11px;
        color: ${t.outline};
    }
`;

/* ---------- Packages ---------- */
export const PackagesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: stretch;
    ${lg} { grid-template-columns: repeat(3, 1fr); }
`;

export const PackageCard = styled.div<{ $featured?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: ${({ $featured }) => ($featured ? t.highlight : t.low)};
    box-shadow: ${({ $featured }) =>
        $featured ? '0 25px 50px -12px rgba(0,0,0,.6)' : '0 10px 15px -3px rgba(0,0,0,.4)'};
    ${({ $featured }) => $featured && css`${lg} { transform: translateY(-8px); }`}
`;

export const PopularBadge = styled.div`
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 16px;
    border-radius: 9999px;
    background: ${t.gradient};
    color: ${t.onBlue};
    font-family: ${t.fontLabel};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const PackageMeta = styled.div<{ $featured?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-family: ${t.fontLabel};
    font-size: 11px;

    .badge {
        padding: 4px 12px;
        border-radius: 9999px;
        background: ${({ $featured }) => ($featured ? 'rgba(0,102,255,.2)' : t.container)};
        color: ${({ $featured }) => ($featured ? t.cyan : t.secondary)};
    }
    .duration {
        font-family: ui-monospace, monospace;
        text-transform: uppercase;
        color: ${({ $featured }) => ($featured ? t.cyan : t.outline)};
        font-weight: ${({ $featured }) => ($featured ? 700 : 400)};
    }
`;

export const PackageName = styled.h3`
    margin: 1rem 0 0;
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;
`;

export const PackageDescription = styled.p`
    margin: 4px 0 0;
    font-size: 13px;
    line-height: 20px;
    color: ${t.muted};
`;

export const PackagePrice = styled.div<{ $featured?: boolean }>`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding-top: 1rem;

    strong {
        font-size: 40px;
        line-height: 48px;
        font-weight: 800;
        color: ${({ $featured }) => ($featured ? t.cyan : t.text)};
    }
    span {
        font-family: ${t.fontLabel};
        font-size: 12px;
        font-weight: 600;
        color: ${t.muted};
    }
`;

export const PackageDetails = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
`;

export const PackageDetail = styled.li<{ $featured?: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    line-height: 20px;
    font-weight: ${({ $featured }) => ($featured ? 500 : 400)};

    svg { flex-shrink: 0; margin-top: 1px; color: ${t.cyan}; }
`;

export const PackageCta = styled.a<{ $featured?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.875rem 1rem;
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.lg};
    font-family: ${t.fontLabel};
    font-size: 13px;
    font-weight: ${theme.fontWeights.semibold};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    color: ${({ $featured }) => ($featured ? t.onBlue : t.text)};
    background: ${({ $featured }) => ($featured ? t.gradient : t.high)};
    box-shadow: ${({ $featured }) => ($featured ? theme.shadows.glowCta : 'none')};

    &:hover {
        ${({ $featured }) => ($featured ? 'opacity: .92;' : `background: ${t.bright};`)}
    }
    &:focus-visible { outline: 2px solid ${t.cyan}; outline-offset: 3px; }
`;

/* ---------- Bottom CTA ---------- */
export const CtaBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background: linear-gradient(90deg, rgba(0, 102, 255, 0.2), ${t.high}, ${t.container});
    ${md} { flex-direction: row; align-items: center; }

    h3 { margin: 0 0 4px; font-size: 28px; line-height: 36px; font-weight: 600; }
    p { margin: 0; font-size: 15px; line-height: 24px; color: ${t.muted}; }
`;
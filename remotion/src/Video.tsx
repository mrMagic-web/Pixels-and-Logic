import React from 'react';
import { Composition, Sequence } from 'remotion';

// Use very simple placeholders when rendering the video.  The original
// site components import Gatsby and related plugins, which pull in
// untranspiled JSX from gatsby/cache-dir; Remotion's bundler doesn't
// compile those modules and fails with the "unexpected token" error.
// You can either rewrite the real components to avoid Gatsby deps or
// duplicate the layout here.  For now the placeholders keep the build
// going.
const Placeholder: React.FC<{ text: string }> = ({ text }) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 60,
            background: '#000',
            color: '#fff',
        }}
    >
        {text}
    </div>
);

export const Video: React.FC = () => (
    <>
        <Composition
            id="Promo"
            component={Promo}
            durationInFrames={300}
            fps={30}
            width={1920}
            height={1080}
        />
    </>
);

const Promo: React.FC = () => (
    <>
        {/* show hero for 3 seconds (90 frames @ 30fps) */}
        <Sequence from={0} durationInFrames={90}>
            <Placeholder text="Hero section" />
        </Sequence>

        {/* slide into services for another 3 seconds */}
        <Sequence from={90} durationInFrames={90}>
            <Placeholder text="Services section" />
        </Sequence>

        {/* add more sequences here for projects, contact form, etc. */}
    </>
);

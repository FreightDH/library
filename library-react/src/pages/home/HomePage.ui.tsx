import type { FC, ReactElement } from 'react';

import { WelcomeSection } from '@/widgets/Sections/WelcomeSection';
import { AboutSection } from '@/widgets/Sections/AboutSection';

export const HomePage: FC = (): ReactElement => {
  return (
    <main>
      <WelcomeSection />
      <AboutSection />
    </main>
  );
};

import type { FC, ReactElement } from 'react';

import { WelcomeSection } from '@/widgets/Sections/WelcomeSection';
import { AboutSection } from '@/widgets/Sections/AboutSection';
import { FavoritesSection } from '@/widgets/Sections/FavoritesSection';
import { ShopSection } from '@/widgets/Sections/ShopSection';
import { ContactsSection } from '@/widgets/Sections/ContactsSection';
import { DigitalSection } from '@/widgets/Sections/DigitalSection';

export const HomePage: FC = (): ReactElement => {
  return (
    <main>
      <WelcomeSection />
      <AboutSection />
      <FavoritesSection />
      <ShopSection />
      <ContactsSection />
      <DigitalSection />
    </main>
  );
};

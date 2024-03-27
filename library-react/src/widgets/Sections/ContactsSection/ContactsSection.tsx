import type { FC, ReactElement } from 'react';

import { SectionTitle } from '@/shared/UI/SectionTitle';

import mapImage from './assets/map.jpg';
import cl from './ContactsSection.module.scss';

export const ContactsSection: FC = (): ReactElement => {
  return (
    <section className={cl.contacts} id="contacts">
      <div className="contacts__container">
        <div className={cl.contacts__body}>
          <SectionTitle>Our Contacts</SectionTitle>
          <div className={cl.contacts__content}>
            <div className={cl.contacts__column}>
              <h3 className={cl.contacts__subtitle}>For all Library inquiries:</h3>
              <ul className={cl.contacts__list}>
                <li className={cl.contacts__contact}>
                  Please call <a href="tel:6177302370">(617) 730-2370</a>
                </li>
                <li className={cl.contacts__contact}>
                  For TTY service, please call <a href="tel:6177302370">(617) 730-2370</a>
                </li>
                <li className={cl.contacts__contact}>
                  Putterham Library: <a href="tel:6177302385">(617) 730-2385</a>
                </li>
              </ul>
              <h3 className={cl.contacts__subtitle}>Senior Staff</h3>
              <p className={cl.contacts__contact}>
                Library Director: <span>Amanda Hirst</span>
              </p>
            </div>
            <div className={cl.contacts__column}>
              <div className={cl.contacts__map}>
                <img alt="map" src={mapImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

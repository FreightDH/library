import type { FC, ReactElement } from 'react';

import { cn } from '@/shared/lib';

import { FooterSocial } from './UI/FooterSocial';
import { facebookIcon, instagramIcon, twitterIcon } from './assets';
import cl from './Footer.module.scss';

const footerSocials = [
  {
    name: 'twitter',
    href: 'https://twitter.com/?lang=ru',
    icon: twitterIcon,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/',
    icon: instagramIcon,
  },
  {
    name: 'facebook',
    href: 'https://ru-ru.facebook.com/',
    icon: facebookIcon,
  },
];

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}>
          <div className={cl.footer__row}>
            <div className={cl.footer__column}>
              <p className={cl.footer__text}>
                <a
                  href="https://www.google.com/maps/place/286+Cadman+Plaza+W,+Brooklyn,+NY+11201,+%D0%A1%D0%A8%D0%90/@40.6958972,-73.9909292,17.83z/data=!4m10!1m2!2m1!1s286+Cadman+Plaza,+New+York,+NY+11238,+United+States!3m6!1s0x89c25a49b649b8c3:0x6342a2291cea2e!8m2!3d40.6956458!4d-73.9912976!15sCjMyODYgQ2FkbWFuIFBsYXphLCBOZXcgWW9yaywgTlkgMTEyMzgsIFVuaXRlZCBTdGF0ZXOSAQpzdWJwcmVtaXNl4AEA!16s%2Fg%2F11s2lgz8ns?entry=ttu"
                  rel="noopener"
                  target="blank"
                >
                  286 Cadman Plaza, New York, NY 11238, United States
                </a>
              </p>
              <div className={cl.footer__icons}>
                {footerSocials.map(({ href, name, icon }) => (
                  <FooterSocial key={name} href={href} icon={icon} name={name} />
                ))}
              </div>
            </div>
            <div className={cn(cl.footer__column, {}, [cl.column__right])}>
              <p className={cl.footer__text}>
                Mon - Fri <br />
                08:00 am - 07:00 pm
              </p>
              <p className={cl.footer__text}>
                Sat - Sun <br />
                10:00 am - 06:00 pm
              </p>
            </div>
          </div>
          <div className={cl.footer__divider}></div>
          <div className={cl.footer__row}>
            <p className={cl.footer__copyright}>
              <a href="https://github.com/FreightDH" rel="noopener noreferrer" target="_blank">
                FreightDH
              </a>{' '}
              © 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

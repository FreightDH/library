import type { ComponentPropsWithRef, FC, ReactElement } from 'react';
import cl from './FooterSocial.module.scss';

interface FooterSocialProps extends ComponentPropsWithRef<'a'> {
  icon: string;
  name: string;
}

export const FooterSocial: FC<FooterSocialProps> = ({ href, icon, name, ...linkProps }): ReactElement => {
  return (
    <div className={cl.link}>
      <a href={href} rel="noopener" target="blank" {...linkProps}>
        <img alt={`${name}-icon`} src={icon} />
      </a>
    </div>
  );
};

export default FooterSocial;

import type { FC, ReactElement } from 'react';

import { SectionTitle } from '@/shared/UI/SectionTitle';

import productsInfo from './productsInfo';
import { ProductsColumn } from './UI/ProductsColumn';
import cl from './ShopSection.module.scss';

export const ShopSection: FC = (): ReactElement => {
  return (
    <section className={cl.shop} id="shop">
      <div className="shop__container">
        <div className={cl.shop__body}>
          <SectionTitle>Coffee Shop</SectionTitle>
          <p className={cl.shop__text}>
            In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and
            friendly conversation. You can get a favorite book and read in coffee shop. Our barista to cook
            you best coffee, and also you can try desserts from bakery.
          </p>
          <div className={cl.shop__products}>
            {productsInfo.map(({ title, products }, index) => (
              <ProductsColumn
                key={title}
                isColumnRight={index === productsInfo.length - 1}
                products={products}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

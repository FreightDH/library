import type { FC, ReactElement } from 'react';

import type { ProductInfo } from '@/shared/api/types';
import { cn } from '@/shared/lib';

import { ProductItem } from './ProductItem';
import cl from './ProductsColumn.module.scss';

interface ProductsColumnProps {
  title: string;
  products: ProductInfo[];
  isColumnRight: boolean;
}

export const ProductsColumn: FC<ProductsColumnProps> = ({ title, products, isColumnRight }): ReactElement => {
  return (
    <div className={cn(cl.column, { [cl.column__right]: isColumnRight })}>
      <h3 className={cl.column__title}>{title}</h3>
      <ul className={cl.column__list}>
        {products.map((product) => (
          <ProductItem key={product.name} isColumnRight={isColumnRight} product={product} />
        ))}
      </ul>
    </div>
  );
};

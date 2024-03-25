import type { FC, ReactElement } from 'react';

import type { ProductInfo } from '@/shared/api/types';
import { cn } from '@/shared/lib';

import cl from './ProductsItem.module.scss';

interface ProductsItemProps {
  product: ProductInfo;
  isColumnRight: boolean;
}

export const ProductsItem: FC<ProductsItemProps> = ({ product, isColumnRight }): ReactElement => {
  const { name, price } = product;
  return (
    <li className={cl.product}>
      <div className={cn(cl.product__name, { [cl.right]: isColumnRight })}>{name}</div>
      <div className={cl.product__divider}></div>
      <div className={cl.product__cost}>{price}</div>
    </li>
  );
};

type Season = 'winter' | 'spring' | 'summer' | 'autumn';

type BookInfo = {
  title: string;
  author: string;
  text: string;
  image: string;
};

type ProductInfo = {
  name: string;
  price: string;
};

export type { Season, BookInfo, ProductInfo };

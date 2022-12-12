import { category } from './category';

export interface beverage {
  id: number;
  name: string;
  company: string;
  abv: string;
  contents: string;
  imageUrl: string;
  category: category;
}

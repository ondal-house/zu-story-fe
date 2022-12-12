import { category } from './category';
import { user } from './user';

export interface board {
  id: number;
  title: string;
  contents: string;
  writerInfo: user;
  category: category;
}

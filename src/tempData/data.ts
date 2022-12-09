export interface board {
  id: number;
  title: string;
  contents: string;
  writerInfo: user;
  category: category;
}

export interface beverage {
  id: number;
  name: string;
  company: string;
  abv: string;
  contents: string;
  imageUrl: string;
  category: category;
}

export interface category {
  id: number;
  type: string;
  priority?: number;
}

export interface user {
  id: string;
  nickname: string;
  userImageUrl?: string;
}

export const categoryData: category[] = [
  { id: 0, type: '소주' },
  { id: 1, type: '와인' },
  {
    id: 2,
    type: '국내맥주',
  },
  {
    id: 3,
    type: '해외맥주',
  },
  {
    id: 4,
    type: '양주',
  },
  {
    id: 5,
    type: '기타',
  },
];

export const boardData: board[] = [
  {
    id: 0,
    title: 'title1',
    contents: 'content is here.',
    writerInfo: { id: '0', nickname: 'skye', userImageUrl: 'src/image/profile.jpeg' },
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 1,
    title: 'title2',
    contents: 'content is here.',
    writerInfo: { id: '1', nickname: 'branden' },
    category: {
      id: 1,
      type: '와인',
    },
  },
  {
    id: 2,
    title: 'title3',
    contents: 'content is here.',
    writerInfo: { id: '2', nickname: 'kio', userImageUrl: 'src/image/profile.jpeg' },
    category: {
      id: 2,
      type: '국내맥주',
    },
  },
  {
    id: 3,
    title: 'title4',
    contents: 'content is here.',
    writerInfo: { id: '3', nickname: 'bill' },
    category: {
      id: 3,
      type: '해외맥주',
    },
  },
  {
    id: 4,
    title: 'title5',
    contents: 'content is here.',
    writerInfo: { id: '4', nickname: 'rian', userImageUrl: 'src/image/profile.jpeg' },
    category: {
      id: 4,
      type: '양주',
    },
  },
  {
    id: 5,
    title: 'title6',
    contents: 'content is here.',
    writerInfo: { id: '5', nickname: 'garden' },
    category: {
      id: 5,
      type: '기타',
    },
  },
];

export const beverageData: beverage[] = [
  {
    id: 0,
    name: '소주0',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 1,
    name: '소주1',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 2,
    name: '소주2',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 3,
    name: '소주3',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 4,
    name: '소주4',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 5,
    name: '소주5',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
  {
    id: 6,
    name: '소주6',
    company: '하이트 진로',
    abv: '16.0',
    contents: '하이트 진로에서 발매한 참나무통 맑은 이슬',
    imageUrl: 'src/image/soju_image.png',
    category: {
      id: 0,
      type: '소주',
    },
  },
];

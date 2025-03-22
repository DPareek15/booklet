'use server';

import { mockData } from '@/data/mockdata';

export interface BookDataType {
  bookId: string;
  bookName: string;
  authorName: string;
  description: string;
  genre: string;
  tags: string[];
  startDate: Date;
  endDate: Date;
  coverPage: string;
  publisherName: string;
  isbnNumber?: string;
  rating: number;
  review?: string;
  favourite: boolean;
}

export const getBooks = async (): Promise<BookDataType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return Promise.resolve(mockData);
};

export const createBook = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const dataObj = Object.fromEntries(formData);
  console.log(dataObj);
};

export const getBook = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return Promise.resolve(mockData.find((item) => item.bookId === id));
};

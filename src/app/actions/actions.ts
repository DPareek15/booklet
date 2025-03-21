'use server';

import { BookDataType } from '@/components/AddBookForm';
import { mockData } from '@/data/mockdata';

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

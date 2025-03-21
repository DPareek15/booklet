'use client';
import { Carousel } from '@mantine/carousel';
import { BookCard } from './BookCard';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { mockData as data } from '@/data/mockdata';

export function BookCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.bookName}>
      <BookCard bookData={item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '100%' }}
      slideGap={{ base: 2, sm: 'sm' }}
      align="start"
      slidesToScroll={1}
      dragFree
      draggable={false}
      previousControlIcon={
        <IconChevronLeft stroke={2} size={20} color="black" />
      }
      nextControlIcon={<IconChevronRight stroke={2} size={20} color="black" />}
      styles={{
        controls: {
          position: 'absolute',
          top: '102%',
          justifyContent: 'center',
          gap: '5rem',
        },
        control: {
          border: 'solid 1px black',
          borderRadius: '50%',
          height: '2rem',
          width: '2rem',
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

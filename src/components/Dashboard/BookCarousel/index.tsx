'use client';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { BookCard } from './BookCard';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Forests',
    description: 'Best forests to visit in North America',
    categories: ['nature'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Beaches',
    description: 'Hawaii beaches review: better than you think',
    categories: ['beach'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains',
    description: 'Mountains at night: 12 best locations to enjoy the view',
    categories: ['nature'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora',
    description: 'Aurora in Norway: when to visit for best experience',
    categories: ['nature'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Tourism',
    description: 'Best places to visit this winter all over the globe',
    categories: ['tourism'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Volcanoes',
    description: 'Active volcanos reviews: travel at your own risk',
    categories: ['nature'],
  },
];

export function BookCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <BookCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '100%' }}
      slideGap={{ base: 2, sm: 'sm' }}
      align="start"
      slidesToScroll={1}
      draggable={false}
    >
      {slides}
    </Carousel>
  );
}

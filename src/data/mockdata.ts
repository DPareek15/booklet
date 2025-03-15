export interface MockdataType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  startDate: string;
  endDate: string;
}

export const mockData: MockdataType[] = [
  {
    id: 1,
    title: 'The Hobbit',
    description:
      'A fantasy novel about the adventure of Bilbo Baggins, a hobbit who embarks on an epic quest.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
    tags: ['Fantasy', 'Adventure', 'Classic'],
    startDate: '2024-02-01',
    endDate: '2025-03-15',
  },
  {
    id: 2,
    title: '1984',
    description:
      'A dystopian novel by George Orwell that explores totalitarianism and surveillance.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
    tags: ['Dystopian', 'Classic', 'Political'],
    startDate: '2024-01-10',
    endDate: '2024-01-25',
  },
  {
    id: 3,
    title: 'Sapiens: A Brief History of Humankind',
    description:
      'A non-fiction book exploring the history and impact of Homo sapiens.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg',
    tags: ['Non-Fiction', 'History', 'Science'],
    startDate: '2024-03-05',
    endDate: '2024-03-20',
  },
  {
    id: 4,
    title: 'Dune',
    description:
      'A sci-fi epic set in a distant future where noble houses fight for control of a desert planet.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    tags: ['Science Fiction', 'Classic', 'Adventure'],
    startDate: '2024-02-20',
    endDate: '2024-03-10',
  },
  {
    id: 5,
    title: 'To Kill a Mockingbird',
    description:
      'A novel about racial injustice and childhood in the American South.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg',
    tags: ['Classic', 'Historical', 'Drama'],
    startDate: '2024-01-15',
    endDate: '2024-01-30',
  },
  {
    id: 6,
    title: 'Emperors of the Peacock Throne',
    description: 'A memoir of the emperors of the Mughal dynasty.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1345261100i/155153.jpg',
    tags: ['History', 'India', 'War'],
    startDate: '2024-03-01',
    endDate: '2024-03-15',
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    description:
      "A coming-of-age story about Holden Caulfield's experiences in New York.",
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg',
    tags: ['Classic', 'Young Adult', 'Drama'],
    startDate: '2024-02-10',
    endDate: '2024-02-25',
  },
  {
    id: 8,
    title: 'The Great Gatsby',
    description:
      'A critique of the American Dream set in the Roaring Twenties.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg',
    tags: ['Classic', 'Drama', 'Historical'],
    startDate: '2024-01-20',
    endDate: '2024-02-05',
  },
  {
    id: 9,
    title: 'The Martian',
    description: 'A sci-fi novel about an astronaut stranded on Mars.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg',
    tags: ['Science Fiction', 'Survival', 'Adventure'],
    startDate: '2024-03-10',
    endDate: '2024-03-25',
  },
  {
    id: 10,
    title: 'Atomic Habits',
    description:
      'A non-fiction book about building good habits and breaking bad ones.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
    tags: ['Non-Fiction', 'Self-Help', 'Productivity'],
    startDate: '2024-02-05',
    endDate: '2024-02-20',
  },
  {
    id: 11,
    title: 'Pride and Prejudice',
    description:
      'A romantic novel about manners, marriage, and societal expectations.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg',
    tags: ['Classic', 'Romance', 'Historical'],
    startDate: '2024-02-15',
    endDate: '2024-03-01',
  },
  {
    id: 12,
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      'The first book in the Harry Potter series introducing the young wizard.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg',
    tags: ['Fantasy', 'Adventure', 'Young Adult'],
    startDate: '2024-01-05',
    endDate: '2024-01-20',
  },
  {
    id: 13,
    title: 'The Alchemist',
    description: "A philosophical novel about following one's dreams.",
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
    tags: ['Fiction', 'Adventure', 'Philosophy'],
    startDate: '2024-03-15',
    endDate: '2024-03-30',
  },
  {
    id: 14,
    title: 'The Hunger Games',
    description:
      'A post-apocalyptic novel about a girl having to fight in an arena for survival.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg',
    tags: ['Post-Apocalyptic', 'Romance', 'Survival'],
    startDate: '2024-02-08',
    endDate: '2024-02-22',
  },
  {
    id: 15,
    title: 'Eragon',
    description:
      'An orphan a dragon egg and has to run for his life with an unlikely mentor.',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366212852i/113436.jpg',
    tags: ['Fantasy', 'Dragons', 'Adventure'],
    startDate: '2024-01-15',
    endDate: '2024-01-30',
  },
];

import { BookDataType } from '@/components/AddBookForm';

export interface MockdataType {
  id: string;
  bookName: string;
  description: string;
  image: string;
  tags: string[];
  startDate: string;
  endDate: string;
}

export const mockData: BookDataType[] = [
  {
    bookId: '1b5b83c1-c5d9-4ac9-8f27-b82a5a22a136',
    bookName: 'The Hobbit',
    authorName: 'J. R. R. Tolkien',
    description:
      'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.',
    genre: 'Fantasy',
    tags: ['Fantasy', 'Adventure', 'Classic'],
    startDate: new Date('2024-02-01'),
    endDate: new Date('2025-03-15'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
    publisherName: 'Houghton Mifflin',
    rating: 3.5,
    review:
      'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.',
    favourite: false,
  },

  {
    bookId: '7322bdff-f4d3-4713-a844-049d1ad21fd4',
    bookName: '1984',
    authorName: 'George Orwell',
    description:
      "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality.",
    genre: 'Dystopian',
    tags: ['Dystopian', 'Classic', 'Political'],
    startDate: new Date('2024-01-10'),
    endDate: new Date('2024-01-25'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
    publisherName: 'Plume',
    isbnNumber: '9780452284234',
    rating: 3,
    review: '',
    favourite: false,
  },
  {
    bookId: '477929a0-86ad-4e37-9881-18f2847c78fc',
    bookName: 'Sapiens: A Brief History of Humankind',
    authorName: 'Yuval Noah Harari',
    description:
      'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition.\n From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas. Dr. Harari also compels us to look ahead, because over the last few decades humans have begun to bend laws of natural selection that have governed life for the past four billion years. We are acquiring the ability to design not only the world around us, but also ourselves. Where is this leading us, and what do we want to become? Featuring 27 photographs, 6 maps, and 25 illustrations/diagrams, this provocative and insightful work is sure to spark debate',
    genre: 'Science',
    tags: ['Non-Fiction', 'History', 'Science'],
    startDate: new Date('2024-03-05'),
    endDate: new Date('2024-03-20'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg',
    publisherName: 'Vintage',
    rating: 3,
    review: '',
    favourite: false,
  },
  {
    bookId: 'ef026b75-f2de-4efe-bc77-f45f09c9dca3',
    bookName: 'Dune',
    authorName: 'Frank Herbert',
    description:
      'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for... When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.',
    genre: 'Sci-Fi',
    tags: ['Science Fiction', 'Classic', 'Adventure'],
    startDate: new Date('2024-02-20'),
    endDate: new Date('2024-03-10'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    publisherName: 'Ace',
    rating: 4,
    review: '',
    favourite: false,
  },
  {
    bookId: '46c3532a-f5d7-44ba-aed1-a4fafb3e93f1',
    bookName: 'To Kill a Mockingbird',
    authorName: 'Harper Lee',
    description:
      'One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable coming-of-age tale in a South poisoned by virulent prejudice, it views a world of great beauty and savage iniquities through the eyes of a young girl, as her father — a crusading local lawyer — risks everything to defend a black man unjustly accused of a terrible crime.',
    genre: 'Drama',
    tags: ['Classic', 'Historical', 'Drama'],
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-30'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg',
    publisherName: 'Harper Perennial Modern Classics',
    rating: 3.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '68400b1a-0bd8-41bd-bd00-70141975a383',
    bookName: 'Emperors of the Peacock Throne',
    authorName: 'Abraham Eraly',
    description:
      'In December 1525, Zahir-ud-din Babur, descended from Chengiz Khan and Timur Lenk, crossed the Indus river into the Punjab with a modest army and some cannon. At Panipat, five months later, he fought the most important battle of his life and routed the mammoth army of Sultan Ibrahim Lodi, the Afghan ruler of Hindustan. Mughal rule in India had begun. It was to continue for over three centuries, shaping India for all time.\n In this definitive biography of the great Mughals, Abraham Eraly reclaims the right to set down history as a chronicle of flesh-and-blood people. Bringing to his task the objectivity of a scholar and the high imagination of a master storyteller, he recreates the lives of Babur, the intrepid pioneer; the dreamer Humayun; Akbar, the greatest and most enigmatic of the Mughals; the aesthetes Jehangir and Shah Jahan; and the dour and determined Aurangzeb.',
    genre: 'History',
    tags: ['History', 'India', 'War'],
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-15'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1345261100i/155153.jpg',
    publisherName: 'Penguin Books India',
    rating: 3.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '94df28a2-2a0d-4d2e-b037-d422ec47ae2c',
    bookName: 'The Catcher in the Rye',
    authorName: 'J. D. Salinger',
    description:
      "It's Christmas time and Holden Caulfield has just been expelled from yet another school... Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.",
    genre: 'Young Adult',
    tags: ['Classic', 'Young Adult', 'Drama'],
    startDate: new Date('2024-02-10'),
    endDate: new Date('2024-02-25'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg',
    publisherName: 'Back Bay Books',
    rating: 2.5,
    review: '',
    favourite: false,
  },
  {
    bookId: 'b9afeee2-9875-46ff-bb00-0d2315ffec73',
    bookName: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    description:
      'The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.',
    genre: 'Classical',
    tags: ['Classic', 'Drama', 'Historical'],
    startDate: new Date('2024-01-20'),
    endDate: new Date('2024-02-05'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg',
    publisherName: 'Scribner',
    rating: 2.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '0041d97d-8751-4414-a512-f285e0a5cf9f',
    bookName: 'The Martian',
    authorName: 'Andy Weir',
    description:
      'Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he’s sure he’ll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive. Chances are, though, he won’t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first. But Mark isn’t ready to give up yet. Drawing on his ingenuity, his engineering skills — and a relentless, dogged refusal to quit — he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him?',
    genre: 'Sci-Fi',
    tags: ['Science Fiction', 'Survival', 'Adventure'],
    startDate: new Date('2024-03-10'),
    endDate: new Date('2024-03-25'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg',
    publisherName: 'Ballantine Books',
    rating: 4.5,
    review: '',
    favourite: false,
  },
  {
    bookId: 'e2d5910a-b1c2-4ddd-9168-3db31ff47ef1',
    bookName: 'Atomic Habits',
    authorName: 'James Clear',
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.",
    genre: 'Self-Help',
    tags: ['Non-Fiction', 'Self-Help', 'Productivity'],
    startDate: new Date('2024-02-05'),
    endDate: new Date('2024-02-20'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
    publisherName: 'Avery',
    rating: 2,
    review: '',
    favourite: false,
  },
  {
    bookId: '8596107c-1d2e-49b7-9ade-7ee96eedac72',
    bookName: 'Pride and Prejudice',
    authorName: 'Jane Austen',
    description:
      "Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
    genre: 'Classical',
    tags: ['Classic', 'Romance', 'Historical'],
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-03-01'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg',
    publisherName: 'Peter Pauper Press',
    rating: 3.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '0c925b71-bbf3-4770-833f-f13481146ea5',
    bookName: "Harry Potter and the Sorcerer's Stone",
    authorName: 'J. K. Rowling',
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    genre: 'Fantasy',
    tags: ['Fantasy', 'Adventure', 'Young Adult'],
    startDate: new Date('2024-01-05'),
    endDate: new Date('2024-01-20'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg',
    publisherName: 'Pottermore Publishing',
    rating: 4.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '5b668dc4-486a-486d-8c0a-0e16e9af641b',
    bookName: 'The Alchemist',
    authorName: 'Paulo Coelho',
    description:
      "Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
    genre: 'Adventure',
    tags: ['Fiction', 'Adventure', 'Philosophy'],
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-30'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
    publisherName: 'HarperOne',
    rating: 4,
    review: '',
    favourite: false,
  },
  {
    bookId: '7980d75a-d126-4ce3-a57f-60386e979087',
    bookName: 'The Hunger Games',
    authorName: 'Suzanne Collins',
    description:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
    genre: 'Dystopian',
    tags: ['Post-Apocalyptic', 'Romance', 'Survival'],
    startDate: new Date('2024-02-08'),
    endDate: new Date('2024-02-22'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg',
    publisherName: 'Scholastic Press',
    rating: 4.5,
    review: '',
    favourite: false,
  },
  {
    bookId: '2b4ac8dd-67e0-4782-93fb-ea40593143de',
    bookName: 'Eragon',
    authorName: 'Christopher Paolini',
    description:
      'When Eragon finds a polished blue stone in the forest, he thinks it is the lucky discovery of a poor farm boy; perhaps it will buy his family meat for the winter. But when the stone brings a dragon hatchling, Eragon soon realizes he has stumbled upon a legacy nearly as old as the Empire itself. Overnight his simple life is shattered, and he is thrust into a perilous new world of destiny, magic, and power. With only an ancient sword and the advice of an old storyteller for guidance, Eragon and the fledgling dragon must navigate the dangerous terrain and dark enemies of an Empire ruled by a king whose evil knows no bounds. \nCan Eragon take up the mantle of the legendary Dragon Riders? The fate of the Empire may rest in his hands.',
    genre: 'Fantasy',
    tags: ['Fantasy', 'Dragons', 'Adventure'],
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-30'),
    coverPage:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366212852i/113436.jpg',
    publisherName: 'Alfred A. Knopf',
    rating: 4.5,
    review: '',
    favourite: false,
  },
];

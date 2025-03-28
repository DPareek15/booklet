import { getBook } from '@/app/actions/bookActions';
import BookDisplayScreen from '@/components/RecordsScreen/BookDisplayScreen';
import { redirect } from 'next/navigation';

type ShowBookProps = {
  params: Promise<{ id: string }>;
};

async function ShowBook({ params }: Readonly<ShowBookProps>) {
  const bookId = (await params).id;
  const bookData = await getBook(bookId);
  if (!bookData) redirect('/');
  return (
    <div>
      <BookDisplayScreen bookData={bookData} />
    </div>
  );
}

export default ShowBook;

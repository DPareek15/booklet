import { getBook } from '@/app/actions/actions';
import BookDisplayScreen from '@/components/RecordsScreen/BookDisplayScreen';
import { redirect } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

async function page({ params }: Props) {
  const bookId = (await params).id;
  const bookData = await getBook(bookId);
  if (!bookData) redirect('/');
  return (
    <div>
      <BookDisplayScreen bookData={bookData} />
    </div>
  );
}

export default page;

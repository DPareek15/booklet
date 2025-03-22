import { getBook } from '@/app/actions/bookActions';
import AddBookForm from '@/components/AddBookForm';
import { redirect } from 'next/navigation';

type EditBookProps = {
  params: Promise<{ id: string }>;
};

async function EditBook({ params }: Readonly<EditBookProps>) {
  const bookId = (await params).id;
  const bookData = await getBook(bookId);
  if (!bookData) redirect('/');

  return (
    <div className={`flex flex-col h-full max-w-[1500px] p-10 m-15`}>
      <AddBookForm bookData={bookData} />
    </div>
  );
}

export default EditBook;

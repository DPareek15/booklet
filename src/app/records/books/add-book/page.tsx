import AddBookForm from '@/components/AddBookForm';

const AddBook = () => {
  return (
    <div className={`flex flex-col h-full max-w-[1500px] m-15`}>
      <AddBookForm bookData={null} />
    </div>
  );
};

export default AddBook;

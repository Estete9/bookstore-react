import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Root() {
  return (
    <>
      <BookList />
      <div className="formSeparator" />
      <BookForm />
    </>
  );
}

export default Root;

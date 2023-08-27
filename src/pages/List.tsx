import BookCard from "../components/BookCard";
import TopBar from "../components/TopBar";
import BookList from '../components/api/BookList.json';

function List(){
    return (
        <div>
            <TopBar />
            <BookCard data={BookList.bookList} />
        </div>
    );
}

export default List;

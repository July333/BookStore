import React, { useState } from 'react';
import Book from './Book';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookList() {
    
    const [myList, setMyList] = useState([]);
    fetch(`https://kob-e.github.io/react-book-store/books-data/books.json`)
        .then(res => res.json()).then(booksData => {
            setMyList(booksData);
        });
    return (
        <div className='container'>
            <div className='row'>
            {myList.map((b,i) =>
                <Book {...b} 
            key={i}/>
            )}
            </div>
        </div>
    );
}
export default BookList;
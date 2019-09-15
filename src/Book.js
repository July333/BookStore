import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Book(props) {
    const link = `https://kob-e.github.io/react-book-store/books-data/` + props.imageLink;
    function ClickHandler() {
        console.log(props);
        
    }
    return (
        <div className="card border-info mb-3 col-auto" style={{ maxWidth: "20rem" }}>
            <h5 className="card-header" style={{ minWidth: "10rem" }}>{props.title}</h5>
            <img style={{ width: "150px" }} src={link} alt="hi" className="img-fluid" />
            <div className="card-body">
                <h3>The price is: {'50'}</h3>
                <button onClick={ClickHandler} className="myB btn btn-info">add to cart</button>
            </div>
        </div>
    );
}
export default Book;
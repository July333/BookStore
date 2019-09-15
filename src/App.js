import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num, setNum] = useState(5);

  const changeNumEvent = (num) => {
    setNum(num);
  }
  return (
    <div>
      <header className="jumbotron">
        <h1 className="display-3">My Store</h1>
      </header>
      <section className='container'>
        <div className='row'>
          <Form changeNum={changeNumEvent} num={num} />
          <BookList num={num} className='col-9' />
          <aside className='col-3'>

          </aside>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header className="jumbotron">
        <h1 className="display-3">My Store</h1>
      </header>
      <section className='container'>
        <div className='row'>
          <BookList className='col-9' />
          <aside className='col-3'>
            
          </aside>
        </div>
      </section>
    </div>
  );
}

export default App;

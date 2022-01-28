import React from 'react';
import {Navbar} from './components'
import {Header, Footer, Article } from './components'
import './App.css';

const App = () => (

    <div className="App">
      <div className="gradient__main">
        <Navbar/>
        <Header/>
      </div>
      <Article/>
      <Footer/>
      </div>
  );


export default App;

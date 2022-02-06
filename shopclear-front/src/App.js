import React from 'react';
import {Navbar} from './components';
import {Header} from './containers';
import './App.css';

const App = () => (

    <div className="App">
      <div className="gradient__main">
      <Navbar/>
      </div>
      
      <Header/>
      {/* <Article/> */}
      {/* <Footer/> */}
      </div>
  );


export default App;

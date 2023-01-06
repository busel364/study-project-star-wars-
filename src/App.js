import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState } from 'react';
import { defaultHero } from './utils/constants';

const App = props => {
  const [hero, setHero] = useState(defaultHero);
  return (
    <div className="container-fluid">
      <Header hero={hero} />
      <Main changeHero={setHero} hero={hero}/>
      <Footer />
    </div>
  );


}

export default App;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './style/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


const App = () => {
  const [route, setRoute] = useState('landing');

  return (
    <div className="App">
      <Header route={route} setRoute={setRoute} />
      <main className="centered">
        <Route exact path="/" component={Landing} />
        <Route path="/library" render={(props) => (<Library setRoute={setRoute} {...props} />)} />
        <Route path="/album/:slug" component={Album} />
      </main>
    </div>
  );

}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import View from './components/view';

const App = ({ match: { params } }) => {
  return (
    <div className="App">
      <Header className={"header"} isLoggedIn={false} title={"Art Portfolio Site"}/>
      <View filter={params.filter || 'Home'} />
    </div>
  )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import MyButton from "./components/MyButton";
import Image from "./components/Image";
import List from "./components/List";
import { Practicerender } from './components/Practicerender';
import Pevents from './components/Pevents';
import Screenupdate from './components/Screenupdate';
import CountTogether from './components/CountTogether';

import Test from './components/Test';
//import Screenupdate1 from './components/Screenupdate1';

import Board from './components/Board';
import Block from './components/Block';




import "./App.css";



function App() {
  return (
    <div className="App">
      <h1>React Typescript Practice</h1>
      <p>Initial practice of react: <User name="ansar" age={32} />
      <User name="jhon" age={31} /> </p>
      <p>Button in react: <MyButton/> </p>
      <br/>
      <br/>
      <p>Image in react: <Image/> </p> 
      <p>Listing in react: <List/></p> 
      <p>Rendering in react: <Practicerender/></p> 
      <p>Event Handling in react: <Pevents/></p> 
      <p><Screenupdate/></p> 
      <p><CountTogether/></p> 
      <p> <Board /></p>




    </div>
  );
}

export default App;

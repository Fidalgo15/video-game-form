import React from 'react';
import './App.css';
import CreateGames from './components/CreateGames'
import Home from './components/Home'
import { Router } from '@reach/router'
import {Nav} from './components/Nav'
import styled from 'styled-components'

const Header = styled.header`
  background: #ffffff;
  padding: 2px;
`

function App() {
  return (
    <>
    <Header />
    <Nav />
    <div className="App">
      <Router>
        <Home path="/"/>
        <CreateGames path="/create-games"/>
      </Router>
    </div>
    </>
  );
}

export default App;

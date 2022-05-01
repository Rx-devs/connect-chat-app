import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Chat from './pages/Chat';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/chats' component={Chat} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

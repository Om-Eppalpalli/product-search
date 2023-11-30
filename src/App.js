import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import SearchPage from './components/SearchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SearchPage />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

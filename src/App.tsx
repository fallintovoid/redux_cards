import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Constructor from './pages/Constructor/Constructor';
import FolderPage from './pages/FolderPage/FolderPage';
import Home from './pages/Home/Home';
import Layout from './ui/Layout/Layout';
import SwapCard from './ui/SwapCard/SwapCard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/constructor' element={<Constructor/>}/>
          <Route path='/:folderId' element={<FolderPage/>}/>
        </Routes>
      </Layout>
      
    </BrowserRouter>
  );
}

export default App;

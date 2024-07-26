import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import {SearchFeed} from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'

x

function App() {
  return (
    <BrowserRouter>

    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>}></Route>
        <Route  path='/video/:id' element={<VideoDetail/>}></Route>
        <Route  path='/channel/:id' element={<ChannelDetail/>}></Route>
        <Route  path='/search/:searchterm' element={<SearchFeed/>}></Route>
      </Routes>
    </Box>
    
    </BrowserRouter>
  );
}

export default App;

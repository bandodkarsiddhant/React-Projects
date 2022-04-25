import React from 'react'
import {BrowserRouter as Router,Routes,Route} from"react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import CreatePost from './Components/Posts/CreatePost';
import DeletePost from './Components/Posts/DeletePost';
import EditPost from './Components/Posts/EditPost';
import Posts from './Components/Posts/Posts';

function App() {
  return <Router>
    <Navbar />
    <Routes>

      <Route path='/' element={<Posts />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/edit-post/:id' element={<EditPost />} />
      <Route path='/delete-post/:id' element={<DeletePost/>} />
    </Routes>

  </Router>
}

export default App;

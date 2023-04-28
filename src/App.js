import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import NewNotePage from './Pages/NewNotePage';
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter basename='/noteclone'>
      <Navbar />
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/new/' Component={NewNotePage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
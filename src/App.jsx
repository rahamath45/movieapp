
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
 

  return (
    <>
      <nav className='app'>
        <LiveTvIcon></LiveTvIcon>
           <Link to="/" className='link'>OMDb Movie
           </Link>
      </nav>
          <Routes>
            <Route exact path="/" element={<Search/>} />
            <Route path="/movie/:id" element={<Details/>} />
          </Routes>
    </>
  )
}

export default App

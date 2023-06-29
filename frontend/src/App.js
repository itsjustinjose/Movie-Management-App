import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Viewmovies from './components/Viewmovies';
import Addmovie from './components/Addmovie';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewmovies/>}/>
        <Route path='/add' element={<Addmovie data={{"MovieName":"",
    "Actor":"",
    "Actress":"",
    "Director":"",
    "ReleasedYear":"",
    "Camera":"",
    "Producer":"",
    "Language":""}} method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;

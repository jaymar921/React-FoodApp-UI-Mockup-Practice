import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Navigation />
    </>
  );
}

export default App;

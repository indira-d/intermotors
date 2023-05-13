
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import CataloguePage from './Pages/CataloguePage/CataloguePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/catalogue' element={<CataloguePage />} />
  
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import CataloguePage from './Pages/CataloguePage/CataloguePage';
import CarDetails from './Pages/CarDetails/CarDetails';
import VincodeRequest from './Pages/VincodeRequest/VincodeRequest';
import VincodeResponce from './Pages/VincodeResponce/VincodeResponce';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/catalogue' element={<CataloguePage />} />
        <Route path='/car/:id' element={<CarDetails />} />
        <Route path='/vincode-request' element={ <VincodeRequest /> } />
        <Route path='/vincode-responce' element={ <VincodeResponce /> } />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

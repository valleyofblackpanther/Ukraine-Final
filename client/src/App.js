
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listings from './components/lists/lists'
import Creating from './components/lists/create';
import Land from './components/lists/landing';
import SearchedResults from './components/lists/CitSer';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <div>
      <Routes> 
        <Route path="/" element={<Land/>}/>
        <Route path="/create-form" element={<Creating/>}/>
        <Route path="/list-form" element={<Listings/>}/>
        <Route path="/search" element={<SearchedResults/>} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/Footer';
import { NavBar } from './componentes/NavBar';
import { Home } from './pages/Home';
import { Tabla } from './pages/Tabla';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home />}/>
          <Route path='*' element={<Home/>}/>
          <Route path='/tabla' element={<Tabla/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

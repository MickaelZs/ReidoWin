import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Calculadora from './pages/calculadora';

export default function Index(){
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/Calculadora' element={< Calculadora />}/>
    </Routes>
    </BrowserRouter>
  
)
}
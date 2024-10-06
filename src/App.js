
import './App.css';
import Home from './screens/Home';
import About from './screens/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login'
import Signup from './screens/Signup'
import { CardProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
function App() {
  return (
    <CardProvider>

   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        {/* <Route exact path='/aboutus' element={<About/>}></Route> */}
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
      
      </Routes>
    </div>
   </Router>
    </CardProvider>
  );
}

export default App;

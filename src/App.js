
import './App.css';
import {Link,NavLink,Route,Routes} from 'react-router-dom';
import Signup from './Validations/Signup';
import Login from './Validations/Login';
import Home from './Home';
import DashBoard from './Components/DashBoard';
import Shopping from './Components/Shopping';
function App() {
  return (
    <div className="App">
      {/* hello app */}
      {/* <div className = "justify-content-evenly m-4 p-2" style = {{display:"flex"}}>
      <Link className='btn btn-dark text-danger' to='/login'>Login</Link>
      <Link className='btn btn-dark text-info' to='/signup'>Signup</Link>
      
      </div> */}
      {/* <Signup></Signup> */}
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path = '/signup' element={<Signup></Signup>}></Route>
      <Route path ='/login' element = {<Login></Login>}></Route>
      <Route path ='/dashboard/' element = {<DashBoard></DashBoard>}></Route>
      <Route path ='/dashboard/:name' element = {<DashBoard></DashBoard>}></Route>
      <Route path ='/shopping' element = {<Shopping></Shopping>}></Route>
      </Routes>
    </div>
  );
}

export default App;

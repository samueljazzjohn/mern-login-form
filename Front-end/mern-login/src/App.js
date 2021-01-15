import logo from './logo.svg';
import './App.css';
import Reg from './registration';
import Login from './login';
import Home from './Home'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    // <BrowserRouter className='h-100'>
    // <div className='container h-100 m-5'>
    //   <div className='row h-100'>
    //     <div className='col-4 my-auto'>
    //       <div className='row justify-content-center m-2'>
    //       <Link to='/register' className='btn btn-primary pl-3 pr-3 m-2 '>Register</Link>
    //       </div>
    //       <div className='row justify-content-center m-2'>
    //       <Link to='/login' className='btn  btn-primary m-2 pl-4 pr-4'>Login</Link>
    //       </div>
    //       </div>
    //       <div className='col-8'>
    //         <Switch>
    //           <Route path='/register'>
    //             <Reg />
    //           </Route>
    //           <Route path='/login'>
    //             <Login />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </div>
    // </div>

    // </BrowserRouter>

    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Register" component={Reg}></Route>
      <Route exact path="/Login" component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;

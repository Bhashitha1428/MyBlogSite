import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import {
BrowserRouter as Router,
Route,
Switch
}from 'react-router-dom'


function App() {
  const user=false
  return (
    <div>
         <Router>
      <Topbar/>

   
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/register'>{user?<Home/> : <Register/> }</Route>
          <Route path='/login'>{user ? <Home/> : <Login/> }</Route>
          <Route path='/write'>{user ? <Write/> : <Register/>} </Route>
          <Route path='/settings'> {user ? <Settings/>:<Register/>}</Route>
          <Route path='/post/:postId'><Single/></Route>
         
        </Switch>
      </Router>



      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Settings/> */}
      {/* <Login/> */}
    
      
    </div>
  );
}

export default App;

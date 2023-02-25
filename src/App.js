import {Route,Routes} from "react-router-dom"
import Topbar from './topbar/topbar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import Single from './pages/Single/single';
function App() {
  const user = true;
  return (
    <div className="App">
      <Topbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route exact path="/" element={<Home />} />
        {/*WELL IF YOU WANT USER TO ENTER DIRECTLY TO HOME PAGE IF HE HAS LOGGED IN, THEN IT CAN BE DONE AS PUT => b4 return(), const user = true,,, and 
        <Route path = "/register" element ={ user ? </Home> : </Register>} aur ese hi krenge.......*/}
        <Route path="/register" element={ <Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/write" element={ <Write/>} />
        <Route exact path="/setting" element= {<Setting/>} />
        <Route exact path="/post/:postId" element = {<Single/>} />
      </Routes>
        
      

    </div>

  
    
  );
}
export default App
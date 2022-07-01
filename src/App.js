import {Routes,Route} from "react-router-dom"
import GsignUP from "./components/GsignUP.jsx";
import Home from "./components/Home";
import Inoventary from "./components/Inoventary";
import LoginUP from "./components/LoginUP";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";



function App() {
  return (
    <div className="App">
          <center>
            <Navbar/>
         <Routes>
          <Route path ="/" element={<Home/>}/>   
          <Route path ="/signup" element={<SignUp/>}/>    
          <Route path ="/inoventary" element={<Inoventary/>}/>   
          <Route path ="/gsignup" element={<GsignUP/>}/>   
          <Route path ="/loginup" element={<LoginUP/>}/>   
          
         </Routes>
          </center>
    </div>
  );
}

export default App;


//@mui/icons-material/LockOutlined
//@mui/material/styles
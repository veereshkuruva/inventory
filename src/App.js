import {Routes,Route} from "react-router-dom"

import Inoventary from "./components/Inoventary";
import Navbar from "./components/Navbar";
import Todo1 from "./components/Todo1.jsx";



function App() {
  return (
    <div className="App">
          <center>
            <Navbar/>
         <Routes>
         
          <Route path ="/inoventary" element={<Inoventary/>}/>   
        
          <Route path ="/todo1" element={<Todo1/>}/>   
         </Routes>
          </center>
    </div>
  );
}

export default App;


//@mui/icons-material/LockOutlined
//@mui/material/styles
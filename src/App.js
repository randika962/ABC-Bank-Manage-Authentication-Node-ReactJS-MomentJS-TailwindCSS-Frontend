import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./components/Login";
import Customerdash from "./components/Customerdash";
import Admin from "./components/Admin";
import Employeedash from "./components/Employeedash";
import Withdrawsection from "./components/Withdrawsection";
import Depositsection from "./components/Depositsection";
import Profile from "./components/Profile";
import Createnewaccount from  "./components/Createnewaccount";
import Account from "./components/Account";
import Createnewuser from "./components/Createnewuser";
import Alltransaction from "./components/Alltransactions";
import User from "./components/User";
import Emplouser from "./components/Emplouser";
import Emploaccount from "./components/Emploaccount";
import Emplotransaction from "./components/Emplotransaction";
import Mytransaction from "./components/Mytransaction";

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/customerdash" element={<Customerdash/>} />
    <Route path="/emplyoeedash" element={<Employeedash/>}/>
    <Route path="/withdrawsection" element={<Withdrawsection/>}/>
    <Route path="/depositsection" element={<Depositsection/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/createnewaccount" element={<Createnewaccount/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/createnewuser" element={<Createnewuser/>}/>
    <Route path="/alltransaction" element={<Alltransaction/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/emplouser" element={<Emplouser/>}/>
    <Route path="/emploaccount" element={<Emploaccount/>}/>
    <Route path="/emplotransaction" element={<Emplotransaction/>}/>
    <Route path="/mytransaction" element={<Mytransaction/>}/>


   </Routes>
   </BrowserRouter>
   </>
  );
}


export default App;

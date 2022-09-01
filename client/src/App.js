import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login/Login";
import CreateQuiz from "./Pages/CreateQuiz";
import AdminProtectedRoute from "./Components/AdminProtected";
import {Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import AttemptQuiz from "./Pages/AttemptQuiz";
import Navbar from "./Components/Navbar";
import { Logout } from "./Pages/Logout/Logout";
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Login/>}/>  
        <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />}/>
        <Route path="/profile" element={<ProtectedRoute Component={Profile} />}/>
        <Route path="/create" element={<AdminProtectedRoute Component={CreateQuiz} />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/attemptquiz" element={<AttemptQuiz/>}/>
       </Routes>
    </div>
  );
}

export default App;

//https://quizsystemapp.herokuapp.com/quiz


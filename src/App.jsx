import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Nav from './component/Nav'
import Login from './component/Login'
import Registration from './component/Registration'
import Home from './component/Home'
import Footer from './component/Footer'
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const [isauth, setisauth] = useState(localStorage.getItem("isauth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setisauth(false);
      window.location.pathname = "/";
    });
  };
  return (
    <BrowserRouter>
    <nav className="navbar">
      <Link to="/" className="logo">DevCareer</Link>
      <ul className="nav-links">
        {isauth ?(
          <>
          <li><Link to="/reg">Registration</Link></li>
        <li onClick={signUserOut}><Link to="/login">LogOut </Link></li>
          </>
        ):(
          <>
          <li><Link to="/reg">Registration</Link></li>
        <li><Link to="/login">Login Here !</Link></li>
          </>
        )}
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={ <Login setisauth={setisauth} />} />
      <Route path="/reg" element={<Registration isauth={isauth}/>} />
    </Routes>
   <Footer/>
    

    </BrowserRouter>
      
   
  )
}

export default App

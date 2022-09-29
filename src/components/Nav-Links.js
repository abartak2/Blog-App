import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import CreatePost from "../components/CreatePost";
import About from "./About";
import Login from "../components/Login";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Footer from "../components/Footer";
import DeletePost from "../components/DeletePost";


// create links and nav bar and set logic to hide login link if already logged in, create State to pass as props
function NavLink() {
  const [isAuth, setIsAuth] = useState(false);

// create the signout using signout option from Firebase
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login"
    });
  };

  return (
    <Router>
      <nav>
        <Link className="home" to="/"> Home </Link>
        {/* Hide Login link once logged in add sign out option  */}
        {!isAuth ? (
          <Link className="login" to="/login"> Login </Link> 
          ) : (
            <>
            <Link className="createpost" to="/createpost"> Create Post </Link>
            <Link className="about" to="/About"> About </Link>
            <button className="signOut" onClick={ signUserOut }> Logout </button> 
            </>
          )}
      </nav>
      
      <Routes>
        {/* pass state as a prop */}
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth = { isAuth }/>} />
        <Route path="/about" element={<About isAuth = { isAuth }/>} />
        <Route path="/login" element={<Login setIsAuth = { setIsAuth } />} />
      </Routes>
      < Footer />
    </Router>
  );
}

export default NavLink;
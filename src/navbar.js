import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';
import logo from './images/logo.png';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher.js';

function Navbar() {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Firebase listener to check if user is logged in
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        setUserEmail(user.email);
      }
    });

    return () => {
      // Unsubscribe the listener when the component is unmounted
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <>
      <BootstrapNavbar bg="" expand="lg">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} className='ag' alt="logo" />
          </Link>
          <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
          <BootstrapNavbar.Collapse id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  SHOPS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogout}>
                      LOGOUT
                    </button>
                  </li>
                  <li className="nav-item">
                    <p className="user">{userEmail}</p>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      SIGN UP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      LOGIN
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <LanguageSwitcher/>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
    </>
  );
}

export default Navbar;

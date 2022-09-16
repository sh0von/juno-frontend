import React from 'react'
import './Sidenav.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Sidenav = () => {
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('auth-token');
        navigate('/login');
    }


  return (
    <nav className="sidebar close">
      <header>
          <div className="image-text">
              <span className="image">
              </span>

              <div className="text logo-text">
              </div>
          </div>
      </header>

      <div className="menu-bar">

              <ul className="menu-links">
              <li>
                  <a href="/" id="home">
                      <i className ='bx bx-home icon' ></i>
                  </a>
              </li>
                <li>
                  <a href="/" id="home">
                      <i className ='bx bx-user-circle icon' ></i>
                  </a>
              </li>
              

              </ul>
          <div className="bottom-content">
              <li>
                  <a onClick={logout} href="/" id="logout-button">
                      <i className ='bx bx-log-out icon' ></i>
                  </a>
              </li>
              
          </div>
      </div>
  </nav>
  )
}

export default Sidenav
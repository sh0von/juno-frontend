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

    const toggleSideNav = () => {
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav');
        
        sidebar.classList.toggle("close");

        // searchBtn.addEventListener("click" , () =>{
        //     sidebar.classList.remove("close");
        // })
    }

    
    const searchbarClick = () => {
        const body = document.querySelector('body'),
            sidebar = body.querySelector('nav');

        sidebar.classList.remove("close");
    }




  return (
    <nav className="sidebar close">
      <header>
          <div className="image-text">
              <span className="image">
                  <img src={logo} alt=""/>
              </span>

              <div className="text logo-text">
                  <span className="name">D-Tracker</span>
                  <span className="profession">by CryWolf</span>
              </div>
          </div>

          <i onClick={toggleSideNav} className='bx bx-chevron-right toggle'></i>
      </header>

      <div className="menu-bar">
          <div className="menu">

              <li onClick={searchbarClick} className="search-box">
                  <i className ='bx bx-search icon'></i>
                  <input type="text" placeholder="Search..."/>
              </li>

             
          </div>

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
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
function Header(){
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
  return(
      <section>
          <div className='nav'>
              <div className='t_brand'>
                    <h1><Link to="/">Guitar Shop</Link></h1>
              </div>
              <div className='navigate'>
                  <ul>
                      <li><Link  to="/shop">Shop</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li>Contact</li>
                      {Auth.loggedIn() ? (
                          
                          
                          
                          <li> <Link className='divide' to="/" onClick={logout}>
                              Logout</Link>
                              <Link className='divide' to="/profile">Me</Link>
                          </li>
                          
                      ) : (
                          <li>
                         <Link className='divide' to="/login">Login</Link>
                          
                          <Link className='divide' to="/signup">Signup</Link>
                         </li>
                          
                      )}
                    </ul>
              </div>
            

          </div>
      </section>
  );

}

export default Header;
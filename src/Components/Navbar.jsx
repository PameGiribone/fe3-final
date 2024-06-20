import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Components/utils/routes'
import Button from './Button'
import { useDentistaState } from '../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const {state, dispatch} = useDentistaState();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`${state.theme}`}>      
      <div className="dh-nav">
        <span>DH Odonto</span>
      </div>
      <div className='nav-links'>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.favs}>Fav</Link>        
      </div>       
      <Button onClick={toggleTheme}>         
      {state.theme === 'light' ? (          
          <FontAwesomeIcon icon={faMoon} flip="horizontal" style={{ color: "#FFD43B" }} />
        ) : (
          <FontAwesomeIcon  icon={faSun} style={{ color: "#FFD43B" }} />
        )}
      </Button>      
    </nav>
  )
}

export default Navbar
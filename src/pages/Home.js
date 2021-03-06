import React, { useContext } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';

import Search from '../components/Search'
import {Logo} from '../components/Logo'

import ToggleTheme from '../components/ToggleTheme';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { lightTheme } = useContext(ThemeContext);
  const theme = lightTheme ? '' : ' darkmode';
  
  return (
    <div className={"home" + theme}>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>

        </div>
        <div className="home__headerRight">
          <ToggleTheme />
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      
      <div className="home__body">
        <img 
          src={Logo()} alt=""
        />

        <div className="home__inputContainer">
          <Search />
        </div>

      </div>
       
    </div>
  )
}

export default Home

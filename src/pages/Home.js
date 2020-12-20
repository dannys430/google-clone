import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">about</Link>
          <Link to="store">store</Link>

        </div>
        <div className="home__headerRight">
          <Link to="gmail">gmail</Link>
          <Link to="images">images</Link>
          <Link to="grid">grid</Link>
          <Link to="avatar">avatar</Link>
        </div>
      </div>
      
      <div className="home__body">
        
      </div>
       
    </div>
  )
}

export default Home

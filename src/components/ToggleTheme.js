import React, { Component, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import './ToggleTheme.scss'

const ToggleTheme = () => {
	const { toggleTheme, icon } = useContext(ThemeContext);

	return (
    <div>
      <div className='darkmode__button' onClick={toggleTheme}>
        <div>
					{icon
						? <p>&#127770;</p>
						: <p>&#127773;</p>}
				</div>
      </div>
    </div>
	)
}

export default ToggleTheme;
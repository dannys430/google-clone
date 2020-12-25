import React, { Component, createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [lightTheme, setLightTheme] = useState(true);
	const [icon, setIcon] = useState(true);

	const toggleTheme = () => {
		setLightTheme(!lightTheme);
		iconChange()
	}

	const iconChange = () => {
		let newIcon = !icon;
		setIcon(newIcon);
	}

	const { children } = props;
	return (
		<ThemeContext.Provider value={{ lightTheme, toggleTheme, icon }}>
 			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;





// export const themes = {
//   dark: {
//     color: 'white',
//     background: 'black'
//   },
//   light: {
//     color: 'black',
//     background: 'white'
//   } 
// }



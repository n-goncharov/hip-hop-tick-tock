import React, { useEffect, useState } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

const getTheme = () => {
	const theme = `${window?.localStorage?.getItem('theme')}`;

	if (Object.values(themes).includes(theme)) {
		return theme;
	}

	const userMedia = window.matchMedia('(prefers-color-scheme: light)');
	if (userMedia.matches) {
		return "light";
	}

	return "dark";
}

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
	const [theme, toggleTheme] = useState(getTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

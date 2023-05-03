import React from "react";

type Theme = string;
type ThemeContext = { theme: Theme; toggleTheme: React.Dispatch<React.SetStateAction<string>> };

export const themes = {
	dark: 'dark',
	light: 'light'
};

export const ThemeContext = React.createContext<ThemeContext>(
	{} as ThemeContext
);

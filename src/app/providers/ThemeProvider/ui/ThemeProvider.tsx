import React, { FC, useMemo, useState } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps{
    inititalTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        inititalTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(inititalTheme || defaultTheme);
    document.body.className = theme;
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

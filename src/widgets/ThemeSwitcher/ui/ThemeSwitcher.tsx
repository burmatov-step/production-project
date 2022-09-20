import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import LightIcon from 'widgets/assets/icons/theme-light.svg';
import DarkIcon from 'widgets/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps{
    className?: string
}

export const ThemeSwitcher = (props:ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (

        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

import { useState } from "react";

import Sun from "./Icons/Sun";
import Moon from "./Icons/Moon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function(props: Props) {
    const [darkMode, setDarkMode] = useState((localStorage.getItem('theme') ?? '') == 'dark');

    const onClick = function() {
        const html = document.querySelector('html');
        if (html == null) {
            console.warn('HTML element not found?');
            return;
        }

        if (darkMode) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    }

    return (
        <button onClick={onClick} {...props} title='Dark mode toggle button'>
            {darkMode ?
                <Sun className="w-6 h-6 cursor-pointer dark:fill-white fill-black transition-all"/>
            :
                <Moon className="w-6 h-6 cursor-pointer dark:fill-white fill-black transition-all"/>
            }
        </button>
    )
}
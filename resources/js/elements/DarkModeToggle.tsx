import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
                <SunIcon className="w-6 h-6 cursor-pointer"/>
            :
                <MoonIcon className="w-6 h-6 cursor-pointer"/>
            }
        </button>
    )
}
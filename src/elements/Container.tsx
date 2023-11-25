import { Outlet } from "react-router-dom";

// @ts-expect-error - SVG file
import BackgroundTile from '../assets/svgs/background-tile.svg';
import DarkModeToggle from "./DarkModeToggle";

export default function() {
    const style = {
        backgroundImage: `url(${BackgroundTile})`,
        backgroundSize: '750px',
        opacity: '0.1',
    }

    return (
        <main className="min-h-screen relative bg-opacity-50 dark:text-white text-black transition-colors">
            <div className="absolute w-full h-full z-10">
                <DarkModeToggle className="absolute top-8 right-8"/>

                <div className="max-w-3xl mx-2 md:mx-auto py-8 flex flex-col">
                    <Outlet/>
                </div>
            </div>

            <div style={style} className="bg-center bg-repeat min-h-screen absolute h-full w-full z-0"></div>
        </main>
    )
}

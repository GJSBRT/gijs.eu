import { Outlet } from "react-router-dom";

// @ts-expect-error - SVG file
import BackgroundTile from '../assets/svgs/background-tile.svg';

export default function() {
    const style = {
        backgroundImage: `url(${BackgroundTile})`,
        backgroundSize: '750px',
        opacity: '0.1',
    }

    return (
        <main className="min-h-screen relative bg-opacity-50 dark:text-white text-black dark:bg-gray-950 bg-gray-50">
            <div className="absolute w-full h-full z-10">
                <div className="max-w-3xl mx-auto py-8 flex flex-col">
                    <Outlet/>
                </div>
            </div>

            <div style={style} className="bg-center bg-repeat min-h-screen absolute h-full w-full z-0"></div>
        </main>
    )
}

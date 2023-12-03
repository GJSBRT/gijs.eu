// @ts-expect-error - SVG file
import BackgroundTile from '../../assets/svgs/background-tile.svg';
import DarkModeToggle from "./DarkModeToggle";

interface Props {
    children: React.ReactNode
}

export default function(props: Props) {
    const style = {
        backgroundImage: `url(${BackgroundTile})`,
        backgroundSize: '750px',
        opacity: '0.1',
    }

    return (
        <main className="min-h-screen relative bg-opacity-50 dark:text-white text-black transition-colors">
            <div className="absolute w-full z-10 h-screen overflow-y-scroll">
                <DarkModeToggle className="absolute top-4 right-4 p-4"/>

                <div className="max-w-3xl mx-2 md:mx-auto py-8 flex flex-col">
                    {props.children}
                </div>
            </div>

            <div style={style} className="bg-center bg-repeat min-h-screen absolute h-full w-full z-0"></div>
        </main>
    )
}

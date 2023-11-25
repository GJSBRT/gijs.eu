import { Outlet } from "react-router-dom";

export default function() {
    return (
        <main className="dark:bg-gray-950 bg-gray-50 min-h-screen dark:text-white text-black">
            <div className="max-w-3xl mx-auto py-8 flex flex-col">
                <Outlet/>
            </div>
        </main>
    )
}

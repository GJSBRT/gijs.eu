import { Outlet } from "react-router-dom";

export default function() {
    return (
        <main className="bg-gray-950 min-h-screen text-white">
            <div className="max-w-3xl mx-auto py-8 flex flex-col">
                <Outlet/>
            </div>
        </main>
    )
}

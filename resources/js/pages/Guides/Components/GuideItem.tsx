import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

import { Guide } from "../types";

export default function(props: Guide) {
    return (
        <motion.li variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }}>
            <Link href={`/guides/${props.slug}`} className="flex flex-col sm:flex-row gap-4 w-full hover:scale-105 relative text-white sm:text-black sm:dark:text-white transition-all">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg absolute w-full h-full sm:hidden"></div>
                <img src={props.image} alt={props.title} className="sm:h-24 sm:w-32 h-64 w-full object-cover rounded-lg"/>

                <div className="flex flex-col w-full absolute sm:relative p-8 sm:p-0">
                    <h2 className="text-3xl md:text-lg font-semibold sm:font-medium">{props.title}</h2>
                    <p className="text-gray-200 sm:text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 transition-colors text-sm">{props.description}</p>
                </div>
            </Link>
        </motion.li>
    )    
}

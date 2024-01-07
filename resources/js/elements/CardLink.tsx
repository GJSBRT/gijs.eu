import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

interface Props {
    title: string
    description: string
    href: string
}

export default function(props: Props) {
    return (
        <motion.li 
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
            }}
        >
            <Link className="hover:scale-105 transition-all flex flex-col rounded-lg" {...props}>
                <label className="cursor-pointer text-lg font-medium">{props.title}</label>
                <span className="text-gray-700 dark:text-gray-300 transition-colors text-sm">
                    {props.description}
                </span>
            </Link>
        </motion.li>
    )
}

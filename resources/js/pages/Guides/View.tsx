import Markdown from 'react-markdown';
import { motion } from "framer-motion";
import { PageProps } from "@inertiajs/core";
import { Link, usePage } from "@inertiajs/react";

import { Guide } from "./types";
import Title from "./Components/Title";

export default function() {
    const { guide } = usePage<PageProps & {
        guide: Guide;
    }>().props

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <>
            <Link href='/guides' className='sm:w-96 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <Title className="dark:fill-white fill-black transition-all"/>
            </Link>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.img 
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }} 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-96 object-cover object-center rounded-md mt-12"
                />

                <motion.div 
                    className="flex flex-col mt-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                >
                    <h1 className="text-4xl font-bold">{guide.title}</h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{guide.description}</p>
                </motion.div>

                <motion.article 
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                    className="mt-12 prose dark:prose-invert prose-img:rounded-lg"
                >
                    <Markdown>{guide.article}</Markdown>
                </motion.article>
            </motion.div>
        </>
    )
}

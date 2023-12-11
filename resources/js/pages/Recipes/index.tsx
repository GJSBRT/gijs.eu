import { motion } from "framer-motion";
import { PageProps } from "@inertiajs/core";
import { Link, usePage } from "@inertiajs/react";

import { Recipe } from "./types";
import Title from "./Components/Title";
import RecipeItem from "./Components/RecipeItem";

export default function () {
    const { recipes } = usePage<PageProps & {
        recipes: Recipe[];
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
            <Link href='/' className='sm:w-96 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <Title className="dark:fill-white fill-black transition-all" />
            </Link>

            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-8 mt-12"
            >
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.slug} {...recipe} />
                ))}

                {recipes.length == 0 && (
                    <p className="text-gray-700 dark:text-gray-300 text-lg text-center">
                        No recipes have been added yet.
                    </p>
                )}
            </motion.ul>
        </>
    )
}
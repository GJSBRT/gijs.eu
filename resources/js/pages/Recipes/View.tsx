import Markdown from 'react-markdown';
import { motion } from "framer-motion";
import { PageProps } from "@inertiajs/core";
import { Link, usePage } from "@inertiajs/react";

import { Recipe } from "./types";
import Title from "./Components/Title";
import Sad from "../../elements/Icons/Sad";
import Star from "../../elements/Icons/Star";
import Happy from "../../elements/Icons/Happy";
import Dollar from "../../elements/Icons/Dollar";
import Neutral from "../../elements/Icons/Neutral";
import Stopwatch from "../../elements/Icons/Stopwatch";
import { MoneyFormatter } from "../../utils/formatter";

export default function() {
    const { recipe } = usePage<PageProps & {
        recipe: Recipe;
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
            <Link href='/recipes' className='sm:w-96 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
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
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-96 object-cover object-center rounded-md mt-12"
                />

                <motion.div 
                    className="flex flex-col mt-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                >
                    <h1 className="text-4xl font-bold">{recipe.title}</h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{recipe.description}</p>
                </motion.div>

                <motion.div 
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-100 sm:text-gray-700 dark:text-gray-300 transition-all font-bold mt-6"
                >
                    <span className={`flex items-center
                        ${recipe.difficulty == 'easy' && 'text-green-500 fill-green-500'} 
                        ${recipe.difficulty == 'medium' && 'text-orange-500 fill-orange-500'} 
                        ${recipe.difficulty == 'hard' && 'text-red-500 fill-red-500'}
                    `}>
                        {recipe.difficulty == 'easy' && <Happy className="mr-2 w-6 h-6"/>} 
                        {recipe.difficulty == 'medium' && <Neutral className="mr-2 w-6 h-6"/>} 
                        {recipe.difficulty == 'hard' && <Sad className="mr-2 w-6 h-6"/>} 
                        {recipe.difficulty}
                    </span>

                    <span className={`flex items-center
                        ${recipe.duration <= 30 && 'text-purple-500 fill-purple-500'} 
                        ${recipe.duration > 30 && recipe.duration <= 60 && 'text-green-500 fill-green-500'} 
                        ${recipe.duration > 60 && recipe.duration < 100 && 'text-orange-500 fill-orange-500'}
                        ${recipe.duration >= 100 && 'text-red-500 fill-red-500'}
                    `}>
                        <Stopwatch className="mr-2 w-6 h-6"/> {recipe.duration} min
                    </span>

                    <span className={`flex items-center
                        ${recipe.price <= 7.5 && 'text-purple-500 fill-purple-500'} 
                        ${recipe.price > 7.5 && recipe.price <= 15 && 'text-green-500 fill-green-500'} 
                        ${recipe.price > 15 && recipe.price < 20 && 'text-orange-500 fill-orange-500'}
                        ${recipe.price >= 30 && 'text-red-500 fill-red-500'}
                    `}>
                        <Dollar className="mr-2 w-6 h-6"/> {MoneyFormatter.format(recipe.price)}
                    </span>

                    <span className={`flex items-center
                        ${recipe.rating <= 3 && 'text-red-500 fill-red-500'} 
                        ${recipe.rating > 3 && recipe.rating <= 5 && 'text-orange-500 fill-orange-500'} 
                        ${recipe.rating > 5 && recipe.rating < 8 && 'text-green-500 fill-green-500'}
                        ${recipe.rating >= 8 && recipe.rating <= 10 && 'text-purple-500 fill-purple-500'}
                    `}>
                        <Star className="mr-2 w-6 h-6"/> {recipe.rating}
                    </span>
                </motion.div>

                <motion.article 
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                    className="mt-12 prose dark:prose-invert prose-img:rounded-lg"
                >
                    <Markdown>{recipe.article}</Markdown>
                </motion.article>
            </motion.div>
        </>
    )
}

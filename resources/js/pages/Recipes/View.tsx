import Markdown from 'react-markdown';
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

    return (
        <>
            <Link href='/' className='sm:w-96 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <Title className="dark:fill-white fill-black transition-all"/>
            </Link>

            <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover object-center rounded-md mt-12"/>

            <div className="flex flex-col mt-8">
                <h1 className="text-4xl font-bold">{recipe.title}</h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{recipe.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-100 sm:text-gray-700 dark:text-gray-300 transition-all font-bold mt-6">
                <span className="flex items-center">
                    {recipe.difficulty == 'easy' && <Happy className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                    {recipe.difficulty == 'medium' && <Neutral className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                    {recipe.difficulty == 'hard' && <Sad className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                    {recipe.difficulty}
                </span>
                <span className="flex items-center">
                    <Stopwatch className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {recipe.duration} min
                </span>
                <span className="flex items-center">
                    <Dollar className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {MoneyFormatter.format(recipe.price)}
                </span>
                <span className={`flex items-center
                    ${recipe.rating <= 3 && 'text-red-500'} 
                    ${recipe.rating > 3 && recipe.rating <= 5 && 'text-orange-500'} 
                    ${recipe.rating > 5 && recipe.rating < 8 && 'text-green-500'}
                    ${recipe.rating >= 8 && recipe.rating <= 10 && 'text-purple-500'}
                `}>
                    <Star className="mr-2 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {recipe.rating}
                </span>
            </div>

            <article className="mt-12 prose dark:prose-invert prose-img:rounded-lg">
                <Markdown>{recipe.article}</Markdown>
            </article>
        </>
    )
}

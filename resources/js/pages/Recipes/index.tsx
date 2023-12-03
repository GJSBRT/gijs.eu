import { PageProps } from "@inertiajs/core";
import { Link, usePage } from "@inertiajs/react";

import { Recipe } from "./types";
import Title from "./Components/Title";
import RecipeItem from "./Components/RecipeItem";

export default function() {
    const { recipes } = usePage<PageProps & {
        recipes: Recipe[];
    }>().props

    return (
        <>
            <Link href='/' className='sm:w-96 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <Title className="dark:fill-white fill-black transition-all"/>
            </Link>

            <ul className="flex flex-col gap-8 mt-12">
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.slug} {...recipe} />   
                ))}
            </ul>
        </>
    )
}
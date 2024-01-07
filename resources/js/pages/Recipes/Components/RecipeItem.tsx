import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

import Sad from "../../../elements/Icons/Sad"
import Star from "../../../elements/Icons/Star"
import Happy from "../../../elements/Icons/Happy"
import Dollar from "../../../elements/Icons/Dollar"
import Neutral from "../../../elements/Icons/Neutral"
import Stopwatch from "../../../elements/Icons/Stopwatch"
import { MoneyFormatter } from "../../../utils/formatter"

interface Props {
    slug: string

    title: string
    description: string
    image: string

    difficulty: 'easy' | 'medium' | 'hard'
    duration: number
    price: number
    rating: number
}

export default function(props: Props) {
    return (
        <motion.li variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }}>
            <Link href={`/recipes/${props.slug}`} className="flex flex-col sm:flex-row gap-4 w-full hover:scale-105 relative text-white sm:text-black sm:dark:text-white transition-all">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg absolute w-full h-full sm:hidden"></div>
                <img src={props.image} alt={props.title} className="sm:h-24 sm:w-32 h-64 w-full object-cover rounded-lg"/>

                <div className="flex flex-col w-full absolute sm:relative p-8 sm:p-0">
                    <h2 className="text-3xl md:text-lg font-semibold sm:font-medium">{props.title}</h2>
                    <p className="text-gray-200 sm:text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 transition-colors text-sm">{props.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-100 sm:text-gray-700 dark:text-gray-300 transition-all font-bold mt-2 sm:mt-auto">
                        <span className={`flex items-center
                            ${props.difficulty == 'easy' && 'text-green-500 fill-green-500'} 
                            ${props.difficulty == 'medium' && 'text-orange-500 fill-orange-500'} 
                            ${props.difficulty == 'hard' && 'text-red-500 fill-red-500'}
                        `}>
                            {props.difficulty == 'easy' && <Happy className="mr-2 w-6 h-6"/>} 
                            {props.difficulty == 'medium' && <Neutral className="mr-2 w-6 h-6"/>} 
                            {props.difficulty == 'hard' && <Sad className="mr-2 w-6 h-6"/>} 
                            {props.difficulty}
                        </span>

                        <span className={`flex items-center
                            ${props.duration <= 30 && 'text-purple-500 fill-purple-500'} 
                            ${props.duration > 30 && props.duration <= 60 && 'text-green-500 fill-green-500'} 
                            ${props.duration > 60 && props.duration < 100 && 'text-orange-500 fill-orange-500'}
                            ${props.duration >= 100 && 'text-red-500 fill-red-500'}
                        `}>
                            <Stopwatch className="mr-2 w-6 h-6"/> {props.duration} min
                        </span>

                        <span className={`flex items-center
                            ${props.price <= 7.5 && 'text-purple-500 fill-purple-500'} 
                            ${props.price > 7.5 && props.price <= 15 && 'text-green-500 fill-green-500'} 
                            ${props.price > 15 && props.price < 20 && 'text-orange-500 fill-orange-500'}
                            ${props.price >= 30 && 'text-red-500 fill-red-500'}
                        `}>
                            <Dollar className="mr-2 w-6 h-6"/> {MoneyFormatter.format(props.price)}
                        </span>

                        <span className={`flex items-center
                            ${props.rating <= 3 && 'text-red-500 fill-red-500'} 
                            ${props.rating > 3 && props.rating <= 5 && 'text-orange-500 fill-orange-500'} 
                            ${props.rating > 5 && props.rating < 8 && 'text-green-500 fill-green-500'}
                            ${props.rating >= 8 && props.rating <= 10 && 'text-purple-500 fill-purple-500'}
                        `}>
                            <Star className="mr-2 w-6 h-6"/> {props.rating}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.li>
    )    
}

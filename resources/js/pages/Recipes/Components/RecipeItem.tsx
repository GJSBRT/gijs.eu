import { Link } from "@inertiajs/react"
import { MoneyFormatter } from "../../../utils/formatter"
import Stopwatch from "../../../elements/Icons/Stopwatch"
import Dollar from "../../../elements/Icons/Dollar"
import Star from "../../../elements/Icons/Star"
import Happy from "../../../elements/Icons/Happy"
import Neutral from "../../../elements/Icons/Neutral"
import Sad from "../../../elements/Icons/Sad"

interface Props {
    title: string
    description: string
    image: string
    slug: string
    difficulty: 'easy' | 'medium' | 'hard'
    duration: number
    price: number
    rating: number
}

export default function(props: Props) {
    return (
        <li>
            <Link href={`/recipes/${props.slug}`} className="flex flex-col sm:flex-row gap-4 w-full hover:scale-105 relative text-white sm:text-black sm:dark:text-white transition-all">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg absolute w-full h-full sm:hidden"></div>
                <img src={props.image} alt={props.title} className="sm:h-24 sm:w-32 h-64 w-full object-cover rounded-lg"/>

                <div className="flex flex-col w-full absolute sm:relative p-8 sm:p-0">
                    <h2 className="text-3xl md:text-lg font-semibold sm:font-medium">{props.title}</h2>
                    <p className="text-gray-200 sm:text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 transition-colors text-sm">{props.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-100 sm:text-gray-700 dark:text-gray-300 transition-all font-bold mt-2 sm:mt-auto">
                        <span className="flex items-center">
                            {props.difficulty == 'easy' && <Happy className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                            {props.difficulty == 'medium' && <Neutral className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                            {props.difficulty == 'hard' && <Sad className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/>} 
                            {props.difficulty}
                        </span>
                        <span className="flex items-center">
                            <Stopwatch className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {props.duration} min
                        </span>
                        <span className="flex items-center">
                            <Dollar className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {MoneyFormatter.format(props.price)}
                        </span>
                        <span className={`flex items-center
                            ${props.rating <= 3 && 'text-red-500'} 
                            ${props.rating > 3 && props.rating <= 5 && 'text-orange-500'} 
                            ${props.rating > 5 && props.rating < 8 && 'text-green-500'}
                            ${props.rating >= 8 && props.rating <= 10 && 'text-purple-500'}
                        `}>
                            <Star className="mr-1 w-6 h-6 fill-white sm:fill-black dark:sm:fill-white transition-all"/> {props.rating}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    )    
}
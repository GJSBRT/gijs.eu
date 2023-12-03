import { Link } from "@inertiajs/react"

interface Props {
    title: string
    description: string
    href: string
}

export default function(props: Props) {
    return (
        <Link className="hover:scale-105 transition-all flex flex-col rounded-lg" {...props}>
            <label className="cursor-pointer text-lg font-medium">{props.title}</label>
            <span className="text-gray-700 dark:text-gray-300 transition-colors text-sm">
                {props.description}
            </span>
        </Link>
    )
}

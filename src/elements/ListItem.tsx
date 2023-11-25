import { useNavigate } from "react-router-dom";

interface Props {
    icon: React.ReactNode;
    title: string
    description: string
    href?: string
    to?: string
}

export default function(props: Props) {
    const navigate = useNavigate();

    const handleClick = function() {
        if (props.to != undefined) {
            navigate(props.to);
            return;
        }

        if (props.href != undefined) {
            window.open(props.href, '_blank');
            return;
        }

        console.warn('ListItem has no href or to property');
    }

    return (
        <li className="p-4 hover:bg-gray-100/60 dark:hover:bg-gray-900/60 transition-all rounded-md cursor-pointer flex items-center" onClick={handleClick}>
            <label className="cursor-pointer flex">
                <label className="w-6 h-6 my-auto mr-1 cursor-pointer">{props.icon}</label> 
                {props.title}
            </label> 

            <div className="mx-2">-</div>

            <span className="text-gray-700 dark:text-gray-300 transition-colors text-sm">
                {props.description}
            </span>
        </li>
    )
}

import { NavLink } from "react-router-dom";

interface Props {
    icon: React.ReactNode;
    title: string
    description: string
    href?: string
    to?: string
}

export default function(props: Props) {
    const item = (
        <>
            <label className="cursor-pointer">{props.title}</label> - <span className="text-gray-400 text-sm">{props.description}</span>
        </>
    );

    return (
        <li className="p-4 hover:bg-gray-900 transition-all rounded-md">
            {props.href &&
                <a href={props.href} target='_blank'>
                    {item}
                </a>
            }

            {props.to &&
                <NavLink to={props.to}>
                    {item}
                </NavLink>
            }
        </li>
    )
}
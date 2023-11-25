import { NavLink } from 'react-router-dom';
import { PuzzlePieceIcon, ServerStackIcon } from '@heroicons/react/24/outline';

import ListItem from "../elements/ListItem";
import GijsbertTitle from '../elements/GijsbertTitle';

export default function() {
    return (
        <>
            <NavLink to='/' className='w-80 my-4 mx-auto'>
                <GijsbertTitle/>
            </NavLink>

            <ul className="mt-4 flex flex-col gap-4">
                <ListItem icon={<ServerStackIcon/>} href='https://dutchis.net?ref=gijs.eu' title='DutchIS' description="Virtual and dedicated server hosting with many extra's like IXPs, BGP, and more."/>
                <ListItem icon={<PuzzlePieceIcon/>} href='https://noxxer.net?ref=gijs.eu' title='Noxxer' description="Easy to use game hosting with high performance hardware."/>
            </ul>
        </>
    )
}
import { Link } from '@inertiajs/react';
import { PuzzlePieceIcon, ServerStackIcon } from '@heroicons/react/24/outline';

import GijsbertTitle from '../elements/GijsbertTitle';
import ListItem from '../elements/ListItem';

export default function() {
    return (
        <>
            <Link to='/' className='sm:w-80 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <GijsbertTitle/>
            </Link>

            <ul className="mt-4 flex flex-col gap-4">
                <ListItem icon={<ServerStackIcon/>} href='https://dutchis.net?ref=gijs.eu' title='DutchIS' description="Virtual and dedicated server hosting with many extra's like IXPs, BGP, and more."/>
                <ListItem icon={<PuzzlePieceIcon/>} href='https://noxxer.net?ref=gijs.eu' title='Noxxer' description="Easy to use game hosting with high performance hardware."/>
            </ul>
        </>
    )
}
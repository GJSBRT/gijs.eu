import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';
import { PuzzlePieceIcon, ServerStackIcon } from '@heroicons/react/24/outline';

import GijsbertTitle from '../elements/GijsbertTitle';
import ListItem from '../elements/ListItem';
import CardLink from '../elements/CardLink';

export default function() {
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
            <Link href='/' className='sm:w-80 py-4 px-4 sm:px-0 w-full mx-auto' title='Logo'>
                <GijsbertTitle/>
            </Link>

            <motion.ul 
                className='grid sm:grid-cols-3 gap-8 m-4'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <CardLink 
                    title='Recipes' 
                    description='A collection of recipes I use for cooking.'
                    href='/recipes'
                />
                <CardLink 
                    title='Guides' 
                    description='Guides for various things I have done and want to share.'
                    href='/guides'
                />
            </motion.ul>

            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="mt-4 flex flex-col gap-4"
            >
                <ListItem icon={<ServerStackIcon/>} href='https://dutchis.net?ref=gijs.eu' title='DutchIS' description="Virtual and dedicated server hosting with many extra's like IXPs, BGP, and more."/>
                <ListItem icon={<PuzzlePieceIcon/>} href='https://noxxer.net?ref=gijs.eu' title='Noxxer' description="Easy to use game hosting with high performance hardware."/>
            </motion.ul>
        </>
    )
}
import { AtSymbolIcon } from '@heroicons/react/24/solid';

import ListItem from "../elements/ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function() {
    return (
        <>
            <h1 className="text-4xl text-center font-semibold">Gijsbert</h1>

            <ul className='mx-auto flex gap-4 mt-4'>
                <li>
                    <a href="https://github.com/GJSBRT" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </li>

                <li>
                    <a href="https://linkedin.com/in/gijsbert" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>

                <li>
                    <a href="https://x.com/GSBRT1" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                </li>

                <li>
                    <a href="https://discord.com/users/702501824762216478" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                </li>
            </ul>

            <hr className="my-8 border-t border-gray-800"/>

            <ul className="mt-4 flex flex-col gap-4">
                <ListItem icon={<AtSymbolIcon/>} href='/' title='DutchIS' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
                <ListItem icon={<AtSymbolIcon/>} href='/' title='URL Shortner' description="A very cool and unqiue url shortner which is totaly revolutionary!"/>
            </ul>
        </>
    )
}
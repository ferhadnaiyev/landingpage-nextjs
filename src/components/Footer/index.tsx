import React from 'react'

import Logo from '../HeaderLogo'
import linkedinLogo from "@/assets/icons/linkedin.svg"
import facebookLogo from "@/assets/icons/facebook.svg"
import twitterLogo from "@/assets/icons/twitter.svg"
import Navbar from '../Navbar'
import Link from 'next/link';
import Image from 'next/image';

const socialMediaLinks = [
    {
        id: 1,
        icon: { linkedinLogo },
        url: "https://react-icons.github.io/react-icons/search/#q=twitter"
    },
    {
        id: 2,
        icon: { facebookLogo },
        url: "https://react-icons.github.io/react-icons/search/#q=twitter"
    },
    {
        id: 3,
        icon: { twitterLogo },
        url: "https://react-icons.github.io/react-icons/search/#q=twitter"
    },
]
function Footer() {

    return (
        <footer className='bg-dark'>
            <div className='flex items-center justify-between'>
                <Logo />
                <Navbar linkStyles='text-white' />
                <div>
                    <ul>
                        {
                            socialMediaLinks && socialMediaLinks.map((item) => (

                                <li key={item.id}>
                                    <Link href={item.url} >
                                        <Image
                                            width={10}
                                            height={10}
                                            src={item.icon} alt="social media logo" />

                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

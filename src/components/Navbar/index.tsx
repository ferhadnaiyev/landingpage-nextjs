import Link from 'next/link'
import React from 'react'
const navbarLinks = [
    {
        id: 1,
        text: "About us",
        url: "aboutus"
    },
    {
        id: 2,
        text: "Services",
        url: "aboutus"
    },
    {
        id: 3,
        text: "Use Cases",
        url: "aboutus"
    },
    {
        id: 4,
        text: "Pricing",
        url: "aboutus"
    },
    {
        id: 5,
        text: "Blog",
        url: "aboutus"
    },
]

interface navbarProps {
    linkStyles: string
}
function Navbar({ linkStyles }: navbarProps) {

    return (
        <nav>
            <ul className='flex gap-[40px]'>
                {navbarLinks.map((item) => (
                    <li key={item.id}>
                        <Link href={item.url} className={linkStyles} >
                            {item.text}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}

export default Navbar

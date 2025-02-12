
import React from 'react'
import menuIcon from "@/assets/icons/menu.svg"
import HeaderLogo from '../HeaderLogo'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    const links = [
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
    return (

        <header className='mt-[30px] flex px-[3rem] sm:px-[6.25rem] items-center justify-between w-full h-[68px]'>

            <HeaderLogo />
            <div className=' gap-[40px] justify-center items-center hidden sm:flex'>
                <nav>
                    <ul className='flex gap-[40px]'>
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.url} className='text-[20px]' >
                                    {link.text}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
                <button className='text-[1.25rem] leading-[28px] rounded-[14px] border-black border px-[2.1rem] py-[1.24rem]'>
                    Request a quote
                </button>
            </div>
            <button className='sm:hidden'>
                <Image src={menuIcon} alt="hamburger menu icon" height={56} width={56} className='text-black' />
            </button>

        </header>

    )
}

export default Header

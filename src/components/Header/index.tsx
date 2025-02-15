
import React from 'react'
import menuIcon from "@/assets/icons/menu.svg"

import Image from 'next/image'
import Logo from '../HeaderLogo'
import Navbar from '../Navbar'


function Header() {
    return (

        <header className='mt-[30px] flex px-[3rem] sm:px-[6.25rem] items-center justify-between w-full h-[68px]'>

            <Logo />
            <div className=' gap-[40px] justify-center items-center hidden sm:flex'>
                <nav>

                    <Navbar linkStyles="text-[20px]" />
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

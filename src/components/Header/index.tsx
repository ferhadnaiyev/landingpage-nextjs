
import React from 'react'
import menuIcon from "@/assets/icons/menu.svg"

import Image from 'next/image'
import Logo from '../HeaderLogo'
import Navbar from '../Navbar'


function Header() {
    return (

        <header className='mt-[30px] flex  items-center justify-between w-full h-[68px] container'>

            <Logo />
            <div className=' gap-[40px] justify-center items-center hidden xl:flex'>


                <Navbar linkStyles="text-[20px]" />

                <button className=' rounded-[14px] border-black border  primary-button-responsive'>
                    Request a quote
                </button>
            </div>
            <button className='xl:hidden sidebar-button-responsive'>
                <Image src={menuIcon} alt="hamburger menu icon" height={56} width={56} className='text-black ' />
            </button>

        </header>

    )
}

export default Header

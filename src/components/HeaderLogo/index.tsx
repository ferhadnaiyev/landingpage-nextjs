import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImg from "@/assets/Logo.svg"
function Logo() {
    return (
        <Link href="/" className='flex justify-center items-center font-extrabold text-[2rem] h-[3.5rem]'>
            <Image alt="Positivus Logo" src={LogoImg} className='logo-responsive' />
        </Link>
    )
}

export default Logo

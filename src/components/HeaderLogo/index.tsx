import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImg from "@/assets/Logo.svg"
function HeaderLogo() {
    return (
        <Link href="/" className='flex justify-center items-center font-extrabold text-[2rem] h-[3.5rem]'>
            <Image alt="Positivus Logo" src={LogoImg} />
        </Link>
    )
}

export default HeaderLogo

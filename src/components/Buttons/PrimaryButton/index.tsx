
import Link from 'next/link'
import React from 'react'

function PrimaryButton({ children }) {
    return (
        <Link href="" className='text-white bg-dark px-[35px] py-[20px] rounded-[14px] text-[1.25rem] leading-[1.75rem] flex justify-center items-center'>
            {children}
        </Link>
    )
}

export default PrimaryButton

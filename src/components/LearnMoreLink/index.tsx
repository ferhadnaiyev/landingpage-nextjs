import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function LearnMoreLink({ href }) {
    return (
        <Link href={href} className='text-[1.25rem] text-green flex items-center justify-start gap-[15px] '>
            Learn More <FaArrowRight className='rotate-[-25deg] h-[28px] w-[28px]' />
        </Link>
    )
}

export default LearnMoreLink

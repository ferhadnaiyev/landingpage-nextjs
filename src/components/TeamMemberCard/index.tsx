import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";



function TeamMemberCard({ imageUrl, memberName, job, description, linkedinUrl }) {
    return (
        <div className='px-[35px] py-[40px] rounded-[45px] border border-black box-shadow flex flex-col gap-[28px]'>
            <div className='flex justify-between items-center '
            >


                <Image src={imageUrl} alt={`${memberName} profile photo`} width={106} height={103} />


                <div className='flex flex-col h-[103px] justify-end'>
                    <div >
                        <h4 className='text-[1.25rem]'>{memberName}</h4>
                        <p>{job}</p>
                    </div>
                </div>
                <div style={{ gridArea: "F" }} className='flex items-end justify-start flex-col h-[103px]'>
                    <Link href={linkedinUrl} className=' bg-black h-[34px] w-[34px] flex justify-center items-center rounded-full'>
                        <FaLinkedinIn className='text-green h-[17px] w-[17px]' />
                    </Link>
                </div>

            </div>
            <hr className='border-black' />
            <p>
                {description}
            </p>

        </div>
    )
}

export default TeamMemberCard

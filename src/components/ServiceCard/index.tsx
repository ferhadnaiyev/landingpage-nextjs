import splitTextIntoLines from '@/utils/splitTextIntoLines';
import Image from 'next/image'
import Link from 'next/link'

import { FaArrowRight } from "react-icons/fa";
function ServiceCard({ bgColor, title, linkUrl, imageUrl }) {

    const splitedText = splitTextIntoLines(title, 2)
    const title1 = splitedText[0]
    const title2 = splitedText[1]




    return (
        <div className={`
            flex justify-between items-center
        ${((bgColor == "") || (bgColor == "bg-grey")) ? " bg-grey" : (bgColor)} p-[50px] rounded-[45px] box-shadow border border-black`}>

            <div className='flex flex-col gap-[93px]'>
                <div className='flex flex-col gap-[0.5px]'>

                    <h3 className={`${((bgColor == "bg-grey") || (bgColor == "")) ? "bg-green" : "bg-white"} rounded-[7px] px-[7px] w-max relative left-[10px] h3-fluid`}>
                        {title1}
                    </h3>
                    <h3 className={`${((bgColor == "bg-grey") || (bgColor == "")) ? "bg-green" : "bg-white"} bg-green rounded-[7px] px-[7px] w-max h3-fluid`}>
                        {title2}
                    </h3>
                </div>
                <Link href={linkUrl} className={`
               
                 ${bgColor == "bg-dark" ? "text-white" : "text-black"}
                flex items-center justify-start gap-[15px] text-[1.25rem] leading-[1.75rem]`}>
                    <div className={`
                    ${bgColor === "bg-dark" ? "bg-white" : "bg-dark"}
                     rounded-full w-[41px] h-[41px] flex items-center justify-center
                     rotate-[-25deg]
                     `}>
                        <FaArrowRight className={`
                        ${bgColor == "bg-dark" ? "text-dark" : "text-green"}
                        `} />
                    </div>
                    Learn More
                </Link>
            </div>
            <div>
                <Image src={imageUrl} width={210} height={166} alt={`${title1}illustration`} />
            </div>
        </div>
    )
}

export default ServiceCard

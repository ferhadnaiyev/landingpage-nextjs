import Image from 'next/image'
import Link from 'next/link'
import arrowIcon from "@/assets/icons/arrow.svg"

function ServiceCard({ theme, title1, title2, linkUrl, imageUrl }) {







    return (
        <div className={`
            flex justify-between items-center grey
        {theme} p-[50px] rounded-[45px] shadow-[0_5px_0_rgba(0,0,0,1)] w-full h-[310px] border border-black`}>

            <div className='flex flex-col gap-[93px]'>
                <div className='flex flex-col'>

                    <h3 className=' bg-green rounded-[7px] px-[7px]'>
                        {title1}
                    </h3>
                    <h3 className=' bg-green rounded-[7px] px-[7px]'>
                        {title2}
                    </h3>
                </div>
                <Link href={linkUrl} className='flex items-center justify-start gap-[15px] text-[1.25rem] leading-[1.75rem]'>
                    <div className='bg-dark rounded-full w-[41px] h-[41px] flex items-center justify-center'>
                        <Image src={arrowIcon} alt='arrow icon' className='text-black' />
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

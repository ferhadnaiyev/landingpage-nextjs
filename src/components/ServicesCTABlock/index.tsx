import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

function ServicesCTABlock() {
    return (
        <div className='relative overflow-visible flex justify-around bg-grey  w-full  py-[60px] rounded-[45px]  h-[347px]'>
            <div className='flex flex-col items-start justify-between'>
                <h3>
                    Let’s make things happen
                </h3>
                <p className='line-clamp-3 w-[45ch]'>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <PrimaryButton >
                    Get your free proposal
                </PrimaryButton>
            </div>
            <div>

            </div>
            <div className='relative overflow-visible flex justify-start items-center'>
                <Image src="/images/emojiDM.svg" alt="CTA illsturation" width={360} height={400} className='
             
                hidden sm:block' />
            </div>

        </div>
    )
}

export default ServicesCTABlock

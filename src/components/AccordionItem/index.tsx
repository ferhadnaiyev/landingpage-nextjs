"use client"
import React, { useState } from 'react'
import { ImMinus, ImPlus } from "react-icons/im";
function AccordionItem({ queue, accordionHeader, accordionBody }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <li>
            <div className={`
            ${isOpen ? "bg-green" : "bg-grey"}
            box-shadow flex flex-col  list-none rounded-[45px] px-[30px] sm:px-[45px]  lg:px-[60px] py-[20px] sm:py-[40px] border border-black font-medium`}>
                <div className='flex justify-between items-center'>
                    <h4 className='flex items-center gap-[25px] h-min'>
                        <div className='text-[3.75rem] leading-[77px]'>{queue}</div>
                        <div className='text-[1.875rem]'>{accordionHeader}</div>
                    </h4>

                    <button onClick={handleClick} className='flex justify-center items-center rounded-full h-[58px] w-[58px]    bg-grey'>
                        {
                            isOpen ? (
                                <ImMinus className='text-[25px]' />
                            ) : (
                                <ImPlus className='text-[25px]' />
                            )
                        }


                    </button>
                </div>
                {
                    isOpen ? (
                        <div>
                            <hr className='border-black my-[1.875rem]' />
                            <p>{accordionBody}</p>
                        </div>
                    ) : null
                }
            </div>



        </li>
    )
}

export default AccordionItem

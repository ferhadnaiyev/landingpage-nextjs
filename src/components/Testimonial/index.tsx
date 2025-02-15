import React from 'react'


import "./speechBubble.css"

function Testimonial() {
    return (
        <section>
            <div className='speech-bubble bg-dark text-white rounded-[45px] px-[52px] py-[3rem] w-max'>
                <p className='line-clamp-6 w-[43ch]'>
                    We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.
                </p>
            </div>
            <div className='relative left-[60px]'>
                <h4 className='text-green'>
                    John Smith
                </h4>
                <p className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
        </section>
    )
}

export default Testimonial

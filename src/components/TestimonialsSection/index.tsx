import React from 'react'
import SubHeading from '../SubHeading'
import Testimonial from '../Testimonial'
const SubHeadingProps = {
    sectionTitle: "Testimonials",
    sectionDescription: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
}
function TestimonialsSection() {
    return (
        <section className='bg-dark'>
            <SubHeading {...SubHeadingProps} />


            <Testimonial />

        </section>
    )
}

export default TestimonialsSection

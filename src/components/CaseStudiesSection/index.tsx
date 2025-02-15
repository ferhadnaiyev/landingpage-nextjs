import React from 'react'
import SubHeading from '../SubHeading'
import LearnMoreLink from '../LearnMoreLink'
const SubHeadingProps = {
    sectionTitle: "Case Studies",
    sectionDescription: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
}
function CaseStudiesSection() {
    return (
        <section className='flex flex-col gap-[70px]'>
            <SubHeading {...SubHeadingProps} />
            <div className='flex w-full items-center justify-center '>
                <div className='flex  py-[70px]  pl-[60px] bg-dark rounded-l-[45px] justify-between gap-[60px] min-h-[325px] h-max'>
                    <div className='flex flex-col gap-[20px]'>
                        <p className='text-white line-clamp-5 w-[30ch] '>
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                        </p>
                        <LearnMoreLink href="" />
                    </div>
                    <div className="border-l border-white" />

                </div>


                <div className='flex flex-col py-[70px] px-[60px] bg-dark gap-[20px] min-h-[325px]'>
                    <p className='text-white line-clamp-5 w-[30ch] '>
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                    </p>
                    <LearnMoreLink href="" />
                </div>

                <div className='flex py-[70px] pr-[60px] bg-dark rounded-r-[45px] gap-[60px] justify-between min-h-[325px]'>
                    <div className="border-l border-white" />
                    <div className='flex flex-col gap-[20px]'>
                        <p className='text-white line-clamp-5 w-[30ch] '>
                            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.                        </p>
                        <LearnMoreLink href="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CaseStudiesSection

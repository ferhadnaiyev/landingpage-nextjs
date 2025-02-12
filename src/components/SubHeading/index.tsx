import React from 'react'
type SubHeadingProps = {
    sectionTitle: string;
    sectionDescription: string;
};

function SubHeading({ sectionTitle, sectionDescription }: SubHeadingProps) {
    const lineLength = sectionDescription.length / 2
    return (
        <div className='flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] mt-[70px] justify-start items-center'>
            <h2 className='bg-green px-[7px] rounded-[7px]'>
                {sectionTitle}
            </h2>
            <p className={` flex items-center justify-center break-words`}
                style={{ maxWidth: `${lineLength}ch` }}>
                {sectionDescription}
            </p>
        </div>
    )
}

export default SubHeading

"use client"
import Link from 'next/link'

import Image from 'next/image';

import "@/animations/infiniteSliderAnimation.css"


const companyLogos = [
    {
        id: 1,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/amazonLogo.svg",
    },
    {
        id: 2,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/dribbleLogo.svg"
    },
    {
        id: 3,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/hubspotLogo.svg"
    },
    {
        id: 4,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/notionLogo.svg"
    },
    {
        id: 5,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/netflixLogo.svg"
    },
    {
        id: 6,
        siteUrl: "https://www.amazon.com/",
        image: "/images/companyLogos/zoomLogo.svg"
    }
]


function CompanyLogos() {

    return (

        <div className='overflow-x-hidden w-full'>

            <div className='flex left-0 space-x-[40px] w-full'>




                {[...companyLogos, ...companyLogos,].map((company, idx) => (

                    < Link key={idx} href={company.siteUrl} className='items-center justify-center flex min-w-max h-auto'>
                        <Image src={company.image} alt={company.image} width={120} height={48} />
                    </Link>
                ))
                }





            </div>
        </div>
    )
}

export default CompanyLogos;
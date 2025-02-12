
import Link from 'next/link'
import React from 'react'



import Image from 'next/image';
function CompanyLogos() {
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
    return (
        <div className='flex  flex-row items-center justify-between w-full mt-[3.75rem] h-[48px] overflow-x-auto scrollbar-hide'>
            {companyLogos.map((company) => (

                < Link key={company.id} href={company.siteUrl} className='items-center justify-center flex min-w-[400px]'>
                    <Image src={company.image} alt={company.image} width={120} height={48} />
                </Link>
            ))
            }
        </div >
    )
}

export default CompanyLogos

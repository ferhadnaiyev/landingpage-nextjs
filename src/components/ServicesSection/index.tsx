import React from 'react'
import SubHeading from '../SubHeading'
import ServiceCard from '../ServiceCard'
import ServicesCTABlock from '../ServicesCTABlock'

const SubHeadingProps = {
  sectionTitle: "Services",
  sectionDescription: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
}
const serviceCards = [
  {
    id: 1,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "",
    imageUrl: "/images/illustration.svg"

  },
  {
    id: 2,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "bg-green",
    imageUrl: "/images/illustration.svg"

  },
  {
    id: 3,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "bg-dark",
    imageUrl: "/images/illustration.svg"

  },
  {
    id: 4,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "bg-grey",
    imageUrl: "/images/illustration.svg"

  },
  {
    id: 5,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "bg-green",
    imageUrl: "/images/illustration.svg"

  },
  {
    id: 6,
    theme: "dark",
    title: "Search Engine",
    linkUrl: "",
    bgColor: "bg-dark",
    imageUrl: "/images/illustration.svg"

  },
]

function ServicesSection() {
  return (
    <section className='flex flex-col gap-[40px]'>
      <SubHeading {...SubHeadingProps} />
      <div className='grid gap-[40px] sm:grid-cols-2'>
        {
          serviceCards && serviceCards.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))
        }
      </div>
      <ServicesCTABlock />
    </section>
  )
}

export default ServicesSection

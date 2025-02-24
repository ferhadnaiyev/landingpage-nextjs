import React from 'react'
import SubHeading from '../SubHeading'
import TeamMemberCard from '../TeamMemberCard'
import PrimaryButton from '../Buttons/PrimaryButton'

const SubHeadingProps = {
    sectionTitle: "Team",
    sectionDescription: "Meet the skilled and experienced team behind our successful digital marketing strategies"
}
const teamMembers = [
    {
        id: 1,
        memberName: "John Smith",
        job: "CEO and Founder",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
        id: 2,
        memberName: "Jane Doe",
        job: "Director of Operations",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
        id: 3,
        memberName: "Michael Brown",
        job: "Senior SEO Specialist",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
        id: 4,
        memberName: "Emily Johnson",
        job: "PPC Manager",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
        id: 5,
        memberName: "Brian Williams",
        job: "Social Media Specialist",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
        id: 6,
        memberName: "Sarah Kim",
        job: "Content Creator",
        linkedinUrl: "https://www.linkedin.com",
        imageUrl: "/images/teamMembers/johnSmith.svg",
        description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
]
function TeamSection() {
    return (
        <section className='flex flex-col   gap-[70px]'>
            <SubHeading {...SubHeadingProps} />


            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] '>

                {
                    teamMembers && teamMembers.map((item) => (
                        <TeamMemberCard key={item.id} {...item} />
                    ))
                }
            </div>

            <div className='flex justify-end items-center'>
                <PrimaryButton >
                    See all team
                </PrimaryButton>
            </div>

        </section>
    )
}

export default TeamSection

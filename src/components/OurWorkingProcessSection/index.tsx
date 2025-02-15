import React from 'react'
import SubHeading from '../SubHeading'
import AccordionItem from '../AccordionItem'
const SubHeadingProps = {
    sectionTitle: "Our Working Process ",
    sectionDescription: "Step-by-Step Guide to Achieving Your Business Goals"
}

const accordionItems = [
    {
        id: 1,
        queue: "01",
        accordionHeader: "Consultation",
        accordionBody: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 2,
        queue: "02",
        accordionHeader: "Research and Strategy Development",
        accordionBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quam omnis. Est rem vel tempora eos, officiis corrupti? Amet necessitatibus pariatur voluptatum cum nihil temporibus voluptates laborum debitis, laboriosam dolor deserunt praesentium impedit! Suscipit minus eius architecto saepe animi rerum blanditiis recusandae neque ab odio, excepturi accusantium corporis, consequuntur expedita totam odit dicta rem, quaerat voluptas natus porro eligendi commodi atque! Aliquid mollitia quidem officia deleniti, aspernatur perferendis, alias cupiditate veniam optio consequuntur quos soluta consequatur neque at animi amet ut voluptate quibusdam odit provident sapiente ullam rerum rem aliquam. Reiciendis similique possimus dicta cumque molestias, mollitia animi fugit corrupti ipsam vero sunt dolorem, quo recusandae voluptatem iure nam repellendus! Voluptatem totam doloremque adipisci excepturi iure odit nihil magnam! Nihil ut, officia quisquam est voluptatibus sequi molestias animi dolorum perspiciatis mollitia rerum, nisi eum ratione. Esse optio ipsam cumque vero ullam nulla rerum nemo qui ex consequuntur, labore libero cum sint repellendus maiores nisi sed quidem amet alias vitae dolor animi asperiores consequatur incidunt. Fugit eligendi atque eius iure alias quibusdam possimus ab veritatis officia, ex earum mollitia, modi saepe adipisci architecto molestiae cupiditate enim rem illo voluptates sequi libero nemo nihil amet. Praesentium, atque! Numquam, temporibus atque rem dolore ut vitae sunt id voluptas, eos similique sint nisi, dolor nostrum soluta eum laudantium quo repellendus ullam eveniet molestias aspernatur! Totam cum eaque at officiis, commodi repudiandae perspiciatis hic quibusdam voluptate accusantium nisi culpa doloremque quas vel, magnam facilis libero in. Repudiandae doloribus unde voluptas. Maxime possimus voluptatum blanditiis reprehenderit tenetur quas impedit alias mollitia consectetur voluptates quis, recusandae, autem quos libero doloremque? Totam expedita soluta magni ipsum earum, et inventore perferendis? Id voluptatum exercitationem qui ducimus corporis magnam libero beatae quae maxime voluptatibus obcaecati voluptate dolores voluptas autem amet doloribus, iste deleniti nihil, dignissimos sit natus vero molestias, perspiciatis officia! Expedita dolorem tempore nulla quod. Rerum odio qui nisi tempore ad culpa earum! Obcaecati quam tempore eius voluptate. Temporibus, laboriosam magnam veniam quasi optio, sed quidem repellendus voluptate impedit qui perspiciatis vel soluta tempora culpa voluptates accusantium tenetur, facilis quod non mollitia? Velit eius blanditiis atque rerum, unde ratione veniam quod, quo rem provident, laboriosam eos debitis a repellat accusantium! Necessitatibus aliquam nemo atque repellendus veniam! Dignissimos, exercitationem dolor. Est neque error provident officiis aliquid dolores inventore ipsum in, harum commodi voluptates dolore excepturi, quaerat at quia culpa reiciendis tenetur. Optio ipsum tenetur omnis veniam error? Accusantium, quidem. Enim officia modi tempora excepturi distinctio in fugit voluptatem rerum culpa ut nesciunt quos quidem obcaecati repellat ipsum voluptatum maxime iste explicabo dignissimos, dolor itaque architecto, sapiente, aperiam adipisci! Culpa maiores doloremque minima illum quos reiciendis architecto provident voluptate sequi totam officiis nulla vel ea a neque tempora vero quibusdam mollitia, incidunt deleniti ratione alias iusto esse! Quo vitae maiores accusamus nulla eos quia tempora sequi libero natus velit suscipit necessitatibus perspiciatis et, provident error sed voluptate eius. Quia dolor dolorum autem officia, repudiandae possimus enim iure molestiae ea eos blanditiis accusamus, vel laborum? Iste ex magni quibusdam deleniti mollitia eos!",
    },
    {

        id: 3,
        queue: "03",
        accordionHeader: "Implementation",
        accordionBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam!",
    },
    {
        id: 4,
        queue: "04",
        accordionHeader: "Monitoring and Optimization",
        accordionBody: " This will allow us to understand your needs and tailor our services to best fit your requirements.uring the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 5,
        queue: "05",
        accordionHeader: "Reporting and Communication",
        accordionBody: "Lorem, ipsum dolor.",
    },
    {
        id: 6,
        queue: "06",
        accordionHeader: "Continual Improvement",
        accordionBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique corrupti, ullam animi placeat est beatae alias quia? Facilis, dolorem?",
    },
]
function OurWorkingProcessSection() {
    return (
        <section className='flex flex-col gap-[70px]'>
            <SubHeading {...SubHeadingProps} />
            <ul className='list-none pl-0 flex flex-col gap-[1.875rem]'>

                {
                    accordionItems && accordionItems.map((item) => (
                        <AccordionItem key={item.id} {...item} />
                    ))
                }
            </ul>
        </section>
    )
}

export default OurWorkingProcessSection

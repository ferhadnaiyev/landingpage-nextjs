import PrimaryButton from "@/components/Buttons/PrimaryButton";

import CompanyLogos from "@/components/CompanyLogos";

import OurWorkingProcessSection from "@/components/OurWorkingProcessSection";
import DestkopImage from "@/components/ResponsiveImage/DestkopRender";

import MobileImage from "@/components/ResponsiveImage/MobileRender";


import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";




export default function Home() {

  return (


    <main className="container">



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] mt-[30px] lg:mt-[70px]">



        <div className="flex flex-col  items-center sm:items-center lg:items-start gap-[2.1rem] justify-center">
          <div className="flex justify-center  items-center">
            <h1 className="flex sm:items-start items-center justify-center  h1-fluid">Navigating the digital landscape for success</h1>
          </div>
          <MobileImage checkpoint={1024} src="/images/iLLustration.svg" width={450} height={490} alt="landing page illisturation" />
          <p className="h4-fluid flex items-center justify-center">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <PrimaryButton>
            Book a consultation
          </PrimaryButton>

        </div>

        <DestkopImage checkpoint={1024} src="/images/iLLustration.svg" width={600} height={515} alt="landing page illisturation" />

      </div>




      <CompanyLogos />
      <ServicesSection />

      <OurWorkingProcessSection />
      <TeamSection />



    </main>

  );
}

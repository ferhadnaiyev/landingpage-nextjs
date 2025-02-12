import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CompanyLogos from "@/components/CompanyLogos";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[50px] sm:px-[100px]">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] mt-[30px] sm:mt-[70px]">
        <div className="flex flex-col sm:items-start gap-[2.1rem] justify-center">
          <h1 className="flex break-normal">Navigating the digital landscape for success</h1>
          <p className="text-[1.25rem]">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <PrimaryButton>
            Book a consultation
          </PrimaryButton>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/iLLustration.svg" width={600} height={515} alt="landing page illisturation" />
        </div>
      </div>
      <CompanyLogos />
      <ServicesSection />
    </main>
  );
}

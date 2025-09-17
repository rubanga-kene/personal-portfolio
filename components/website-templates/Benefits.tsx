import { SectionHeading } from "../section-heading"
import { BenefitCard } from "./BenefitCard"

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
}

const benefitsData: Benefit[] = [
  {
    id: 1,
    icon: "/icons/icon-01.svg",
    title: "Custom Web Design",
    description: "First impressions matter. We create unique, user-friendly, and visually appealing designs tailored to your brand identity and audience, ensuring your site stands out from the competition.",
  },
  {
    id: 2,
    icon: "/icons/icon-02.svg",
    title: "Seamless Development",
    description:
      "We build responsive, high-performing websites with clean code and modern frameworks, ensuring fast loading times, smooth navigation, and flawless functionality across all devices.",
  },
  {
    id: 3,
    icon: "/icons/icon-03.svg",
    title: "Secure Hosting",
    description:
      "our website’s reliability is our priority. We provide secure, scalable, and high-speed hosting solutions that guarantee uptime, data protection, and peace of mind.",
  },
  {
    id: 4,
    icon: "/icons/icon-04.svg",
    title: "Search Engine Optimization (SEO)",
    description:
      "We don’t just build websites — we make them discoverable. Our SEO strategies help your site rank higher, attract organic traffic, and reach the right audience at the right time.",
  },
  {
    id: 5,
    icon: "/icons/icon-06.svg",
    title: "Ongoing Maintenance & Updates",
    description:"Technology evolves, and so should your website. We offer continuous monitoring, regular updates, and feature improvements to keep your site fresh, secure, and relevant.",
  },
  {
    id: 6,
    icon: "/icons/icon-05.svg",
    title: "End-to-End Support",
    description:
      "From initial consultation to launch and beyond, we provide full-cycle support, ensuring you have a trusted partner at every stage of your online journey.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-25 xl:py-30">
      <div>
        <SectionHeading title="The Full Package" subtitle="Benefits" />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {benefitsData.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

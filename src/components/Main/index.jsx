import HeroSection from "../HeroSection";
import HomeSection from "../HomeSection";
import PricesSection from "../PricesSection";

export default function Main() {
    return (
        <main className="relative top-[-7.25rem] pt-[7.25rem] mb-[-7.25rem] ">
            <HeroSection />
            <PricesSection />
            <HomeSection />
        </main>
    )
}
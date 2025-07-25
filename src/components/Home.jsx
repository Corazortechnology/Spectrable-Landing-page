import CircleOfCare from "./pages/CircleOfCare";
import DataAnalysisSection from "./pages/DataAnalysisSection";
import GetStarted from "./pages/GetStarted";
import Hero from "./pages/Hero";
import SecureTrusted from "./pages/SecureTrusted";
import UnderstandingAutism from "./pages/UnderstandingAutism";
import UserInterfaceAndFAQ from "./pages/UserInterfaceAndFAQ";

function Home() {
    return (
        <>
            <section>
                <Hero />
            </section>
            <section>
                <CircleOfCare />
            </section>
            <section>
                <SecureTrusted />
            </section>
            <section>
                <DataAnalysisSection />
            </section>
            <section>
                <UnderstandingAutism />
            </section>
            <section>
                <UserInterfaceAndFAQ />
            </section>
            <section>
                <GetStarted />
            </section>
        </>
    )
}
export default Home;
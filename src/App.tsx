import GlobalBackground from "./components/Background";
import BenefitsSection from "./components/benefits/Benefits";
import DiscoverSection from "./components/discover/Discover";
import FooterSection from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import IncludedSection from "./components/included/Included";
import ProvenImpactSection from "./components/proven/Proven";
import StrategySection from "./components/strategy/Strategy";
import StrategyStepsSection from "./components/strategysteps/StrategySeps";


function App() {
  return (
    <>
      <GlobalBackground />
      <Header />
      <Hero />
      <StrategySection/>
      <StrategyStepsSection/>
      <BenefitsSection/>
      <IncludedSection/>
      <DiscoverSection/>
      <ProvenImpactSection/>
      <FooterSection/>
    </>
  );
}

export default App;

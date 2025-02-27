import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
import Logos from "./components/Logos";
import SocialMedia from "./components/SocialMedia";
import Banners from "./components/Banners";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import ChartPie from "./sections/PieChart";

function App() {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      <Logos />
      <Header />
      <AboutMe />
      <SocialMedia />
      <Banners />
      <ChartPie />
    </div>
  );
}

export default App;

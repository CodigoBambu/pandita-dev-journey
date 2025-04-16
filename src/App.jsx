import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
import Logos from "./components/Logos";
import Header from "./sections/Header"
import AboutMe from "./sections/AboutMe";

function App() {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      <Logos />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
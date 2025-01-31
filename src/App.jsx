import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
import Logos from "./components/Logos";
import Header from "./sections/Header";

function App() {
  const scrollRef = useLocomotiveScroll();

  return (
    <div>
      <Logos />
      <Header />
    </div>
  );
}

export default App;

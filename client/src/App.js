import BannerSection from "./components/BannerSection";
import { Footer } from "./components/Footer";
import MobileAppSection from "./components/MobileAppSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSection />
      <MobileAppSection />
      <Footer />
    </div>
  );
}

export default App;

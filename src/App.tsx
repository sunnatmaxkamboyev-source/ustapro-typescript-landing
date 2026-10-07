import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="hero">
      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <Footer
        brandName="Usta"
        description="Ishonchli ustalarni bir joydan toping va kerakli xizmatni tez va sifatli oling."
      />
    </main>
  );
}

export default App;
import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Research from "./components/Research";
import About from "./components/About";
import Process from "./components/Process"; // ✅ Import the new component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col items-center justify-center">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full">
            <Header />
            <Navigation />
            <Hero />
            <Research />
            <About />
            <Process /> {/* ✅ Added Process component here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

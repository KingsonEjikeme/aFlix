import react from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MoviesSection from "./components/MoviesSection/MoviesSection";

function App() {
  return (
    <div className="App">   
    <Header/> 
    <HeroSection/>
    <MoviesSection/>
    </div>
  );
}

export default App;

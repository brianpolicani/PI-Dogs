import LandingPage from "./Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CreateDog from "./Components/CreateDog";
import About from "./Components/About";
import DetailDog from "./Components/DetailDog";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createDog" element={<CreateDog />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<DetailDog />} />
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;

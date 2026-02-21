import { Route, Routes } from "react-router";
import { Navbar } from "./Layouts/Navbar";
import { Home } from "./Layouts/Home";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

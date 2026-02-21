import { Ecorsystem } from "./Layouts/Ecorsystem"
import { HeroSection } from "./Layouts/HeroSection"
import { KenapaSekarang } from "./Layouts/KenapaSekarang"
import { Navbar } from "./Layouts/Navbar"
import { Testimoni } from "./Layouts/Testimoni"
import { Vidio } from "./Layouts/Vidio"


function App() {
 

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Vidio/>
    <Testimoni/>
    <Ecorsystem/>
    <KenapaSekarang/>
    </>
  )
}

export default App

import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"
import Project from "../Project/Project"
import About from "../About/About"

const Home = () => {
  return (
    <>
     <div className="home-wrapper ">
       <Navbar></Navbar>
      <Banner></Banner>
      <Project></Project>
      <About/>
     </div>
    </>
  )
}
export default Home
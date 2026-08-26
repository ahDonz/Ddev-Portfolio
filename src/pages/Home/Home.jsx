import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Project from '../../components/Project/Project'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <Banner/>
        <Project></Project>
        <About/>

    </>
  )
}
export default Home
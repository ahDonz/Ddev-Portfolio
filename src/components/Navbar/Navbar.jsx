import { Contact } from "../Contact/Contact"

const Navbar = () => {
  return (
    <div className="nav-wrapper flex  items-center border-b-black max-w-full w-full leading-normal px-5">

      <div className="nav-logo  border-black-100 bg-black text-blue-50  p-1.5" >
        <h2>Don Johnson <span className="block max-w-fit mr-auto "> Atillo</span></h2>
      </div>
        <div className="nav-list w-full max-w-[70%]  border-2  flex justify-between ml-auto" >
            <ul className="flex justify-start items-align text-1xl gap-x-2 "  >
                <li>Work</li>
                <li>about</li>
                <li>resume</li>
            </ul>

               <Contact/>


        </div>

        
     

    </div>
  )
}
export default Navbar
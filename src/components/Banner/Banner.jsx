import bnrImage from '../../images/ani-porf.jpg'

const Banner = () => {
  return (
    <>
<div className="bnr_con px-5 flex  items-center h-[80vh] gap-10 border-b border-black mb-6">

          <div className="bnr-img max-w-[330px] w-full border-l-black aspect-1/1" >
            <img src={bnrImage} alt="" />
        </div>

            <div className="bnr-info w-full  max-w-[70%] border-2 p-5 ml-auto" >


                <p className='text-2xl mbe-2.5  font-medium w-full max-w-2xl'>
                <span className='text-gray-600'> I’m Don </span> – a full stack developer, problem solver, and technology
                    enthusiast passionate about building scalable applications and
                    meaningful digital experiences.
                    </p>

                <p className="experience text-[17px]">
                    Frontend Developer @ Proweaver | Software Developer Intern @ MIC Department
                </p>

            
            </div>

            

      </div>
    </>
    
  );
};

export default Banner;
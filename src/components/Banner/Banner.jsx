import bnrImage from "../../images/ani-porf.jpg";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <>
      <div
        className="
          bnr_con
          w-full
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          h-auto
          md:h-[80vh]
          gap-10
          border-b
          border-black
          mb-5
          px-5
          py-10
        "
      >

        {/* Image */}
        <div
          className="
            bnr-img
            w-full
            max-w-[380px]
            max-[1000px]:max-w-[330px]
            max-[800px]:max-w-[320px]
            max-[500px]:max-w-[260px]
            aspect-square
          "
        >
          <img
            src={bnrImage}
           alt="Anime-style portrait of Don"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Text */}
        <div
          className="
            w-full
            max-w-[70%]
            max-[1000px]:max-w-[85%]
            max-[800px]:max-w-full
          "
        >
          <BannerInfo />
        </div>


      </div>
    </>
  );
};

export default Banner;
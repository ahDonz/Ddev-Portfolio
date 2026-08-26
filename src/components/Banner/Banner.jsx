import bnrImage from "../../images/ani-porf.jpg";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <>
      <div className="bnr_con pb-15  pt-25 flex flex-col md:flex-row items-center justify-center h-auto md:h-[80vh] gap-10 border-b border-black mb-5 py-10">

        <div className="bnr-img w-full max-w-[220px] sm:max-w-[280px] md:max-w-[330px] aspect-square">
          <img src={bnrImage} alt="" className="w-full h-full object-cover" />
        </div>

        <BannerInfo />

      </div>
    </>
  );
};

export default Banner;
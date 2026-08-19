import profile from "./MainImages/DCS_PROFILE_LINKED.jpg";
import SocialLink from "./SocialLink";
import Navbar from "../Navbar/Navbar";

function Banner() {

    return (
        <>
            <Navbar />

            <div className="bnr_con">
                <div className="site-wrapper">

                    <div className="bnr_info">

                        <img src={profile} alt="Don Johnson Atillo" />

                        <div className="bnr_content">

                            <h1>Hi, I'm Don.</h1>

                            <p>
                                Frontend Developer based in the Philippines.
                            </p>

                            <p>
                                I build responsive, user-focused websites and
                                digital experiences with clean, maintainable code.
                                I'm currently expanding my skills into React and
                                full-stack development, turning ideas into
                                functional web applications.
                            </p>

                            <ul>
                                <li>Frontend Development</li>
                                <li>React & Modern Web Technologies</li>
                                <li>Full-Stack Development</li>
                            </ul>

                          
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Banner;
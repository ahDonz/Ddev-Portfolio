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
                            I'm a software developer focused on building modern web
                            applications and digital experiences. I enjoy working across
                            the frontend and backend to turn ideas into functional,
                            reliable products.
                        </p>

                        <p>
                            I'm always learning, experimenting, and building new things.
                            I enjoy solving problems with technology and turning rough
                            ideas into products that people can actually use.
                        </p>

                        <ul>
                            <li>Full-Stack Development</li>
                            <li>Web Application Development</li>
                            <li>Modern Web Technologies</li>
                        </ul>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Banner;
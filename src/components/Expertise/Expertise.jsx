
import './Expertise.css'
import { Link } from "react-router-dom";

function Expertise() {
    return (


        <>
        <section className="expertise site-wrapper">

            <h2>Expertise</h2>

            <div className="expertise_grid">

                <div className="expertise_card">
                    <span>01</span>
                    <h3>Frontend Engineering</h3>
                    <p>
                        I build responsive and user-focused interfaces with
                        clean, maintainable code.
                    </p>
                </div>

                <div className="expertise_card">
                    <span>02</span>
                    <h3>React Development</h3>
                    <p>
                        I create modern interfaces using reusable React
                        components and organized application structure.
                    </p>
                </div>

                <div className="expertise_card">
                    <span>03</span>
                    <h3>Backend & APIs</h3>
                    <p>
                        I build server-side logic and APIs that connect
                        applications with backend services and data.
                    </p>
                </div>

                <div className="expertise_card">
                    <span>04</span>
                    <h3>Full-Stack Development</h3>
                    <p>
                        I connect frontend, backend, APIs, and databases
                        to create complete web applications.
                    </p>
                </div>

            </div>

        </section>


      <div className="expertise_skill">
            <div className="expertise_header">
                <h2>Stack</h2>

                <Link to="/stack">
                    View all →
                </Link>
            </div>

            <div className="expertise_list_stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vite</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>REST API</span>
                <span>Git</span>
                <span>GitHub</span>
            </div>
        </div>


</>

    );
}

export default Expertise;
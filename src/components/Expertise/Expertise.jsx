
import './Expertise.css'

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
            
        </div>


</>

    );
}

export default Expertise;
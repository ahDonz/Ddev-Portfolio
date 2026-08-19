import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
    return (
        <section className="blog">

            <div className="blog_header">
                <h2>01 — Journal</h2>

                <Link to="/blog">
                    All posts →
                </Link>
            </div>

            <div className="blog_list">

                <article className="blog_post">
                    <Link to="/blog/html-css-to-fullstack">

                        <div className="blog_info">
                            <h3>From HTML & CSS to Full-Stack Development</h3>

                            <p>
                                How I'm moving from frontend development toward
                                building complete web applications and what I'm
                                learning along the way.
                            </p>
                        </div>

                        <time>Aug 2026</time>

                    </Link>
                </article>


                <article className="blog_post">
                    <Link to="/blog/react-project-structure">

                        <div className="blog_info">
                            <h3>How I Structure My React Projects</h3>

                            <p>
                                What I've learned about breaking a React application
                                into components, pages, and a structure that stays
                                maintainable.
                            </p>
                        </div>

                        <time>Aug 2026</time>

                    </Link>
                </article>


                <article className="blog_post">
                    <Link to="/blog/rest-api">

                        <div className="blog_info">
                            <h3>What I Finally Understood About REST APIs</h3>

                            <p>
                                Breaking down how frontend applications communicate
                                with backend services and what I learned while
                                building my first APIs.
                            </p>
                        </div>

                        <time>Jul 2026</time>

                    </Link>
                </article>


                <article className="blog_post">
                    <Link to="/blog/building-my-portfolio">

                        <div className="blog_info">
                            <h3>Building My Developer Portfolio With React</h3>

                            <p>
                                What I'm learning while rebuilding my portfolio,
                                from component architecture and routing to creating
                                a cleaner development workflow.
                            </p>
                        </div>

                        <time>Jul 2026</time>

                    </Link>
                </article>

            </div>

        </section>
    );
}

export default Blog;
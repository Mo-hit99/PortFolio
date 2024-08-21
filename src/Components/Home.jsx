import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <section className="container">
        <div className="outer-container">
          <div className="inner-container">
            <div className="inner-inner-container"></div>
          </div>
          <Hero />
          <Services />
        </div>
      </section>
      <section className="projects-container">
        <div className="project-card-layout-container">
          <div className="project-card-container">
            <article className="card-article">
              <img
                src="https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="card-img"
              />
              <div className="card-data">
                <span className="card-description">
                  VanCouver Mountains, Canada
                </span>
                <h2 className="card-title">the Great Path</h2>
                <a href="#" className="card-button">
                  Read More
                </a>
              </div>
            </article>

            <article className="card-article">
              <img
                src="https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="card-img"
              />
              <div className="card-data">
                <span className="card-description">Poon Hill, Nepal</span>
                <h2 className="card-title">Starry Night</h2>
                <a href="#" className="card-button">
                  Read More
                </a>
              </div>
            </article>

            <article className="card-article">
              <img
                src="https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="card-img"
              />
              <div className="card-data">
                <span className="card-description">Bojcin Forest, Serbia</span>
                <h2 className="card-title">Path Of Peace</h2>
                <a href="#" className="card-button">
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="skills-container">
        <h1>About Me</h1>
        <div className="about-me-wrapper">
          <div className="about-me-container">about me container</div>
          <div className="my-skill-container">skills</div>
        </div>
      </section>
      <Contact />
    </>
  );
}

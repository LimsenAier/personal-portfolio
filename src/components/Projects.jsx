import { Link } from "react-router-dom";


function Projects() {

  const projects = [
    {
      number: "01",
      title: "NAGA SHAWLS IDENTIFIER",
      description:
        "A machine-learning based mobile application designed to identify traditional Naga shawls from images using computer vision and image classification.",
      technologies:
        "React Native · Expo · Python · PyTorch · ResNet50 · VGG16 · ConvNeXt",
      type: "AI / ML · MOBILE APPLICATION",
      link: "/projects/naga-shawls"
    },

    {
      number: "02",
      title: "CAMPUSPLUS",
      description:
        "A campus-focused mobile application designed to bring useful student activities and campus-related functionality into a single application.",
      technologies:
        "React Native · Expo · JavaScript · Firebase",
      type: "MOBILE APPLICATION",
      link: "/projects/campus-plus"
    }
  ];


  return (

    <section id="projects" className="section projects">

      <div className="section-heading">
        <p>03</p>
        <h2> PROJECTS</h2>
      </div>


      <div className="project-list">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>


            <div className="project-info">

              <p className="project-type">
                {project.type}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                {project.technologies}
              </p>


              <Link
                to={project.link}
                className="project-button"
              >
                View Project →
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>

  );
}


export default Projects;
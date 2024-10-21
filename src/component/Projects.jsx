import "./project.css";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="container">
      <div className="title">npsbell's Projects</div>
      <div className="project-container">
        {projects.map((item) => (
          <div key={item.id}>
            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <div className="icon">
                <a href={item.github} target="_blank">
                  <img src="/logo/github.svg" alt="" />
                </a>
                <a href={item.link} target="_blank">
                  {item.id >= 1 && item.id <= 6 ? (
                    <img src='/logo/link.svg' alt="" />
                  ) : null}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

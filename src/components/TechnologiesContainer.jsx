import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiSass,
  DiDatabase,
} from "react-icons/di";
import { SiCsharp, SiTypescript } from "react-icons/si";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "csharp", name: "C#", icon: <SiCsharp /> },
    { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id: "sass", name: "SASS", icon: <DiSass /> },
    { id: "sqlserver", name: "SQL Server", icon: <DiDatabase /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
import Project from "../components/Project";
import projects from "./api/projectData";
export default function Projects(){
  
    return(
        <div><h1>Hellp proj</h1><br/>
        <div className="flex flex-col space-y-10">
        {
            projects.map(project=>(<div key={project.title}>
            <Project  project={project} />
            </div>))
        }
        
        </div>
</div>
    )
}
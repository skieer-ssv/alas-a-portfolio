import Navbar from "../components/Navbar";
import Project from "../components/Project";
import projects from "./api/projectData";
export default function Projects(){
  
    return(
        <div className="p-2">
        <Navbar/>
            
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
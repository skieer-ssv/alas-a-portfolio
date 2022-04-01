import Navbar from "../components/Navbar";
import Project from "../components/Project";
import projects from "../data/projectData";
export default function Projects(){

    return(
        <div className="" >
        <Navbar/>
            
        <div className="p-2 grid grid-cols-1 md:grid-cols-3">
        {
            projects.map(project=>(<div key={project.title}>
            <Project  project={project} />
            </div>))
        }
        
        </div>
</div>
    )
}
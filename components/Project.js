
import Link from "next/link";
import ProjectTech from "./ProjectTech";
import Image from "next/image";
export default function Project(props) {

    const title = props.project.title;
    const stack = props.project.stack;
    const isOngoing = props.project.ongoing?props.project.ongoing:false;
    const githubLink = props.project.githubLink;
    const imagePath= `${title}.png`
    return (

        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 ">
            <div className="flex flex-col">
                {/* TODO: add images */}
            {/* <Image alt={title} src={imagePath}/> */}
                
                {
                    githubLink?
                        (<Link href={githubLink} passHref><button className="btn btn-blue">Checkout on github </button></Link>):""
                    
                }
            </div>
            <div className="flex flex-col" >
                <div><h3>{title}</h3>
                {
                    isOngoing?
                         (<span className="text-red-600">Ongoing</span>):''
                    

                }
                </div>
                

                <div className="grid grid-cols-5">
                    {
                        stack.map(tech => (
                            <div key={tech}>
                                <ProjectTech tech={tech} />
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

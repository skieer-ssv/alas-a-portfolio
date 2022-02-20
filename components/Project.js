
import Link from "next/link";
import ProjectTech from "./ProjectTech";
import Image from "next/image";
export default function Project(props) {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 50}`
    }
    const title = props.project.title;
    const stack = props.project.stack;
    const isOngoing = props.project.ongoing ? props.project.ongoing : false;
    const githubLink = props.project.githubLink;
    const imagePath = props.project.imagePath;

    return (

        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 shadow-md p-4 mx-4">
            <div className="flex flex-col gap-4">
                <span><h1 className="text-xl text-left">{title}</h1>  {
                    isOngoing ?
                        (<span className="text-red-600">Ongoing</span>) : ''
                }</span>
    {
                    githubLink ?
                        (<Link href={githubLink} passHref><button className="btn btn-blue">Checkout on github </button></Link>) : ""
                }

                <div className="grid grid-cols-5 gap-4">
                    {
                        stack.map(tech => (
                            <div key={tech}>
                                <ProjectTech tech={tech} />
                            </div>
                        ))
                    }

                </div>
             
            </div>
            <div className="flex flex-col gap-4" >
            <Image alt={title} src={imagePath} height={200} width={300} title={title} loader={myLoader} />
            
            </div>

        </div>
    )
}

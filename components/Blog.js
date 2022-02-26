
import Link from "next/link";


export default function Blog({blog}){

    return(
        <div className="p-3">
        <div className="mb-8 flex flex-row gap-5 ">
            <div className="self-stretch shrink-0">
                
                <span className="text-gray-400 text-center hover:text-twitterBlue ">{blog.date}</span>
            </div>
            <div className="flex flex-col gap-4 p-3">
            <div className="Title hover:text-twitterBlue">
              <Link href={blog.link} ><a> <h1 className="text-3xl">{blog.title}</h1></a></Link>
                </div>
                <div className="description shrink">
                <p className="">{blog.description}</p>
                </div>
             
            </div>
            
            </div>
            <hr/>
            </div>
         
    )

}
import Navbar from "../components/Navbar"
import blogsList from "./data/blogsList";
import Blog from "../components/Blog";


export default function Blogs(){
blogsList.reverse();
    return(
        <div className="p-2 " >
        <Navbar/>
            
        <div className="flex flex-col space-y-10 md:mx-24 ">
        {
            blogsList.map(blog=>(<div key={blog.title}>
            <Blog  blog={blog} />
            </div>))
        }
        
        </div>
      
</div>
    )
}
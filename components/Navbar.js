import Link from "next/link";
import NavButton from "./NavButton";
export default function Navbar(){
    return(
        <div className="flex shadow-sm justify-evenly pb-3 pt-4 mb-1">
            <NavButton path="/" label="Home"/>
            <NavButton path="./projects" label="Projects"/>
            <NavButton path="/" label="Blogs"/>
            <NavButton path="/" label="Tech Socials"/>
           
        </div>
    )
}
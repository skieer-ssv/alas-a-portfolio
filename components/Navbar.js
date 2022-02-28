import NavButton from "./NavButton";
export default function Navbar(){
    return(
        <div className="flex shadow-md justify-evenly pb-3 pt-4 mb-1">
            <NavButton path="/" label="Home"/>
            <NavButton path="/projects" label="Projects"/>
            <NavButton path="/blogs" label="Blogs"/>
            <NavButton path="/my_stuff" label="My stuff"/>
        </div>
    )
}
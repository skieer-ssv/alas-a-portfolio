import Navbar from "../components/Navbar";
import TalkCard from "../components/TalkCard";
import talks from "../data/talkData";
export default function Projects(){

    return(
        <div className="" >
        <Navbar/>
            <br/>
            <div className="p-2 md:w-1/2 m-auto">
                <span className="text-center text-3xl">My Presentations, Workshops & Talks </span>
            </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-3">
        {
            talks.map(talk=>(<div key={talk.title}>
            <TalkCard  talk={talk} />
            </div>))
        }
        
        </div>
</div>
    )
}
import Navbar from "../components/Navbar";
import Tweets from "../components/Tweet";
import Typewriter from "../components/Typewriter";
import Socials from "../components/Socials";


export default function Home(){
  
  return(
<div className="p-2 min-h-screen ">
      <Navbar/>

 <div className=" flex justify-center grow " >
<div className=" m-1 flex flex-col justify-evenly gap-5">

   <div className="pt-10 self-center"><span className="text-5xl">Hey, I&apos;m 
   <span className="text-twitterBlue "> Siddhant Vispute</span>

   </span> 
   
   </div>
   <div className=" self-center"><Typewriter/></div>
   <div ><Socials/></div>
   <div className="min-h-fit self-center"><Tweets/></div>
 
   </div>
   </div>
  </div>
  );
}


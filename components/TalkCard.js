
import Link from "next/link";
import Image from "next/image";
export default function TalkCard(props) {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 50}`
    }
    const title = props.talk.title;
    const slideLink = props.talk.slideLink ? props.talk.slideLink : false;
    const youtubeLink = props.talk.youtubeLink ? props.talk.youtubeLink : false;
    const imagePath = props.talk.imagePath;

    return (

        <div className="grid grid-cols-1 shadow-xl hover:shadow-2xl p-10 mx-5 gap-2 min-h-full">
            <div className="flex flex-col gap-4 ">
                <span><h1 className="text-3xl">{title}</h1> </span>
    

             
             
           
            <Image alt={title} src={imagePath} height={200} width={320} title={title} loader={myLoader} />
            {
                    slideLink?
                        (<Link href={slideLink} passHref><button className="btn bg-amber-500 text-white">Checkout on Slides </button></Link>) : ""
                }
            {
                    youtubeLink ?
                        (<Link href={youtubeLink} passHref><button className="btn bg-red-600 text-white">Checkout on Youtube </button></Link>) : ""
                }
              
          
           
                </div>
        </div>
    )
}

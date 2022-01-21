import Image from 'next/image'


export default function ProjectTech(props){
        const tech=props.tech;
        const src=`/tech_images/${tech}.png`;
    return( <Image
        
        src={src}
        alt={tech}
        height={60}
        width={60}
      />)
}
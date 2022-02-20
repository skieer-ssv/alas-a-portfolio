import Image from 'next/image';
import techNames from '../pages/data/techNames';

export default function ProjectTech(props){
  
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 50}`
}
        const techImage=getTechName( props.tech);
        function getTechName(tech){
          if (techNames[tech]){
            return techNames[tech];
          }
          else{
            return -1;
          }
        }
console.log(techImage);
        const source= techImage==-1?'/techIconNotFound.jpg' :`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.tech}/${techImage}.svg`;
        
    return( <Image
      loader={myLoader}
        src={source}
        alt={props.tech}
        height={40}
        width={40}
        title={props.tech}
      />)
}
import Link from "next/link";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHackerrank, faLinkedin, faGithub,faHashnode,faBlogger } from '@fortawesome/free-brands-svg-icons';
//add social media links
export default function Socials(){

    return(
        <div>
        <div className="flex justify-center gap-4">
<Link href="https://www.linkedin.com/in/siddhant-vispute-5aa3131a5/"><a><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></Link>
<Link href="https://github.com/skieer-ssv"><a><FontAwesomeIcon icon={faGithub} size="2x" /></a></Link>
<Link href="https://www.hackerrank.com/sidsv21"><a><FontAwesomeIcon icon={faHackerrank} size="2x"/></a></Link>
<Link href="https://hashnode.com/@siddhantV"><a><FontAwesomeIcon icon={faHashnode} size="2x"/></a></Link>
<Link href="https://this-is-sid.blogspot.com/"><a><FontAwesomeIcon icon={faBlogger} size="2x"/></a></Link>
<Link href="mailto:sidsv21[at]gmail[dot]com"><a><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></Link>
        </div>
        </div>
    );
}   


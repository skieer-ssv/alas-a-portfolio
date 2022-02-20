import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank, faLinkedin, faGithub,faHashnode,faBlogger } from '@fortawesome/free-brands-svg-icons';
//add social media links
const Socials=()=>{

    return(
        <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
        <div className="flex justify-center gap-4">
        
<Link href="https://www.linkedin.com/in/siddhant-vispute-5aa3131a5/"><a><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></Link>
<Link href="https://github.com/skieer-ssv"><a><FontAwesomeIcon icon={faGithub} size="2x" fapr /></a></Link>
<Link href="https://www.hackerrank.com/sidsv21"><a><FontAwesomeIcon icon={faHackerrank} size="2x"/></a></Link>
<Link href="https://hashnode.com/@siddhantV"><a><FontAwesomeIcon icon={faHashnode} size="2x"/></a></Link>
<Link href="https://this-is-sid.blogspot.com/"><a><FontAwesomeIcon icon={faBlogger} size="2x"/></a></Link>
        </div>
        </div>
    );
}   

export default Socials;
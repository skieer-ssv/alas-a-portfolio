import Image from "next/image";
import Navbar from "../components/Navbar";
import Head from "next/head";
export default function Custom404() {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 50}`
      }
    return (<div className=" min-h-screen p-2">
        <Head><script type="text/javascript" async src="https://tenor.com/embed.js"></script></Head>
        <Navbar/>
<div className="grid place-content-center mt-5 md:mt-16">
<Image alt="work in progress" src='/cat-im-on-it.gif' width={300} height={300} loader={myLoader} />


</div>
        </div>)
  }
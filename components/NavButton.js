import Link from 'next/link'
import { withRouter } from 'next/router' //withRouter adds the router prop to the const

//use the router prop to get the pathname, split it on '/' and style the link by giving it a classname which matches the base path (/writing, /portfolio)
const NavButton = ({path,label}) => (
  <Link href={path} passHref>
    <div
      className= "menu-btn-lg cursor-pointer active:bg-slate-500 block"
    >
      <a className=' text-xl  '>{label}</a>
    </div>
  </Link>
)

export default withRouter(NavButton)
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
const Navbar =()=>{
    const user = false
    return(
        <div className='h-24 text-white-500 p-4 flex items-center justify-start uppercase md:h-24 '>{/* lg:px-20 xl:px-40 */}
            {/* Logo */}
            <div className='text-xl md:font-bold flex-1 md:text-center Logo'>
                <Link href="/">
                <Image className='ml-20 logoimg' src="/Background.png" alt="LogoImg" width={127} height={127}/>
                </Link>
            </div>
            <div className='hidden xl:flex Links'>
                <Link className='link' href="/">About</Link>
                <Link className='link' href="/">Traits</Link>
                <Link className='link' href="/">Roadmap</Link>
                <Link className='link' href="/">Utility</Link>
                <Link className='link' href="/">Team</Link>
                <Link className='link' href="/">FAQ</Link>
                <Link className='link' href="/">W3</Link>
                <Link className='link socker' href="/">Mint your socker</Link>
            </div>
            {/* Mobile Menu */}
            <div className='xl:hidden'>
                <Menu/>
            </div>
        </div>
    )
}
export default Navbar
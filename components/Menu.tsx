"use client";
import Image from 'next/image'
import Link from 'next/link'
import react, { useState } from 'react';
const Links =[
    { id:1, title: "About", url:"/"},
    { id:2, title: "Traits", url:"/"},
    { id:3, title: "Roadmap", url:"/"},
    { id:4, title: "Utility", url:"/"},
    { id:5, title: "Team", url:"/"},
    { id:6, title: "FAQ", url:"/"},
    { id:7, title: "W3", url:"/"},
];
const Menu =()=>{
    const [open, setOpen] = useState(false);
    return(
        <div>
            {!open ?( <Image className='cursor-pointer' src="/Menu.png" alt='' width={40} height={40} onClick={()=>setOpen(true)}/>
            ) : (
            <Image className='cursor-pointer' src="/Menu (1).png" alt='' width={40} height={40} onClick={()=>setOpen(false)}/>
            )}
            {open &&(<div className='menu absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {Links.map(item=>(   
                    <Link className='meuuLlink' href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
                ))}
               <div className='links flex flex-col'>
          <Link className='text-base font-bold leading-10 text-center active' href={"/"} >Mint Lucky Edition</Link>
          <Link className='text-base font-bold leading-10 text-center' href={"/"} >Buy OG Edition</Link>
          <Link className='text-base font-bold leading-10 text-center' href={"/"} >Buy Early Edition</Link>
        </div>
            </div>)}
        </div>
    )
}
export default Menu
import React, { ReactNode } from 'react';
import { SiTypescript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoGithub } from 'react-icons/bi'
import { SiRedux } from 'react-icons/si'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    
  
    <div className='header'>
      <p className='animate-bounce'>Made by Axel</p>
    </div>
    <h1 className='titulo'>COMICS</h1>
    <div className="flex flex-wrap justify-center gap-2 m-10" >
      {children}
      <div className='link-box'>

        <div className='flex p-4'>
          <FaReact className='m-2 animate-spin' size={35} color={'#30c3cd'} />
          <SiTailwindcss className='m-2 animate-pulse' size={35} color={'#01a8f6'} />
          <SiTypescript className='m-2' size={35} color={'#3b32d8'} />
          <SiRedux className='m-2 animate-ping' size={35} color={'#8401f6'} />
        </div>
        <a className='animate-bounce' href="https://github.com/Leracius">Leracius</a>
          <BiLogoGithub className='m-2' size={35} color='white' />

      </div>
    </div>

        </>
  )
};

export default Layout;
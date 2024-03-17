import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick =()=>setNav(!nav)
  return (
    <>
    <div className='fixed w-full h-[4rem] flex justify-between items-center m px-4 bg-[#08192F] text-gray-300'>
        <div className='hover:scale-150 duration-1000'>
            <img src={logo} alt="logo" style={{width:'40px'}} />
        </div>

        {/* Menu */}

        <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
       
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ?  <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192F] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
       </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="/">Linkedin<FaLinkedin size={30}/> </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="/">Github<FaGithub size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="/">Email<HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="/">Resume<BsFillPersonLinesFill size={30}/> </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
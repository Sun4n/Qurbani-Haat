import Link from 'next/link';
import React from 'react';
import logo from '@/assest/qurbani_no_bg.png'
import Image from 'next/image';
const Navbar = () => {
    const links =<>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/animal'}>Animal</Link></li>
    </>
    return (
        <div className="navbar bg-base-100  shadow-sm ">
           <div className='flex justify-between container mx-auto'>
             <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-[18px]">
                        {links}
                    </ul>
                </div>
                <Image src={logo} alt='logo' width={100} height={100}></Image>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-[18px]">
                   {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn ">Login</a>
                <a className="btn">Register</a>
            </div>
           </div>
        </div>
    );
};

export default Navbar;
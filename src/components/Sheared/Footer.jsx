import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#7ea079] text-white'>
            <div className='container mx-auto flex justify-between items-center px-6 py-8'>
                <div className='space-y-3'>
                    <h2 className='text-[30px] font-bold'>About</h2>
                    <p  className='text-[1rem] font-medium w-[400px]'>We are here to serve you very beautiful cows
                        Our cows imported from India
                        As well as we offer Deshi Goru</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-[30px] font-bold'>Social links</h2>
                    <div className='flex items-center justify-center gap-3 text-xl'>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaTwitter />

                    </div>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-[30px] font-bold'>Contact Info</h2>
                    <p className='flex items-center gap-2'><CiMail />kazisunan68@gmail.com</p>
                    <p className='flex items-center gap-2'><FaPhone />01407005064</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
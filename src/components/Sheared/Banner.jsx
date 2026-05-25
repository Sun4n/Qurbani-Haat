import React from 'react';
import bannerImage from '@/assest/Banner.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="container mx-auto relative">
            <Image
                src={bannerImage}
                alt="bannerImage"

                className='w-[100%] h-[545px] rounded-md mt-6'
            />
            <Link href={'/animal'}>
                <button className='btn absolute top-90 right-90 px-10 bg-[#7ea079] text-white font-bold shadow-none border-none text-[16px]'>All Cow</button>
            </Link>
        </div>
    );
};

export default Banner;
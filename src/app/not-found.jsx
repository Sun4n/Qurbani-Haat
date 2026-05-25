import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (

        <div className='h-screen flex justify-center items-center flex-col gap-4'>
            <h1 className='text-4xl text-purple-500 font-bold'>This Page is not found</h1>
            <Link href={'/'}>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
        </div>

    );
};

export default NotFoundPage;
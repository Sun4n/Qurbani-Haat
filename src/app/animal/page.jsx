import AnimalCard from '@/components/Sheared/AnimalCard';
import { urlMaker } from '@/lib/data';
import Image from 'next/image';
import React, { Suspense } from 'react';

const AllAnimalPage = () => {
    const animals = urlMaker("/data.json");
    console.log(animals[0].image);
    return (
        <>
            <h1 className='text-3xl font-bold my-6'>All Animal</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>


                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    {
                        animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                    }
                </Suspense>

            </div>
        </>
    );
};

export default AllAnimalPage;
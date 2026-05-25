import AnimalCard from '@/components/Sheared/AnimalCard';
import { urlMaker } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AllAnimalPage = () => {
    const animals = urlMaker("/data.json");
    console.log(animals[0].image);
    return (
        <>
            <h1 className='text-3xl font-bold my-6'>All Animal</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </>
    );
};

export default AllAnimalPage;
import { urlMaker } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AnimalDetail = async({params}) => {
    const {id} = await params
    const animals = urlMaker("/data.json");
    const animalFilter = animals.filter(animal=> animal.id==id)
    console.log(animalFilter);
    return (
        <div className='flex flex-col md:flex-row gap-4 my-10'>
            <div>
                <Image src={animalFilter[0].image} alt={animalFilter[0].name} width={450} height={100}></Image>
            </div>
            <div className='space-y-6 ml-6 mt-12'>
                <h1 className='text-5xl font-bold'>{animalFilter[0].name}</h1>
                <h1 className='text-[18px] '>Breed:{animalFilter[0].breed}</h1>
                <h1 className='text-[18px] font-medium'>Category:{animalFilter[0].category}</h1>
                <h1 className='text-3xl font-medium'>Price:{animalFilter[0].price}</h1>
                <h1 className='text-[18px] font-medium'>Location:{animalFilter[0].location}</h1>
                <h1 className='text-[18px] font-medium'>Weight:{animalFilter[0].weight}</h1>
                <button className='btn px-10 bg-[#7ea079] text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default AnimalDetail;
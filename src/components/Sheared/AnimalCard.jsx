import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
    console.log(animal);
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image src={animal.image} width={300} height={100} alt={animal.name}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>
                <p className='text-[16px] mb-0'>{animal.description}</p>
                <p className='text-[16px] '>Weight: {animal.weight}kg</p>
                <div className="card-actions justify-end">
                    <Link href={`/animal/01`}>
                        <button className="btn btn-primary">See detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;
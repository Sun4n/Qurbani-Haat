import AnimalCard from "@/components/Sheared/AnimalCard";
import Banner from "@/components/Sheared/Banner";
import QurbaniTips from "@/components/Sheared/HomePage/QurbaniTips";
import { urlMaker } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const animals = urlMaker("/data.json");
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-2xl font-bold mt-4">Feature Cow</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-5">
 

        {
          animals.slice(0, 4).map(animal => {
            return <div className="card bg-base-100 w-96 shadow-sm" key={animal.id}>
              <figure className="p-5 rounded-md">
                <Image src={animal.image} width={300} height={100} alt={animal.name} ></Image>
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
          })
        }
      </div>
      <h1 className="text-center text-4xl font-bold my-10">Qurbani Tips</h1>
      <QurbaniTips></QurbaniTips>
    </div>
  );
}

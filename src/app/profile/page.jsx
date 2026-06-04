"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import LoginPage from '../auth/login/page';

const MyProfilePage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user);
    return (
        <div>
            {
                user ? <div className='flex gap-4 md:flex-row flex-col md:justify-start  items-center my-6'>
                <div>
                    <Image src={user?.image} alt='user' width={250} height={250}></Image>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <h1 className='font-bold text-3xl'>{user?.name}</h1>
                    <h1 className='text-lg'>{user?.email}</h1>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-[#7ea079] text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>User Update</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Name</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Type here name"
                                        
                                    />
                                    
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Photo URL</legend>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Type here photo url"
                                        
                                    />
                                   
                                </fieldset>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            
                        </div>
                    </dialog>
                </div>
            </div> : <LoginPage></LoginPage>
            }
        </div>
    );
};

export default MyProfilePage;
"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const RegisterPage =  () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors, "errors");

    const handleRegisterPageFunc = async (data) => {
        const {email,name,photo,password}=data
        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: '/',
        });
        console.log(res,error);

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert('SingUp Successfully')
        }
    }
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center mb-6">
                    Register your account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterPageFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here name"
                            {...register("name", {
                                required: "Name field is required",
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here photo url"
                            {...register("photo", {
                                required: "Photo URL field is required",
                            })}
                        />
                        {errors.photo && (
                            <p className="text-red-500">{errors.photo.message}</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Type here email"
                            {...register("email", { required: "required email" })}

                        />
                        {
                            errors.email && <p className="text-red-500">{errors.email.message}</p>
                        }
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Type here password"
                            {...register("password", { required: "Enter 8 digit password" })}
                        />
                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>


            </div>
        </div>
    );
};

export default RegisterPage;
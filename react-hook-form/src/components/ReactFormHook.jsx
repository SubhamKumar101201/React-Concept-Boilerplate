import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let renderCount = 0

function ReactFormHook() {
    const form = useForm()
    const { register, control, handleSubmit, formState } = form
    const { errors, isValid } = formState

    const onSubmit = (data) => {
        console.log('form submitted', data)
    }

    renderCount++
    return (

        <>
            <h1>Youtube Form ({renderCount/2})</h1>
            <div className='border border-spacing-2 border-r-white px-6 py-8'>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)} noValidate >
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Name" id="username" {...register("username", {
                        required: "Username is required"
                    })} />
                    <p className='text-red-500 text-left text-xs'>{errors.username?.message}</p>

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" id='email' {...register("email", {
                        required: "Email is required",
                        validate: (val) => {
                            return val ==! "admin@example.com" || "Enter different email address"
                        }
                    })} />
                    <p className='text-red-500 text-left text-xs'>{errors.email?.message}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" id='password' {...register("password", {
                        required: "Password is required"
                    })} />
                    <p className='text-red-500 text-left text-xs'>{errors.password?.message}</p>

                    <button className='mt-4'>Submit</button>
                </form>
                <DevTool control={control} />
            </div>
        </>
    )
}

export default ReactFormHook
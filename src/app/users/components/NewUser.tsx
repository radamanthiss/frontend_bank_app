"use client"
import { UserInfoContext } from '@/context/UserContext';
import { createUser, updateUser } from '@/services/users';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import React, { useContext, useEffect, useRef, useState } from 'react'

export default function NewUser() {
  const { user } = useContext(UserInfoContext);
  const formData = useRef("" as any)


  const createNewUser = async () => {
    try {
      const { name, email, password, mobile_number, country, user_type } = formData.current
      const response = await createUser(name.value, email.value, password.value, parseInt(mobile_number.value, 10), country.value, user_type.value);
      alert(response.message)
      formData.current.reset()

    } catch (error) {
      alert('Error creating new user')
    }
  }

  // if (!user) return <div>Loading...</div>;
  return (
    <form className='mt-9 text-dark-blue w-full h-auto grid md:grid-cols-2 gap-3 md:gap-32 text-blue-001 text-sm font-bold' ref={formData}>
      {/*COL1 */}
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='flex w-[80px]'>
            Nombre
          </label>
          <div className='flex w-full'>
            <input type="text" placeholder="nombre" name='name' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
          </div>
        </div>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='flex w-[80px]'>
            Email
          </label>
          <div className='flex w-full'>
            <input type="text" placeholder="email" name='email' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
          </div>
        </div>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='flex w-[70px]'>
            Password
          </label>
          <div className='flex w-full'>
            <input type="password" placeholder="password" name='password' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
          </div>
        </div>

      </div>
      {/*COL2 */}
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
          <label className='flex w-[80px]'>
            Teléfono
          </label>
          <input type="text" placeholder="teléfono" name='mobile_number' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
        </div>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full '>
          <label className='flex w-[80px]'>
            País
          </label>
          <input type="text" placeholder="país" name='country' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
        </div>
        <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
          <label className='flex w-[80px]'>
            Tipo
          </label>
          <input type="text" placeholder="tipo de usuario" name='user_type' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
        </div>

        <div className='flex justify-end mt-4 w-full'>
          <button type="button"
            className={`py-4 px-12 bg-dark-blue rounded-xl text-sm font-bold text-white`}
            onClick={() => {
              createNewUser();
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  )
}

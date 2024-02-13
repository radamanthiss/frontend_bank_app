"use client"
import { UserInfoContext } from '@/context/UserContext';
import { deleteUser, updateUser } from '@/services/users';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { set } from 'react-hook-form';

export default function AboutUser() {
  const { user } = useContext(UserInfoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: 0,
    country: '',
    user_type: '',
    created_at: '',
  });
  const router = useRouter();

  const vals = async () => {
    setFormData({
      name: user!.name,
      email: user!.email,
      mobile_number: parseInt(user!.mobile_number.toString()),
      country: user!.country,
      user_type: user!.user_type.toString(),
      created_at: user!.created_at,
    });
  }



  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const toggleEdit = () => {
  //   // Only call the update function if transitioning from "Save" to "Edit"
  //   if (isEditing) {
  //     // updateAccountDetails();
  //   }
  //   setIsEditing(!isEditing);
  // };
  const updateUserInfo = async () => {
    // setIsEditing(!isEditing)
    try {
      await updateUser(user?.id as unknown as string, formData).then((response) => {
        alert(response.message)
        router.push('/')
        setIsEditing(false)
      })

    } catch (error) {
      alert('Error to update user')
    }
  }

  const handleDelete = async () => {
    setIsEditing(!isEditing)
    try {
      await deleteUser(user?.id as unknown as string).then((response) => {
        alert(response.message)
        router.push('/')
      })

    } catch (error) {
      alert('Error to delete user')

    }
  }

  useEffect(() => {
    vals();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='mt-9 text-dark-blue w-full'>
      <form className='w-full h-auto grid md:grid-cols-2 gap-3 md:gap-32 text-blue-001 text-sm font-bold mt-8'>
        {/*COL1 */}
        <div className='flex flex-col gap-6 '>
          <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
            <label className='flex w-[70px]'>
              Nombre
            </label>
            <input type="text" placeholder="Nombre" value={formData.name} onChange={handleChange} name='name' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />
          </div>
          <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
            <label className='flex w-[70px]'>
              Email
            </label>
            <div className='flex w-full'>
              <input type="text" placeholder="Email" value={formData.email} onChange={handleChange} name='email' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />
            </div>
          </div>
          <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
            <label>
              Teléfono
            </label>
            <input type="text" placeholder="Teléfono" value={formData.mobile_number} onChange={handleChange} name='mobile_number' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />
          </div>
        </div>
        {/*COL2 */}
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center xl:min-w-[100px] w-full '>
            <label className='flex w-[120px]'>
              País
            </label>

            <input type="text" placeholder="país" value={formData.country} onChange={handleChange} name='country' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />

          </div>
          <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
            <label className='flex w-[120px]'>
              Tipo usuario
            </label>
            <input type="text" placeholder="tipo de usuario" value={formData.user_type} onChange={handleChange} name='user_type' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />
          </div>
          <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
            <label className='flex w-[120px]'>
              Fecha creación
            </label>
            <input type="text" placeholder="fecha creación" value={formData.created_at} onChange={handleChange} name='created_at' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" disabled={!isEditing} />
          </div>

          <div className='flex justify-start mt-4'>
            {isEditing ? (
              <div className="flex justify-between w-full">
                <button
                  type="button"
                  className={`py-4 px-12 bg-dark-blue rounded-xl text-sm font-bold text-white`}
                  onClick={() => {
                    updateUserInfo();
                  }}
                >
                  Guardar
                </button>
                {/* DELETE */}
                <div className="relative">
                  <TrashIcon
                    width={15}
                    className="absolute left-6 top-5 text-alert-red"
                  />
                  <button
                    className={`border-solid border-2 border-alert-red rounded-xl  py-4 px-8 pl-12 text-sm font-bold text-alert-red`}
                    onClick={() => { handleDelete();}}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex justify-end items-end w-full'>

                <button
                  type="button"
                  className={`py-4 px-14 bg-dark-blue rounded-2xl text-md font-bold text-white`}
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Editar
                </button>

              </div>
            )}
          </div>
        </div>

      </form>
    </div>
  )
}

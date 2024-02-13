"use client"
import { accountDetail, deleteAccount, updateAccount } from '@/services/accounts';
import { Accounts } from '@/types/accountTypes';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';

export default function FormAccountDetail() {
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const { id_account } = params;
  const router = useRouter();
  const [account, setAccount] = useState<Accounts>();
  const [formData, setFormData] = useState({
    account_type: '',
    account_number: '',
    balance: '',
    status: '',
    date_opened: '',
    user_id: '',
  });


  const getAccountDetail = async () => {
    try {
      const data = await accountDetail(id_account as string);
      setAccount(data.account);
      setFormData({
        account_type: data.account.account_type,
        account_number: data.account.account_number,
        balance: data.account.balance,
        status: data.account.status,
        date_opened: data.account.date_opened,
        user_id: data.account.user_id,
      });
    } catch (error) {
      console.log('Error to get account detail');
    }
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
  //     updateAccountDetails();
  //   }
  //   setIsEditing(!isEditing);
  // };
  const updateAccountDetails = async () => {
    // setIsEditing(!isEditing)
    try {
      await updateAccount(id_account as string, formData).then((response) => {
        alert(response.message)
        router.push('/accounts')
      })

    } catch (error) {
      alert('Error to update account')
    }
  }

  const deleteAccountUser = async () => {
    setIsEditing(!isEditing)
    try {
      await deleteAccount(id_account as string).then((response) => {
        alert(response.message)
        router.push('/accounts')
      })
      // setIsEditing(false)
    } catch (error) {
      alert('Error to delete account')
    }

  }

  useEffect(() => {
    getAccountDetail();
  }, []);

  if (!account) return <div>Loading...</div>;
  return (
    <form className='mt-9 text-dark-blue w-full h-auto grid md:grid-cols-2 gap-3 md:gap-32 text-blue-001 text-sm font-bold'>
      {/*COL1 */}
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            Tipo de cuenta
          </label>
          <input type="text" placeholder="tipo de cuenta" value={formData.account_type} onChange={handleChange} name='account_type' className="rounded-lg px-4 py-1 bg-pale-blue justify-end w-full" disabled={!isEditing} />
        </div>

        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            # de cuenta
          </label>
          <input type="text" placeholder="número de cuenta" value={formData.account_number} onChange={handleChange} name='account_number' className="rounded-lg px-4 py-1 bg-pale-blue justify-end w-full" disabled={!isEditing} />
        </div>

        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            Saldo
          </label>
          <input type="text" placeholder="saldo" name='balance' value={formData.balance} onChange={handleChange} className="rounded-lg px-4 py-1 bg-pale-blue justify-end w-full" disabled={!isEditing} />
        </div>
      </div>
      {/*COL2 */}
      <div className='flex flex-col gap-4 mt-2'>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            Estado
          </label>
          <input type="text" placeholder="Estado" name='status' value={formData.status} onChange={handleChange} className="rounded-lg px-4 py-1  bg-pale-blue justify-end w-full" disabled={!isEditing} />
        </div>

        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            ID de usuario
          </label>
          <input type="text" placeholder="ID de usuario" name='user_id' defaultValue={formData.user_id} className="rounded-lg px-4 py-1  bg-pale-blue justify-end w-full" disabled={isEditing} />
        </div>

        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='max-w-[90px] w-full'>
            Fecha apertura
          </label>
          <input type="text" placeholder="Fecha de apertura" name='date_opened' value={formData.date_opened} onChange={handleChange} className="rounded-lg px-4 py-1  bg-pale-blue justify-end w-full" disabled={!isEditing} />
        </div>

        <div className='flex justify-start mt-4'>
          {isEditing ? (
            <div className="flex justify-between w-full">
              <button
                type="button"
                className={`py-4 px-12 bg-dark-blue rounded-xl text-sm font-bold text-white`}
                onClick={() => {
                  updateAccountDetails();
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
                  onClick={() => {
                    deleteAccountUser();
                    // setIsEditing(false);
                  }}
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
  )
}

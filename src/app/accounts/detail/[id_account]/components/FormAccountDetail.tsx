"use client"
import { accountDetail, updateAccount } from '@/services/accounts';
import { Accounts } from '@/types/accountTypes';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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

  const toggleEdit = () => {
    // Only call the update function if transitioning from "Save" to "Edit"
    if (isEditing) {
      updateAccountDetails();
    }
    setIsEditing(!isEditing);
  };
  const  updateAccountDetails = async() =>{
    setIsEditing(!isEditing)
    try {
      if (isEditing) {
        await updateAccount(id_account as string, formData).then((response) => {
          alert(response.message)
          router.push('/accounts')
        })
      }
    } catch (error) {
      alert('Error to update account')
    }
  }

  useEffect(() => {
    getAccountDetail();
  }, [id_account]);

  if (!account) return <div>Loading...</div>;
  return (
    <div className='mt-9 text-dark-blue'>
      <form className='flex w-[600px] flex-col gap-5 items-end justify-between'>
        <div className='flex gap-4 items-center'>
          <label>
            Tipo de cuenta
          </label>
          <input type="text" placeholder="tipo de cuenta" value={formData.account_type} onChange={handleChange} name='account_type' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end" disabled={!isEditing}/>  
        </div>

        <div className='flex gap-4 items-center'>
          <label>
            Número de cuenta
          </label>
          <input type="text" placeholder="número de cuenta" value={formData.account_number} onChange={handleChange} name='account_number' className="rounded-lg px-4 py-1  bg-pale-blue" disabled={!isEditing}/>
        </div>

        <div className='flex gap-4 items-center'>
          <label>
            Saldo
          </label>
          <input type="text" placeholder="saldo" name='balance' value={formData.balance} onChange={handleChange} className="rounded-lg px-4 py-1  bg-pale-blue" disabled={!isEditing}/>
        </div>

        <div className='flex gap-4 items-center'>
          <label>
            Estado
          </label>
          <input type="text" placeholder="Estado" name='status' value={formData.status} onChange={handleChange} className="rounded-lg px-4 py-1  bg-pale-blue" disabled={!isEditing}/>
        </div>

        <div className='flex gap-4 items-center'>
          <label>
            ID de usuario
          </label>
          <input type="text" placeholder="ID de usuario" name='user_id' defaultValue={formData.user_id} className="rounded-lg px-4 py-1  bg-pale-blue" disabled={isEditing}/>
        </div>

        <div className='flex gap-4 items-center'>
          <label>
            Fecha de apertura
          </label>
          <input type="text" placeholder="Fecha de apertura" name='date_opened' value={formData.date_opened} onChange={handleChange} className="rounded-lg px-4 py-1  bg-pale-blue" disabled={!isEditing}/>
        </div>

        <div className='flex w-full justify-end'>
          <div>
            <button
              type='button'
              className='py-4 px-14 bg-dark-blue rounded-2xl text-md font-bold text-white'
              onClick={ toggleEdit}
            >
              {isEditing ? 'Guardar' : 'Editar'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

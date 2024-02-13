"use client"
import { UserInfoContext } from '@/context/UserContext';
import { createAccount } from '@/services/accounts';
import { createUser, updateUser } from '@/services/users';
import React, { useContext, useEffect, useRef, useState } from 'react'

export default function NewAccount() {
  const formData = useRef("" as any)

  const createNewAccount = async () => {
    try {
      const { account_type, balance, status, document_number } = formData.current
      const response = await createAccount(account_type.value, parseInt(balance.value, 10), status.value, parseInt(document_number.value, 10));
      alert(response.message)
      formData.current.reset()
    } catch (error) {
      alert('Error creating new account')
    }
  }

  return (
    <form className='mt-9 text-dark-blue w-full h-auto grid md:grid-cols-2 gap-3 md:gap-32 text-blue-001 text-sm font-bold' ref={formData}>
      {/*COL1 */}
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='flex w-full max-w-[85px]'>
            Tipo cuenta
          </label>
          <div className='flex w-full'>
            <input type="text" placeholder="tipo de cuenta" name='account_type' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
          </div>
        </div>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full'>
          <label className='flex w-full max-w-[85px]'>
            Balance
          </label>
          <div className='flex w-full'>
            <input type="text" placeholder="balance" name='balance' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
          </div>
        </div>
        

      </div>
      {/*COL2 */}
      <div className='flex flex-col gap-4 mt-1'>
        <div className='flex gap-4 items-center  xl:min-w-[100px] w-full'>
          <label className='flex w-full max-w-[80px]'>
            Status
          </label>
          <input type="text" placeholder="status" name='status' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
        </div>
        <div className='flex gap-4 items-center xl:min-w-[100px] w-full '>
          <label className='flex w-full max-w-[80px]'>
            Documento
          </label>
          <input type="text" placeholder="documento" name='document_number' className="rounded-lg px-4 py-1xw bg-pale-blue justify-end w-full" />
        </div>
        

        <div className='flex justify-end mt-4 w-full'>
          <button type="button"
            className={`py-4 px-12 bg-dark-blue rounded-xl text-sm font-bold text-white`}
            onClick={() => {
              createNewAccount();
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  )
}

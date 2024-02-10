import { MainLayout } from '@/layouts'
import React from 'react'
import FormAccountDetail from './components/FormAccountDetail'

export default function accountDetail() {
  return (
    <MainLayout title='Detalle de la cuenta'> 
      <FormAccountDetail />
    </MainLayout>
  )
}

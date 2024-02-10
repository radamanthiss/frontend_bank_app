import { BACKEND_URL } from "@/helpers/config";

export async function accountList() {
  const response = await fetch(`${BACKEND_URL}/accounts`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get account list');
  }
  return response.json();
}

export async function accountListByUser(user_id: number) {
  const response = await fetch(`${BACKEND_URL}/accounts/by_user_id/${user_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get account list');
  }
  return response.json();
}

export async function accountDetailByUser(user_id: number) {
  const response = await fetch(`${BACKEND_URL}/accounts/user_id/${user_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get account detail');
  }
  return response.json();
}

export async function createAccount() {

}

export async function updateAccount(account_id: string, data: any) {
  const response = await fetch(`${BACKEND_URL}/accounts/${account_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error to update account');
  }
  return response.json();
}

export async function deleteAccount(account_id: number) {
  const response = await fetch(`${BACKEND_URL}/accounts/${account_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to delete account');
  }
  return response.json();
}

export async function accountDetail(account_id: string) {
  const response = await fetch(`${BACKEND_URL}/accounts/${account_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get account detail');
  }
  return response.json();
}

export async function accountDetailByAccountNumber(account_number: number) {
  const response = await fetch(`${BACKEND_URL}/accounts/account_number/${account_number}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get account detail');
  }
  return response.json();
}
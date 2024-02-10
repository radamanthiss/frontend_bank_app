import { BACKEND_URL } from "@/helpers/config";

export async function processDeposit(amount: number, description: string, account_id: number, token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  console.log('headers', headers)

  const response = await fetch(`${BACKEND_URL}/transactions/deposit`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ amount, description, account_id }),
  });
  if (!response.ok) {
    throw new Error('Error to process deposit');
  }
  return response.json();
}

export async function processTransfer(amount: number, description: string, sender_account_id: number, recipient_account_id: number) {
  const response = await fetch(`${BACKEND_URL}/transactions/transfer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, sender_account_id, recipient_account_id, description }),
  });
  if (!response.ok) {
    throw new Error('Error to process transfer');
  }
  return response.json();
}

export async function processWithdrawal(amount: number, description: string, account_id: number) {
  const response = await fetch(`${BACKEND_URL}/transactions/withdrawal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, description, account_id }),
  });
  if (!response.ok) {
    throw new Error('Error to process withdrawal');
  }
  return response.json();
}

export async function transactionListByUser(user_id: number) {
  const response = await fetch(`${BACKEND_URL}/transactions/user_id/${user_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error to get transaction list');
  }
  return response.json();
}
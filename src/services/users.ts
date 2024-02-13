import { BACKEND_URL } from "@/helpers";

export async function UsersList() {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    throw new Error('Error to get account list');
  }
  return response.json();
}

export async function updateUser(id: string, data: any) {
  const response = await fetch(`${BACKEND_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error to update user');
  }
  return response.json();
}

export async function createUser(name: string, email: string, password: string, mobile_number: number, country: string, user_type: string, document_number: number) {
  const response = await fetch(`${BACKEND_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, mobile_number, country, user_type, document_number })
  });
  if (!response.ok) {
    throw new Error('Error to create user');
  }
  return response.json();
}

export async function deleteUser(id: string) {
  const response = await fetch(`${BACKEND_URL}/users/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}
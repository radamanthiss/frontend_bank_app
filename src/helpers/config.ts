export function getHeadersConfig() {
  const token = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info') as string).access_token : '';
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  };
}

export const BACKEND_URL = "https://banking-systems.onrender.com";

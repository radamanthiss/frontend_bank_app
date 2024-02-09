
export function getHeadersConfig() {
  const token =localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  };
}

export const BACKEND_URL = "http://127.0.0.1:5000";

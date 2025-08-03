const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://sua-api-prod.com"
    : "http://localhost:3000";

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const authenticateUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/user/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

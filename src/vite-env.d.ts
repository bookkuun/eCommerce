/// <reference types="vite/client" />

interface ILoginPayload {
  email: string;
  password: string;
}

interface IAuthPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar?: string;
}

interface IUserData {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
}

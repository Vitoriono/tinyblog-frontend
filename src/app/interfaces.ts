export interface IPost {
  author: string;
  category: string;
  id: number;
  photo: string;
  text: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserRegist {
  id?: number;
  name: string;
  login: string;
  email: string;
  password?: string;
}

export interface IUserAuth {
  login: string;
  password: string;
}

export interface IPayload {
  payload: IUserRegist;
  token: string;
}

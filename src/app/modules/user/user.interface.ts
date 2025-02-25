export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  photo?: string | null | undefined ;
  role: 'admin' | 'user';
  userStatus: 'active' | 'inactive';
}

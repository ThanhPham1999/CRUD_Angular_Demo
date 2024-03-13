export interface IUserInfo{
  name: string;
  age: string;
  nationality: string;
}

export type TUserInfo = IUserInfo & {id: number}

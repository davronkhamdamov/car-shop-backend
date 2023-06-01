interface IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  imgurl: string;
}
interface token {
  message: string;
  token: string;
}

export { IUser, token };

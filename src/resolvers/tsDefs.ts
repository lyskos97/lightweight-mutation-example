export interface IPost {
  _id: string;
  text: string;
  author: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  posts: IPost[];
}

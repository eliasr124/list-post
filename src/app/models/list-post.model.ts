export interface IListPost {
    title: string;
    body: string;
}

export interface IUser extends IListPost {
    _id: string;
  }
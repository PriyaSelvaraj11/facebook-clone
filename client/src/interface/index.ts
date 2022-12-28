export type TPostView = 'gridView' | 'listView';

export interface IPost {
  _id: string;
  user: {
    _id: string;
    fullname: string;
    username: string;
    dp?: string;
  };
  caption?: string;
  image?: string;
  likes: IPostReactedList;
  comments: IPostReactedList;
  shares: IPostReactedList;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  fullname: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  dp: string;
  cover: string;
  hometown: string;
  currentCity: string;
  relationship: string;
  phone?: string;
  //   work: [IWork];
  //   education: [IEducation];
  //   website: [IWebsite];
  //   social: [ISocial];
  //   gender: IGender;
  //   interest: IInterest;
  //   religion: IReligion;
}

export interface IStory {
  _id: string;
  image: string;
  user: {
    _id: string;
    fullname: string;
    dp?: string;
  };
  createdAt: Date;
}

export interface IPostReactedList {
  total: number;
  users: IUserDisplayName[];
}

interface IUserDisplayName  {
  id: string;
  name: string;
};
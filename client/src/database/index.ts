import { IPost } from '../interface';
import { IStory } from '../interface';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'priyadse',
      fullname: 'Priya dharshini',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1080',
    likes: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    comments: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    shares: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    _id: '1',
    user: {
      _id: '1',
      username: 'priyadse',
      fullname: 'Priya dharshini',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1080',
    likes: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    comments: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    shares: {
      total: 12,
      users: [{
        id: '1234',
        name: 'Lorem'
      },{
        id: '1235',
        name: 'Ipsum'
      }]
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];
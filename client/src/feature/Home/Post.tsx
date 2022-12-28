import React from 'react';
import '../../assets/css/Posts.scss';

import { IPost } from '../../interface';

import {
    HandThumbUpIcon,
    FaceSmileIcon,
    HeartIcon,
} from '@heroicons/react/24/solid';

import {
  ChatBubbleBottomCenterIcon as CommentIcon,
  HandThumbUpIcon as LikeIcon,
  ArrowTopRightOnSquareIcon as ShareIcon
} from '@heroicons/react/24/outline';

import Popover from '../../components/Popover';

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = (props) => {
  const { post } = props;
  const { user } = post;
  return (
    <div className="postContainer">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="w-10 h-10">
          <img src={user.dp} className="w-full h-full rounded-full" alt="dp" />
        </div>
        <div className="flex-grow flex flex-col">
          <p className="font-semibold text-sm text-gray-700">{user.fullname}</p>
          <span className="text-xs font-thin text-gray-400">
            {post.createdAt.toDateString()}
          </span>
        </div>
        <div className="w-8 h-8">
          <button className="w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      {post.caption ? (
        <div className="mb-1">
          <p className="text-gray-700 max-h-10 truncate px-3 text-sm">
            {post.caption}
          </p>
        </div>
      ) : null}
      {post.image ? (
        <div className="w-full h-76 max-h-80">
          <img
            src={post.image}
            alt="postimage"
            className="w-full h-76 max-h-80"
          />
        </div>
      ) : null}

      <div className="w-full flex flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white">
                <HeartIcon className="h-3 w-3"/>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white">
                <HandThumbUpIcon className="h-3 w-3"/>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500 text-white">
                <FaceSmileIcon className="h-3 w-3"/>
              </button>
              <div className="ml-1">
                <Popover 
                  text={`${post.likes.total}`}
                >
                  <ul>
                  {post.likes.users.map( user =>
                      <li>{user.name}</li>
                    )}
                  </ul>
                </Popover>
              </div>
          </div>
          <div className="flex items-center space-x-2">
            <Popover 
              text={`${post.comments.total} Comments`}
            >
              <ul>
              {post.comments.users.map( user =>
                  <li>{user.name}</li>
                )}
              </ul>
            </Popover>
            <Popover 
              text={`${post.shares.total} Shares`}
            >
              <ul>
              {post.shares.users.map( user =>
                  <li>{user.name}</li>
                )}
              </ul>
            </Popover>
          </div>
        </div>
        <div className="reactContainer">
          <button className="reactButton">
              <LikeIcon className="icon"/>
              <p className="font-semibold">Like</p>
          </button>
          <button className="reactButton">
              <CommentIcon className="icon"/>
              <p className="font-semibold">Comment</p>
          </button>
          <button className="reactButton">
              <ShareIcon className="icon"/>
              <p className="font-semibold">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
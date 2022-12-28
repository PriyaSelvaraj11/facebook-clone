import { FC } from 'react';
import '../../assets/css/Posts.scss';

import {
  VideoCameraIcon,
  PhotoIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/solid';

interface AddPostProps { 

}

const AddPost: FC<AddPostProps> = ({  }) => {
    return  (<div className="addPostContainer">
    <div className="addPostButtonContainer">
      <div className="w-10 h-10">
        <img
          src="https://picsum.photos/200"
          className="w-full h-full rounded-full"
          alt="dp"
        />
      </div>
      <button className="addPostButton">
        What&apos;s on your mind, Priya?
      </button>
    </div>
    <div className="addonContainer">
      <button className="addonButton">
        <VideoCameraIcon className="text-red-500 h-6 w-6"/>
        <p className="font-semibold">Create Video</p>
      </button>
      <button className="addonButton">
        <PhotoIcon className="text-green-500 h-6 w-6"/>
        <p className="font-semibold">Photos/Video</p>
      </button>
      <button className="addonButton">
        <FaceSmileIcon className="text-yellow-500 h-6 w-6"/>
        <p className="font-semibold">Feeling/Activity</p>
      </button>
    </div>
  </div>);
};

export default AddPost;
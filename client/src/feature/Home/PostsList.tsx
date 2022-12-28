import React, { FC } from 'react';
import { postsData } from '../../database';
import { TPostView } from '../../interface';
import Post from './Post';

import '../../assets/css/Posts.scss';

import { GET_POSTS_QUERY } from '../../mutations/Posts';

import { useMutation, useQuery } from "@apollo/client";

interface PostsListProps {
  postsView?: TPostView;
}

const PostsList: FC<PostsListProps> = (props) => {
  const { postsView } = props;

  const GetPosts = () => {
    const { loading, error, data } = useQuery(GET_POSTS_QUERY);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    console.log(data);
  };
  GetPosts();

  return (
    <div className="mt-4 w-full h-full">
      <div
        className={`grid ${postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
          } gap-2`}
      >
        {postsData.length ? (
          postsData.map((post, idx) => <Post key={idx} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;

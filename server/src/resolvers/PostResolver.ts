import bcrypt from 'bcryptjs';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { Post, TComment } from '../models/Post';
import { ICommonErrors } from '../types';

@InputType()
class UsernamePasswordInput {
  @Field()
  userId!: string;

  @Field()
  emailId!: string;
}


@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async getPosts(): Promise<Post[]> {
    return Post.find({});
  }
}
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { User, TGender } from '../models/User';
import { ICommonErrors } from '../types';
import { APP_SECRET } from '../utils/Auth'; 

@InputType()
class UserRegistrationInput {
  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  firstName!: string;

  @Field()
  surName!: string;

  @Field()
  gender!: TGender;

  @Field()
  dateOfBirth!: Date;

}

@InputType()
class UsernamePasswordInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@ObjectType()
class UserRegistrationResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => ICommonErrors, { nullable: true })
  errors?: ICommonErrors;
}

@ObjectType()
class UserLoginResponse {
  @Field()
  token?: string;

  @Field()
  email?: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return User.find({});
  }

  @Mutation(() => UserLoginResponse)
  async login(
    @Arg('inputs') inputs: UsernamePasswordInput
  ): Promise<UserLoginResponse> {
    const { email, password } = inputs;

    const user = await User.findOne({ email });
    const isPasswordMatching = (user && await bcrypt.compare(password, user.password));
    if(isPasswordMatching) {
      const token = await jwt.sign({ userId: user.email }, APP_SECRET);
      console.log(token);
      console.log(typeof token);
      return {
        token,
        email: user.email,
      }
    }
    return {};
  }

  @Mutation(() => UserRegistrationResponse)
  async register(
    @Arg('inputs') inputs: UserRegistrationInput
  ): Promise<UserRegistrationResponse> {
    const { email, password, firstName, surName, gender, dateOfBirth } = inputs;

    const userWithEmail = await User.findOne({ email });

    if (userWithEmail) {
      return {
        errors: {
          message: 'Email is registered',
        },
      };
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      firstName,
      surName,
      gender,
      date_of_birth: dateOfBirth,
      password: passwordHashed,
    }).save();

    return { user: newUser };
  }
}
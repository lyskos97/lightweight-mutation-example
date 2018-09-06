import User from '../models/User';
import Post from '../models/Post';
import { IUser } from './tsDefs';

type CreateUserArgs = {
  record: {
    name: string;
  };
};

type UserSource = {
  _id: string;
};

type CreateUserPayloadSource = {
  recordId: string;
};

export default {
  Query: {
    allUsers: () => {
      return User.find();
    }
  },
  Mutation: {
    createUser: async (
      _: any,
      { record: { name } }: CreateUserArgs
    ): Promise<CreateUserPayloadSource> => {
      const user = await User.create({ name });

      return { recordId: user._id };
    }
  },
  User: {
    posts: (user: UserSource) => {
      return Post.find({ authorId: user._id });
    }
  },
  CreateUserPayload: {
    record: (user: CreateUserPayloadSource) => {
      console.log('CreateUserPayload>', user);
      return User.findById(user.recordId);
    }
  }
};

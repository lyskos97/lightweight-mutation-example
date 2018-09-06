import User from '../models/User';
import Post from '../models/Post';

type CreatePostArgs = {
  record: {
    text: string;
    authorId: string;
  };
};

type PostSource = {
  recordId?: string;
  _id: string;
  authorId: string;
};

type CreatePostPayloadSource = {
  recordId: string;
};

export default {
  Query: {
    allPosts: () => {
      return Post.find();
    }
  },
  Mutation: {
    createPost: async (
      _: any,
      { record: { text, authorId } }: CreatePostArgs
    ): Promise<CreatePostPayloadSource> => {
      const post = await Post.create({ text, authorId });

      return {
        recordId: post._id
      };
    }
  },
  Post: {
    author: (post: PostSource) => {
      return User.findById(post.authorId);
    }
  },
  CreatePostPayload: {
    record: (post: CreatePostPayloadSource) => {
      console.log('CreatePostPayload>', post);
      return Post.findById(post.recordId);
    }
  }
};

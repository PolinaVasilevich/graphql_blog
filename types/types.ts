export interface IAuthor {
  name: string;
  photo: string;
  bio: string;
  posts: IPost[];
}

export interface ICategory {
  name: string;
  posts: IPost[];
}

export interface IPost {
  title: string;
  excerpt: string;
  // content: string;
  // image: string;
  // author: IAuthor;
  // featuredPost: boolean;
  // categories: ICategory[];
}

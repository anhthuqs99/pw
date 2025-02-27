export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}


export type Post = {
    _id: string
    type: 'Post'
    title: string
    date: number
    body: string
    url: string
};

export const allPosts: Post[] = [];

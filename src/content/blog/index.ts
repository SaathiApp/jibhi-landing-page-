import HelloWorld from './hello-world.mdx';

export const posts = [
  {
    slug: 'hello-world',
    component: HelloWorld,
    metadata: {
      title: 'Hello World',
      date: '2024-01-01',
      summary: 'Introducing the blog feature.',
    },
  },
];

export type Post = typeof posts[number];

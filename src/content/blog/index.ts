import HelloWorld, { metadata as helloWorldMeta } from './hello-world.mdx';

export const posts = [
  { slug: 'hello-world', component: HelloWorld, metadata: helloWorldMeta },
];

export type Post = typeof posts[number];

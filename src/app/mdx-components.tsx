import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: props => <Image {...props} alt={props.alt ?? ''} />,
    a: props => <Link href={String(props.href)}>{props.children}</Link>,
    ...components,
  };
}

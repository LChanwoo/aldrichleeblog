import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import BackColorh1 from './BackColorh1'
import BackColorh2 from './BackColorh2'
export const components: MDXComponents = {
  Image,
  BackColorh1,
  BackColorh2,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}

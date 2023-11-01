import { /*sortPosts,*/ allCoreContent } from 'pliny/utils/contentlayer'
import { sortPostsBySlug } from 'lib/utils/comparator'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPostsBySlug(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}

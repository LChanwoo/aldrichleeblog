import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent } from 'pliny/utils/contentlayer'
// import { allCoreContent } from 'lib/mdx_core'
import { sortPostsBySlug } from 'lib/utils/comparator'
import { Blog, allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const sorted = sortPostsBySlug(allBlogs)
  const posts = allCoreContent(sorted) as Blog[]
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}

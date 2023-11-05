import { slug } from 'github-slugger'
import { CoreContent, allCoreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithCategories'
import { Blog, allBlogs } from 'contentlayer/generated'
import categoryData from 'app/category-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { sortPostsBySlug } from 'lib/utils/comparator'

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const category = decodeURI(params.category)
  return genPageMetadata({
    title: category,
    description: `${siteMetadata.title} ${category} categorized content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/categories/${category}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const categoryCounts = categoryData as Record<string, number>
  const categoryKeys = Object.keys(categoryCounts)
  const paths = categoryKeys.map((category) => ({ category: category }))
  return paths
}

export default function categoryPage({ params }: { params: { categories: string } }) {
  const category = decodeURI(params.categories).split('-').join(' ')
  const title = category[0].toUpperCase() + category.split(' ').join(' ').slice(1)
  const filteredPosts = allCoreContent(
    sortPostsBySlug(allBlogs.filter((post) => post.category == category))
  ) as CoreContent<Blog>[]
  return <ListLayout posts={filteredPosts} title={title} />
}

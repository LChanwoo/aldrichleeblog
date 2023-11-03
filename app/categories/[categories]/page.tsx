import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithCategories'
import { allBlogs } from 'contentlayer/generated'
import categoryData from 'app/category-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
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
  const paths = categoryKeys.map((category) => {
    // console.log("sd",category);
    // if(category.includes('-')){category = category.split('-').join(' ')}
    return ({
      category: category,
    })
  })
  return paths
}

export default function categoryPage({ params }: { params: { categories: string } }) {
  console.log(params);
  const category = decodeURI(params.categories).split('-').join(' ')
  console.log(category);
  const title = category[0].toUpperCase() + category.split(' ').join(' ').slice(1)
  console.log(category);
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => {
      console.log(post.category ,"==", category);

      return post.category == category
    }))
  )
  return <ListLayout posts={filteredPosts} title={title} />
}

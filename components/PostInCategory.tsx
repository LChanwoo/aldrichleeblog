import Link from 'next/link'
// import { slug } from 'github-slugger'
interface Props {
  text: string
  slug: string
}

const PostInCategory = ({ text, slug }: Props) => {
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className="mr-3 w-full text-lg font-medium uppercase text-orange-300 hover:text-orange-500 dark:hover:text-orange-200"
      >
        {text}
      </Link>
    </>
  )
}

export default PostInCategory

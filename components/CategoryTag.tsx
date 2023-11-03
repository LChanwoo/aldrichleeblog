import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const CategoryTag = ({ text }: Props) => {
  return (
    <Link
      href={`/categories/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-sky-400 hover:text-sky-600 dark:hover:text-sky-200"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default CategoryTag

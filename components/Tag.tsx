import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-lime-600 hover:text-lime-800 dark:hover:text-lime-800"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

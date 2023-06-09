import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
  className?: string
}

const Tag = ({ text, className }: Props) => {
  const classes =
    className ??
    'mr-3 font-mono text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className={classes}>{'#' + text.split(' ').join('-')}</a>
    </Link>
  )
}

export default Tag

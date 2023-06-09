import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  className?: string
  text: string
}

const Tag = ({ className = '', text }: Props) => {
  const classes = twMerge(
    'mr-3 text-sm font-mono font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
    className
  )
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className={classes}>{'#' + text.split(' ').join('-')}</a>
    </Link>
  )
}

export default Tag

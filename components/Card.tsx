import Image from './Image';
import Link from './Link';

type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  tags: string[];
  code: string;
};

const Card = ({ title, description, imgSrc, href, tags, code }: CardProps) => {
  console.log(tags);
  return (
    <li
      className="min-w-80 min-h-96 h-full max-w-xs p-4 "
      style={{ maxWidth: '544px' }}
    >
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description}
          </p>
          {code && (
            <Link
              href={code}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Show me the code &rarr;
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;

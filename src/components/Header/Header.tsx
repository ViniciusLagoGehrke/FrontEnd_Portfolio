import styles from '@/styles/Header.module.css';

type HeaderProps = {
  fullName: string
}
export default function Header({ fullName }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <h1>{fullName}</h1>
        <p>
          Formally a civil engineer, now a frontend developer with a keen
          interest in new technologies.
        </p>
        <br />
        <p>
          This webpage is a showcase for my personal projects and works. It was
          developed with <strong>React </strong>and <strong>Next.js</strong> and{' '}
          it is automatically populated using the{' '}
          <strong>Github REST API</strong>.
        </p>
      </div>
    </header>
  );
}

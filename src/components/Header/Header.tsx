import styles from '@/styles/Header.module.css';

export default function Header({ fullName }) {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div>
          <h1>{fullName}</h1>
        </div>
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

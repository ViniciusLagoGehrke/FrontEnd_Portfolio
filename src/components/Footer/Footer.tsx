import Copyright from '../Copyright';
import styles from '@/styles/Footer.module.css';

type FooterProps = {
  ownersGithub: string
}

export default function Footer({ ownersGithub = '/' }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>Coded with love!</p>
      <Copyright ownersGithub={ownersGithub} />
    </footer>
  );
}

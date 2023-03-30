import Copyright from '../Copyright';
import styles from '@/styles/Footer.module.css';

export default function Footer({ repos }) {
  return (
    <footer className={styles.footer}>
      <p>Coded with love!</p>
      {repos[0] ? <Copyright ownersGithub={repos[0].owner.html_url} /> : null}
    </footer>
  );
}

import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  const path = useLocation().pathname;

  const getBreadcrumbs = () => {
    const values = path.split('/').filter((e) => e);

    if (values.length === 0) return;
    if (values.length === 2)
      return (
        <>
          &rarr;
          <span className={styles.bc + ' ' + styles.text}>{`${values[0]} ${values[1]}`}</span>
        </>
      );
    if (values.length === 4)
      return (
        <>
          &rarr;
          <Link to={`/${values[0]}/${values[1]}`} className={styles.bc}>{`${values[0]} ${values[1]}`}</Link>
          &rarr;
          <span className={styles.bc + ' ' + styles.text}>{`${values[2]} ${values[3]}`}</span>
        </>
      );
  };

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link to="/" className={styles.bc}>
            main
          </Link>

          {getBreadcrumbs()}
        </li>
      </ul>
    </header>
  );
}

export default Header;

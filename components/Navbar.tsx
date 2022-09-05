import { useRouter } from '../node_modules/next/router';
import Image from '../node_modules/next/image';
import styles from '../styles/Navbar.module.scss';
import React from 'react';
import Link from '../node_modules/next/link';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar:React.FC = () => {
	const {pathname} = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
			<Image src="/logo.png" width="60" height="60" alt="logo" />
		</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
         <Link key={id} href={path}>
				<a className={pathname === path ? styles.active : null}>{title}</a>
			</Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

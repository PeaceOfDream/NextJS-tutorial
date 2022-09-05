import Heading from '../components/Heading';
import { useEffect } from 'react';
import styles from '../styles/404.module.scss'
import { useRouter } from '../node_modules/next/router';
import Head from '../node_modules/next/head';

const Error = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [router])


  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  );
};

export default Error;

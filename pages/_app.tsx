import { AppProps } from '../node_modules/next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import youtubeImg from '../public/youtube.png'
import Image from '../node_modules/next/image'
import Head from '../node_modules/next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={youtubeImg} width={500} height={350} alt="preview" placeholder="blur" />
  </Layout>
);

export default MyApp

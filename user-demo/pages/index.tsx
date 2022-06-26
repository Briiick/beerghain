import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const style = {
  container: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  }
} as const;


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title style={style.container}>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>$2450.00 – Luxurious Suite in St. Tropez, France</p>
        <div>
          <ConnectButton />
        </div>
      </section>
    </Layout>
  )
}

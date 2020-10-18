import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withTranslation } from "../i18n"


function Home({t}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('hello')}
        </h1>

  <p>{t('navbar.pricing')}</p>

      </main>
    </div>
  )
}

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// })

export default withTranslation('common')(Home)
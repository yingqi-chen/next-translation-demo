import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { withTranslation, i18n } from "../i18n"

import TranslateIcon from "@material-ui/icons/Translate"
import { Button } from "@material-ui/core"


function Home({t}) {

  const [language, setLanguage] = useState("en")

  const handleClick = (e) =>{
    language=="en"? setLanguage("zh") : setLanguage("en")
    i18n.changeLanguage(language)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>next translation demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('hello')}
        </h1>

        <p>{t('nested.content')}</p>
        <p>{t('secondFile:second')}</p>

        <Button aria-controls="simple-menu" aria-haspopup="true"  color="primary" onClick={handleClick} startIcon={<TranslateIcon />}>
           {i18n.language=="en"? "English" : "中文"}
        </Button>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common','secondFile'],
})

export default withTranslation('common')(Home)


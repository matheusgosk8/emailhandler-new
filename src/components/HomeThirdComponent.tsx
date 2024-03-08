import styles from './componentsStyles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {}

const HomeThirdComponent = (props: Props) => {
  return (
    <div className={styles.thirdComponent}>

      <h3 className='sm:text-3xl text-2xl px-14'>
        A nossa plataforma possuí inegração com os seguintes provedores de serviços de email
      </h3>

      <div className={styles.sliderSection}>

        <div className={styles.slider}>

            < img src ='/images/gmail.png'   alt = '' />
            < img src ='/images/outlook2.png' alt = '' />
            < img src ='/images/yahoo.png'   alt = '' />


        </div>

      </div>

      <p>
        A nossa plataforma não hospeda nenhum servidor SMTP no momento, apenas facilitamos serviços realizados por terceiros para operações de email.
      </p>
      <Link href='/' className='link'> Mais sobre os nossos provedores </Link>

    </div>
  )
}

export default HomeThirdComponent
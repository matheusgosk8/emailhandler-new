'use client'

import styles from './componentsStyles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef} from 'react'

import {motion, useInView, useTransform} from 'framer-motion'



type Props = {}

const HomeThirdComponent = (props: Props) => {

  const itemInView = useRef(null);

  const isInView = useInView(itemInView, {margin: "-50% 0px -50% 0px"});
  

  return (
    <div className={styles.thirdComponent}>

      <h3 className='sm:text-3xl text-2xl px-14'>
        A nossa plataforma possuí inegração com os seguintes provedores de serviços de email
      </h3>

      <div className={styles.sliderSection}>

        <div className={styles.slider} ref ={itemInView}>

            < motion.img
            initial={{x: '50%', opacity: 0}}
            animate={ isInView ? {x: 0, opacity: 1}:{x: '50%', opacity: 0}}
            transition={{duration: 0.5}}
            src ='/images/gmail.png'   alt = '' />
            < motion.img 
            initial={{opacity: 0}}
            animate={ isInView ? {opacity: 1}:{opacity: 0}}
            transition={{duration: 0.5}}
            src ='/images/outlook2.png' alt = '' />
            < motion.img
            initial={{x: '50%', opacity: 0}}
            animate={ isInView ? {x: 0, opacity: 1}:{x: '-50%', opacity: 0}}
            transition={{duration: 0.5}}
            src ='/images/yahoo.png'   alt = '' />


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

import React from 'react'
import HomeFirstComponent from '@/components/HomeFirstComponent'
import HomeSecondComponent from '@/components/componentsStyles/HomeSecondComponent'
import styles from '../../components/componentsStyles/Home.module.css'
import HomeThirdComponent from '@/components/HomeThirdComponent'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={styles.homePage}>
        <HomeFirstComponent/>
        <HomeSecondComponent/> 
        <HomeThirdComponent/>
    </div>
  )
}

export default page
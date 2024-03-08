import Link from 'next/link';
import React from 'react'
import styles from './componentsStyles/Nav.module.css';
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className={styles.nav}>

     
      <input className={styles.mobNav} type="checkbox" id="mobNav" /> 
      <label className={styles.navLabel} htmlFor="mobNav"> <GiHamburgerMenu className={styles.navIcon}/></label>
       
      <div className={styles.navWrapper}>

        
      
        <div>
          <div className={styles.navigation}>
              <Link href='/' className='navLink'> App       </Link>
              <Link href='/' className='navLink'> Docs      </Link>
              <Link href='/' className='navLink'> Registrar </Link>
              <Link href='/' className='navLink'> Entrar    </Link>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Nav
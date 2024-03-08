import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '../componentsStyles/Home.module.css';



type Props = {}

const HomeSecondComponent = (props: Props) => {
  return (
    <div className={styles.secondComponent}>

        <div className='w-full flex object-cover text-black dark:text-white
        flex-col gap-5 justify-center items-center h-96 
        sm:h-96 sm:px-28 sm:flex-row sm:gap-5 sm:justify-center sm:align-middle sm:items-center
        '>
            <Image
            src ='/images/sc1.png' alt ='' width= {384} height= {384} className='sm:w-96 sm:h-96 w-80 h-80'
            /> 
            
            <div className='h-full flex flex-col justify-around'>
                <p className='
                text-xl
                sm:text-3xl'>
                Crie e gerencie várias campanhas de email com a ferramenta de gerenciamento da plataforma
                </p>
                
                <Link href='/' className='link'> Mais sobre a ferramenta de gerenciamento de email</Link>
                
            </div>

        </div>

        <div className='w-full flex object-cover text-black dark:text-white
        flex-col gap-5 justify-center items-center px-8 h-96 
        sm:h-96 sm:px-28 sm:flex-row sm:gap-5 sm:justify-center sm:align-middle sm:items-center
        '>
            <Image
            src ='/images/sc3.png' alt ='' width= {384} height= {384} className='sm:w-96 sm:h-96 w-80 h-80 sm:order-2'
            /> 

            <div className='h-full flex flex-col justify-around sm:order-1'>
                <p className='
                text-xl
                sm:text-3xl'>
                Crie e edite templates personalizados de email com a ferramenta detemplates
                </p>
                
                <Link href='/' className='link'> Mais sobre a ferramenta de templates </Link>
                
            </div>
            
            

        </div>

        <div className='w-full flex object-cover text-black dark:text-white
        flex-col gap-5 justify-center items-center px-8 h-96 
        sm:h-96 sm:px-28 sm:flex-row sm:gap-5 sm:justify-center sm:align-middle sm:items-center
        '>
            <Image
            src ='/images/sc2.png' alt ='' width= {384} height= {384} className='sm:w-96 sm:h-96 w-80 h-80'
            /> 

            <div className='h-full flex flex-col justify-around'>
                <p className='
                text-xl
                sm:text-3xl'>
                Crie e gerencie várias campanhas de email com a ferramenta de campanhas de email
                </p>
                
                <Link href='/' className='link'> Mais sobre a ferramenta de campanhas de email</Link>
                
            </div>

        </div>

    </div>
  )
}

export default HomeSecondComponent
'use client';
import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {hover3d} from '../utils/hover3d'

type Props = {}

const HomeFirstComponent = (props: Props) => {


    const fs1 =  'lg';

    const headerRef = useRef<HTMLDivElement>(null);

   const hoverEffect = hover3d(headerRef, {
        x:30,
        y:-40, 
        z:40
    });
    
   const hoverImage = hover3d(headerRef, {
        x:50,
        y:-5, 
        z:11
    });

  return (
    <div 
    className='
    sm:h-lvh w-dvw flex flex-col overflow-x-hidden
    
    '>

        <div className='
        sm:h-full w-full flex relative overflow-hidden
        sm:flex-row sm:align-middle sm:justify-center sm:gap-10 sm:pb-5
        flex-col justify-around align-middle items-center h-dvh  
        '
        ref={headerRef}
        >
            <div
            className='sm:hidden pt-10 flex flex-col w-full justify-start items-start gap-2 pl-5 -z-10'
            >
                <div className='p-3 bg-white  border-2 border-solid border-black rounded-md w-fit h-fit object-fill order-1'>
                    <Image width={150} height={150} src='/images/emailIcon.png'  alt=''/> 
                </div>
                    
                    <h3 className='text-5xl text-black  text-center pt-3'>Email <br/>Handler</h3>
            </div>


            <div className='absolute top-0 left-0 w-full h-full -z-20 
            xl:-top-80
            '>
                <Image
                src = '/images/office.jpg'
                alt =''
                width={1920}
                height={1305}
                />
            </div>

            <div className='
            w-4/5 h-full flex flex-col justify-around 
            sm:w-1/2 text-black  dark:text-white
            ' >
                <h1 className=' sm:text-3xl leading-10 text-2xl'>
                Oferecemos uma solução simples e unificada para lidar com todas as suas operações de email
                </h1>

                <div className='flex flex-row gap-5 justify-center align-middle items-center w-full
                pb-5
                sm:p-0
                '>
                    <Link href='/' className='bglink'> Comece agora</Link>
                    <Link href='/' className='bglink'> Leia a documentação</Link>
                </div>
                
            </div>

            
        
            <div className='
           object-fill  
           sm:relative sm:w-72 sm:h-full sm:block sm:rounded-3xl
           absolute w-full h-full top-0 hidden
           '  
           style={{
                transform: hoverEffect.transform,
               

           }}
            >
                <Image src='/images/pc1.png'
                fill = {true}
                alt = ''
                className='absolute -z-10 brightness-50 sm:rounded-3xl
                '
                style={{
                    transform: hoverImage.transform,
                    boxShadow: '0 0 5px 5px black'
                }}
                />

                <div className='
                sm:flex flex-col  h-full items-center align-middle justify-center self-center gap-5
                hidden
                
                ' >
                    
                    <div className='p-3 bg-white  border-2 border-solid border-black rounded-md w-fit h-fit object-fill'>
                        <Image
                        width={100}
                        height={100}
                        src='/images/emailIcon.png'
                        alt=''
                        
                        /> 
                    </div>
                    
                    <h3 className=' 
                    text-4xl text-white 
                    
                    '>
                        Email <br/>Handler
                    </h3> 
                    
                    
                </div>
            </div>

            
            
           
        
        </div>

        <div className='
        w-full h-52  text-white bg-black
        hidden
        sm:flex sm:flex-row gap-2 sm:justify-around sm:items-center 
        dark:bg-white dark:text-black' 
        >
            <p className={`text-${fs1}`}>
            Gerenciamento de campanhas de emails
            </p>

            <p className={`text-${fs1}`}>
            Criação de templates de emails
            </p>

            <p className={`text-${fs1}`}>
            Integração de API para desenvolvedores
            </p>

        </div>

    </div>

    
  )
}

export default HomeFirstComponent
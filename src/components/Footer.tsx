import Link from 'next/link'
import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'



type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>

        <div className='flex flex-col gap-2 text-sm justify-center items-center'> 
            <Link href ='/'> Termeos de concenso da plataforma</Link>
            <Link href ='/'> Regras de comportamento          </Link>
            <Link href ='/'>Provedores uilizados              </Link>
        </div>

        <div className='flex flex-col gap-2 text-sm justify-center items-center'>
            <p> Criado por @MTSTECH 2024</p>
            <small> MTSTECH ltda, todos os direitos reservados</small>

        </div>

        <div className='flex flex-col gap-2 text-sm justify-center items-center'>
            <div className='flex flex-row gap-2'>
                <BsInstagram/>
                <a href="/"> Instagran</a>
            </div>
            <div className='flex flex-row gap-2'>
                <BsGithub/>
                <a href="/">   GitHub</a>
            </div>
            
            
        </div>
    </div>
  )
}

export default Footer
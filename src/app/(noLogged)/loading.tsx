'use client';

import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='loadingPage'>
        <div className='loadingState'>
            <h3>Aguarde ...</h3>
            <div className='spiner'></div>
        </div>
    </div>
  )
}

export default Loading
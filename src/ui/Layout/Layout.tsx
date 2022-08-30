import React, { FC } from 'react'
import Header from '../Header/Header'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({children}) => {
  return (
    <div>
        <Header/>
        <main className='w-full h-screen bg-stone-100 px-24 py-10'>
            {children}
        </main>
    </div>
  )
}

export default Layout
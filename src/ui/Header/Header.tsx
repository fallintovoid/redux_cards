import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-screen px-4 drop-shadow-lg py-4 flex items-center gap-6'>
        <div className='font-bold text-2xl text-blue-600'>
            QUIZLET
        </div>
        <ul className='flex font-semibold'>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
        </ul>
        <div className='cursor-pointer bg-purple-500 p-2 flex items-center text-white rounded-lg'>
            <Link to='/constructor'>
                Create new
            </Link>
            
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cards } from '../../react-app-env'

type Props = {
    name: string,
    cards: Cards,
    madeBy: string,
    id: string
}

const FolderItem = ({name, cards, madeBy, id}: Props) => {
    const navigate = useNavigate()

    return (
        <div 
            className='h-40 w-1/6 bg-white drop-shadow-lg rounded-lg hover:-translate-y-1 duration-100 ease-linear hover:drop-shadow-2xl p-4 cursor-pointer'
            onClick={() => navigate(`/${id}`)}>
            <h1 className='font-semibold text-xl text-blue-600'>
                {name}
            </h1>
            <h1>
                <span className='font-semibold'>
                    {cards.length}
                </span>
                {cards.length === 1 
                    ? ' Term'
                    : ' Terms'}
            </h1>
            <h1 className='relative top-12 text-xs'>
                Made by {madeBy}
            </h1>
        </div>
    )
}

export default FolderItem
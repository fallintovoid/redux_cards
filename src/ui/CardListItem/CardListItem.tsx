import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

type Props = {
    front: string,
    back: string
}

const CardListItem = ({front, back}: Props) => {
  return (
    <div className='w-full h-fit p-6 shadow-lg mt-3 flex gap-4 items-center'>
        <h1>
          {front}
        </h1>
        <h1>
          {back}
        </h1>
        <AiOutlineStar
          className='relative '/>
    </div>
  )
}

export default CardListItem
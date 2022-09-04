import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { CompleteCard } from '../../react-app-env'
import { toggleFav } from '../../app/slices/cardsReducer'

// type Props = {
//     front: string,
//     back: string
// }

const CardListItem = ({front, back, id, fav}: CompleteCard) => {

  const dispatch = useAppDispatch()
  const folderId = useAppSelector(state => state.cardsReducer.currentFolderId)

  const onClickHandler = (folderId: string, cardId: string) => {
    dispatch(toggleFav({
      folderId,
      cardId
    }))
  }

  return (
    <div className='w-full h-fit p-6 shadow-lg mt-3 flex items-center justify-between'>
      <div className='flex gap-5'>
        <h1>
          {front}
        </h1>
        <h1>
          {back}
        </h1>
      </div>
      {fav ? 
        <AiFillStar onClick={() => onClickHandler(folderId, id)}/> :
        <AiOutlineStar onClick={() => onClickHandler(folderId, id)}/>}
      
    </div>
  )
}

export default CardListItem
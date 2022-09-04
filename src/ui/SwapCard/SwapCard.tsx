import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addCompleteCard } from '../../app/slices/cardsReducer'
import './SwapCard.scss'

type Props = {
    front: string,
    back: string,
    allAmount: number,
    completedAmount: number,
    folderId: string
}

const SwapCard = ({front, back, allAmount, completedAmount, folderId}: Props) => {

    const dispatch = useAppDispatch()
    const currentFolder = useAppSelector(state => state.cardsReducer.cardFolders.filter(item => item.id === folderId)[0])
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        if (currentFolder.completeCards.filter(item => item.back === back && item.front === front).length === 0) {
            dispatch(addCompleteCard({
                folderId,
                card: {
                    front,
                    back
                }
            }))
        }
    }, [back, front])

    return (
        <div className="scene">
            <div
                className={`card ${isFlipped ? 'is-flipped' : undefined} cursor-pointer`} 
                onClick={() => setIsFlipped(prev => !prev)}>
                <div className="card__face card__face--front text-center">
                    <h1 className='text-lg font-semibold justify-self-start'>{completedAmount} / {allAmount}</h1>
                    <h1 className='relative top-1/3'>{front}</h1>
                </div>
                <div className="card__face card__face--back text-center">
                    <h1 className='text-lg font-semibold justify-self-start'>{completedAmount} / {allAmount}</h1>
                    <h1 className='relative top-1/3'>{back}</h1>
                </div>
            </div>
        </div>
    )
}

export default SwapCard
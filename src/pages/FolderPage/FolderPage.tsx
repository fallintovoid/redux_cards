import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import SwapCard from '../../ui/SwapCard/SwapCard'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import CardList from '../../ui/CardList/CardList'
import { setCurrentFolderId } from '../../app/slices/cardsReducer'

type Props = {}

const FolderPage = (props: Props) => {

    const { folderId } = useParams()
    const { cards, name, id, completeCards } = useAppSelector(state => state.cardsReducer.cardFolders.filter(item => item.id === folderId)[0])
    const [cardNumber, setCardNumber] = useState(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCurrentFolderId(folderId))
        return () => {
            dispatch(setCurrentFolderId('0'))
        }
    }, [])

    const onChangeCard = (number: number) => {
        if ((cardNumber === 1 && number === -1) || (cardNumber === cards.length && number === 1)) {
            return;
        } else {
            setCardNumber(prev => prev + number)
        }
    }

    return (
        <div className='px-40'>
            <h1 className='font-bold text-3xl mb-5'>
                {name}
            </h1>
            <SwapCard
                front={cards[cardNumber-1].front}
                back={cards[cardNumber-1].back}
                allAmount={cards.length}
                completedAmount={cardNumber}
                folderId={id}/>
            <div className='flex mt-4 gap-2'>
                <div 
                    className='w-1/2 h-12 bg-stone-300 flex items-center justify-center rounded-md hover:bg-stone-400 duration-100 ease-linear'
                    onClick={() => onChangeCard(-1)}>
                        <AiOutlineArrowLeft
                            size={30}/>
                </div>
                <div 
                    className='w-1/2 h-12 bg-stone-300 flex items-center justify-center rounded-md hover:bg-stone-400 duration-100 ease-linear'
                    onClick={() => onChangeCard(1)}>
                        <AiOutlineArrowRight
                            size={30}/>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mt-4 font-semibold'>
                    Modules in folder ({cards.length})
                </h1>
                <div className='px-6'>
                    <CardList
                        cards={completeCards}/>
                </div>
            </div>
        </div>
    )
}

export default FolderPage
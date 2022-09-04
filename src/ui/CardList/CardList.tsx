import React from 'react'
import { Cards, CompleteCard, CompleteCards } from '../../react-app-env'
import CardListItem from '../CardListItem/CardListItem'

type Props = {
    cards: CompleteCards
}

const CardList = ({cards}: Props) => {

    const renderCards = (cards: CompleteCards) => {
        return cards.map(card => {
            return <CardListItem
                back={card.back}
                front={card.front}
                id={card.id}
                fav={card.fav}/>
        })
    }

    return (
        <>
            <h1 className='font-semibold mt-4'>
                Completed:
            </h1>
            {renderCards(cards)}
        </>
    )
}

export default CardList
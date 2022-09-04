import React from 'react'
import { Cards } from '../../react-app-env'
import CardListItem from '../CardListItem/CardListItem'

type Props = {
    cards: Cards
}

const CardList = ({cards}: Props) => {

    const renderCards = (cards: Cards) => {
        return cards.map(card => {
            return <CardListItem
                back={card.back}
                front={card.front}/>
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
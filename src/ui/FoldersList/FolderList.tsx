import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { CardFolders } from '../../react-app-env'
import FolderItem from '../FolderItem/FolderItem'

type Props = {}

const FolderList = (props: Props) => {

    const cardFolders = useAppSelector(state => state.cardsReducer.cardFolders)

    const renderFolders = (folder: CardFolders) => {
        return folder.map(item => {
            return <FolderItem
                cards={item.cards}
                name={item.name}
                madeBy={item.madeBy}
                id={item.id}/>
        })
    }

    return (
        <div className='w-full h-full flex flex-wrap gap-14'>
            {renderFolders(cardFolders)}
        </div>
    )
}

export default FolderList
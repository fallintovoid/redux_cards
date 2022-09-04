import { createSlice } from "@reduxjs/toolkit";
import { CardFolders, Card, CompleteCard } from "../../react-app-env";

interface InitialState {
    cardFolders: CardFolders,
    currentFolderId: string
}

interface AddCompleteCardPayload {
    folderId: string,
    card: CompleteCard
}

interface ToggleFavPayload {
    folderId: string,
    cardId: string
}

const initialState: InitialState = {
    cardFolders: [
        {
            id: '21231243',
            name: 'Test Folder',
            madeBy: 'Illia',
            description: 'Test Folder, nothing else...',
            cards: [
                {
                    front: '1+1',
                    back: '2',
                    id: '912388'
                }, 
                {
                    front: '1+3',
                    back: '4',
                    id: '9097123'
                },
                {
                    front: '1+4',
                    back: '5',
                    id: '2768626491'
                }
            ],
            completeCards: []
        },
        {
            id: '213',
            name: 'Test Folder',
            madeBy: 'Illia',
            description: 'nothing else...',
            cards: [
                {
                    front: '1+1',
                    back: '2',
                    id: '12984312840'
                }
            ],
            completeCards: []
        }
    ],
    currentFolderId: '0'
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCompleteCard: (state, action) => {
            const payload: AddCompleteCardPayload = action.payload

            state.cardFolders.filter(item => item.id === payload.folderId)[0].completeCards.push(payload.card)
        },
        toggleFav: (state, action) => {
            const payload: ToggleFavPayload = action.payload

            const currFolder = state.cardFolders.filter(item => item.id === payload.folderId)[0]
            const currCard = currFolder.completeCards.filter(item => item.id === payload.cardId)[0]
            
            currCard.fav = !currCard.fav
        },
        setCurrentFolderId: (state, action) => {
            state.currentFolderId = action.payload
        }
    }
})

const { reducer, actions } = cardsSlice;
export { reducer }
export const {
    addCompleteCard,
    toggleFav,
    setCurrentFolderId
} = actions
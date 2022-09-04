import { createSlice } from "@reduxjs/toolkit";
import { CardFolders, Card } from "../../react-app-env";

interface InitialState {
    cardFolders: CardFolders
}

interface AddCompleteCardPayload {
    folderId: string,
    card: Card
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
                    back: '2'
                }, 
                {
                    front: '1+3',
                    back: '4'
                },
                {
                    front: '1+4',
                    back: '5'
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
                    back: '2'
                }
            ],
            completeCards: []
        }
    ]
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCompleteCard: (state, action) => {
            const payload: AddCompleteCardPayload = action.payload

            state.cardFolders.filter(item => item.id === payload.folderId)[0].completeCards.push(payload.card)
        }
    }
})

const { reducer, actions } = cardsSlice;
export { reducer }
export const {
    addCompleteCard
} = actions
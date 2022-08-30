import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardFolders: [
        {
            id: '21231243',
            name: 'Test Folder',
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
            ]
        }
    ]
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {}
})

const { reducer, actions } = cardsSlice;
export { reducer }
export const {

} = actions
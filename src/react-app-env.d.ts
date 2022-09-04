/// <reference types="react-scripts" />

 export type CardFolders = {
   id: string,
   name: string,
   madeBy: string,
   description: string,
   cards: Cards,
   completeCards: Cards
 }[]

 export type Cards = {
   front: string,
   back: string
 }[]
 export type Card = {
   front: string,
   back: string
 }

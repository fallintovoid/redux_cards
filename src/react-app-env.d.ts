/// <reference types="react-scripts" />

export type CardFolders = {
  id: string,
  name: string,
  madeBy: string,
  description: string,
  cards: Cards,
  completeCards: CompleteCards
}[]

export type Cards = {
  front: string,
  back: string,
  id: string
}[]

export type Card = {
  front: string,
  back: string
  id: string
}

export type CompleteCards = {
  front: string,
  back: string,
  fav: boolean,
  id: string,
}[]
export type CompleteCard = {
  front: string,
  back: string,
  fav: boolean
  id: string
}

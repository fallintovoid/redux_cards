import React, { useState } from 'react'
import './SwapCard.scss'

type Props = {
    front: string,
    back: string
}

const SwapCard = ({front, back}: Props) => {

    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="scene">
            <div
                className={`card ${isFlipped ? 'is-flipped' : undefined}`} 
                onClick={() => setIsFlipped(prev => !prev)}>
                <div className="card__face card__face--front">{front}</div>
                <div className="card__face card__face--back">{back}</div>
            </div>
        </div>
    )
}

export default SwapCard
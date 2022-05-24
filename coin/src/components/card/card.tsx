import { useEffect } from 'react'

import './card.css'

interface Props {
    image: string
    name: string
    price: number
    symbol: string
}

function Card({ image, name, price, symbol }: Props) {

    useEffect(() => {

        const cards: NodeListOf<Element> = document.querySelectorAll('#card')
        const allCards: Array<Element> = Array.from(cards)
        
        const idTimeOut = setTimeout(() => {

            allCards.forEach(card => {
                card.classList.add('fade_in')
            })

        }, 500)

        return () => {
            clearTimeout(idTimeOut)
        }

    }, [])

    return (
        <div className='card' id='card'>
            <section className='card_header'>
                <img src={image} alt='logo' loading='lazy' />
                <p className='card_title'>
                    {name}
                    <span>
                        {symbol}
                    </span>
                </p>
            </section>
            <section className='card_desc'>
                <h3>Precio - {price}</h3>
            </section>
        </div>
    )
}

export default Card
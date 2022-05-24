import { useEffect, useRef } from 'react'

import './card.css'

interface Props {
    image: string
    name: string
    price: number
    symbol: string
}

function Card({ image, name, price, symbol }: Props) {

    const card: any = useRef(null)

    useEffect(() => {

        const idTimeOut = setTimeout(() => {

            if ( !card.current.classList.contains('fade_in') ) card.current.classList.add('fade_in')

        }, 500)

        return () => {
            clearTimeout(idTimeOut)
        }

    }, [])

    return (
        <div className='card' id='card' ref={card} >
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
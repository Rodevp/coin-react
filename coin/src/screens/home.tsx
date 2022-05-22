import TableCoins from '../components/table/table-coins'
import { useEffect } from 'react'

import './home.css'

function Home() {


    useEffect(() => {

        const cards: NodeListOf<Element> = document.querySelectorAll('#card')
        const allCards: Array<Element> = Array.from(cards)
        
        console.log(allCards)

        const idTimeOut = setTimeout(() => {

            allCards.forEach(card => {
                card.classList.add('fade_in')
            })

        }, 1000)

        return () => {
            clearTimeout(idTimeOut)
        }


    }, [])


    return (
        <main>
            <div className='hero'>
                hero
            </div>
            <section className='top_five'>
                <h3>
                    Top 4
                </h3>
                <div className='content_top_4'>
                    {
                        [1, 2, 3, 4].map((n) => (
                            <div className='card' id='card'>
                                <section className='card_header'>
                                    <img src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' alt='a' />
                                    <p className='card_title'>
                                        name
                                        <span>
                                            symbol
                                        </span>
                                    </p>
                                </section>
                                <section className='card_desc'>
                                    <h3>Precio - 43,000.01</h3>
                                </section>
                            </div>
                        ))
                    }
                </div>
            </section>
            <TableCoins />
        </main>
    )
}

export default Home
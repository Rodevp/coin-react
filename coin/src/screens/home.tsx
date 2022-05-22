import Card from '../components/card/card'
import TableCoins from '../components/table/table-coins'


import './home.css'

function Home() {

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
                            <Card 
                                key={n}
                                name='Bitcoin'
                                image='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg'
                                symbol='BTC'
                                price={20000}
                            />
                        ))
                    }
                </div>
            </section>
            <TableCoins />
        </main>
    )
}

export default Home
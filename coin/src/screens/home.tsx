import Card from '../components/card/card'
import ListCoins from '../components/list-coins/list-coins'
import { useAtomValue } from 'jotai'
import { topCoinsAtom } from '../states/coins-top'

import './home.css'

function Home() {

    const topCoins = useAtomValue(topCoinsAtom)

    return (
        <main>
            <div className='hero'>
            </div>
            <section className='top_five'>
                <h3>
                    Top 4
                </h3>
                <div className='content_top_4'>
                    {
                        topCoins.map((coin, i) => (
                            <Card 
                                key={i}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.price}
                            />
                        ))
                    }
                </div>
            </section>
            <ListCoins />
        </main>
    )
}

export default Home
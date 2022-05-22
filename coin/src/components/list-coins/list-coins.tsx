import { useEffect, useState } from 'react'
import { dataMapCoin } from '../../helpers/data'
import { getCoins } from '../../services/api-coin'
import { Coin, CoinTop } from '../../types'
import { useAtom } from 'jotai'
import { topCoinsAtom } from '../../states/coins-top'

import './list-coin.css'


function ListCoins() {

  const [coins, setCoins] = useState<Array<Coin>>([])
  const [, setTopCoins] = useAtom(topCoinsAtom)

  const headers: Array<string> = ['Nombre', 'Precio', 'Market Cap', 'Acciones']

  useEffect(() => {

    getCoins()
      .then(response => {

        const data = response.data.coins
        const coinsData: Array<Coin> = dataMapCoin(data)
        
        console.log('data -> ', coinsData[0].price.toFixed(4))
        const topCoins: Array<CoinTop> = coinsData.map((coin) => {
          
          return {
            image: coin.image,
            name: coin.name,
            price: Number( coin.price.toFixed(4) ),
            symbol: coin.symbol
          }

        })

        const topFourCoins = topCoins.slice(0, 4)

        setCoins(coinsData)
        setTopCoins(topFourCoins)

      })

  }, [])


  return (
    <section className='list_coins'>
      <div className='head'>
        {
          headers.map((head, index) => (
            <p key={index} className='head_item'>{head}</p>
          ))
        }
      </div>
      <section className='coins'>
        {
          coins !== undefined && coins.map((coin) => (
            <div key={coin.uuid} className='coin'>
              <p className='coin_item'>
                <div className='content_logo'>
                  <img src={coin.image} alt='logo' />
                </div>
                {coin.name}
              </p>
              <p className='coin_item'>{coin.price}</p>
              <p className='coin_item'>{coin.marketCap}</p>
              <p className='coin_item'>
                <button className='btn_detail'>
                  Detalle
                </button>
              </p>
            </div>
          ))
        }
      </section>
    </section>
  )
}

export default ListCoins
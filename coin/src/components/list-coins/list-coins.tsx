import { useState } from 'react'

import './list-coin.css'

const listCoins = [
  {
    uuid: 'Qwsogvtv82FCd',
    name: 'Bitcoin',
    image: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
    price: 29915.001,
    marketCap: 569.79
  }

]

const headers: Array<string> = ['Nombre', 'Precio', 'Market Cap', 'Acciones']

function ListCoins() {
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
          listCoins.map((coin) => (
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
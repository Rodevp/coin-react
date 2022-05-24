import { useState, useEffect, lazy, Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getHistoryCoin } from '../../services/api-coin'
import { detailCoin } from '../../states/detail-coin'
import {  useAtomValue } from 'jotai'

import './detail.css'
import { Coin } from '../../types'

interface Dataset {
  price: string
  timestamp: number
}

function DetailCoin() {

  const LineChart = lazy( () => import('../charts/line') )

  const [period, setPeriod] = useState<string>('24h')
  const [labels, setLabels] = useState<Array<number>>([1, 2, 3, 4])
  const [dataset, setDataset] = useState<Array<number>>([1, 2, 3, 4])

  const detailInfo: Coin = useAtomValue(detailCoin)

  const { id } = useParams()
  const colorGraphic = window.localStorage.getItem('color') === null
    ? 'rgb(255, 99, 132)'
    : window.localStorage.getItem('color')

  //char config
  const options = {
    responsive: true
  }

  const data = {
    labels,
    datasets: [
      {
        data: dataset,
        label: '',
        borderColor: colorGraphic ?? '',
        backgroundColor: colorGraphic ?? '',
      }
    ]
  }

  useEffect(() => {

     getHistoryCoin(period, id ? id : '')
        .then(response => {

          const labels = response.data.history.map( ( data: Dataset ) => data.timestamp)  
          const values = response.data.history.map( ( data: Dataset ) => Number( Number(data.price).toFixed(5) ) )  

          setDataset(values)
          setLabels(labels)

      })

  }, [period])

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let period = e.target.value
    setPeriod(period)
  }


  return (
    <div>
      <section className='info_coin'>
        <div className='info_item'>
          <div className='info_img'>
            <img src={detailInfo.image} alt='logo' loading='lazy' />
          </div>
          <p className='info_name'>
            {detailInfo.name}
            <p className='info_symbol'>
              {detailInfo.symbol}
            </p>
          </p>
        </div>
        <div className='item_period'>
          <section className='select_period'>
            <label>
              Seleccionar periodo:
            </label>
            <select onChange={handleOption}>
              <option value='1h'>1h</option>
              <option value='3h'>3h</option>
              <option value='12h'>12h</option>
              <option value='24h'>24h</option>
              <option value='7d'>7d</option>
              <option value='30d'>30d</option>
              <option value='3m'>3m</option>
              <option value='1y'>1y</option>
              <option value='3y'>3y</option>
              <option value='5y'>5y</option>
            </select>
          </section>
        </div>
        <div className='item_home'>
            <Link to='/' className='link_to_home'>
              Ir a home
            </Link>
        </div>
      </section>
      <section
        className='content_chart'
      >
        <Suspense fallback={<h1>Cargando....</h1>}>
            <LineChart
              options={options}
              data={data}
              height={90}
            />
        </Suspense>
      </section>
    </div>
  )

}

export default DetailCoin
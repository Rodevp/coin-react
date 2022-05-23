import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { getHistoryCoin } from '../../services/api-coin'

import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


function DetailCoin() {

    const [period, setPeriod] = useState<string>('24h') 
    const [labels, setLabels] = useState<Array<number>>([])
    const [dataset, setDataset] = useState<Array<number>>([])

    const { id } = useParams()

    //char config
    const options = {
      responsive: true
    }

    const data = {
      labels,
      datasets: [
        {
          data: dataset,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    }

    useEffect(() => {

      console.log('effect')
      
     getHistoryCoin(period, id ? id : '')
        .then(response => {
          
          console.log(response)

          const labels = response.data.history.map( (data: any) => data.timestamp)  
          const values = response.data.history.map( (data: any) => Number( Number(data.price).toFixed(5) ) )  

          setDataset(values)
          setLabels(labels)
      })

    }, [period] )

    const handleOption = (e: React.ChangeEvent<HTMLSelectElement> ) => {
      let period = e.target.value
      setPeriod(period)
    }


  return (
    <div>
      <section>
        Info coin
      </section>
      <section>
        <label>
          Seleccionar periodo
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
      <section>
        <Line
          options={options}
          data={data}
        />
      </section>
    </div>
  )

}

export default DetailCoin
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

import { Line } from 'react-chartjs-2'

import { DataChart } from '../../types'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

interface Props {
    options: {
        responsive: boolean
    }
    data: DataChart,
    height: number
}

function LineChart({ options, data, height }: Props) {
    return (
        <Line
            options={options}
            data={data}
            height={height}
        />
    )
}


export default LineChart
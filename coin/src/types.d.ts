export interface Coin {
    uuid: string
    image: string
    name: string
    price: number
    symbol: string
    marketCap: string
    color: string
}


export interface CoinTop {
    image: string
    name: string
    price: number
    symbol: string
}

interface DatasetChart {
    data: Array<number>,
    label: string,
    borderColor: string,
    backgroundColor: string
}

export interface DataChart {
    labels: Array<number>
    datasets: Array<DatasetChart>
}
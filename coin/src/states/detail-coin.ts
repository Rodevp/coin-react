import { atom } from 'jotai'
import { Coin } from '../types'

const INITIAL_STATE: Coin = {
    name: '',
    uuid: '',
    marketCap: '',
    price: 0,
    image: '',
    color: '',
    symbol: ''
}


export const detailCoin = atom(INITIAL_STATE)